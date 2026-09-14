/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  CONFIGURATION
   ---------------------------------------------------------------------
   Every tunable number lives here. Nothing in this file touches the DOM
   or the canvas, so gameplay balance can be re-tuned without reading a
   single line of engine code.

   v4: NO DISPLAY TEXT LIVES HERE ANY MORE. Mode names, speed names and
   their descriptions moved to lang/en.js and lang/ms.js, keyed by the
   `key` fields below ('mode.quick', 'speed.fast.blurb', ...). Sentences
   that quote a number from this file - "60 seconds, 5 lives" - read it
   from here at runtime, so re-tuning a rule can never leave the help
   text describing the old one.
   ===================================================================== */

(function (global) {
  'use strict';

  var CONFIG = {

    version: '5.0',

    /* v5: the Forms this build teaches. Each is its own learner profile -
       see storage.js - and its own syllabus - see data/syllabus.js. */
    forms: [1, 2, 3, 4],

    /* ---------------------------------------------------------------
       SPEED PRESETS
       These control how the playfield behaves, NOT how hard the physics
       questions are. A weak student can play hard questions slowly; a
       strong student can play easy questions at Insane.

       v2: bombs are no longer a flat per-preset count. They now ramp with
       the stage (see bombsByStage), so the first minute of a Fast round is
       clean and hazards arrive once the player has found their rhythm.
       --------------------------------------------------------------- */
    speeds: {
      relaxed: {
        key: 'relaxed',
        windowScale: 1.55,   // multiplies the per-question reaction window
        fruits: 3,           // answer fruits on screen (1 correct + distractors)
        bombPeak: 0,         // hazards once the stage ramp is fully wound up
        drift: 16,           // horizontal speed, px/s
        spin: 0.45,          // rotation speed multiplier
        stageRamp: false     // does the session get harder over time?
      },
      normal: {
        key: 'normal',
        windowScale: 1.00, fruits: 4, bombPeak: 1, drift: 34, spin: 0.9, stageRamp: true
      },
      fast: {
        key: 'fast',
        windowScale: 0.82, fruits: 4, bombPeak: 2, drift: 54, spin: 1.2, stageRamp: true
      },
      insane: {
        /* Shown as "Extreme" since v4 - "Insane" is not a word a school
           wants on its projector. The key is unchanged. */
        key: 'insane',
        windowScale: 0.66, fruits: 4, bombPeak: 2, drift: 74, spin: 1.6, stageRamp: true
      }
    },
    speedOrder: ['relaxed', 'normal', 'fast', 'insane'],

    /* Bombs appear only once the player is warmed up, and never more than
       the preset's peak. Index = stage - 1. */
    bombsByStage: [0, 0, 1, 1, 2],

    /* ---------------------------------------------------------------
       GAME MODES
       v2 gives every mode its own pressure source, so none of them feel
       like a re-skin of another:

         Quick     lives + a fixed clock   -> the default "just play"
         Time Rush the clock IS the score  -> correct answers buy time
         Survival  lives only, misses hurt -> endurance
         Topic     fixed set, one topic    -> targeted revision + mastery
         Practice  no pressure at all      -> learning, with retries

       LIVES AND `missCostsLife`
       Being WRONG is an error and always costs a life. Being TOO SLOW is a
       learning state, so outside Survival it costs points and the combo but
       not a life. Playtesting v1 showed that without this a slower student
       was ejected after about three questions.
       --------------------------------------------------------------- */
    modes: {
      quick: {
        key: 'quick',
        timed: true, duration: 60, lives: 5, missCostsLife: false,
        questionLimit: 0, explain: false, retryWrong: false
      },
      timerush: {
        key: 'timerush',
        timed: true, duration: 40, lives: 0, missCostsLife: false,
        questionLimit: 0, explain: false, retryWrong: false,
        timeBonus: 2.5,        // seconds added per correct answer
        timePenalty: 3.0,      // seconds lost for a wrong answer
        durationChoices: [30, 40, 60]
      },
      survival: {
        key: 'survival',
        timed: false, duration: 0, lives: 3, missCostsLife: true,
        questionLimit: 0, explain: false, retryWrong: false,
        stageEvery: 5          // ramps faster than the other modes
      },
      topic: {
        key: 'topic',
        timed: false, duration: 0, lives: 5, missCostsLife: false,
        questionLimit: 20, explain: false, retryWrong: false
      },
      practice: {
        key: 'practice',
        timed: false, duration: 0, lives: 0, missCostsLife: false,
        questionLimit: 0, explain: true, retryWrong: true,
        forceSpeed: 'relaxed'
      }
    },
    modeOrder: ['quick', 'timerush', 'survival', 'topic', 'practice'],

    /* ---------------------------------------------------------------
       REACTION WINDOWS  (seconds)
       The window is how long the answer fruits stay in play. It is
       derived, never random:

         window = base[difficulty]
                * speedPreset.windowScale
                * stageScale[stage]
                + readingAllowance(question, answers)

       Longer questions and longer answers automatically earn a little more
       thinking time. This is the rule that stops "harder" from ever
       meaning "unreadable".
       --------------------------------------------------------------- */
    baseWindow: { easy: 4.4, medium: 5.6, hard: 7.2 },
    minWindow: 2.6,            // v2: raised from 2.3 - see README balance notes
    maxWindow: 13.0,
    reading: {
      qCharsFree: 30,        // chars of question text that cost nothing
      qPerChar: 0.014,       // extra seconds per char beyond that
      qCap: 1.20,            // max extra from the question text
      aCharsFree: 7,         // chars of average answer length that are free
      aPerChar: 0.048,
      aCap: 0.90,
      formulaBonus: 0.45     // answers containing = / ÷ × need a beat longer
    },

    /* ---------------------------------------------------------------
       SESSION DIFFICULTY RAMP
       Stage advances every N answered questions. Each stage shortens the
       window a little AND shifts the question mix towards harder recall.

       v2 adds a guaranteed warm-up: the first `warmupQuestions` are always
       drawn easy, whatever the stage mix says, so nobody opens a round on a
       three-step calculation before they have found the controls.
       --------------------------------------------------------------- */
    questionsPerStage: 6,
    warmupQuestions: 2,
    maxStage: 5,
    stageScale: [1.15, 1.00, 0.93, 0.87, 0.82],
    stageMix: [
      { easy: 0.62, medium: 0.33, hard: 0.05 },
      { easy: 0.50, medium: 0.38, hard: 0.12 },
      { easy: 0.35, medium: 0.45, hard: 0.20 },
      { easy: 0.26, medium: 0.47, hard: 0.27 },
      { easy: 0.18, medium: 0.47, hard: 0.35 }
    ],

    /* ---------------------------------------------------------------
       ADAPTIVE REVISION
       A lightweight weighted picker, not a machine-learning system. Each
       topic carries a mastery score in [0,1]; questions from weak topics
       are more likely to be drawn. Mastery persists between sessions so
       the game remembers what a student keeps getting wrong.
       --------------------------------------------------------------- */
    adaptive: {
      enabled: true,
      /* Default question mix. 'adaptive' weights weak topics up; 'balanced'
         spreads evenly, which suits a teacher sweeping a whole topic in
         front of a class. Persisted as a preference. */
      defaultMix: 'adaptive',
      startMastery: 0.5,     // what we assume before we know anything
      gainCorrect: 0.16,     // mastery moves this fraction towards 1 on a hit
      lossWrong: 0.26,       // and this fraction towards 0 on a miss
      maxWeight: 3.0,        // a totally unlearned topic is 3x as likely
      minWeight: 0.55,       // a mastered topic still shows up sometimes
      recentAvoid: 4,        // never repeat within this many questions
      strongAt: 0.72,        // mastery above this reads as "Strong"
      weakAt: 0.45,          // below this reads as "Revise"
      minAttempts: 3         // topics need this many tries before we judge
    },

    /* ---------------------------------------------------------------
       SCORING
       Accuracy must beat speed. A correct answer is worth at least 100
       even if it is slow; the speed bonus tops out at 60. Guessing costs
       50 points AND a life, so random slicing loses badly.
       --------------------------------------------------------------- */
    score: {
      base: 100,
      speedMax: 60,          // full bonus only in the first ~30% of the window
      speedFullFrac: 0.30,
      difficultyBonus: { easy: 0, medium: 20, hard: 40 },
      comboStep: 0.10,       // +10% per combo level
      comboCap: 10,          // combo multiplier stops growing at x2.0
      wrongPenalty: 50,
      missPenalty: 25,
      bombPenalty: 40,
      perfectFrac: 0.22      // answered this fast -> "PERFECT!" callout
    },

    /* Combo tiers drive the HUD, the fruit aura and the audio. Their
       banner words are 'combo.0' .. 'combo.3' in lang/*.js. */
    comboTiers: [
      { at: 3,  color: '#7dd3fc' },
      { at: 5,  color: '#ffd166' },
      { at: 8,  color: '#ff9f45' },
      { at: 12, color: '#ff6b9d' }
    ],

    /* ---------------------------------------------------------------
       FEEDBACK TIMING (seconds)
       --------------------------------------------------------------- */
    feedback: {
      correct: 0.55,
      wrong: 1.15,
      miss: 1.15,
      explainExtra: 1.60,    // added in Practice Mode
      gap: 0.34              // must be >= flight.sweepTime, or the revealed
                             // answer pops out instead of fading away
    },

    /* ---------------------------------------------------------------
       FRUIT FLIGHT
       Each fruit is launched from just below the bottom edge on a real
       ballistic arc. Gravity is DERIVED from the required airtime and apex
       height, so a fruit is guaranteed to stay on screen and to stay in
       play for exactly as long as the question allows.

       Every answer draws its airtime from ONE shared range. Giving the
       correct fruit its own fixed value made it the last fruit still
       flying 32% of the time instead of 25% - a free hint for anyone
       willing to wait. The floor is above 1.0 so all answers stay
       sliceable for the whole reaction window.
       --------------------------------------------------------------- */
    flight: {
      apexMin: 0.66,         // apex height as a fraction of playfield height
      apexMax: 0.88,
      airtimeMin: 1.06,
      airtimeMax: 1.22,
      launchStagger: 0.18,   // total seconds spread across the wave
      bombDelay: 0.65,       // bombs join after the answers are readable
      sweepTime: 0.30        // fruits fade out this fast once resolved
    },

    /* ---------------------------------------------------------------
       JUICE  (game feel)
       Restraint matters more than volume here. Every value below exists
       to make a hit READ better, not to fill the screen. Anything that
       would sit on top of the answer text is deliberately short-lived.
       --------------------------------------------------------------- */
    juice: {
      hitStopCorrect: 0.055, // freeze-frame on a correct slice, seconds
      hitStopBomb: 0.10,
      shakeCorrect: 0.28,    // base shake, scaled up a little by combo
      shakeComboAdd: 0.03,   // per combo level, capped
      shakeMax: 0.85,
      shakeBomb: 1.0,
      shakeDecay: 3.4,
      flashDecay: 2.8,
      sliceFlashLife: 0.28,  // the bright line left along the cut
      juiceCount: 22,        // droplets per fruit
      juiceSpeed: 400,
      sparkCount: 10,        // fast white sparks on the cut line
      trailLife: 0.20,
      trailMax: 30,
      popupRise: -105,
      popupLife: 0.85,
      auraFrom: 3            // combo level at which fruit start to glow
    },

    /* ---------------------------------------------------------------
       INPUT
       Slicing is deliberately forgiving: a fat hit radius, tap-to-slice
       for touch screens, and number keys for keyboard users.
       --------------------------------------------------------------- */
    input: {
      hitPad: 1.18,          // hit radius = fruit radius x this
      tapMaxDist: 14,        // px of movement still counted as a tap
      tapMaxTime: 320,       // ms
      tapPad: 1.32           // taps are even more forgiving than swipes
    },

    /* ---------------------------------------------------------------
       VISUALS
       --------------------------------------------------------------- */
    view: {
      radiusMinFrac: 0.090,  // of playfield width
      radiusMaxFrac: 0.175,  // of playfield height
      radiusMin: 34,
      radiusMax: 96,
      particleCap: 460,
      dprCap: 2
    },

    /* Each version keeps its own storage namespace so the versions can sit
       side by side without one overwriting another's progress. Reset only
       ever removes keys carrying this prefix - never localStorage.clear(). */
    storageKey: 'physics-fruit-rush.v5',

    /* ---------------------------------------------------------------
       CUSTOM FRUIT SPEED  (v5)
       A percentage of Normal pace. 100 = Normal, 150 = about Extreme,
       60 = a little calmer than Relaxed. Deliberately NOT a gravity or
       window value: those are implementation details, and the only thing
       a student should control is "how fast does it feel".

       The bounds are the safety limits. Even at 150 % with the session
       ramp fully wound up, the reaction window stays at or above
       minWindow; at 60 % it never exceeds maxWindow.
       --------------------------------------------------------------- */
    customSpeed: { min: 60, max: 150, step: 5, def: 100 }
  };

  /* -----------------------------------------------------------------
     SPEED RESOLUTION
     Every speed choice - a preset key or 'custom' + a percentage -
     becomes one preset object here, so the game and the settings
     readout can never disagree about what "115 %" means. Invalid input
     (NaN, text, out of range) is clamped here, before anything reaches
     the physics.
     ----------------------------------------------------------------- */
  var CS = CONFIG.customSpeed;

  function clampPct(v) {
    var n = Number(v);
    if (!isFinite(n)) return CS.def;
    n = Math.round(n / CS.step) * CS.step;
    return Math.max(CS.min, Math.min(CS.max, n));
  }

  var Speed = {
    clamp: clampPct,

    isKey: function (k) {
      return k === 'custom' || Object.prototype.hasOwnProperty.call(CONFIG.speeds, k);
    },

    /* Custom = Normal's rules (fruit count, bombs, stage ramp) at a
       chosen pace: the reaction window scales by 100/pct, drift and spin
       scale by pct/100. */
    resolve: function (key, pct) {
      if (key !== 'custom') {
        /* Own keys only: a hand-edited "constructor" must not come back
           as a function and reach the engine as a preset. */
        return Object.prototype.hasOwnProperty.call(CONFIG.speeds, key) ? CONFIG.speeds[key] : CONFIG.speeds.normal;
      }
      var p = clampPct(pct), N = CONFIG.speeds.normal, f = p / 100;
      return {
        key: 'custom', pct: p,
        windowScale: 1 / f, fruits: N.fruits, bombPeak: N.bombPeak,
        drift: N.drift * f, spin: N.spin * f, stageRamp: N.stageRamp
      };
    },

    /* The "about 4.4 s to answer an easy question" readout. */
    thinkTime: function (pct) {
      var w = CONFIG.baseWindow.easy / (clampPct(pct) / 100);
      return Math.max(CONFIG.minWindow, Math.min(CONFIG.maxWindow, w));
    },

    /* Where each named preset sits on the same scale, for the slider. */
    presetPct: function (key) {
      var p = Object.prototype.hasOwnProperty.call(CONFIG.speeds, key) ? CONFIG.speeds[key] : null;
      return p ? Math.round(100 / p.windowScale) : CS.def;
    },

    /* What ANY speed choice means to a student - its pace as a percentage
       of Normal and the seconds it gives for an easy question - so a
       preset can be compared with Custom on the same scale. Presets use
       their exact window scale, so the readout matches the game. */
    describe: function (key, pct) {
      if (key === 'custom') {
        var c = clampPct(pct);
        return { key: 'custom', pct: c, secs: Speed.thinkTime(c) };
      }
      var p = Object.prototype.hasOwnProperty.call(CONFIG.speeds, key) ? CONFIG.speeds[key] : CONFIG.speeds.normal;
      var w = CONFIG.baseWindow.easy * p.windowScale;
      return {
        key: p.key, pct: Math.round(100 / p.windowScale),
        secs: Math.max(CONFIG.minWindow, Math.min(CONFIG.maxWindow, w))
      };
    }
  };

  global.PFR = global.PFR || {};
  global.PFR.CONFIG = CONFIG;
  global.PFR.Speed = Speed;
})(window);
