/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  GAME LOGIC
   ---------------------------------------------------------------------
   Owns the session: which question comes next, how long the player gets,
   what a slice is worth, lives, stages and the end-of-game report. It
   drives the engine and the UI but contains no drawing code and no DOM
   queries of its own.
   ===================================================================== */

(function (global) {
  'use strict';

  var CFG = global.PFR.CONFIG;
  var U = global.PFR.util;
  var Audio = global.PFR.Audio;
  var I18N = global.PFR.I18N;
  var Bank = global.PFR.Bank;

  /* =================================================================
     QUESTION PICKER
     Three shuffled queues (easy / medium / hard) walked in parallel.

     A pool that runs dry is NOT recycled on its own - it returns nothing
     and the draw falls through to another difficulty. Only when every pool
     is spent does the whole cycle reshuffle. Without that rule, a topic
     holding two hard questions served them again every few draws while ten
     medium ones had never been asked.

     v2 adds adaptive weighting on top: within the un-asked remainder of a
     pool, a question from a weak topic is up to ~5x more likely to be
     drawn than one from a mastered topic. The no-repeat guarantee is
     preserved because the chosen question is swapped into the cursor slot
     rather than simply read from a random index.
     ================================================================= */
  function Picker(questions, learner, useAdaptive) {
    this.learner = learner;
    /* 'adaptive' weights weak topics up; 'balanced' walks the shuffled
       pools evenly, which is what a teacher wants when sweeping a whole
       topic in front of a class. */
    this.useAdaptive = useAdaptive !== false;
    this.pools = { easy: [], medium: [], hard: [] };
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      (this.pools[q.difficulty] || this.pools.medium).push(q);
    }
    this.count = this.pools.easy.length + this.pools.medium.length + this.pools.hard.length;
    this.newCycle();
  }

  Picker.prototype.newCycle = function () {
    U.shuffle(this.pools.easy);
    U.shuffle(this.pools.medium);
    U.shuffle(this.pools.hard);
    this.cursor = { easy: 0, medium: 0, hard: 0 };
  };

  Picker.prototype.total = function () { return this.count; };

  /* Returns null when this difficulty has nothing left UNSEEN this cycle. */
  Picker.prototype.takeFrom = function (diff) {
    var pool = this.pools[diff];
    if (!pool || this.cursor[diff] >= pool.length) return null;

    var start = this.cursor[diff];
    var idx = start;

    if (this.useAdaptive && this.learner && CFG.adaptive.enabled) {
      var total = 0, i;
      for (i = start; i < pool.length; i++) total += this.learner.weight(pool[i].topic);
      if (total > 0) {
        var roll = Math.random() * total, acc = 0;
        for (i = start; i < pool.length; i++) {
          acc += this.learner.weight(pool[i].topic);
          if (roll <= acc) { idx = i; break; }
        }
      }
    }

    var tmp = pool[start]; pool[start] = pool[idx]; pool[idx] = tmp;
    this.cursor[diff] = start + 1;
    return pool[start];
  };

  Picker.prototype.drawUsing = function (mix) {
    var roll = Math.random();
    var order;
    if (roll < mix.easy) order = ['easy', 'medium', 'hard'];
    else if (roll < mix.easy + mix.medium) order = ['medium', 'hard', 'easy'];
    else order = ['hard', 'medium', 'easy'];

    for (var i = 0; i < order.length; i++) {
      var q = this.takeFrom(order[i]);
      if (q) return q;
    }
    return null;
  };

  Picker.prototype.next = function (mix) {
    var q = this.drawUsing(mix);
    if (q) return q;
    this.newCycle();            // every question has now been asked once
    return this.drawUsing(mix);
  };

  /* =================================================================
     GAME
     ================================================================= */
  function Game(engine, ui, learner) {
    this.engine = engine;
    this.ui = ui;
    this.learner = learner;
    this.state = 'idle';
    this.settings = null;
    this.stats = null;
  }

  Game.prototype.isRunning = function () {
    return this.state !== 'idle' && this.state !== 'over';
  };

  /* ---------------------------------------------------------------
     Start a session.
     --------------------------------------------------------------- */
  Game.prototype.start = function (settings) {
    var mode = CFG.modes[settings.mode] || CFG.modes.quick;
    var speedKey = mode.forceSpeed || settings.speed || 'normal';
    /* v5: a preset key or 'custom' + a percentage. Speed.resolve clamps
       the percentage, so nothing out of range can reach the engine. */
    var preset = global.PFR.Speed.resolve(speedKey, settings.customPct);

    /* v5: the round belongs to ONE Form - its questions, its learner and
       its best scores. main.js hands over that Form's learner. */
    if (settings.learner) this.learner = settings.learner;

    this.settings = {
      mode: mode,
      preset: preset,
      form: settings.form,
      group: settings.group || 'all',
      duration: mode.durationChoices ? (settings.duration || mode.duration) : mode.duration,
      /* The language is fixed for the whole round. Answer plates are laid
         out once, at launch, inside lanes sized for that text; swapping
         the words mid-flight would re-wrap labels the lanes never planned
         for. The switch lives on the menu, outside a round. */
      lang: settings.lang || I18N.get()
    };
    this.lang = this.settings.lang;

    var mix = settings.mix || CFG.adaptive.defaultMix;
    this.settings.mix = mix;
    this.picker = new Picker(settings.questions, this.learner, mix === 'adaptive');
    this.engine.clearAll();

    /* Never ask for more questions than the chosen topic actually has. */
    this.questionLimit = mode.questionLimit
      ? Math.min(mode.questionLimit, this.picker.total())
      : 0;

    this.score = 0;
    this.combo = 0;
    this.bestCombo = 0;
    this.comboTier = -1;
    this.lives = mode.lives;          // 0 means unlimited
    this.answered = 0;
    this.stage = 1;
    this.timeLeft = this.settings.duration;
    this.maxTimeSeen = this.settings.duration;
    this.pendingEnd = null;
    this.lastTickWarn = -1;
    this.retryQueue = [];

    this.stats = {
      correct: 0, wrong: 0, missed: 0, bombs: 0,
      reactions: [], perfects: 0,
      byTopic: {},                    // topic -> {right, wrong}
      topicsSeen: [],
      startedAt: Date.now()
    };

    this.question = null;
    this.qWindow = 0;
    this.qElapsed = 0;
    this.resolved = false;

    this.state = 'countdown';
    this.phase = 2.0;

    Audio.play('start');
    this.ui.onSessionStart(this.settings, this.picker.total());
    this.ui.setCountdown(I18N.t('count.ready'));
    this.pushHud();
  };

  Game.prototype.quit = function () {
    if (this.state === 'idle' || this.state === 'over') return;
    this.finish('quit');
  };

  Game.prototype.pause = function () {
    if (this.state === 'idle' || this.state === 'over' || this.state === 'paused') return;
    this.resumeState = this.state;
    this.state = 'paused';
    this.ui.onPause(true);
  };

  Game.prototype.resume = function () {
    if (this.state !== 'paused') return;
    this.state = this.resumeState || 'play';
    this.ui.onPause(false);
  };

  /* ---------------------------------------------------------------
     Reaction window
     Derived, never random. Longer questions and longer answers earn a
     little extra thinking time so "hard" never means "unreadable".
     --------------------------------------------------------------- */
  /* `text` and `answers` are what is ON SCREEN, in the round's language,
     so a Bahasa Melayu question that runs longer than its English source
     earns the extra reading time automatically. */
  Game.prototype.windowFor = function (q, text, answers) {
    var R = CFG.reading;
    var preset = this.settings.preset;

    var stageIdx = Math.min(this.stage, CFG.maxStage) - 1;
    var stageScale = preset.stageRamp ? CFG.stageScale[stageIdx] : 1.0;

    var base = CFG.baseWindow[q.difficulty] || CFG.baseWindow.medium;

    var qExtra = U.clamp((text.length - R.qCharsFree) * R.qPerChar, 0, R.qCap);

    var total = 0, hasFormula = false;
    for (var i = 0; i < answers.length; i++) {
      var a = String(answers[i]);
      total += a.length;
      if (/[=÷×⁻²³∝]/.test(a)) hasFormula = true;
    }
    var avg = total / Math.max(1, answers.length);
    var aExtra = U.clamp((avg - R.aCharsFree) * R.aPerChar, 0, R.aCap);
    if (hasFormula) aExtra += R.formulaBonus;

    var w = base * preset.windowScale * stageScale + qExtra + aExtra;
    /* clamp() lets NaN straight through - every comparison with NaN is
       false - so a broken value must be caught before it, not by it. */
    if (!isFinite(w)) w = base;
    return U.clamp(w, CFG.minWindow, CFG.maxWindow);
  };

  /* Pick which answers become fruit, as INDICES into the question's answer
     list - 0 is always the correct one. Indices rather than text, so which
     fruit is right, and which misconception a wrong one carries, never
     depends on the language its label happens to be written in. */
  Game.prototype.buildAnswers = function (q) {
    var want = Math.min(this.settings.preset.fruits, q.answers.length);
    var wrong = [];
    for (var i = 1; i < q.answers.length; i++) wrong.push(i);
    U.shuffle(wrong);
    return U.shuffle([0].concat(wrong.slice(0, Math.max(0, want - 1))));
  };

  /* How many bombs this wave earns. Hazards ramp with the stage rather
     than appearing from question one, so the opening of a Fast round is
     clean while the late game still bites. */
  Game.prototype.bombsForWave = function () {
    var preset = this.settings.preset;
    if (!preset.bombPeak) return 0;
    var idx = Math.min(this.stage, CFG.maxStage) - 1;
    return Math.min(preset.bombPeak, CFG.bombsByStage[idx] || 0);
  };

  /* Which question comes next: a due retry first, otherwise a fresh draw.
     The first couple of questions are forced easy so nobody opens a round
     on a three-step calculation before finding the controls. */
  Game.prototype.pickQuestion = function () {
    for (var i = 0; i < this.retryQueue.length; i++) {
      if (this.answered >= this.retryQueue[i].dueAt) {
        return this.retryQueue.splice(i, 1)[0].q;
      }
    }
    if (this.answered < CFG.warmupQuestions) {
      var easy = this.picker.takeFrom('easy');
      if (easy) return easy;
    }
    var stageIdx = Math.min(this.stage, CFG.maxStage) - 1;
    return this.picker.next(CFG.stageMix[stageIdx]);
  };

  Game.prototype.beginQuestion = function () {
    if (this.pendingEnd) { this.finish(this.pendingEnd); return; }

    if (this.questionLimit && this.answered >= this.questionLimit) {
      this.finish('complete');
      return;
    }

    var q = this.pickQuestion();
    if (!q) { this.finish('complete'); return; }

    var view = Bank.view(q, this.lang);
    var keys = this.buildAnswers(q);
    var labels = [], fruit = [];
    for (var i = 0; i < keys.length; i++) {
      labels.push(view.answers[keys[i]]);
      fruit.push({ key: keys[i], label: view.answers[keys[i]] });
    }
    var win = this.windowFor(q, view.question, labels);

    this.question = q;
    this.view = view;
    this.qWindow = win;
    this.qElapsed = 0;
    this.resolved = false;

    if (this.stats.topicsSeen.indexOf(q.topic) === -1) this.stats.topicsSeen.push(q.topic);

    this.engine.spawnWave({
      answers: fruit,
      correctKey: 0,
      window: win,
      preset: this.settings.preset,
      bombs: this.bombsForWave()
    });

    this.state = 'play';
    this.ui.setQuestion(q, view, win, this.stage, this.answered);
    this.pushHud();
  };

  /* ---------------------------------------------------------------
     Slicing results arrive here from the input layer.
     --------------------------------------------------------------- */
  Game.prototype.onHits = function (hits) {
    if (!hits || !hits.length) return;

    /* Answers are always settled before bombs. A swipe that catches both
       otherwise scored differently depending on the order the engine
       happened to report them in. */
    var ordered = hits.slice().sort(function (a, b) {
      return (a.kind === 'bomb' ? 1 : 0) - (b.kind === 'bomb' ? 1 : 0);
    });

    for (var i = 0; i < ordered.length; i++) {
      var f = ordered[i];
      if (f.kind === 'bomb') { this.onBomb(f); continue; }
      if (this.state !== 'play' || this.resolved) continue;
      if (f.correct) this.onCorrect(f);
      else this.onWrong(f);
    }
  };

  Game.prototype.onCorrect = function (fruit) {
    var S = CFG.score;
    var frac = U.clamp(this.qElapsed / this.qWindow, 0, 1);

    var speedBonus = frac <= S.speedFullFrac
      ? S.speedMax
      : Math.round(S.speedMax * (1 - (frac - S.speedFullFrac) / (1 - S.speedFullFrac)));
    speedBonus = Math.max(0, speedBonus);

    this.combo++;
    if (this.combo > this.bestCombo) this.bestCombo = this.combo;
    this.engine.combo = this.combo;

    var mult = 1 + Math.min(this.combo - 1, S.comboCap) * S.comboStep;
    var diffBonus = S.difficultyBonus[this.question.difficulty] || 0;
    var points = Math.round((S.base + speedBonus + diffBonus) * mult);

    this.score += points;
    this.stats.correct++;
    this.stats.reactions.push(this.qElapsed);
    this.noteTopic(true);

    var perfect = frac <= S.perfectFrac;
    if (perfect) this.stats.perfects++;

    this.engine.popup(fruit.x, fruit.y - fruit.r * 0.5, '+' + points, '#8dffb0', 32);
    if (perfect) {
      this.engine.popup(fruit.x, fruit.y - fruit.r * 1.25, I18N.t('fx.perfect'), '#ffe066', 22);
    }
    this.engine.hitFlash('130,255,170', 0.55);

    /* Time Rush: a correct answer buys back clock. That single rule is
       what makes the mode feel different from Quick Game rather than
       being the same round with a different number on it. */
    var mode = this.settings.mode;
    if (mode.timed && mode.timeBonus) {
      this.timeLeft += mode.timeBonus;
      this.maxTimeSeen = Math.max(this.maxTimeSeen, this.timeLeft);
      this.engine.popup(fruit.x, fruit.y + fruit.r * 0.7, '+' + mode.timeBonus.toFixed(1) + 's', '#7dd3fc', 22);
    }

    Audio.play('correct', this.combo - 1);
    this.announceCombo();

    this.resolve('correct', points);
  };

  /* Combo tiers give the streak a voice without spamming every hit. */
  Game.prototype.announceCombo = function () {
    var tierIdx = -1;
    for (var i = 0; i < CFG.comboTiers.length; i++) {
      if (this.combo >= CFG.comboTiers[i].at) tierIdx = i;
    }
    if (tierIdx > this.comboTier) {
      this.comboTier = tierIdx;
      var tier = CFG.comboTiers[tierIdx];
      this.ui.flashBanner(I18N.t('combo.' + tierIdx) + '  ×' + this.combo, tier.color);
      Audio.play('combo', this.combo);
    }
  };

  Game.prototype.onWrong = function (fruit) {
    var S = CFG.score;
    this.score = Math.max(0, this.score - S.wrongPenalty);
    this.breakCombo();
    this.stats.wrong++;
    this.noteTopic(false);

    this.engine.popup(fruit.x, fruit.y - fruit.r * 0.5, '−' + S.wrongPenalty, '#ff9a9a', 28);
    this.engine.hitFlash('255,110,110', 0.75);
    Audio.play('wrong');
    this.loseLife();

    var mode = this.settings.mode;
    if (mode.timed && mode.timePenalty) {
      this.timeLeft = Math.max(0, this.timeLeft - mode.timePenalty);
    }

    this.queueRetry();
    this.resolve('wrong', -S.wrongPenalty, fruit.key);
  };

  Game.prototype.onMiss = function () {
    var S = CFG.score;
    this.score = Math.max(0, this.score - S.missPenalty);
    this.breakCombo();
    this.stats.missed++;
    this.noteTopic(false);

    this.engine.hitFlash('255,190,90', 0.6);
    Audio.play('miss');
    if (this.settings.mode.missCostsLife) this.loseLife();

    this.queueRetry();
    this.resolve('miss', -S.missPenalty);
  };

  Game.prototype.onBomb = function (fruit) {
    var S = CFG.score;
    this.score = Math.max(0, this.score - S.bombPenalty);
    this.breakCombo();
    this.stats.bombs++;
    this.engine.popup(fruit.x, fruit.y - fruit.r * 0.5, '−' + S.bombPenalty, '#ffb3ab', 28);
    Audio.play('bomb');
    this.ui.flashBanner(I18N.t('fx.bomb', { n: S.bombPenalty }), '#ff6b7d');
    this.pushHud();
  };

  Game.prototype.breakCombo = function () {
    this.combo = 0;
    this.comboTier = -1;
    this.engine.combo = 0;
  };

  /* Practice re-asks anything you got wrong, a few questions later, so the
     correction actually gets rehearsed instead of just being read once. */
  Game.prototype.queueRetry = function () {
    if (!this.settings.mode.retryWrong || !this.question) return;
    for (var i = 0; i < this.retryQueue.length; i++) {
      if (this.retryQueue[i].q === this.question) return;   // already waiting
    }
    this.retryQueue.push({ q: this.question, dueAt: this.answered + 3 });
  };

  Game.prototype.noteTopic = function (ok) {
    var t = this.question.topic;
    var s = this.stats.byTopic[t] || (this.stats.byTopic[t] = { right: 0, wrong: 0 });
    if (ok) s.right++; else s.wrong++;
    if (this.learner) this.learner.record(t, ok);
  };

  Game.prototype.loseLife = function () {
    if (!this.settings.mode.lives) return;   // practice / time rush: unlimited
    this.lives--;
    Audio.play('life');
    if (this.lives <= 0) {
      this.lives = 0;
      this.pendingEnd = 'lives';
    }
  };

  /* Close the current question and show feedback. */
  Game.prototype.resolve = function (result, delta, chosenKey) {
    if (this.resolved) return;
    this.resolved = true;
    this.answered++;

    var mode = this.settings.mode;
    if (this.settings.preset.stageRamp) {
      var every = mode.stageEvery || CFG.questionsPerStage;
      this.stage = Math.min(CFG.maxStage, 1 + Math.floor(this.answered / every));
    }

    var explain = mode.explain;
    var dur = CFG.feedback[result === 'correct' ? 'correct' : (result === 'wrong' ? 'wrong' : 'miss')];
    if (explain) dur += CFG.feedback.explainExtra;

    if (result === 'correct') {
      this.engine.sweepAll();
    } else {
      this.engine.markCorrect(0);
      var others = this.engine.fruits;
      for (var i = 0; i < others.length; i++) {
        if (!others[i].frozen) others[i].sweeping = true;
      }
    }

    this.ui.showFeedback(result, this.question, this.view, this.combo, delta, explain, chosenKey);

    this.state = 'feedback';
    this.phase = dur;
    this.pushHud();
  };

  /* ---------------------------------------------------------------
     Main tick
     --------------------------------------------------------------- */
  Game.prototype.tick = function (dt) {
    if (this.state === 'idle' || this.state === 'over' || this.state === 'paused') return;

    if (this.state === 'countdown') {
      this.phase -= dt;
      var n = Math.ceil(this.phase);
      this.ui.setCountdown(this.phase > 1.15 ? I18N.t('count.ready') : (n <= 0 ? I18N.t('count.go') : String(n)));
      if (this.phase <= 0) {
        this.ui.setCountdown(null);
        this.beginQuestion();
      }
      return;
    }

    if (this.settings.mode.timed) {
      this.timeLeft -= dt;
      var whole = Math.ceil(this.timeLeft);
      if (whole <= 5 && whole > 0 && whole !== this.lastTickWarn) {
        this.lastTickWarn = whole;
        Audio.play('tick');
      }
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        this.finish('time');
        return;
      }
    }

    if (this.state === 'play') {
      this.qElapsed += dt;
      this.ui.setTimerBar(1 - U.clamp(this.qElapsed / this.qWindow, 0, 1));
      if (this.qElapsed >= this.qWindow) this.onMiss();

    } else if (this.state === 'feedback') {
      this.phase -= dt;
      if (this.phase <= 0) {
        this.engine.sweepAll();
        this.ui.hideFeedback();
        this.state = 'gap';
        this.phase = CFG.feedback.gap;
      }

    } else if (this.state === 'gap') {
      this.phase -= dt;
      if (this.phase <= 0) this.beginQuestion();
    }

    this.pushHud();
  };

  Game.prototype.pushHud = function () {
    var mode = this.settings.mode;
    this.ui.updateHud({
      score: this.score,
      combo: this.combo,
      comboTier: this.comboTier,
      lives: this.lives,
      unlimitedLives: !mode.lives,
      timed: mode.timed,
      timeLeft: this.timeLeft,
      maxTime: this.maxTimeSeen,
      answered: this.answered,
      questionLimit: this.questionLimit,
      stage: this.stage,
      showStage: this.settings.preset.stageRamp
    });
  };

  /* ---------------------------------------------------------------
     End of session
     --------------------------------------------------------------- */
  Game.prototype.finish = function (reason) {
    if (this.state === 'over') return;
    this.state = 'over';
    this.engine.sweepAll();
    this.engine.combo = 0;
    this.ui.hideFeedback();
    this.ui.setCountdown(null);
    this.ui.onPause(false);

    var s = this.stats;
    var attempted = s.correct + s.wrong + s.missed;
    var accuracy = attempted ? (s.correct / attempted) * 100 : 0;

    var avgReaction = 0;
    if (s.reactions.length) {
      var sum = 0;
      for (var i = 0; i < s.reactions.length; i++) sum += s.reactions[i];
      avgReaction = sum / s.reactions.length;
    }

    if (this.learner) this.learner.save();

    /* Strong / revise come from the persistent model but are limited to
       the topics actually seen this round, so the advice matches the round
       the student just played. */
    var report = this.learner
      ? this.learner.report(s.topicsSeen)
      : { strong: [], weak: [] };

    /* Fallback for a very short round where no topic has enough attempts
       yet: fall back to this session's own misses. */
    if (!report.weak.length) {
      var fallback = [];
      for (var t in s.byTopic) {
        if (!Object.prototype.hasOwnProperty.call(s.byTopic, t)) continue;
        if (s.byTopic[t].wrong > 0) fallback.push({ topic: t, misses: s.byTopic[t].wrong });
      }
      fallback.sort(function (a, b) { return b.misses - a.misses; });
      report.weak = fallback.slice(0, 3).map(function (f) {
        return { topic: f.topic, mastery: 0, acc: 0, seen: 0 };
      });
    }

    var best = this.recordBest(this.score);
    var stars = this.starRating(accuracy, attempted);

    /* Mistakes made in THIS round, per topic. The persistent model decides
       which topic to recommend; this makes the recommendation concrete
       ("3 mistakes this round") rather than abstract. */
    var topicMisses = {};
    for (var t in s.byTopic) {
      if (!Object.prototype.hasOwnProperty.call(s.byTopic, t)) continue;
      if (s.byTopic[t].wrong > 0) topicMisses[t] = s.byTopic[t].wrong;
    }

    this.ui.showResults({
      reason: reason,
      score: this.score,
      attempted: attempted,
      correct: s.correct,
      wrong: s.wrong,
      missed: s.missed,
      bombs: s.bombs,
      perfects: s.perfects,
      accuracy: accuracy,
      bestCombo: this.bestCombo,
      avgReaction: avgReaction,
      strong: report.strong.slice(0, 3),
      weak: report.weak.slice(0, 3),
      topicMisses: topicMisses,
      stars: stars,
      mode: this.settings.mode,
      form: this.settings.form,
      preset: this.settings.preset,
      group: this.settings.group,
      best: best.value,
      isNewBest: best.isNew,
      message: this.performanceMessage(accuracy, avgReaction, attempted, stars)
    });

    Audio.play(stars >= 2 ? 'fanfare' : 'gameOver');
  };

  /* Stars reward accuracy first and volume second, so a careful short
     round can still earn three and a fast guessing spree cannot. */
  Game.prototype.starRating = function (accuracy, attempted) {
    if (attempted < 4) return 0;
    if (accuracy >= 90 && attempted >= 10) return 3;
    if (accuracy >= 75 && attempted >= 7) return 2;
    if (accuracy >= 55) return 1;
    return 0;
  };

  Game.prototype.performanceMessage = function (accuracy, avgReaction, attempted, stars) {
    if (attempted < 4) return { icon: '🍉', key: 'msg.warmup' };
    if (stars === 3 && avgReaction <= 3.0) return { icon: '⚡', key: 'msg.outstanding' };
    if (stars === 3) return { icon: '🧠', key: 'msg.excellent' };
    if (accuracy >= 75 && avgReaction <= 3.0) return { icon: '🔥', key: 'msg.reflexes' };
    if (accuracy >= 75) return { icon: '👍', key: 'msg.solid' };
    if (accuracy >= 55) return { icon: '📚', key: 'msg.gettingThere' };
    if (avgReaction <= 2.2) return { icon: '🐢', key: 'msg.slowDown' };
    return { icon: '💪', key: 'msg.practice' };
  };

  /* Best score per mode. Owned by Progress so that a single reset clears
     mastery and personal bests together. */
  Game.prototype.recordBest = function (score) {
    var scope = global.PFR.Progress.scope(this.settings.form);
    return scope ? scope.recordBest(this.settings.mode.key, score) : { value: score, isNew: false };
  };

  global.PFR = global.PFR || {};
  global.PFR.Game = Game;
})(window);
