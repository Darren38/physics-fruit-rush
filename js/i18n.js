/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  LANGUAGE (i18n)
   ---------------------------------------------------------------------
   New in v4. The one place that knows which language is on screen.

   THREE RULES THIS MODULE EXISTS TO ENFORCE

   1. No other file ever asks "which language is it?" in order to choose
      a string. Code asks for a KEY - t('fb.correct') - and gets text
      back. Adding a third language means adding lang/xx.js and one
      question overlay per subject under data/xx/. No code changes.

   2. Identifiers never change with language. Topic names, mode keys and
      answer identities stay canonical (English) internally, so mastery,
      personal bests and the no-repeat picker are SHARED across languages.
      A student who switches to BM keeps every bit of progress - knowing
      Physics does not reset because the labels changed.

   3. A missing string falls back to English, never to a blank or a raw
      key on a student's screen. audit() lists every missing key and every
      translation whose placeholders differ from the English.

   STRING SYNTAX (deliberately tiny)
     {name}              a value from params, else from setGlobals()
     {n|thing|things}    singular when n is 1, plural otherwise.
                         Bahasa Melayu does not inflect for number, so
                         ms.js simply writes '{n} soalan'.

   Numbers that also live in config.js (60 seconds, 5 lives, -50 points)
   are passed in through setGlobals() rather than typed into sentences,
   so the help text can never disagree with the rules actually in force.
   ===================================================================== */

