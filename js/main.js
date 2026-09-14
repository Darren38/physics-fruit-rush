/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  BOOTSTRAP, INPUT AND MAIN LOOP
   ---------------------------------------------------------------------
   Wires the question bank, the per-Form learners, engine, game logic and
   UI together, then runs a single requestAnimationFrame loop.

   v5: THE FORM ON SCREEN
   `form` is the one Form the student is studying. Everything that
   touches learning goes through it:
     * questions   BY_FORM[form].questions - the game is never handed the
                   whole bank, so it cannot draw a question from another
                   Form, whatever the topic filter says;
     * learner     learnerFor(form) - one Learner per Form, each bound to
                   that Form's own storage scope;
     * best scores and Reset - Progress.scope(form).
   The Form can only change on the menu, never during a round.

   Input is deliberately forgiving and multi-modal: mouse drag, finger
   swipe, stylus, a straight tap, and number keys 1-4.
   ===================================================================== */

(function (global) {
  'use strict';

  var PFR = global.PFR;
  var CFG = PFR.CONFIG;
  var Audio = PFR.Audio;
  var I18N = PFR.I18N;
  var Syllabus = PFR.Syllabus;
  var Speed = PFR.Speed;
  var t = I18N.t;

  /* "Every topic" - canonical, like every other topic id. */
  var ALL = 'all';

  var QUESTIONS = PFR.Bank.build();

  /* Per-Form views of the bank, built once. Groups follow the syllabus
     order, keeping only groups that actually have questions. */
  var BY_FORM = {};
  CFG.forms.forEach(function (f) {
    var qs = PFR.Bank.forForm(QUESTIONS, f);
    var present = PFR.Bank.groups(qs);
    var topicGroup = {};
    qs.forEach(function (q) { topicGroup[q.topic] = q.group; });
    BY_FORM[f] = {
      questions: qs,
      groups: Syllabus.groups(f).filter(function (g) { return present.indexOf(g) !== -1; }),
      topicGroup: topicGroup
    };
  });

  var canvas, engine, ui, game;
  var form = null;          // null until the student has chosen a Form
  var learners = {};        // Form -> Learner, created on first use
  var migration = null;
  var lastTime = 0;

  function learnerFor(f) {
    if (!learners[f]) learners[f] = new PFR.Learner(PFR.Progress.scope(f), Syllabus.topics(f));
    return learners[f];
  }

  function currentLearner() { return form ? learnerFor(form) : null; }

  /* `group` is a coarse group ("Heat") or a fine topic from a "practise
     my weak topic" button - always looked up INSIDE the current Form. */
  function questionsFor(group) {
    var pool = form ? BY_FORM[form].questions : [];
    if (!group || group === ALL) return pool.slice();
    var out = pool.filter(function (q) { return q.group === group || q.topic === group; });
    return out.length ? out : pool.slice();
  }

  /* ---------------------------------------------------------------
     Speed settings - global, never part of progress.
     --------------------------------------------------------------- */
  function savedSpeed() {
    var k = PFR.Settings.get('speed', 'normal');
    return Speed.isKey(k) ? k : 'normal';
  }

  function savedCustomPct() {
    return Speed.clamp(PFR.Settings.get('customSpeed', CFG.customSpeed.def));
  }

  /* ---------------------------------------------------------------
     Forms
     --------------------------------------------------------------- */
  function formFromUrl() {
    try {
      var m = /[?&](?:form|tingkatan)=(\d)/i.exec((global.location && global.location.search) || '');
      return m ? PFR.Progress.validForm(m[1]) : null;
    } catch (e) { return null; }
  }

  function setForm(f, opts) {
    opts = opts || {};
    var n = PFR.Progress.validForm(f);
    if (!n) return false;
    /* Never under a running round: its questions, learner and best score
       all belong to the Form it started in. */
    if (game && game.isRunning()) return false;
    var changed = n !== form;
    form = n;
    if (opts.persist !== false) PFR.Settings.set('form', String(n));

    var F = BY_FORM[n];
    ui.setForm(n, F.groups, F.topicGroup);
    ui.setBankInfo(F.questions.length, F.groups.length);
    ui.showMenuProgress(learnerFor(n));
    if (changed && opts.announce) ui.announce(t('form.announce', { form: t('form.name', { n: n }) }));
    return true;
  }

  /* ---------------------------------------------------------------
     Starting a round
     --------------------------------------------------------------- */
  function startRound(settings) {
    if (!form) { ui.nudgeFormPicker(); return; }
    Audio.unlock();
    ui.selection.mode = settings.mode;
    ui.selection.duration = settings.duration;
    ui.selection.group = settings.group;
    if (settings.mix) ui.selection.mix = settings.mix;
    /* Practice forces Relaxed - remembering that would silently change
       the player's own choice for every later round. */
    if (!CFG.modes[settings.mode] || !CFG.modes[settings.mode].forceSpeed) {
      ui.selection.speed = settings.speed;
      /* A caller may pass its own custom pace; it goes through the same
         clamp as the slider, so no path can start a round outside it. */
      if (settings.customPct != null) ui.selection.customPct = PFR.Speed.clamp(settings.customPct);
    }

    ui.show('game');
    engine.resize();          // the canvas has just become visible

    game.start({
      mode: settings.mode,
      speed: settings.speed,
      customPct: ui.selection.customPct,
      duration: settings.duration,
      group: settings.group,
      mix: settings.mix || ui.selection.mix,
      lang: I18N.get(),
      form: form,
      learner: learnerFor(form),
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

  /* One blade at a time: the first pointer down owns it until it lifts,
     so a second finger on a shared panel cannot cancel a swipe. */
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
      if (hits.length) { Audio.play('swipe'); game.onHits(hits); }
    }
    pointer.x = p.x; pointer.y = p.y;
    e.preventDefault();
  }

  function onUp(e) {
    /* v5: on iPhone and iPad a finger LIFT counts as the user gesture
       that may restart sound (a touch-down does not), so try here too. */
    Audio.unlock();
    if (!pointer.down) return;
    if (isOtherPointer(e)) return;
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

  /* The browser took the gesture away (palm, edge swipe): NOT a slice. */
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
      canvas.addEventListener('mousedown', onDown);
      canvas.addEventListener('mousemove', onMove);
      global.addEventListener('mouseup', onUp);
      canvas.addEventListener('touchstart', function (e) {
        var tt = e.changedTouches[0];
        onDown({ clientX: tt.clientX, clientY: tt.clientY, preventDefault: function () { e.preventDefault(); } });
      }, { passive: false });
      canvas.addEventListener('touchmove', function (e) {
        var tt = e.changedTouches[0];
        onMove({ clientX: tt.clientX, clientY: tt.clientY, preventDefault: function () { e.preventDefault(); } });
      }, { passive: false });
      canvas.addEventListener('touchend', function (e) {
        var tt = e.changedTouches[0];
        onUp({ clientX: tt.clientX, clientY: tt.clientY, cancelable: e.cancelable, preventDefault: function () { e.preventDefault(); } });
      }, { passive: false });
    }

    document.addEventListener('touchmove', function (e) {
      if (ui.current === 'game' && e.target === canvas) e.preventDefault();
    }, { passive: false });

    document.addEventListener('keydown', function (e) {
      Audio.unlock();
      if (ui.modalOpen()) return;          // a dialog owns Escape
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
        if (hits.length) { Audio.play('swipe'); game.onHits(hits); }
        e.preventDefault();
      }
    });
  }

  /* ---------------------------------------------------------------
     Main loop. The engine owns the freeze-frame and reports how much
     time the WORLD advanced; the game clock gets that same value.
     --------------------------------------------------------------- */
  function frame(now) {
    requestAnimationFrame(frame);
    var dt = (now - lastTime) / 1000;
    lastTime = now;
    if (!(dt > 0)) dt = 0.016;
    if (dt > 0.05) dt = 0.05;
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
  function formName(n) { return t('form.name', { n: n }); }

  function bindButtons() {
    document.addEventListener('click', function (e) {
      var goEl = e.target.closest ? e.target.closest('[data-go]') : null;
      if (goEl) {
        Audio.unlock();
        Audio.play('click');
        if (!form) { ui.nudgeFormPicker(); return; }
        var go = goEl.dataset.go;
        if (go === 'quick') {
          /* v5: Quick Game plays at the student's saved speed - a student
             who chose a gentler pace should not have it ignored here. */
          startRound({ mode: 'quick', speed: ui.selection.speed, duration: CFG.modes.quick.duration, group: ALL });
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
        ui.showMenuProgress(currentLearner());
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

    /* End Round asks first - the X sits next to pause on a shared panel. */
    document.getElementById('quitBtn').addEventListener('click', function () {
      Audio.play('click');
      if (!game.isRunning()) return;
      var wasPlaying = game.state !== 'paused';
      if (wasPlaying) game.pause();
      ui.confirm({
        title: t('dlg.end.title'),
        body: t('dlg.end.body'),
        cancelLabel: t('dlg.end.cancel'),
        confirmLabel: t('dlg.end.confirm'),
        onConfirm: function () { game.resume(); game.quit(); },
        onCancel: function () { if (wasPlaying) game.resume(); }
      });
    });

    /* Reset THIS Form's progress. Other Forms and every setting stay. */
    document.getElementById('resetProgressBtn').addEventListener('click', function () {
      Audio.play('click');
      if (!form) return;
      var f = form, name = formName(f);
      ui.confirm({
        title: t('dlg.reset.title', { form: name }),
        body: t('dlg.reset.body', { form: name }),
        cancelLabel: t('dlg.cancel'),
        confirmLabel: t('dlg.reset.confirm'),
        onConfirm: function () {
          PFR.Progress.scope(f).reset(learnerFor(f));
          ui.showMenuProgress(learnerFor(f));
          ui.snack(t('snack.reset.title', { form: name }), t('snack.reset.body'));
          Audio.play('reset');
        }
      });
    });

    document.getElementById('practiseWeakBtn').addEventListener('click', function () {
      Audio.play('click');
      if (!ui.weakTopic) return;
      startRound({ mode: 'practice', speed: 'relaxed', duration: 0, group: ui.weakTopic, mix: ui.selection.mix });
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
    /* Persist a Form's learner if the tab closes mid-round - but only one
       this tab actually changed. Saving every loaded learner let an idle
       second tab overwrite newer progress another tab had saved. */
    global.addEventListener('pagehide', function () {
      for (var f in learners) {
        if (Object.prototype.hasOwnProperty.call(learners, f) && learners[f].dirty) learners[f].save();
      }
    });
  }

  /* Numbers quoted inside interface sentences, read from config. */
  function configGlobals() {
    var M = CFG.modes, S = CFG.score;
    var maxMult = 1 + S.comboCap * S.comboStep;
    return {
      quickSecs: M.quick.duration, quickLives: M.quick.lives,
      rushSecs: M.timerush.duration, rushBonus: M.timerush.timeBonus,
      survLives: M.survival.lives, topicQs: M.topic.questionLimit,
      wrongPenalty: S.wrongPenalty, missPenalty: S.missPenalty,
      maxMult: String(Math.round(maxMult * 10) / 10),
      speedMin: CFG.customSpeed.min, speedMax: CFG.customSpeed.max
    };
  }

  /* ---------------------------------------------------------------
     Go
     --------------------------------------------------------------- */
  function init() {
    /* Migration first: it may supply the language, sound, mix and Form
       a returning Version 4 student already chose. It only ever copies. */
    migration = PFR.Migration.run(Syllabus.topics(4));

    I18N.setGlobals(configGlobals());
    var langStart = I18N.init();

    canvas = document.getElementById('playfield');
    engine = new PFR.Engine(canvas);
    ui = new PFR.UI();
    game = new PFR.Game(engine, ui, null);

    var savedMix = PFR.Settings.get('mix', CFG.adaptive.defaultMix);
    ui.selection.mix = (savedMix === 'balanced') ? 'balanced' : 'adaptive';
    ui.selection.speed = savedSpeed();
    ui.selection.customPct = savedCustomPct();
    if (PFR.Settings.get('sound', 'on') === 'off') Audio.setEnabled(false);

    ui.buildSetup(startRound);
    ui.setSoundButton(Audio.isEnabled());
    ui.syncLangSwitch();

    ui.bindLangSwitch(function (code) {
      if (game.isRunning()) return;
      Audio.unlock();
      Audio.play('click');
      I18N.set(code);
    });
    I18N.onChange(function () { ui.relocalize(currentLearner()); });

    ui.bindFormPicker(function (n) {
      if (game.isRunning()) return;
      Audio.unlock();
      Audio.play('click');
      setForm(n, { announce: true });
    });

    /* Which Form: a teacher's ?form=2 link, else the saved choice. With
       neither, the menu asks - the game never guesses a Form for you. */
    var urlForm = formFromUrl();
    var startForm = urlForm || PFR.Settings.form();
    if (startForm) setForm(startForm, { persist: !!urlForm });
    else ui.showFormChooser();

    bindButtons();
    bindInput();
    bindWindow();

    /* Self-check: bank, Form relationships, translations, interface. */
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
        CFG.forms.map(function (f) { return 'F' + f + ' ' + BY_FORM[f].questions.length; }).join(', ') +
        ' | BM ' + cov.translated + '/' + cov.total + ' | language ' + langStart.lang + ' (' + langStart.source + ')' +
        ' | form ' + (form || 'not chosen yet') + ' | V4 migration: ' + (migration.ran ? 'done' : migration.reason) + '.');
    }

    /* Exposed for classroom debugging and the automated test harness. */
    global.PFR.debug = {
      questions: QUESTIONS, byForm: BY_FORM,
      engine: engine, game: game, ui: ui,
      form: function () { return form; },
      setForm: setForm, learnerFor: learnerFor, learners: learners,
      questionsFor: questionsFor, startRound: startRound,
      storage: PFR.Storage, progress: PFR.Progress, settings: PFR.Settings, i18n: I18N,
      migration: function () { return migration; },
      validate: function () { return PFR.Bank.validate(QUESTIONS); },
      validateLang: function (code) { return PFR.Bank.validateLang(QUESTIONS, code || 'ms'); }
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
