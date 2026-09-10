/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  BOOTSTRAP, INPUT AND MAIN LOOP
   ---------------------------------------------------------------------
   Wires the question bank, learner, engine, game logic and UI together,
   then runs a single requestAnimationFrame loop.

   Input is deliberately forgiving and multi-modal:
     * mouse drag        (desktop)
     * finger swipe      (tablet / phone / classroom touch panel)
     * stylus            (same pointer pipeline)
     * tap or click      (a straight tap on a fruit counts as a slice)
     * number keys 1-4   (keyboard players, and teachers on a laptop)
   ===================================================================== */

(function (global) {
  'use strict';

  var PFR = global.PFR;
  var CFG = PFR.CONFIG;
  var Audio = PFR.Audio;
  var I18N = PFR.I18N;
  var t = I18N.t;

  /* "Every topic". Canonical like every other topic id - v3 used the
     English words 'All Topics' as the key, which cannot survive a
     translation. */
  var ALL = 'all';

  var QUESTIONS = PFR.Bank.build();
  var GROUPS = PFR.Bank.groups(QUESTIONS);

  /* Fine topic -> the group it belongs to ("Momentum" -> "Momentum &
     Impulse"), so the setup screen can show which chip a one-topic
     practice round came from. */
  var TOPIC_GROUP = {};
  for (var qi = 0; qi < QUESTIONS.length; qi++) TOPIC_GROUP[QUESTIONS[qi].topic] = QUESTIONS[qi].group;

  var canvas, engine, ui, game, learner;
  var lastTime = 0;

  /* ---------------------------------------------------------------
     Question filtering
     `group` may be a coarse group ("Waves") or a fine topic name coming
     from the results screen's "practise my weak topic" button.
     --------------------------------------------------------------- */
  function questionsFor(group) {
    if (!group || group === ALL) return QUESTIONS.slice();
    var out = [];
    for (var i = 0; i < QUESTIONS.length; i++) {
      if (QUESTIONS[i].group === group || QUESTIONS[i].topic === group) out.push(QUESTIONS[i]);
    }
    return out.length ? out : QUESTIONS.slice();
  }

  /* ---------------------------------------------------------------
     Starting a round
     --------------------------------------------------------------- */
  function startRound(settings) {
    Audio.unlock();
    ui.selection.mode = settings.mode;
    ui.selection.duration = settings.duration;
    ui.selection.group = settings.group;
    if (settings.mix) ui.selection.mix = settings.mix;
    /* Practice forces its own speed - remembering it would silently change
       the player's choice for every later round. */
    if (!CFG.modes[settings.mode] || !CFG.modes[settings.mode].forceSpeed) {
      ui.selection.speed = settings.speed;
    }

    ui.show('game');
    engine.resize();          // the canvas has just become visible

    game.start({
      mode: settings.mode,
      speed: settings.speed,
      duration: settings.duration,
      group: settings.group,
      mix: settings.mix || ui.selection.mix,
      lang: I18N.get(),
      questions: questionsFor(settings.group)
    });
  }

  /* ---------------------------------------------------------------
     Input
     --------------------------------------------------------------- */
  var pointer = { down: false, id: null, x: 0, y: 0, startT: 0, dist: 0 };

  function canvasPoint(e) {
    var rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function slicingAllowed() {
    return game && game.state === 'play' && !ui.modalOpen();
  }

  /* One blade at a time. On a shared classroom panel a second finger - a
     resting palm, or another student reaching in - used to overwrite the
     tracked pointer and silently cancel the swipe already in progress. The
     first pointer down owns the blade until it lifts. */
  function isOtherPointer(e) {
    return pointer.down && pointer.id !== null &&
           e.pointerId !== undefined && e.pointerId !== pointer.id;
  }

  function onDown(e) {
    Audio.unlock();
    if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
    if (isOtherPointer(e)) { if (e.cancelable) e.preventDefault(); return; }
    var p = canvasPoint(e);
    pointer.down = true;
    pointer.id = e.pointerId;
    pointer.x = p.x; pointer.y = p.y;
    pointer.startT = performance.now();
    pointer.dist = 0;
    engine.trail.length = 0;
    engine.addTrailPoint(p.x, p.y);
    if (canvas.setPointerCapture && e.pointerId !== undefined) {
      try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    }
    e.preventDefault();
  }

  function onMove(e) {
    if (!pointer.down || (pointer.id !== null && e.pointerId !== pointer.id)) return;
    var p = canvasPoint(e);
    var dx = p.x - pointer.x, dy = p.y - pointer.y;
    var step = Math.sqrt(dx * dx + dy * dy);
    pointer.dist += step;

    engine.addTrailPoint(p.x, p.y);

    if (step > 1.2 && slicingAllowed()) {
      var hits = engine.sliceSegment(pointer.x, pointer.y, p.x, p.y);
      if (hits.length) {
        Audio.play('swipe');
        game.onHits(hits);
      }
    }
    pointer.x = p.x; pointer.y = p.y;
    e.preventDefault();
  }

  function onUp(e) {
    if (!pointer.down) return;
    if (isOtherPointer(e)) return;          // a different finger lifting
    var p = canvasPoint(e);
    var dt = performance.now() - pointer.startT;

    /* A short, still press is a tap: still a valid slice. */
    if (pointer.dist <= CFG.input.tapMaxDist && dt <= CFG.input.tapMaxTime && slicingAllowed()) {
      var hits = engine.sliceTap(p.x, p.y);
      if (hits.length) {
        Audio.play('swipe');
        engine.addTrailPoint(p.x - 26, p.y - 18);
        engine.addTrailPoint(p.x + 26, p.y + 18);
        game.onHits(hits);
      }
    }

    releasePointer(e);
    if (e.cancelable) e.preventDefault();
  }

  function releasePointer(e) {
    pointer.down = false;
    pointer.id = null;
    engine.trail.length = 0;
    if (canvas.releasePointerCapture && e && e.pointerId !== undefined) {
      try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    }
  }

  /* The browser took the gesture away - a palm rejected, a system edge
     swipe, a pan starting. That is NOT a slice. Going through onUp would
     run the tap test and answer the question for the student. */
  function onCancel(e) {
    if (!pointer.down || isOtherPointer(e)) return;
    releasePointer(e);
  }

  function bindInput() {
    if (global.PointerEvent) {
      canvas.addEventListener('pointerdown', onDown, { passive: false });
      canvas.addEventListener('pointermove', onMove, { passive: false });
      canvas.addEventListener('pointerup', onUp, { passive: false });
      canvas.addEventListener('pointercancel', onCancel, { passive: false });
      canvas.addEventListener('pointerleave', function (e) {
        if (pointer.down && !isOtherPointer(e)) onUp(e);
      }, { passive: false });
    } else {
      /* Very old browsers: mouse + touch fallback. */
      canvas.addEventListener('mousedown', onDown);
      canvas.addEventListener('mousemove', onMove);
      global.addEventListener('mouseup', onUp);
      canvas.addEventListener('touchstart', function (e) {
        var t = e.changedTouches[0];
        onDown({ clientX: t.clientX, clientY: t.clientY, preventDefault: function () { e.preventDefault(); } });
      }, { passive: false });
      canvas.addEventListener('touchmove', function (e) {
        var t = e.changedTouches[0];
        onMove({ clientX: t.clientX, clientY: t.clientY, preventDefault: function () { e.preventDefault(); } });
      }, { passive: false });
      canvas.addEventListener('touchend', function (e) {
        var t = e.changedTouches[0];
        onUp({ clientX: t.clientX, clientY: t.clientY, cancelable: e.cancelable, preventDefault: function () { e.preventDefault(); } });
      }, { passive: false });
    }

    /* Stop the page bouncing while a finger is on the playfield. */
    document.addEventListener('touchmove', function (e) {
      if (ui.current === 'game' && e.target === canvas) e.preventDefault();
    }, { passive: false });

    document.addEventListener('keydown', function (e) {
      Audio.unlock();

      /* A dialog owns Escape while it is open - it handles the key itself,
         so the game must not also pause or unpause underneath it. */
      if (ui.modalOpen()) return;

      if (e.key === 'Escape') {
        if (ui.current === 'game' && game.isRunning()) {
          if (game.state === 'paused') game.resume(); else game.pause();
          e.preventDefault();
        }
        return;
      }

      if (ui.current !== 'game') return;

      if (e.key >= '1' && e.key <= '4' && slicingAllowed()) {
        var hits = engine.sliceIndex(parseInt(e.key, 10) - 1);
        if (hits.length) {
          Audio.play('swipe');
          game.onHits(hits);
        }
        e.preventDefault();
      }
    });
  }

  /* ---------------------------------------------------------------
     Main loop
     The engine owns the freeze-frame, so it reports how much time the
     WORLD actually advanced. Feeding that same value to the game clock
     keeps the question timer honest during hit-stop.
     --------------------------------------------------------------- */
  function frame(now) {
    requestAnimationFrame(frame);
    var dt = (now - lastTime) / 1000;
    lastTime = now;
    if (!(dt > 0)) dt = 0.016;
    if (dt > 0.05) dt = 0.05;          // survive tab switches and slow frames

    if (ui.current === 'game') {
      if (game.state !== 'paused') {
        var worldDt = engine.update(dt);
        if (worldDt > 0) game.tick(worldDt);
      }
      engine.render();
    }
  }

  /* ---------------------------------------------------------------
     Wiring
     --------------------------------------------------------------- */
  function bindButtons() {
    document.addEventListener('click', function (e) {
      var goEl = e.target.closest ? e.target.closest('[data-go]') : null;
      if (goEl) {
        Audio.unlock();
        Audio.play('click');
        var go = goEl.dataset.go;
        if (go === 'quick') {
          startRound({ mode: 'quick', speed: 'normal', duration: CFG.modes.quick.duration, group: ALL });
        } else if (go === 'topic') {
          ui.openSetup({ mode: 'topic' });
        } else if (go === 'practice') {
          ui.openSetup({ mode: 'practice' });
        } else if (go === 'custom') {
          ui.openSetup(null);
        } else if (go === 'help') {
          ui.show('help');
        }
        return;
      }

      var backEl = e.target.closest ? e.target.closest('[data-back]') : null;
      if (backEl) {
        Audio.play('click');
        if (game.isRunning()) game.quit();
        ui.showMenuProgress(learner);
        ui.show(backEl.dataset.back);
      }
    });

    document.getElementById('soundBtn').addEventListener('click', function () {
      var on = Audio.toggle();
      PFR.Settings.set('sound', on ? 'on' : 'off');
      ui.setSoundButton(on);
      if (on) Audio.play('click');
    });

    document.getElementById('pauseBtn').addEventListener('click', function () {
      Audio.play('click');
      if (game.state === 'paused') game.resume(); else game.pause();
    });

    /* End Round asks first. On a projector or a shared touchscreen the X
       sits next to pause and sound, and a mis-tap used to throw away a
       whole round with no way back. */
    document.getElementById('quitBtn').addEventListener('click', function () {
      Audio.play('click');
      if (!game.isRunning()) return;
      var wasPlaying = game.state !== 'paused';
      if (wasPlaying) game.pause();          // freeze the clock while deciding
      ui.confirm({
        title: t('dlg.end.title'),
        body: t('dlg.end.body'),
        cancelLabel: t('dlg.end.cancel'),
        confirmLabel: t('dlg.end.confirm'),
        onConfirm: function () { game.resume(); game.quit(); },
        onCancel: function () { if (wasPlaying) game.resume(); }
      });
    });

    /* Reset Progress - the only destructive action outside a round. */
    document.getElementById('resetProgressBtn').addEventListener('click', function () {
      Audio.play('click');
      ui.confirm({
        title: t('dlg.reset.title'),
        body: t('dlg.reset.body'),
        cancelLabel: t('dlg.cancel'),
        confirmLabel: t('dlg.reset.confirm'),
        onConfirm: function () {
          PFR.Progress.resetAll(learner);
          ui.showMenuProgress(learner);
          ui.snack(t('snack.reset.title'), t('snack.reset.body'));
          Audio.play('reset');
        }
      });
    });

    /* Straight from the menu into the topic the model says is weakest. */
    document.getElementById('practiseWeakBtn').addEventListener('click', function () {
      Audio.play('click');
      var topic = ui.weakTopic;
      if (!topic) return;
      startRound({
        mode: 'practice', speed: 'relaxed', duration: 0,
        group: topic, mix: ui.selection.mix
      });
    });

    document.getElementById('resumeBtn').addEventListener('click', function () {
      Audio.play('click');
      game.resume();
    });

    document.getElementById('endRoundBtn').addEventListener('click', function () {
      Audio.play('click');
      game.resume();
      game.quit();
    });

    document.getElementById('againBtn').addEventListener('click', function () {
      Audio.play('click');
      startRound(ui.currentSettings());
    });

    /* Straight from "you are weak at X" into practising X. */
    document.getElementById('reviseBtn').addEventListener('click', function () {
      Audio.play('click');
      if (!ui.reviseTopic) return;
      startRound({ mode: 'practice', speed: 'relaxed', duration: 0, group: ui.reviseTopic });
    });

    document.getElementById('changeBtn').addEventListener('click', function () {
      Audio.play('click');
      ui.openSetup(null);
    });
  }

  function bindWindow() {
    var resizeTimer = null;
    global.addEventListener('resize', function () {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { engine.resize(); }, 120);
    });
    global.addEventListener('orientationchange', function () {
      setTimeout(function () { engine.resize(); }, 260);
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden && game && game.isRunning() && game.state !== 'paused') game.pause();
    });
    /* Persist what the student has learned if they close the tab mid-round. */
    global.addEventListener('pagehide', function () { if (learner) learner.save(); });
  }

  /* Numbers quoted inside interface sentences, read from config so the
     words always describe the rules actually in force. */
  function configGlobals() {
    var M = CFG.modes, S = CFG.score;
    var maxMult = 1 + S.comboCap * S.comboStep;
    return {
      quickSecs: M.quick.duration, quickLives: M.quick.lives,
      rushSecs: M.timerush.duration, rushBonus: M.timerush.timeBonus,
      survLives: M.survival.lives, topicQs: M.topic.questionLimit,
      wrongPenalty: S.wrongPenalty, missPenalty: S.missPenalty,
      maxMult: String(Math.round(maxMult * 10) / 10)
    };
  }

  /* ---------------------------------------------------------------
     Go
     --------------------------------------------------------------- */
  function init() {
    /* Language first, so the very first paint is already in the right one
       and a BM student never sees a flash of English. */
    I18N.setGlobals(configGlobals());
    var langStart = I18N.init();

    canvas = document.getElementById('playfield');
    engine = new PFR.Engine(canvas);
    ui = new PFR.UI();
    learner = new PFR.Learner();
    game = new PFR.Game(engine, ui, learner);

    /* A teacher's Adaptive/Balanced choice should stick between rounds. */
    var savedMix = PFR.Settings.get('mix', CFG.adaptive.defaultMix);
    ui.selection.mix = (savedMix === 'balanced') ? 'balanced' : 'adaptive';

    /* Sound is a setting too: a teacher who mutes the projector once
       should not have to do it again every lesson. */
    if (PFR.Settings.get('sound', 'on') === 'off') Audio.setEnabled(false);

    ui.buildSetup(GROUPS, startRound, TOPIC_GROUP);
    ui.setSoundButton(Audio.isEnabled());
    ui.setBankInfo(QUESTIONS.length, GROUPS.length);
    ui.showMenuProgress(learner);
    ui.syncLangSwitch();

    /* The switch lives on the menu and never inside a round; see game.js
       for why a round keeps the language it started in. */
    ui.bindLangSwitch(function (code) {
      if (game.isRunning()) return;
      Audio.unlock();
      Audio.play('click');
      I18N.set(code);
    });
    I18N.onChange(function () { ui.relocalize(learner); });

    bindButtons();
    bindInput();
    bindWindow();

    /* Self-check of the English bank, every translation and the interface
       dictionaries. Silent when everything is clean. */
    var problems = PFR.Bank.validate(QUESTIONS);
    PFR.Bank.languages().forEach(function (code) {
      if (code !== 'en') problems = problems.concat(PFR.Bank.validateLang(QUESTIONS, code));
    });
    problems = problems.concat(I18N.audit());
    if (problems.length) {
      console.warn('[Physics Fruit Rush] Content warnings (' + problems.length + '):');
      problems.forEach(function (p) { console.warn('  ' + p); });
    } else {
      var cov = PFR.Bank.coverage(QUESTIONS, 'ms');
      console.log('[Physics Fruit Rush v' + CFG.version + '] Bank OK: ' +
        QUESTIONS.length + ' questions, ' + GROUPS.length + ' groups, BM ' +
        cov.translated + '/' + cov.total + '. Language: ' + langStart.lang +
        ' (' + langStart.source + ').');
    }

    /* Exposed for classroom debugging and for the automated test harness. */
    global.PFR.debug = {
      questions: QUESTIONS, groups: GROUPS,
      engine: engine, game: game, ui: ui, learner: learner,
      storage: PFR.Storage, progress: PFR.Progress, settings: PFR.Settings,
      i18n: I18N, startRound: startRound,
      validate: function () { return PFR.Bank.validate(QUESTIONS); },
      validateLang: function (code) { return PFR.Bank.validateLang(QUESTIONS, code || 'ms'); },
      resetProgress: function () {
        var r = PFR.Progress.resetAll(learner);
        ui.showMenuProgress(learner);
        return r;
      }
    };

    lastTime = performance.now();
    requestAnimationFrame(frame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