(function (global) {
  'use strict';

  var PFR = global.PFR = global.PFR || {};

  var SUPPORTED = ['en', 'ms'];
  var DEFAULT = 'en';

  /* What a teacher might type in a shared link. "bm" is how every
     Malaysian refers to the language; "ms" is the ISO code. */
  var ALIASES = {
    bm: 'ms', malay: 'ms', melayu: 'ms', 'ms-my': 'ms', zsm: 'ms',
    bi: 'en', english: 'en', 'en-gb': 'en', 'en-us': 'en', 'en-my': 'en'
  };

  /* Used for case conversion only. */
  var LOCALE = { en: 'en-GB', ms: 'ms-MY' };

  var dicts = {};
  var globals = {};
  var listeners = [];
  var current = DEFAULT;
  var warned = {};

  function has(obj, k) { return Object.prototype.hasOwnProperty.call(obj, k); }

  function normalise(code) {
    if (code === null || code === undefined) return null;
    var c = String(code).toLowerCase().replace(/_/g, '-').replace(/^\s+|\s+$/g, '');
    if (has(ALIASES, c)) c = ALIASES[c];
    return SUPPORTED.indexOf(c) === -1 ? null : c;
  }

  function register(lang, map) {
    var d = dicts[lang] || (dicts[lang] = {});
    for (var k in map) if (has(map, k)) d[k] = map[k];
  }

  function raw(lang, key) {
    var d = dicts[lang];
    return d && has(d, key) ? d[key] : undefined;
  }

  var PLURAL = /\{(\w+)\|([^|{}]*)\|([^{}]*)\}/g;
  var PARAM = /\{(\w+)\}/g;

  function lookupValue(name, params) {
    if (params && has(params, name)) return params[name];
    if (has(globals, name)) return globals[name];
    return undefined;
  }

  function format(str, params) {
    return String(str)
      .replace(PLURAL, function (m, name, one, other) {
        return Number(lookupValue(name, params)) === 1 ? one : other;
      })
      .replace(PARAM, function (m, name) {
        var v = lookupValue(name, params);
        return v === undefined ? m : String(v);
      });
  }

  /* Translate in a SPECIFIC language - used for the "In BM / Dalam BI"
     line, which shows a term in the language that is not on screen. */
  function tIn(lang, key, params) {
    var s = raw(lang, key);
    if (s === undefined && lang !== DEFAULT) s = raw(DEFAULT, key);
    if (s === undefined) {
      if (!warned[key]) {
        warned[key] = true;
        if (global.console) global.console.warn('[i18n] missing key: ' + key);
      }
      return key;
    }
    return format(s, params);
  }

  function t(key, params) { return tIn(current, key, params); }

  /* 8420 -> "8,420" in BOTH languages. Comma grouping is what Malaysian
     students see on exam papers and price tags in BM and English alike.
     Not toLocaleString('ms-MY'), whose output varies between browsers. */
  function num(n) {
    var s = String(Math.round(Number(n) || 0));
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function upper(s, lang) {
    var code = lang || current;
    try { return String(s).toLocaleUpperCase(LOCALE[code] || code); }
    catch (e) { return String(s).toUpperCase(); }
  }

  /* Display name of a canonical topic or group name. */
  function topic(name, lang) {
    var Bank = PFR.Bank;
    return Bank && Bank.topicName ? Bank.topicName(name, lang || current) : name;
  }

  /* Fill every [data-i18n] element's text, and the aria-label / title of
     every [data-i18n-aria] / [data-i18n-title] element, under root. */
  function apply(root) {
    var doc = global.document;
    if (!doc) return;
    root = root || doc;
    var i, el, list;

    list = root.querySelectorAll('[data-i18n]');
    for (i = 0; i < list.length; i++) {
      el = list[i];
      el.textContent = t(el.getAttribute('data-i18n'));
    }
    list = root.querySelectorAll('[data-i18n-aria]');
    for (i = 0; i < list.length; i++) {
      el = list[i];
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    }
    list = root.querySelectorAll('[data-i18n-title]');
    for (i = 0; i < list.length; i++) {
      el = list[i];
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    }
  }

  function onChange(fn) { listeners.push(fn); }

  function set(lang, opts) {
    opts = opts || {};
    var code = normalise(lang);
    if (!code) return current;
    var changed = code !== current;
    current = code;

    var doc = global.document;
    /* Screen readers switch pronunciation on this attribute. */
    if (doc && doc.documentElement) doc.documentElement.setAttribute('lang', code);
    if (opts.persist !== false && PFR.Settings) PFR.Settings.set('lang', code);

    if (changed || opts.force) {
      apply();
      for (var i = 0; i < listeners.length; i++) {
        try { listeners[i](code); }
        catch (e) { if (global.console) global.console.error(e); }
      }
    }
    return current;
  }

  /* Which language the game opens in:

       1. ?lang=bm in the address. A teacher's shared link wins and is
          remembered, so the class stays in BM on later visits.
       2. Otherwise the student's saved choice.
       3. Otherwise English.

     The browser's own language is deliberately NOT consulted. On a shared
     classroom machine it describes whoever set the machine up, not the
     student in front of it, and a silent guess is harder to explain to a
     class than a predictable default with an obvious switch. */
  function init() {
    var fromUrl = null;
    try {
      var m = /[?&]lang=([^&#]*)/i.exec((global.location && global.location.search) || '');
      if (m) fromUrl = normalise(decodeURIComponent(m[1]));
    } catch (e) {}

    var saved = PFR.Settings ? normalise(PFR.Settings.get('lang', null)) : null;
    var code = fromUrl || saved || DEFAULT;
    set(code, { persist: !!fromUrl, force: true });
    return { lang: code, source: fromUrl ? 'url' : (saved ? 'saved' : 'default') };
  }

  /* The other language - the one NOT on screen. */
  function alt(lang) {
    var code = lang || current;
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (SUPPORTED[i] !== code) return SUPPORTED[i];
    }
    return code;
  }

  function setGlobals(map) {
    for (var k in map) if (has(map, k)) globals[k] = map[k];
  }

  /* ---------------------------------------------------------------
     Audit, for the QA page and the console self-check.
     Every English key must exist in every other language, be non-empty,
     and use exactly the same placeholders. A translation that drops {n}
     would silently show "kesilapan" with no number in front of it.
     --------------------------------------------------------------- */
  function tokens(str) {
    var out = {}, m;
    var re = /\{(\w+)(?:\|[^{}]*)?\}/g;
    while ((m = re.exec(String(str)))) out[m[1]] = true;
    return Object.keys(out).sort().join(',');
  }

  function audit() {
    var problems = [];
    var base = dicts[DEFAULT] || {};
    for (var s = 0; s < SUPPORTED.length; s++) {
      var lang = SUPPORTED[s];
      if (lang === DEFAULT) continue;
      var d = dicts[lang] || {};
      var k;
      for (k in base) {
        if (!has(base, k)) continue;
        if (!has(d, k)) { problems.push(lang + ': missing key "' + k + '"'); continue; }
        if (!String(d[k]).replace(/\s+/g, '')) problems.push(lang + ': empty value for "' + k + '"');
        var a = tokens(base[k]), b = tokens(d[k]);
        if (a !== b) problems.push(lang + ': placeholders differ in "' + k + '" (en {' + a + '} vs ' + lang + ' {' + b + '})');
        /* Identical is fine for pure punctuation or placeholders; an
           English sentence left untranslated is not. */
        if (base[k] === d[k] &&
            /\b(?:the|is|are|of|and|to|in|for|with|that|this|it|by|from|not|you|your|when|which|what|how|why|an)\b/i
              .test(String(base[k]).replace(/\{[^}]*\}/g, ''))) {
          problems.push(lang + ': "' + k + '" is identical to the English - not translated?');
        }
      }
      for (k in d) {
        if (has(d, k) && !has(base, k)) problems.push(lang + ': key "' + k + '" does not exist in English');
      }
    }
    return problems;
  }

  function keys(lang) { return Object.keys(dicts[lang || DEFAULT] || {}); }

  PFR.I18N = {
    SUPPORTED: SUPPORTED,
    DEFAULT: DEFAULT,
    register: register,
    t: t,
    tIn: tIn,
    num: num,
    upper: upper,
    topic: topic,
    apply: apply,
    set: set,
    get: function () { return current; },
    init: init,
    onChange: onChange,
    setGlobals: setGlobals,
    normalise: normalise,
    alt: alt,
    audit: audit,
    keys: keys
  };
})(window);
