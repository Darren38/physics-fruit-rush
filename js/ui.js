/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  USER INTERFACE
   ---------------------------------------------------------------------
   Screen switching, the classroom setup panel, the in-game HUD, feedback
   cards and the results report. This is the only file that touches the
   DOM, so the engine and the game logic stay testable on their own.

   v4: not one user-visible English word is left in this file. Every
   string comes from lang/*.js through t(). Static markup is translated by
   I18N.apply() via data-i18n attributes; anything built here at runtime
   is rebuilt by relocalize() when the language changes.
   ===================================================================== */

(function (global) {
  'use strict';

  var CFG = global.PFR.CONFIG;
  var Audio = global.PFR.Audio;
  var I18N = global.PFR.I18N;
  var Bank = global.PFR.Bank;
  var t = I18N.t;

  /* The "every topic" choice. Canonical, like every other topic id. */
  var ALL = 'all';

  function $(id) { return document.getElementById(id); }

  function norm(s) { return String(s).replace(/\s+/g, ' ').replace(/^\s|\s$/g, '').toLowerCase(); }

  function UI() {
    this.screens = {
      menu: $('screen-menu'),
      setup: $('screen-setup'),
      help: $('screen-help'),
      game: $('screen-game'),
      results: $('screen-results')
    };

    this.el = {
      hudScore: $('hudScore'),
      hudCombo: $('hudCombo'),
      hudComboCell: $('hudComboCell'),
      hudLives: $('hudLives'),
      hudLivesCell: $('hudLivesCell'),
      hudClock: $('hudClock'),
      hudClockLabel: $('hudClockLabel'),
      hudClockCell: document.querySelector('.hud-clock'),
      hudStage: $('hudStage'),
      hudStageCell: $('hudStageCell'),

      qbar: $('qbar'),
      qTopic: $('qTopic'),
      qDiff: $('qDiff'),
      qText: $('qText'),
      qTimerFill: $('qTimerFill'),
      qCue: $('qCue'),

      feedback: $('feedback'),
      fbCard: $('fbCard'),
      fbTitle: $('fbTitle'),
      fbSub: $('fbSub'),
      fbWhy: $('fbWhy'),
      fbExplain: $('fbExplain'),
      fbRemember: $('fbRemember'),
      fbAlt: $('fbAlt'),
      fbAltTag: $('fbAltTag'),
      fbAltText: $('fbAltText'),

      countdown: $('countdown'),
      countText: $('countText'),
      pauseOverlay: $('pauseOverlay'),
      banner: $('banner'),

      modeChips: $('modeChips'),
      modeHint: $('modeHint'),
      speedChips: $('speedChips'),
      speedHint: $('speedHint'),
      speedBlock: $('speedBlock'),
      durationChips: $('durationChips'),
      durationBlock: $('durationBlock'),
      topicChips: $('topicChips'),
      setupSummary: $('setupSummary'),
      soundBtn: $('soundBtn'),
      bankCount: $('bankCount'),

      mixChips: $('mixChips'),
      mixHint: $('mixHint'),

      progressCard: $('progressCard'),
      progressEmpty: $('progressEmpty'),
      progressBody: $('progressBody'),
      masteryValue: $('masteryValue'),
      masteryFill: $('masteryFill'),
      progAnswered: $('progAnswered'),
      progStrong: $('progStrong'),
      progWeak: $('progWeak'),
      practiseWeakBtn: $('practiseWeakBtn'),
      practiseWeakSub: $('practiseWeakSub'),
      bestQuick: $('bestQuick'),
      bestTopic: $('bestTopic'),

      modal: $('modal'),
      modalCard: $('modalCard'),
      modalTitle: $('modalTitle'),
      modalBody: $('modalBody'),
      modalCancel: $('modalCancel'),
      modalConfirm: $('modalConfirm'),

      snack: $('snack'),
      snackTitle: $('snackTitle'),
      snackBody: $('snackBody'),

      srAnnounce: $('srAnnounce'),

      /* v5 */
      menuWrap: $('menuWrap'),
      formPicker: $('formPicker'),
      progressHead: $('progressHead'),
      quickSpeed: $('quickSpeed'),
      setupForm: $('setupForm'),
      qForm: $('qForm'),
      resForm: $('resForm'),
      moreToggle: $('moreToggle'),
      morePanel: $('morePanel'),
      customSpeed: $('customSpeed'),
      customSpeedName: $('customSpeedName'),
      customSpeedValue: $('customSpeedValue'),
      customSpeedThink: $('customSpeedThink'),
      customSpeedReset: $('customSpeedReset')
    };

    this.current = 'menu';
    this.hudCache = {};
    this.bannerTimer = null;
    this.bankInfo = null;

    /* Setup selections, remembered across rounds. */
    this.selection = {
      mode: 'quick', speed: 'normal', duration: 40, group: ALL,
      mix: CFG.adaptive.defaultMix, customPct: CFG.customSpeed.def
    };
    this.form = null;           // the Form on screen (main.js decides)
    this.groups = [];
    this.topicGroup = {};

    this.modal = null;          // the currently open dialog, if any
    this.snackTimer = null;
    this.bindModal();
  }

  /* Display name for a topic choice, including "All Topics". */
  UI.prototype.topicLabel = function (group) {
    return group === ALL ? t('topic.all') : I18N.topic(group);
  };

  /* ---------------------------------------------------------------
     Forms (v5)
     The picker sits under the title like a world select: four tiles, one
     lit. On a first visit nothing is lit and the menu asks the student to
     choose - the game never guesses which Form they are in.
     --------------------------------------------------------------- */
  UI.prototype.formLabel = function (n) { return t('form.name', { n: n }); };

  UI.prototype.bindFormPicker = function (onPick) {
    var tiles = document.querySelectorAll('[data-form]');
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener('click', function () {
        onPick(parseInt(this.getAttribute('data-form'), 10));
      });
    }
  };

  UI.prototype.syncFormPicker = function () {
    var tiles = document.querySelectorAll('[data-form]');
    for (var i = 0; i < tiles.length; i++) {
      var n = parseInt(tiles[i].getAttribute('data-form'), 10);
      var on = n === this.form;
      tiles[i].classList.toggle('is-on', on);
      tiles[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      tiles[i].setAttribute('aria-label', this.formLabel(n));
    }
  };

  UI.prototype.showFormChooser = function () {
    this.form = null;
    if (this.el.menuWrap) this.el.menuWrap.classList.add('needs-form');
    this.syncFormPicker();
    this.renderFormLabels();
  };

  /* A mode button pressed before a Form is chosen: point at the picker. */
  UI.prototype.nudgeFormPicker = function () {
    var p = this.el.formPicker;
    if (!p) return;
    p.classList.remove('nudge');
    void p.offsetWidth;
    p.classList.add('nudge');
    var first = p.querySelector('[data-form]');
    if (first && first.focus) first.focus();
    this.announce(t('form.choose'));
  };

  UI.prototype.setForm = function (n, groups, topicGroup) {
    this.form = n;
    if (this.el.menuWrap) this.el.menuWrap.classList.remove('needs-form');
    this.setTopics(groups, topicGroup);
    this.selection.group = ALL;          // another Form's topic chip does not exist here
    this.syncFormPicker();
    this.renderFormLabels();
    this.refreshSetup();
  };

  UI.prototype.renderFormLabels = function () {
    var name = this.form ? this.formLabel(this.form) : '';
    if (this.el.progressHead) {
      this.el.progressHead.textContent = this.form ? t('progress.headForm', { form: I18N.upper(name) }) : t('progress.head');
    }
    if (this.el.setupForm) { this.el.setupForm.textContent = name; this.el.setupForm.hidden = !this.form; }
  };

  /* The Quick Game button says so when it will not play at Normal. */
  UI.prototype.renderQuickSpeed = function () {
    var el = this.el.quickSpeed;
    if (!el) return;
    var k = this.selection.speed;
    el.hidden = k === 'normal';
    el.textContent = k === 'normal' ? '' : t('menu.speedTag', { speed: this.speedLabel(k) });
  };

  UI.prototype.speedLabel = function (key) {
    return key === 'custom'
      ? t('speed.customPct', { pct: this.selection.customPct })
      : t('speed.' + key);
  };

  /* ---------------------------------------------------------------
     Language
     --------------------------------------------------------------- */
  UI.prototype.bindLangSwitch = function (onPick) {
    var btns = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        onPick(this.getAttribute('data-lang'));
      });
    }
  };

  UI.prototype.syncLangSwitch = function () {
    var cur = I18N.get();
    var btns = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-lang') === cur;
      btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      btns[i].classList.toggle('is-on', on);
    }
  };

  /* Screen-reader announcement. The visible change of the whole menu is
     announcement enough for sighted students; a blind student needs to be
     told that the page they are on just changed language. */
  UI.prototype.announce = function (text) {
    var el = this.el.srAnnounce;
    if (!el) return;
    el.textContent = '';
    setTimeout(function () { el.textContent = text; }, 40);
  };

  /* Everything built at runtime, rebuilt in the new language. Static
     markup has already been redone by I18N.apply() by the time this runs. */
  UI.prototype.relocalize = function (learner) {
    this.labelSetup();
    this.syncFormPicker();
    this.renderFormLabels();
    this.refreshSetup();
    this.renderBankInfo();
    this.showMenuProgress(learner);
    this.syncLangSwitch();
    this.setSoundButton(Audio.isEnabled());
    this.announce(t('lang.announce'));
  };

  UI.prototype.setBankInfo = function (questions, groups) {
    this.bankInfo = { n: questions, groups: groups };
    this.renderBankInfo();
  };

  UI.prototype.renderBankInfo = function () {
    if (!this.bankInfo || !this.el.bankCount) return;
    this.el.bankCount.textContent = t('menu.bank', this.bankInfo);
  };

  /* ---------------------------------------------------------------
     Confirmation dialog
     One component, used by Reset Progress and End Round, so destructive
     actions look and behave identically. Keyboard: Escape cancels, Tab
     stays inside the dialog, and focus returns to whatever opened it.
     --------------------------------------------------------------- */
  UI.prototype.bindModal = function () {
    var self = this;

    this.el.modalCancel.addEventListener('click', function () { self.closeModal(false); });
    this.el.modalConfirm.addEventListener('click', function () { self.closeModal(true); });

    /* Clicking the dimmed backdrop is a cancel, like Escape. */
    this.el.modal.addEventListener('mousedown', function (e) {
      if (e.target === self.el.modal) self.closeModal(false);
    });

    this.el.modal.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.stopPropagation(); self.closeModal(false); return; }
      if (e.key !== 'Tab') return;
      /* Simple two-button focus trap. */
      var a = self.el.modalCancel, b = self.el.modalConfirm;
      var first = e.shiftKey ? b : a, last = e.shiftKey ? a : b;
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  };

  /* opts = { title, body, confirmLabel, cancelLabel, danger, onConfirm, onCancel } */
  UI.prototype.confirm = function (opts) {
    this.modal = opts;
    this.modalOpener = document.activeElement;

    this.el.modalTitle.textContent = opts.title;
    this.el.modalBody.textContent = opts.body;
    this.el.modalCancel.querySelector('b').textContent = opts.cancelLabel || t('dlg.cancel');
    this.el.modalConfirm.querySelector('b').textContent = opts.confirmLabel || t('dlg.confirm');
    this.el.modalConfirm.classList.toggle('btn-danger', opts.danger !== false);
    this.el.modal.hidden = false;

    /* Focus the SAFE choice first: on a projector or a touchscreen a stray
       Enter should never be the destructive one. */
    this.el.modalCancel.focus();
  };

  UI.prototype.closeModal = function (confirmed) {
    if (this.el.modal.hidden) return;
    var opts = this.modal;
    this.modal = null;

    /* Focus must leave the dialog BEFORE it is hidden, or it ends up
       resting on a display:none control. Prefer whatever opened the
       dialog; otherwise just drop focus cleanly. */
    var back = this.modalOpener;
    if (!back || back === document.body || !back.isConnected || back.hidden) back = null;
    if (back && back.focus) { try { back.focus(); } catch (e) { back = null; } }
    if (!back && document.activeElement && document.activeElement.blur) {
      try { document.activeElement.blur(); } catch (e) {}
    }
    this.modalOpener = null;
    this.el.modal.hidden = true;
    if (!opts) return;
    if (confirmed) { if (opts.onConfirm) opts.onConfirm(); }
    else if (opts.onCancel) opts.onCancel();
  };

  UI.prototype.modalOpen = function () { return !this.el.modal.hidden; };

  /* A quiet, self-dismissing confirmation. Deliberately not a dialog - it
     must never need acknowledging. */
  UI.prototype.snack = function (title, body) {
    var self = this;
    this.el.snackTitle.textContent = title;
    this.el.snackBody.textContent = body || '';
    this.el.snack.hidden = false;
    this.el.snack.classList.remove('in');
    void this.el.snack.offsetWidth;
    this.el.snack.classList.add('in');
    if (this.snackTimer) clearTimeout(this.snackTimer);
    this.snackTimer = setTimeout(function () { self.el.snack.hidden = true; }, 2600);
  };

  /* ---------------------------------------------------------------
     Screens
     --------------------------------------------------------------- */
  UI.prototype.show = function (name) {
    for (var k in this.screens) {
      if (Object.prototype.hasOwnProperty.call(this.screens, k)) {
        this.screens[k].classList.toggle('is-active', k === name);
      }
    }
    this.current = name;
  };

  /* ---------------------------------------------------------------
     Setup panel
     Chips are created once and carry canonical keys in data attributes;
     labelSetup() writes their words, so a language change relabels them
     without rebuilding (and without losing the current selection).
     --------------------------------------------------------------- */
  UI.prototype.buildSetup = function (onStart) {
    var self = this;
    var Settings = global.PFR.Settings, Speed = global.PFR.Speed, CS = CFG.customSpeed;

    function chip(container, attr, value, onPick) {
      var b = document.createElement('button');
      b.className = 'chip'; b.type = 'button';
      b.dataset[attr] = value;
      b.addEventListener('click', function () { onPick(value); self.refreshSetup(); Audio.play('click'); });
      container.appendChild(b);
    }

    this.el.modeChips.innerHTML = '';
    CFG.modeOrder.forEach(function (key) {
      chip(self.el.modeChips, 'mode', key, function (v) { self.selection.mode = v; });
    });

    /* The presets stay the simple, first-class choice; 'custom' is the
       fifth chip and is fine-tuned under More settings. */
    this.el.speedChips.innerHTML = '';
    CFG.speedOrder.concat(['custom']).forEach(function (key) {
      chip(self.el.speedChips, 'speed', key, function (v) {
        self.selection.speed = v;
        Settings.set('speed', v);
        if (v === 'custom') self.openMore(true);
      });
    });

    this.el.mixChips.innerHTML = '';
    ['adaptive', 'balanced'].forEach(function (key) {
      chip(self.el.mixChips, 'mix', key, function (v) {
        self.selection.mix = v;
        global.PFR.Settings.set('mix', v);
      });
    });

    /* --- More settings: collapsed by default so a beginner never has to
       read past the four simple choices. --- */
    this.el.moreToggle.addEventListener('click', function () {
      self.openMore(self.el.morePanel.hidden);
      Audio.play('click');
    });

    /* --- custom fruit speed --- */
    var slider = this.el.customSpeed;
    slider.min = CS.min; slider.max = CS.max; slider.step = CS.step;
    slider.value = Speed.clamp(this.selection.customPct);
    slider.addEventListener('input', function () {
      var pct = Speed.clamp(slider.value);
      self.selection.customPct = pct;
      /* Moving the slider IS choosing Custom; no second click needed. */
      self.selection.speed = 'custom';
      Settings.set('customSpeed', pct);
      Settings.set('speed', 'custom');
      self.refreshSetup();
    });
    this.el.customSpeedReset.addEventListener('click', function () {
      self.selection.customPct = CS.def;
      slider.value = CS.def;
      self.selection.speed = 'normal';
      Settings.set('customSpeed', CS.def);
      Settings.set('speed', 'normal');
      self.refreshSetup();
      Audio.play('click');
    });

    $('startBtn').addEventListener('click', function () {
      Audio.play('click');
      onStart(self.currentSettings());
    });

    this.labelSetup();
    this.refreshSetup();
  };

  UI.prototype.openMore = function (open) {
    this.el.morePanel.hidden = !open;
    this.el.moreToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    this.el.moreToggle.classList.toggle('is-open', !!open);
  };

  /* Topic chips for the Form on screen. Rebuilt on every Form change. */
  UI.prototype.setTopics = function (groups, topicGroup) {
    var self = this;
    this.groups = groups || [];
    this.topicGroup = topicGroup || {};
    this.el.topicChips.innerHTML = '';
    [ALL].concat(this.groups).forEach(function (g) {
      var b = document.createElement('button');
      b.className = 'chip'; b.type = 'button';
      b.dataset.group = g;
      b.addEventListener('click', function () { self.selection.group = g; self.refreshSetup(); Audio.play('click'); });
      self.el.topicChips.appendChild(b);
    });
    this.labelSetup();
  };

  UI.prototype.labelSetup = function () {
    var i, c, list;
    list = this.el.modeChips.querySelectorAll('.chip');
    for (i = 0; i < list.length; i++) { c = list[i]; c.textContent = t('mode.' + c.dataset.mode); }
    list = this.el.speedChips.querySelectorAll('.chip');
    for (i = 0; i < list.length; i++) { c = list[i]; c.textContent = this.speedLabel(c.dataset.speed); }
    list = this.el.topicChips.querySelectorAll('.chip');
    for (i = 0; i < list.length; i++) { c = list[i]; c.textContent = this.topicLabel(c.dataset.group); }
    list = this.el.mixChips.querySelectorAll('.chip');
    for (i = 0; i < list.length; i++) {
      c = list[i];
      c.textContent = t('mix.' + c.dataset.mix);
      c.title = t('mix.' + c.dataset.mix + '.title');
    }
    list = this.el.durationChips.querySelectorAll('.chip');
    for (i = 0; i < list.length; i++) { c = list[i]; c.textContent = t('setup.seconds', { n: c.dataset.duration }); }
  };

  UI.prototype.currentSettings = function () {
    var mode = CFG.modes[this.selection.mode];
    return {
      mode: this.selection.mode,
      speed: mode.forceSpeed || this.selection.speed,
      duration: this.selection.duration,
      group: this.selection.group,
      mix: this.selection.mix
    };
  };

  UI.prototype.refreshSetup = function () {
    var self = this;
    var mode = CFG.modes[this.selection.mode];

    function mark(container, attr, value) {
      var kids = container.querySelectorAll('.chip');
      for (var i = 0; i < kids.length; i++) {
        var on = kids[i].dataset[attr] === String(value);
        kids[i].classList.toggle('is-on', on);
        kids[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    }

    mark(this.el.modeChips, 'mode', this.selection.mode);
    mark(this.el.topicChips, 'group', this.selection.group);
    mark(this.el.mixChips, 'mix', this.selection.mix);
    this.el.mixHint.textContent = t('mix.' + this.selection.mix + '.hint');

    if (mode.durationChoices) {
      this.el.durationBlock.hidden = false;
      if (this.el.durationChips.childElementCount !== mode.durationChoices.length) {
        this.el.durationChips.innerHTML = '';
        mode.durationChoices.forEach(function (d) {
          var b = document.createElement('button');
          b.className = 'chip'; b.type = 'button';
          b.dataset.duration = d;
          b.textContent = t('setup.seconds', { n: d });
          b.addEventListener('click', function () {
            self.selection.duration = d; self.refreshSetup(); Audio.play('click');
          });
          self.el.durationChips.appendChild(b);
        });
      }
      if (mode.durationChoices.indexOf(this.selection.duration) === -1) {
        this.selection.duration = mode.duration;
      }
      mark(this.el.durationChips, 'duration', this.selection.duration);
    } else {
      this.el.durationBlock.hidden = true;
    }

    /* Set after the clock block, because Time Rush's description quotes
       the starting clock - the one chosen above, not the default. */
    this.el.modeHint.textContent = t('mode.' + mode.key + '.blurb',
      mode.durationChoices ? { rushSecs: this.selection.duration } : null);

    /* Practice locks the speed so it stays a low-pressure mode. */
    var speedKey = mode.forceSpeed || this.selection.speed;
    mark(this.el.speedChips, 'speed', speedKey);
    var chips = this.el.speedChips.querySelectorAll('.chip');
    for (var i = 0; i < chips.length; i++) {
      chips[i].disabled = !!mode.forceSpeed;
      chips[i].style.opacity = mode.forceSpeed ? 0.45 : 1;
    }
    /* The custom chip's label carries its percentage, so it changes as
       the slider moves. */
    var sc = this.el.speedChips.querySelector('[data-speed="custom"]');
    if (sc) sc.textContent = this.speedLabel('custom');

    var pct = global.PFR.Speed.clamp(this.selection.customPct);
    var secs = global.PFR.Speed.thinkTime(pct).toFixed(1);
    this.el.speedHint.textContent = mode.forceSpeed
      ? t('setup.practiceSpeed')
      : (speedKey === 'custom' ? t('speed.custom.blurb', { pct: pct, secs: secs }) : t('speed.' + speedKey + '.blurb'));

    /* The readout under More settings describes the speed this round will
       really use - a preset or Custom - as a percentage of Normal plus what
       it MEANS: the seconds a student gets for an easy question. That puts
       the presets on the same scale as the slider, whose thumb rests at the
       same pace. Practice locks it at Relaxed, so the slider is disabled. */
    var SP = global.PFR.Speed;
    var D = SP.describe(speedKey, pct);
    var dName = speedKey === 'custom' ? t('custom.tag') : t('speed.' + speedKey);
    var dSecs = D.secs.toFixed(1);
    this.el.customSpeedName.textContent = dName;
    this.el.customSpeedValue.textContent = t('custom.value', { pct: D.pct });
    this.el.customSpeedThink.textContent = t('custom.think', { secs: dSecs });
    this.el.customSpeed.setAttribute('aria-valuetext', t('custom.valuetext', { name: dName, pct: D.pct, secs: dSecs }));
    var thumb = SP.clamp(D.pct);             // Extreme (152 %) rests at the 150 % end
    if (Number(this.el.customSpeed.value) !== thumb) this.el.customSpeed.value = thumb;
    this.el.customSpeed.disabled = !!mode.forceSpeed;
    this.el.customSpeedReset.disabled = !!mode.forceSpeed;

    /* Step numbers go to the VISIBLE main blocks only, so hiding a step
       never leaves a gap like "1, 3, 4". More-settings blocks are titled
       without a number - they are optional, not a step. */
    var blocks = document.querySelectorAll('#screen-setup .setup-block');
    var step = 0;
    for (var b = 0; b < blocks.length; b++) {
      var h3 = blocks[b].querySelector('h3');
      if (blocks[b].classList.contains('more-block')) {
        if (h3) h3.textContent = t(h3.getAttribute('data-title-key'));
        continue;
      }
      if (blocks[b].hidden) continue;
      step++;
      if (h3) h3.textContent = step + ' · ' + t(h3.getAttribute('data-title-key'));
    }

    this.renderQuickSpeed();

    var bits = [t('mode.' + mode.key), this.speedLabel(speedKey), this.topicLabel(this.selection.group)];
    if (mode.timed) {
      bits.splice(1, 0, t('setup.seconds', { n: mode.durationChoices ? this.selection.duration : mode.duration }));
    }
    if (mode.questionLimit) bits.splice(1, 0, t('setup.nQuestions', { n: mode.questionLimit }));
    this.el.setupSummary.textContent = bits.join('  ·  ');
  };

  UI.prototype.openSetup = function (preset) {
    if (preset) {
      for (var k in preset) {
        if (Object.prototype.hasOwnProperty.call(preset, k)) this.selection[k] = preset[k];
      }
    }
    /* A one-tap "practise Momentum" round aims at a single fine topic,
       which has no chip of its own. Open the setup with the group that
       contains it selected - not with no topic lit and a summary naming a
       topic the student cannot see or pick. */
    var g = this.selection.group;
    if (g !== ALL && this.groups && this.groups.indexOf(g) === -1) {
      this.selection.group = this.topicGroup[g] || ALL;
    }
    this.refreshSetup();
    this.show('setup');
  };

  /* ---------------------------------------------------------------
     Menu progress
     Three numbers, one bar and one next action. The point is to answer
     "am I getting better, and what do I do next?" - not to be a
     statistics dashboard.
     --------------------------------------------------------------- */
  UI.prototype.showMenuProgress = function (learner) {
    /* v5: everything on this panel is the CURRENT Form's - its bests, its
       mastery, its weak topic. */
    var scope = this.form ? global.PFR.Progress.scope(this.form) : null;
    this.showBest(this.el.bestQuick, scope ? scope.bestFor('quick') : 0);
    this.showBest(this.el.bestTopic, scope ? scope.bestFor('topic') : 0);
    this.renderFormLabels();
    this.renderQuickSpeed();

    var o = learner ? learner.overall() : { answered: 0, mastery: 0 };
    var hasData = o.answered > 0;

    this.el.progressEmpty.hidden = hasData;
    this.el.progressBody.hidden = !hasData;
    this.weakTopic = null;

    if (!hasData) {
      this.el.practiseWeakBtn.hidden = true;
      return;
    }

    var pct = Math.round(o.mastery * 100);
    this.el.masteryValue.textContent = pct + '%';
    this.el.masteryFill.style.transform = 'scaleX(' + (pct / 100).toFixed(3) + ')';
    this.el.masteryFill.className = pct >= 70 ? 'is-high' : (pct >= 45 ? 'is-mid' : 'is-low');
    this.el.progAnswered.textContent = I18N.num(o.answered);

    var report = learner.report();
    this.el.progStrong.textContent = report.strong.length ? I18N.topic(report.strong[0].topic) : t('progress.notYet');
    this.el.progWeak.textContent = report.weak.length ? I18N.topic(report.weak[0].topic) : t('progress.keepPlaying');

    /* Weak-topic practice only appears when there is a real topic to aim
       at - an empty button that does nothing is worse than no button.
       weakTopic stays canonical; only its label is translated. */
    if (report.weak.length) {
      this.weakTopic = report.weak[0].topic;
      this.el.practiseWeakSub.textContent = t('progress.startWith', { topic: I18N.topic(this.weakTopic) });
      this.el.practiseWeakBtn.hidden = false;
    } else {
      this.el.practiseWeakBtn.hidden = true;
    }
  };

  UI.prototype.showBest = function (el, value) {
    if (!el) return;
    if (value > 0) {
      el.textContent = t('menu.best', { score: I18N.num(value) });
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  };

  /* ---------------------------------------------------------------
     Hooks called by Game
     --------------------------------------------------------------- */
  UI.prototype.onSessionStart = function (settings) {
    this.show('game');
    this.hudCache = {};
    this.hideFeedback();
    this.el.pauseOverlay.hidden = true;
    this.el.banner.hidden = true;
    this.el.qText.textContent = '';
    this.el.qTopic.textContent = this.topicLabel(settings.group);
    if (this.el.qForm) this.el.qForm.textContent = t('form.short', { n: settings.form });
    this.el.qDiff.textContent = this.speedLabel(settings.preset.key);
    this.el.qDiff.className = 'pill pill-diff';
    this.el.qbar.classList.remove('is-urgent');
    this.setTimerBar(1);
  };

  UI.prototype.setCountdown = function (text) {
    if (text === null || text === undefined) { this.el.countdown.hidden = true; return; }
    if (this.el.countText.textContent !== text) {
      this.el.countText.textContent = text;
      this.el.countText.style.animation = 'none';
      void this.el.countText.offsetWidth;
      this.el.countText.style.animation = '';
    }
    this.el.countdown.hidden = false;
  };

  /* `view` is the question's text in the round's language. */
  UI.prototype.setQuestion = function (q, view, win, stage, index) {
    /* The cue teaches the interaction, then gets out of the way. Repeating
       it on every question for a whole round is just noise. */
    this.el.qCue.hidden = (index || 0) >= 3;
    this.el.qText.textContent = view.question;
    this.el.qTopic.textContent = I18N.topic(q.topic);
    this.el.qDiff.textContent = t('diff.' + q.difficulty);
    this.el.qDiff.className = 'pill pill-diff ' + q.difficulty;
    this.el.qbar.classList.remove('is-urgent');
    /* Replay the card's entrance so each new question reads as new. */
    this.el.qbar.classList.remove('q-in');
    void this.el.qbar.offsetWidth;
    this.el.qbar.classList.add('q-in');
    this.setTimerBar(1);
  };

  UI.prototype.setTimerBar = function (frac) {
    var f = frac < 0 ? 0 : (frac > 1 ? 1 : frac);
    this.el.qTimerFill.style.transform = 'scaleX(' + f.toFixed(3) + ')';
    var low = f < 0.28;
    this.el.qTimerFill.classList.toggle('is-low', low);
    this.el.qbar.classList.toggle('is-urgent', low);
  };

  UI.prototype.updateHud = function (s) {
    var c = this.hudCache;

    if (c.score !== s.score) {
      this.el.hudScore.textContent = I18N.num(s.score);
      c.score = s.score;
    }

    var mult = 1 + Math.min(s.combo > 0 ? s.combo - 1 : 0, CFG.score.comboCap) * CFG.score.comboStep;
    var comboText = s.combo >= 2 ? (s.combo + ' · ×' + mult.toFixed(1)) : '×' + mult.toFixed(1);
    if (c.comboText !== comboText) { this.el.hudCombo.textContent = comboText; c.comboText = comboText; }

    var tier = s.comboTier;
    if (c.tier !== tier) {
      this.el.hudComboCell.className = 'hud-cell hud-combo' + (tier >= 0 ? ' tier-' + tier : '');
      c.tier = tier;
    }

    /* Drawn as hearts only while they still fit the HUD. A teacher raising
       the life count in config.js used to overflow the bar, and a very
       large value threw out of Array.join. */
    var livesText;
    if (s.unlimitedLives) livesText = '∞';
    else if (s.lives <= 0) livesText = '–';
    else if (s.lives <= 6) livesText = new Array(s.lives + 1).join('♥');
    else livesText = '♥ ×' + s.lives;
    if (c.livesText !== livesText) { this.el.hudLives.textContent = livesText; c.livesText = livesText; }

    var label, value, low = false;
    if (s.timed) {
      label = t('hud.time');
      value = String(Math.max(0, Math.ceil(s.timeLeft)));
      low = s.timeLeft <= 10;
    } else if (s.questionLimit) {
      label = t('hud.question');
      value = Math.min(s.answered + 1, s.questionLimit) + '/' + s.questionLimit;
    } else {
      label = t('hud.answered');
      value = String(s.answered);
    }
    if (c.clockLabel !== label) { this.el.hudClockLabel.textContent = label; c.clockLabel = label; }
    if (c.clockValue !== value) { this.el.hudClock.textContent = value; c.clockValue = value; }
    if (c.low !== low) { this.el.hudClockCell.classList.toggle('is-low', low); c.low = low; }

    if (c.showStage !== s.showStage) {
      this.el.hudStageCell.style.display = s.showStage ? '' : 'none';
      c.showStage = s.showStage;
    }
    if (c.stage !== s.stage) { this.el.hudStage.textContent = s.stage; c.stage = s.stage; }
  };

  /* A short centred call-out for streak milestones and bombs. It sits low
     on the playfield so it never covers the question or a fruit label. */
  UI.prototype.flashBanner = function (text, color) {
    var b = this.el.banner;
    b.textContent = text;
    b.style.color = color || '#ffffff';
    b.style.borderColor = color || 'rgba(255,255,255,0.4)';
    b.hidden = false;
    b.classList.remove('pop');
    void b.offsetWidth;
    b.classList.add('pop');
    if (this.bannerTimer) clearTimeout(this.bannerTimer);
    this.bannerTimer = setTimeout(function () { b.hidden = true; }, 1000);
  };

  /* A mistake is the one moment a student is guaranteed to be paying
     attention, so the card is ordered to teach rather than just judge:

         ✗ NOT QUITE          - soft, non-punishing
         Answer: newton       - the fact they need
         "joule" is energy…   - the specific misconception they hit
         Remember: …          - the rule to carry forward
         In BM: newton        - Practice only: the term in the other language

     That last line is new in v4. SPM Physics papers print every question
     in both BM and English, and students from BM-medium and English-medium
     (DLP) classes sit the same paper, so knowing a term in both languages
     is part of the syllabus in practice. It appears only in Practice Mode,
     where there is time to read it, and only when the two terms differ -
     "10 000 J" is the same in both and would be noise. */
  UI.prototype.showFeedback = function (result, q, view, combo, delta, explain, chosenKey) {
    var title, sub = '', cls;
    var answer = view.answers[0];

    if (result === 'correct') {
      cls = 'correct';
      title = combo >= 5 ? '🔥 ×' + combo : (combo >= 3 ? t('fb.streak', { n: combo }) : t('fb.correct'));
      sub = t('fb.points', { n: delta });
    } else if (result === 'wrong') {
      cls = 'wrong';
      title = t('fb.wrong');
      sub = t('fb.answer', { answer: answer });
    } else {
      cls = 'miss';
      title = t('fb.miss');
      sub = t('fb.answer', { answer: answer });
    }

    this.el.fbCard.className = 'fb-card ' + cls;
    this.el.fbTitle.textContent = title;
    this.el.fbSub.textContent = sub;

    /* Why the chosen distractor was wrong - the single most useful line we
       can show, when the bank provides it. Looked up by answer index, so
       it works in every language. */
    var why = '';
    if (result === 'wrong' && chosenKey !== null && chosenKey !== undefined &&
        view.why && view.why[chosenKey]) {
      why = t('fb.why', { chosen: view.answers[chosenKey], note: view.why[chosenKey] });
    }
    this.el.fbWhy.textContent = why;
    this.el.fbWhy.hidden = !why;

    /* The rule to take away. Always shown on a mistake (that is the
       teaching moment) and always in Practice Mode. */
    var remember = (explain || result !== 'correct') ? (view.explanation || '') : '';
    this.el.fbExplain.textContent = remember;
    this.el.fbRemember.hidden = !remember;

    /* The same answer in the other language (Practice only). */
    var altShown = false;
    if (explain && this.el.fbAlt) {
      var altLang = I18N.alt(view.lang);
      var other = Bank.view(q, altLang);
      if (other.lang === altLang && norm(other.answers[0]) !== norm(answer)) {
        this.el.fbAltTag.textContent = t('fb.alt.' + altLang);
        this.el.fbAltText.textContent = other.answers[0];
        this.el.fbAltText.setAttribute('lang', altLang);
        altShown = true;
      }
    }
    if (this.el.fbAlt) this.el.fbAlt.hidden = !altShown;

    this.el.feedback.hidden = false;
  };

  UI.prototype.hideFeedback = function () { this.el.feedback.hidden = true; };

  UI.prototype.onPause = function (paused) { this.el.pauseOverlay.hidden = !paused; };

  UI.prototype.setSoundButton = function (on) {
    this.el.soundBtn.classList.toggle('is-off', !on);
    this.el.soundBtn.textContent = on ? '🔊' : '🔇';
    this.el.soundBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  };

  /* ---------------------------------------------------------------
     Results
     --------------------------------------------------------------- */
  var RESULT_HEAD = { lives: 'res.lives', time: 'res.time', quit: 'res.quit' };

  UI.prototype.showResults = function (r) {
    $('resultsHead').textContent = t(RESULT_HEAD[r.reason] || 'res.complete');
    if (this.el.resForm) this.el.resForm.textContent = this.formLabel(r.form);

    var stars = $('resStars');
    stars.innerHTML = '';
    stars.setAttribute('aria-label', t('res.rating', { stars: r.stars }));
    for (var i = 0; i < 3; i++) {
      var sp = document.createElement('span');
      sp.className = 'star' + (i < r.stars ? ' on' : '');
      sp.textContent = '★';
      sp.setAttribute('aria-hidden', 'true');
      sp.style.animationDelay = (i * 0.12) + 's';
      stars.appendChild(sp);
    }

    $('resultsMsg').textContent = r.message.icon + '  ' + t(r.message.key);

    $('resScore').textContent = I18N.num(r.score);
    var bestEl = $('resBest');
    bestEl.textContent = r.isNewBest
      ? t('res.newBest')
      : t('res.best', { mode: t('mode.' + r.mode.key), score: I18N.num(r.best) });
    bestEl.className = 'score-best' + (r.isNewBest ? ' is-new' : '');

    $('resCorrect').textContent = r.correct;
    $('resWrong').textContent = r.wrong;
    $('resMissed').textContent = r.missed;
    $('resAccuracy').textContent = r.attempted ? r.accuracy.toFixed(0) + '%' : '–';
    $('resCombo').textContent = '×' + r.bestCombo;
    $('resReaction').textContent = r.avgReaction ? r.avgReaction.toFixed(1) + ' s' : '–';

    fillList($('strongBox'), $('strongList'), r.strong, function (w) { return I18N.topic(w.topic); });
    fillList($('reviewBox'), $('reviewList'), r.weak, function (w) { return I18N.topic(w.topic); });

    /* "What do I do now?" gets its own block directly under the score,
       above the detailed breakdown, because it is the only part of this
       screen a student has to act on. */
    var nextStep = $('nextStep');
    this.reviseTopic = r.weak.length ? r.weak[0].topic : null;
    if (this.reviseTopic) {
      var name = I18N.topic(this.reviseTopic);
      var misses = r.topicMisses && r.topicMisses[this.reviseTopic];
      $('nextStepLine').textContent = misses
        ? t('res.nextMisses', { topic: name, n: misses })
        : t('res.nextPlain', { topic: name });
      $('reviseBtn').querySelector('b').textContent = t('res.practiseBtn', { topic: I18N.upper(name) });
      nextStep.hidden = false;
    } else {
      nextStep.hidden = true;
    }

    this.show('results');
  };

  function fillList(box, list, items, label) {
    list.innerHTML = '';
    if (!items || !items.length) { box.hidden = true; return; }
    box.hidden = false;
    items.forEach(function (it) {
      var li = document.createElement('li');
      li.textContent = label(it);
      list.appendChild(li);
    });
  }

  global.PFR = global.PFR || {};
  global.PFR.UI = UI;
})(window);
