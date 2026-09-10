/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  STORAGE, SETTINGS AND PROGRESS
   ---------------------------------------------------------------------
   New in v3. Every persisted value the game owns goes through here.

   In v2 two different modules wrote to localStorage independently:
   learner.js kept topic mastery, game.js kept best scores, and each had
   its own try/catch. That is exactly the shape that makes a "reset
   everything" button unreliable - a new feature saves a new key and
   nobody remembers to clear it.

   So there is ONE owner of persistence, and one definition of what
   "reset my progress" means.

   v4: SETTINGS ARE NOT PROGRESS
   Everything stored falls into one of two families:

       progress   mastery, best scores          -> Reset Progress clears
       settings   language, sound, question mix -> Reset Progress KEEPS

   v3 cleared both. That contradicted its own dialog, which only promised
   to erase "mastery, question history and saved best scores" - and with a
   language setting it would have been worse: a BM student who reset their
   progress would be thrown back into English. Settings now live under
   their own prefix, and reset skips that prefix by construction.

   TWO RULES THIS MODULE EXISTS TO ENFORCE

   1. Never call localStorage.clear(). It would wipe unrelated sites'
      data on a shared school machine. Every key we write is prefixed
      with the version namespace and reset only ever removes keys
      carrying that prefix.

   2. Storage may fail at any moment - a private window, a locked-down
      school browser, a full quota. Nothing in here is allowed to throw;
      when storage is unavailable the game runs perfectly and simply
      forgets between sessions.
   ===================================================================== */

(function (global) {
  'use strict';

  var CFG = global.PFR.CONFIG;
  var PREFIX = CFG.storageKey + '.';
  var SETTINGS = 'settings.';     // everything below this survives a reset

  /* ---------------------------------------------------------------
     Safe, namespaced localStorage
     --------------------------------------------------------------- */
  var Storage = {

    /* Is persistence usable at all? Probed once, lazily. */
    available: function () {
      if (this._ok === undefined) {
        try {
          var probe = PREFIX + '__probe';
          global.localStorage.setItem(probe, '1');
          global.localStorage.removeItem(probe);
          this._ok = true;
        } catch (e) {
          this._ok = false;
        }
      }
      return this._ok;
    },

    key: function (suffix) { return PREFIX + suffix; },

    get: function (suffix, fallback) {
      try {
        var v = global.localStorage.getItem(PREFIX + suffix);
        return v === null ? fallback : v;
      } catch (e) { return fallback; }
    },

    set: function (suffix, value) {
      try { global.localStorage.setItem(PREFIX + suffix, String(value)); return true; }
      catch (e) { return false; }
    },

    getJSON: function (suffix, fallback) {
      var raw = this.get(suffix, null);
      if (raw === null) return fallback;
      try {
        var parsed = JSON.parse(raw);
        return (parsed && typeof parsed === 'object') ? parsed : fallback;
      } catch (e) { return fallback; }
    },

    setJSON: function (suffix, value) {
      try { return this.set(suffix, JSON.stringify(value)); }
      catch (e) { return false; }
    },

    remove: function (suffix) {
      try { global.localStorage.removeItem(PREFIX + suffix); } catch (e) {}
    },

    /* Every key currently stored that belongs to THIS version of the
       game. Nothing outside the namespace is ever listed, which is what
       makes the reset safe. */
    ownKeys: function () {
      var out = [];
      try {
        for (var i = 0; i < global.localStorage.length; i++) {
          var k = global.localStorage.key(i);
          if (k && k.indexOf(PREFIX) === 0) out.push(k);
        }
      } catch (e) {}
      return out;
    },

    /* Remove every key in our namespace - and only those - except keys
       under any of the `keep` sub-prefixes. Returns the removed keys. */
    clearNamespace: function (keep) {
      var keys = this.ownKeys(), removed = [];
      keep = keep || [];
      for (var i = 0; i < keys.length; i++) {
        var spared = false;
        for (var j = 0; j < keep.length; j++) {
          if (keys[i].indexOf(PREFIX + keep[j]) === 0) { spared = true; break; }
        }
        if (spared) continue;
        try { global.localStorage.removeItem(keys[i]); removed.push(keys[i]); } catch (e) {}
      }
      return removed;
    }
  };

  /* ---------------------------------------------------------------
     Settings - how this student likes the game to behave.
     Kept across Reset Progress. Values are plain strings.
     --------------------------------------------------------------- */
  var Settings = {
    get: function (name, fallback) { return Storage.get(SETTINGS + name, fallback); },
    set: function (name, value) { return Storage.set(SETTINGS + name, value); }
  };

  /* ---------------------------------------------------------------
     Progress - the game's view of "what this student has done"
     --------------------------------------------------------------- */
  var Progress = {

    /* --- personal bests, per game mode --- */
    bestFor: function (modeKey) {
      var n = parseInt(Storage.get('best.' + modeKey, '0'), 10);
      return isFinite(n) && n > 0 ? n : 0;
    },

    /* Returns { value, isNew } so the results screen can celebrate. */
    recordBest: function (modeKey, score) {
      var prev = this.bestFor(modeKey);
      var isNew = score > prev;
      if (isNew) Storage.set('best.' + modeKey, score);
      return { value: Math.max(prev, score), isNew: isNew };
    },

    anyBest: function () {
      var order = CFG.modeOrder;
      for (var i = 0; i < order.length; i++) {
        if (this.bestFor(order[i]) > 0) return true;
      }
      return false;
    },

    /* --- the one and only definition of a full reset ---
       Clears learner mastery and every personal best belonging to this
       version. Settings survive. `learner` is reset in memory too, so
       question selection immediately behaves like a brand-new student
       without needing a page reload. */
    resetAll: function (learner) {
      var removed = Storage.clearNamespace([SETTINGS]);
      if (learner) learner.reset();          // in-memory model + its own key
      return {
        removedKeys: removed.length,
        storageAvailable: Storage.available()
      };
    },

    /* Has this student done anything worth showing? */
    hasData: function (learner) {
      if (learner && learner.overall().answered > 0) return true;
      return this.anyBest();
    }
  };

  global.PFR = global.PFR || {};
  global.PFR.Storage = Storage;
  global.PFR.Settings = Settings;
  global.PFR.Progress = Progress;
})(window);
