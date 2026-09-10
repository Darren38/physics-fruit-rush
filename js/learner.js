/* =====================================================================
   PHYSICS FRUIT RUSH v2  --  ADAPTIVE REVISION
   ---------------------------------------------------------------------
   New in v2. A deliberately small model of what the student knows.

   Each fine-grained TOPIC (not the coarse group) carries a mastery value
   in [0,1]. A correct answer moves it towards 1, a wrong or missed answer
   moves it towards 0, and the size of the move is fixed - no learning
   rates to tune, no matrices, no training. That is enough to do the one
   job that matters:

       "The game should give me more of what I keep getting wrong."

   Mastery is written to localStorage so it survives between sessions, and
   it drives three things:

       1. question selection weights
       2. the Strong / Revise lists on the results screen
       3. the practice retry queue's priority

   Everything degrades safely: if storage is unavailable the model still
   works for the current session, and if it is disabled the picker falls
   back to plain difficulty-weighted random.
   ===================================================================== */

(function (global) {
  'use strict';

  var CFG = global.PFR.CONFIG;

  function Learner() {
    this.topics = {};        // topic -> { m, right, wrong, seen }
    this.load();
  }

  Learner.prototype.entry = function (topic) {
    var t = this.topics[topic];
    if (!t) {
      t = this.topics[topic] = {
        m: CFG.adaptive.startMastery,
        right: 0, wrong: 0, seen: 0
      };
    }
    return t;
  };

  Learner.prototype.mastery = function (topic) {
    return this.entry(topic).m;
  };

  /* Record one answered question. `ok` is true only for a correct slice. */
  Learner.prototype.record = function (topic, ok) {
    var A = CFG.adaptive;
    var t = this.entry(topic);
    t.seen++;
    if (ok) { t.right++; t.m += (1 - t.m) * A.gainCorrect; }
    else { t.wrong++; t.m += (0 - t.m) * A.lossWrong; }
    t.m = Math.max(0, Math.min(1, t.m));
  };

  /* Selection weight for a topic: weak topics come up more often. */
  Learner.prototype.weight = function (topic) {
    var A = CFG.adaptive;
    if (!A.enabled) return 1;
    var t = this.topics[topic];
    /* A topic we have never seen sits at the neutral start value, which
       already gives it a mid weight - new material is not buried. */
    var m = t ? t.m : A.startMastery;
    return A.minWeight + (A.maxWeight - A.minWeight) * (1 - m);
  };

  /* Topics the student is reliably good at / reliably not. Both lists
     require a few attempts so one unlucky question cannot brand a topic. */
  Learner.prototype.report = function (onlyTopics) {
    var A = CFG.adaptive;
    var strong = [], weak = [];
    for (var name in this.topics) {
      if (!Object.prototype.hasOwnProperty.call(this.topics, name)) continue;
      if (onlyTopics && onlyTopics.indexOf(name) === -1) continue;
      var t = this.topics[name];
      if (t.seen < A.minAttempts) continue;
      var acc = t.right / Math.max(1, t.right + t.wrong);
      if (t.m >= A.strongAt) strong.push({ topic: name, mastery: t.m, acc: acc, seen: t.seen });
      else if (t.m <= A.weakAt) weak.push({ topic: name, mastery: t.m, acc: acc, seen: t.seen });
    }
    strong.sort(function (a, b) { return b.mastery - a.mastery; });
    weak.sort(function (a, b) { return a.mastery - b.mastery; });
    return { strong: strong, weak: weak };
  };

  /* Overall picture, used for the results headline. */
  Learner.prototype.overall = function () {
    var sum = 0, n = 0, seen = 0;
    for (var k in this.topics) {
      if (!Object.prototype.hasOwnProperty.call(this.topics, k)) continue;
      sum += this.topics[k].m; n++; seen += this.topics[k].seen;
    }
    return { mastery: n ? sum / n : CFG.adaptive.startMastery, topics: n, answered: seen };
  };

  /* ---------------------------------------------------------------
     Persistence. Never allowed to throw - a blocked or full store just
     means the model lives for this session only.
     --------------------------------------------------------------- */
  var STORE = 'mastery';

  Learner.prototype.load = function () {
    var data = global.PFR.Storage.getJSON(STORE, null);
    if (!data) return;
    for (var k in data) {
      if (!Object.prototype.hasOwnProperty.call(data, k)) continue;
      var d = data[k];
      if (d && typeof d.m === 'number' && isFinite(d.m)) {
        this.topics[k] = {
          m: Math.max(0, Math.min(1, d.m)),
          right: d.right | 0, wrong: d.wrong | 0, seen: d.seen | 0
        };
      }
    }
  };

  Learner.prototype.save = function () {
    global.PFR.Storage.setJSON(STORE, this.topics);
  };

  /* Wipes the in-memory model as well as the stored copy, so adaptive
     selection behaves like a brand-new student without a page reload. */
  Learner.prototype.reset = function () {
    this.topics = {};
    global.PFR.Storage.remove(STORE);
  };

  global.PFR = global.PFR || {};
  global.PFR.Learner = Learner;
})(window);
