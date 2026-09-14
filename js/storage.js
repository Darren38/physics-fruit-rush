/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  STORAGE, SETTINGS AND PER-FORM PROGRESS
   ---------------------------------------------------------------------
   Every persisted value the game owns goes through here (since v3).

   v5: A FORM IS A SEPARATE LEARNER PROFILE
   Everything stored falls into one of three families:

       settings.*    language, Form, sound, question mix, speed,
                     custom speed               -> global, never reset
       form1.* ...   mastery, best scores       -> ONE Form only
       form4.*
       meta.*        bookkeeping (e.g. the V4 migration record)

   Progress is only ever reached through Progress.scope(form), which
   prefixes every key with "form<N>.". There is no API that reads or
   writes progress without naming a Form, so Form 1 mastery cannot leak
   into Form 2 by accident - the separation is structural, not a habit.

   Speed and language are settings, not progress: they describe how the
   student likes to play, so switching Form never changes them.

   RULES THIS MODULE ENFORCES
   1. Never localStorage.clear(). Reset removes only keys under the
      current Form's prefix, inside this version's namespace.
   2. Nothing in here throws. Storage may be unavailable (private
      window, locked-down school browser, full quota); the game then
      runs perfectly and forgets between sessions.
   3. Migration from Version 4 only ever COPIES. Version 4's keys are
      read, validated and left exactly as they were.
   ===================================================================== */

(function (global) {
  'use strict';

  var CFG = global.PFR.CONFIG;
  var PREFIX = CFG.storageKey + '.';      // "physics-fruit-rush.v5."
  var SETTINGS = 'settings.';
  var FORMS = CFG.forms;                  // [1, 2, 3, 4]

  /* ---------------------------------------------------------------
     Safe, namespaced localStorage
     --------------------------------------------------------------- */
  var Storage = {

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

    /* Anything that is not a JSON object - a hand-edited value, a
       truncated write, another version's format - reads as `fallback`. */
    getJSON: function (suffix, fallback) {
      var raw = this.get(suffix, null);
      if (raw === null) return fallback;
      try {
        var parsed = JSON.parse(raw);
        return (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) ? parsed : fallback;
      } catch (e) { return fallback; }
    },

    setJSON: function (suffix, value) {
      try { return this.set(suffix, JSON.stringify(value)); }
      catch (e) { return false; }
    },

    remove: function (suffix) {
      try { global.localStorage.removeItem(PREFIX + suffix); } catch (e) {}
    },

    /* Every key in THIS version's namespace, optionally only those under
       a sub-prefix. Nothing outside the namespace is ever listed. */
    ownKeys: function (sub) {
      var want = PREFIX + (sub || ''), out = [];
      try {
        for (var i = 0; i < global.localStorage.length; i++) {
          var k = global.localStorage.key(i);
          if (k && k.indexOf(want) === 0) out.push(k);
        }
      } catch (e) {}
      return out;
    },

    /* Remove every key under PREFIX + sub - and only those. */
    clearPrefix: function (sub) {
      if (!sub) return [];                 // never "everything"
      var keys = this.ownKeys(sub), removed = [];
      for (var i = 0; i < keys.length; i++) {
        try { global.localStorage.removeItem(keys[i]); removed.push(keys[i]); } catch (e) {}
      }
      return removed;
    }
  };

  function validForm(f) {
    var n = parseInt(f, 10);
    return FORMS.indexOf(n) === -1 ? null : n;
  }

  /* ---------------------------------------------------------------
     Settings - global, kept across every reset. Plain strings.
     --------------------------------------------------------------- */
  var Settings = {
    get: function (name, fallback) { return Storage.get(SETTINGS + name, fallback); },
    set: function (name, value) { return Storage.set(SETTINGS + name, value); },
    form: function () { return validForm(this.get('form', null)); }
  };

  /* ---------------------------------------------------------------
     Progress for ONE Form. Every key it touches starts "form<N>.".
     --------------------------------------------------------------- */
  function Scope(form) {
    this.form = form;
    this.base = 'form' + form + '.';
  }

  Scope.prototype.get = function (k, fb) { return Storage.get(this.base + k, fb); };
  Scope.prototype.set = function (k, v) { return Storage.set(this.base + k, v); };
  Scope.prototype.getJSON = function (k, fb) { return Storage.getJSON(this.base + k, fb); };
  Scope.prototype.setJSON = function (k, v) { return Storage.setJSON(this.base + k, v); };
  Scope.prototype.remove = function (k) { Storage.remove(this.base + k); };

  Scope.prototype.bestFor = function (modeKey) {
    var n = parseInt(this.get('best.' + modeKey, '0'), 10);
    return isFinite(n) && n > 0 ? n : 0;
  };

  /* Returns { value, isNew } so the results screen can celebrate. */
  Scope.prototype.recordBest = function (modeKey, score) {
    var prev = this.bestFor(modeKey);
    var s = Math.max(0, Math.round(Number(score) || 0));
    var isNew = s > prev;
    if (isNew) this.set('best.' + modeKey, s);
    return { value: Math.max(prev, s), isNew: isNew };
  };

  Scope.prototype.anyBest = function () {
    for (var i = 0; i < CFG.modeOrder.length; i++) {
      if (this.bestFor(CFG.modeOrder[i]) > 0) return true;
    }
    return false;
  };

  /* Reset THIS Form's progress: its mastery and its best scores. Other
     Forms and every setting are untouched. The learner is reset in
     memory too, so selection behaves like a new student at once. */
  Scope.prototype.reset = function (learner) {
    var removed = Storage.clearPrefix(this.base);
    if (learner) learner.reset();
    return { form: this.form, removedKeys: removed.length, storageAvailable: Storage.available() };
  };

  var scopes = {};
  var Progress = {
    forms: FORMS.slice(),
    validForm: validForm,
    /* The only way to reach progress. An invalid Form is refused, not
       quietly mapped to some default Form's data. */
    scope: function (form) {
      var f = validForm(form);
      if (!f) return null;
      return scopes[f] || (scopes[f] = new Scope(f));
    }
  };

  /* ---------------------------------------------------------------
     One-time, copy-only migration from Version 4.

     Version 4 was Form 4 only, under "physics-fruit-rush.v4.". Its
     mastery and best scores become the starting point of Version 5's
     Form 4 profile, and its language / sound / mix become the settings.

     Safeguards:
       * runs once (meta.migratedV4) and never when V5 Form 4 data exists;
       * every value is validated: mastery only for topics that exist in
         the Form 4 syllabus, numbers finite and clamped, bests positive
         integers, settings only from their allowed values;
       * the write is read back and checked before the migration is
         marked done - a failed write leaves it to be retried next time;
       * Version 4's keys are only ever READ. Version 4 keeps working.
     --------------------------------------------------------------- */
  var ALLOWED = { lang: ['en', 'ms'], sound: ['on', 'off'], mix: ['adaptive', 'balanced'] };

  function readV4(k) {
    try { return global.localStorage.getItem(Migration.source + k); } catch (e) { return null; }
  }

  var Migration = {
    /* Where Version 4 kept its data. Only tools/qa.html points this
       somewhere else, so its tests never read a real student's keys. */
    source: 'physics-fruit-rush.v4.',

    run: function (form4Topics) {
      var rep = { ran: false, topics: 0, bests: 0, settings: 0, reason: '' };
      try {
        if (!Storage.available()) { rep.reason = 'storage unavailable'; return rep; }
        if (Storage.get('meta.migratedV4', null) !== null) { rep.reason = 'already migrated'; return rep; }

        var target = Progress.scope(4);
        var valid = {};
        (form4Topics || []).forEach(function (t) { valid[t] = true; });

        if (Storage.ownKeys('form4.').length === 0) {
          var raw = readV4('mastery'), data = null;
          if (raw) { try { data = JSON.parse(raw); } catch (e) { data = null; } }
          var clean = {};
          if (data && typeof data === 'object' && !Array.isArray(data)) {
            for (var t in data) {
              if (!Object.prototype.hasOwnProperty.call(data, t) || !valid[t]) continue;
              var d = data[t];
              if (!d || typeof d.m !== 'number' || !isFinite(d.m)) continue;
              clean[t] = {
                m: Math.max(0, Math.min(1, d.m)),
                right: Math.max(0, d.right | 0), wrong: Math.max(0, d.wrong | 0), seen: Math.max(0, d.seen | 0)
              };
              rep.topics++;
            }
          }
          if (rep.topics) {
            if (!target.setJSON('mastery', clean)) throw new Error('could not write Form 4 mastery');
            var back = target.getJSON('mastery', null);
            if (!back || Object.keys(back).length !== rep.topics) throw new Error('Form 4 mastery did not read back');
          }
          for (var i = 0; i < CFG.modeOrder.length; i++) {
            var mk = CFG.modeOrder[i];
            var b = parseInt(readV4('best.' + mk), 10);
            if (isFinite(b) && b > 0 && b < 10000000) {
              if (!target.set('best.' + mk, b)) throw new Error('could not write a best score');
              rep.bests++;
            }
          }
        }

        for (var name in ALLOWED) {
          if (!Object.prototype.hasOwnProperty.call(ALLOWED, name)) continue;
          if (Settings.get(name, null) !== null) continue;       // V5 choice wins
          var v = readV4('settings.' + name);
          if (v !== null && ALLOWED[name].indexOf(v) !== -1 && Settings.set(name, v)) rep.settings++;
        }

        /* A returning Form 4 student lands back in Form 4. */
        if ((rep.topics || rep.bests) && Settings.form() === null) Settings.set('form', '4');

        Storage.set('meta.migratedV4', JSON.stringify({
          at: new Date().toISOString(), topics: rep.topics, bests: rep.bests, settings: rep.settings
        }));
        rep.ran = true;
      } catch (e) {
        rep.reason = 'failed safely: ' + e.message;       // retried next load
      }
      return rep;
    }
  };

  global.PFR = global.PFR || {};
  global.PFR.Storage = Storage;
  global.PFR.Settings = Settings;
  global.PFR.Progress = Progress;
  global.PFR.Migration = Migration;
})(window);
