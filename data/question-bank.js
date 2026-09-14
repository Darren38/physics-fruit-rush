/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  QUESTION BANK REGISTRY
   KSSM Physics, Forms 1-4 (Malaysia)
   ---------------------------------------------------------------------
   This file defines the bank format, the builder and the validators.

   v5: EVERY QUESTION BELONGS TO EXACTLY ONE FORM
   A question file does not say which Form it is for inside every row -
   it receives a registrar that is already bound to its Form:

       (function (G) {
         G('Matter', 'Density', [ ...rows... ]);
       })(window.PFR.Bank.form(1));

   so a whole file can only ever add Form 1 questions, and the Form is
   recorded on every question object. Ids are Form-scoped ("f1-17"), so
   adding a Form 2 question can never renumber Form 4.

   AUTHORING FORMAT (compact rows, expanded by build):

       [ difficulty, question, [answers...], explanation, why? ]

   * difficulty  'e' easy | 'm' medium | 'h' hard
   * answers     EXACTLY 4. THE FIRST ANSWER IS ALWAYS THE CORRECT ONE -
                 positions are shuffled at runtime.
   * explanation one short line. Shown on every mistake, always in Practice.
   * why         optional { 'wrong answer': 'the misconception it shows' }

   TRANSLATIONS
   English is the source. Each other language is an overlay, registered
   for ONE Form and keyed by that Form's English question text:

       (function (M) {
         M.topics({ 'Density': 'Ketumpatan' });
         M.add({ 'English question?': [ 'Soalan BM?', [answers in the SAME
                 order], 'penerangan', { 'jawapan salah BM': 'sebab' } ] });
       })(window.PFR.Bank.lang('ms', 1));

   Answers are matched by POSITION, so which fruit is correct and which
   misconception it carries never depend on the language. A translation
   is used only when complete - a question is never half one language.

   Read question text through view(q, lang), never from the fields.
   ===================================================================== */

(function (global) {
  'use strict';

  var RAW = [];     // { form, group, topic, rows }
  var DIFF = { e: 'easy', m: 'medium', h: 'hard' };
  var BASE = 'en';

  /* Readability limits, the same in every language and every Form. */
  var LIMITS = { question: 78, answer: 28, why: 78, explanation: 90 };

  /* Every syllabus topic needs at least this many questions, or a round
     on it would repeat itself within a minute. */
  var MIN_PER_TOPIC = 5;

  var TR = {};      // lang -> { topics: {}, clashes: [], forms: { n: { entries: {}, dupes: [] } } }

  var WORDY = /[A-Za-z]{3,}|\b(?:at|of|in|on|to|by|or|is|no|up)\b/i;
  var NUM = /\d+(?:[.,]\d+)*|[⁰¹²³⁴-⁹⁻]+/g;
  var ACRONYM = { SI: 1, EM: 1, TV: 1, TIR: 1, MRI: 1, LED: 1, UV: 1, IR: 1, AU: 1,
                  KSSM: 1, SPM: 1, II: 1, III: 1, IV: 1, CME: 1, GPS: 1, DNA: 1, ISS: 1,
                  GPE: 1, MEASAT: 1 };
  var ENGLISH_PROSE = /\b(?:the|is|are|of|and|to|in|for|with|that|this|it|by|from|not|you|your|when|which|what|how|why|an)\b/i;

  function own(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function Syl() { return global.PFR.Syllabus; }
  function validForm(n) { return !!(Syl() && own(Syl().data, n)); }

  function numbers(s) { return (String(s).match(NUM) || []).sort().join(' '); }
  function stressed(s) {
    var m = String(s).match(/\b[A-Z]{3,}\b/g) || [];
    for (var i = 0; i < m.length; i++) if (!ACRONYM[m[i]]) return true;
    return false;
  }
  function untidy(s) { return /^\s|\s$|\s{2}/.test(String(s)); }

  /* A translation must keep the English's numbers, its "?" and "..."
     blank, and a word stressed in CAPITALS - and must not be the English
     left in place. */
  function parity(where, what, en, tr, problems) {
    en = String(en); tr = String(tr);
    if (numbers(en) !== numbers(tr)) {
      problems.push(where + ' ' + what + ': numbers differ from English (' +
        (numbers(en) || 'none') + ' vs ' + (numbers(tr) || 'none') + ')');
    }
    if ((en.slice(-1) === '?') !== (tr.slice(-1) === '?')) problems.push(where + ' ' + what + ': only one language ends with "?"');
    if ((en.indexOf('...') !== -1) !== (tr.indexOf('...') !== -1)) problems.push(where + ' ' + what + ': the "..." blank is in only one language');
    if (stressed(en) && !stressed(tr)) problems.push(where + ' ' + what + ': English stresses a word in CAPITALS, the translation does not');
    if (en === tr && ENGLISH_PROSE.test(en)) problems.push(where + ' ' + what + ': identical to the English - not translated?');
    if (untidy(tr)) problems.push(where + ' ' + what + ': stray or doubled spaces');
  }

  /* ---------------------------------------------------------------
     Registration
     --------------------------------------------------------------- */
  function form(n) {
    return function G(group, topic, rows) {
      RAW.push({ form: n, group: group, topic: topic, rows: rows || [] });
    };
  }

  function lang(code, formN) {
    var box = TR[code] || (TR[code] = { topics: {}, clashes: [], forms: {} });
    var fb = box.forms[formN] || (box.forms[formN] = { entries: {}, dupes: [] });
    return {
      /* Topic display names are shared by every Form in one language, so
         "Heat" reads the same in Form 2 and Form 4. Two files naming the
         same topic differently is reported. */
      topics: function (map) {
        for (var k in map) {
          if (!own(map, k)) continue;
          if (own(box.topics, k) && box.topics[k] !== map[k]) box.clashes.push(k + ' = "' + box.topics[k] + '" or "' + map[k] + '"');
          box.topics[k] = map[k];
        }
      },
      add: function (map) {
        for (var k in map) {
          if (!own(map, k)) continue;
          if (own(fb.entries, k)) fb.dupes.push(k);
          fb.entries[k] = map[k];
        }
      }
    };
  }

  function whyByIndex(answers, why) {
    if (!why) return null;
    var out = null;
    for (var w in why) {
      if (!own(why, w)) continue;
      var i = answers.indexOf(w);
      if (i > 0) { out = out || {}; out[i] = why[w]; }
    }
    return out;
  }

  /* ---------------------------------------------------------------
     Build: compact rows -> question objects, each with its Form.
     --------------------------------------------------------------- */
  function build() {
    var out = [], seq = {};
    for (var i = 0; i < RAW.length; i++) {
      var block = RAW[i];
      for (var j = 0; j < block.rows.length; j++) {
        var r = block.rows[j];
        seq[block.form] = (seq[block.form] || 0) + 1;
        var q = {
          id: 'f' + block.form + '-' + seq[block.form],
          form: block.form,
          group: block.group,
          topic: block.topic,
          difficulty: DIFF[r[0]] || r[0],
          question: r[1],
          answers: (r[2] || []).slice(),
          correctAnswer: (r[2] || [])[0],
          explanation: r[3] || '',
          why: r[4] || null,
          tr: {}
        };
        q.whyIdx = whyByIndex(q.answers, q.why);

        for (var code in TR) {
          if (!own(TR, code)) continue;
          var fb = TR[code].forms[block.form];
          var e = fb && own(fb.entries, q.question) ? fb.entries[q.question] : null;
          if (!e) continue;
          var ans = (e[1] || []).slice();
          q.tr[code] = {
            question: e[0] || '', answers: ans, explanation: e[2] || '',
            whyRaw: e[3] || null, why: whyByIndex(ans, e[3] || null)
          };
        }
        out.push(q);
      }
    }
    return out;
  }

  /* The questions of ONE Form. The game only ever plays from this. */
  function forForm(questions, n) {
    var out = [];
    for (var i = 0; i < questions.length; i++) if (questions[i].form === n) out.push(questions[i]);
    return out;
  }

  function complete(q, code) {
    var t = q.tr && q.tr[code];
    if (!t || !t.question || !t.explanation) return false;
    if (!t.answers || t.answers.length !== q.answers.length) return false;
    for (var i = 0; i < t.answers.length; i++) if (!t.answers[i] && t.answers[i] !== 0) return false;
    return true;
  }

  function view(q, code) {
    var t = (code && code !== BASE && complete(q, code)) ? q.tr[code] : null;
    return {
      lang: t ? code : BASE,
      question: t ? t.question : q.question,
      answers: t ? t.answers : q.answers,
      explanation: t ? t.explanation : q.explanation,
      why: t ? t.why : q.whyIdx
    };
  }

  function topicName(name, code) {
    if (!code || code === BASE) return name;
    var box = TR[code];
    return box && own(box.topics, name) ? box.topics[name] : name;
  }

  function groups(questions) {
    var seen = {}, list = [];
    for (var i = 0; i < questions.length; i++) {
      var g = questions[i].group;
      if (!seen[g]) { seen[g] = true; list.push(g); }
    }
    return list;
  }

  function topics(questions) {
    var seen = {}, list = [];
    for (var i = 0; i < questions.length; i++) {
      var t = questions[i].topic;
      if (!seen[t]) { seen[t] = true; list.push(t); }
    }
    return list;
  }

  /* ---------------------------------------------------------------
     Validate the English source, including the Form relationship.
     --------------------------------------------------------------- */
  function validate(questions) {
    var problems = [], texts = {}, ids = {}, perTopic = {};
    var S = Syl();
    if (!S) return ['data/syllabus.js is not loaded - cannot check Forms and topics'];

    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var where = q.id + ' [F' + q.form + ' · ' + q.topic + '] "' + q.question + '"';

      if (ids[q.id]) problems.push(where + ' duplicate id');
      ids[q.id] = true;

      /* The Form relationship. */
      if (!validForm(q.form)) {
        problems.push(where + ' has no valid Form ("' + q.form + '")');
      } else if (S.topics(q.form).indexOf(q.topic) === -1) {
        problems.push(where + ' topic "' + q.topic + '" is not in the Form ' + q.form + ' syllabus');
      } else if (S.groupOf(q.form, q.topic) !== q.group) {
        problems.push(where + ' is filed under "' + q.group + '" but its topic belongs to "' + S.groupOf(q.form, q.topic) + '"');
      }
      var tk = q.form + '|' + q.topic;
      perTopic[tk] = (perTopic[tk] || 0) + 1;

      if (['easy', 'medium', 'hard'].indexOf(q.difficulty) === -1) problems.push(where + ' invalid difficulty "' + q.difficulty + '"');
      if (!q.explanation) problems.push(where + ' has no explanation');
      else if (q.explanation.length > LIMITS.explanation) problems.push(where + ' explanation is long (' + q.explanation.length + ' chars)');

      if (q.answers.length !== 4) problems.push(where + ' has ' + q.answers.length + ' answers - exactly 4 are required');
      if (!q.correctAnswer && q.correctAnswer !== 0) problems.push(where + ' has no correct answer');
      [q.question, q.explanation].concat(q.answers).forEach(function (txt) {
        if (untidy(txt)) problems.push(where + ' stray or doubled spaces in "' + txt + '"');
      });
      if (!q.question) problems.push(where + ' has no question text');
      else if (q.question.length > LIMITS.question) problems.push(where + ' question text is long (' + q.question.length + ' chars)');

      var seen = {};
      for (var k = 0; k < q.answers.length; k++) {
        var a = String(q.answers[k]).trim().toLowerCase();
        if (!a) problems.push(where + ' has an empty option');
        if (seen[a]) problems.push(where + ' duplicate option "' + q.answers[k] + '"');
        seen[a] = true;
        if (String(q.answers[k]).length > LIMITS.answer) problems.push(where + ' option too long: "' + q.answers[k] + '"');
      }

      if (q.why) {
        for (var w in q.why) {
          if (!own(q.why, w)) continue;
          if (q.answers.indexOf(w) === -1) problems.push(where + ' why-note for missing option "' + w + '"');
          else if (w === q.correctAnswer) problems.push(where + ' why-note attached to the CORRECT answer');
          if (String(q.why[w]).length > LIMITS.why) problems.push(where + ' why-note too long for "' + w + '"');
        }
      }

      /* Duplicate text is an error within a Form; two Forms may ask the
         same thing, each for their own class. */
      var key = q.form + '|' + String(q.question).trim().toLowerCase();
      if (texts[key]) problems.push(where + ' duplicates ' + texts[key] + ' in the same Form');
      texts[key] = q.id;
    }

    /* Every declared topic must actually have questions. */
    S.forms().forEach(function (f) {
      S.topics(f).forEach(function (t) {
        var n = perTopic[f + '|' + t] || 0;
        if (n < MIN_PER_TOPIC) problems.push('Form ' + f + ' topic "' + t + '" has ' + n + ' questions (minimum ' + MIN_PER_TOPIC + ')');
      });
    });
    return problems;
  }

  /* ---------------------------------------------------------------
     Validate one translation, Form by Form.
     --------------------------------------------------------------- */
  function validateLang(questions, code) {
    var problems = [];
    var box = TR[code];
    if (!box) return ['no translations registered for "' + code + '"'];
    var S = Syl();

    var known = {}, formsOfText = {}, texts = {};
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      (known[q.form] || (known[q.form] = {}))[q.question] = true;
      (formsOfText[q.question] || (formsOfText[q.question] = [])).push(q.form);

      var where = code + ' ' + q.id + ' [F' + q.form + ' · ' + q.topic + '] "' + q.question + '"';
      var t = q.tr[code];
      if (!t) { problems.push(where + ' has no translation'); continue; }

      if (!t.question) problems.push(where + ' translation has no question text');
      else {
        if (t.question.length > LIMITS.question) problems.push(where + ' translated question is long (' + t.question.length + ' chars): "' + t.question + '"');
        var tk = q.form + '|' + t.question.trim().toLowerCase();
        if (texts[tk]) problems.push(where + ' translated text duplicates ' + texts[tk]);
        texts[tk] = q.id;
      }
      if (!t.explanation) problems.push(where + ' translation has no explanation');
      else if (t.explanation.length > LIMITS.explanation) problems.push(where + ' translated explanation is long (' + t.explanation.length + ' chars)');
      if (t.question) parity(where, 'question', q.question, t.question, problems);
      if (t.explanation) parity(where, 'explanation', q.explanation, t.explanation, problems);

      if (!t.answers || t.answers.length !== q.answers.length) {
        problems.push(where + ' has ' + (t.answers ? t.answers.length : 0) + ' translated answers, expected ' + q.answers.length);
      } else {
        var seen = {};
        for (var k = 0; k < t.answers.length; k++) {
          var a = String(t.answers[k]);
          if (!a.replace(/\s+/g, '')) problems.push(where + ' empty translated option ' + k);
          if (untidy(a)) problems.push(where + ' stray or doubled spaces in option "' + a + '"');
          if (a.length > LIMITS.answer) problems.push(where + ' translated option too long (' + a.length + '): "' + a + '"');
          var low = a.replace(/^\s+|\s+$/g, '').toLowerCase();
          if (seen[low]) problems.push(where + ' duplicate translated option "' + a + '"');
          seen[low] = true;
          var en = String(q.answers[k]);
          if (!WORDY.test(en) && a !== en) problems.push(where + ' option ' + k + ' should stay "' + en + '" but is "' + a + '"');
        }
      }

      if (t.whyRaw) {
        for (var w in t.whyRaw) {
          if (!own(t.whyRaw, w)) continue;
          var wi = t.answers ? t.answers.indexOf(w) : -1;
          if (wi === -1) problems.push(where + ' translated why-note for missing option "' + w + '"');
          else if (wi === 0) problems.push(where + ' translated why-note attached to the CORRECT answer');
          if (String(t.whyRaw[w]).length > LIMITS.why) problems.push(where + ' translated why-note too long for "' + w + '"');
        }
      }
      if (q.whyIdx) {
        for (var idx in q.whyIdx) {
          if (!own(q.whyIdx, idx)) continue;
          if (!t.why || !t.why[idx]) problems.push(where + ' is missing the why-note for option ' + idx + ' ("' + q.answers[idx] + '")');
          else parity(where, 'why-note ' + idx, q.whyIdx[idx], t.why[idx], problems);
        }
      }
    }

    /* Orphans, Form by Form: a translation whose English is not a
       question OF THAT FORM - edited English, or filed in the wrong Form. */
    for (var f in box.forms) {
      if (!own(box.forms, f)) continue;
      var fn = parseInt(f, 10), fb = box.forms[f];
      if (!validForm(fn)) { problems.push(code + ' translations registered for unknown Form "' + f + '"'); continue; }
      for (var key in fb.entries) {
        if (!own(fb.entries, key) || (known[fn] && known[fn][key])) continue;
        var elsewhere = formsOfText[key];
        problems.push(code + ' Form ' + fn + ' orphan translation for "' + key + '"' +
          (elsewhere ? ' (that question belongs to Form ' + elsewhere.join(', ') + ')' : ' (English text changed or removed?)'));
      }
      for (var d = 0; d < fb.dupes.length; d++) problems.push(code + ' Form ' + fn + ' question translated twice: "' + fb.dupes[d] + '"');
    }

    for (var c = 0; c < box.clashes.length; c++) problems.push(code + ' topic named two ways: ' + box.clashes[c]);
    if (S) {
      S.forms().forEach(function (fm) {
        S.data[fm].forEach(function (u) {
          [u.group].concat(u.topics).forEach(function (name) {
            if (!own(box.topics, name)) problems.push(code + ' no name for Form ' + fm + ' topic "' + name + '"');
          });
        });
      });
    }
    return problems;
  }

  function coverage(questions, code) {
    var n = 0;
    for (var i = 0; i < questions.length; i++) if (complete(questions[i], code)) n++;
    return { translated: n, total: questions.length };
  }

  function languages() {
    var out = [BASE];
    for (var k in TR) if (own(TR, k)) out.push(k);
    return out;
  }

  function summary(questions) {
    var byForm = {}, byGroup = {}, byTopic = {}, byDiff = { easy: 0, medium: 0, hard: 0 }, withWhy = 0;
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      byForm[q.form] = (byForm[q.form] || 0) + 1;
      byGroup['F' + q.form + ' ' + q.group] = (byGroup['F' + q.form + ' ' + q.group] || 0) + 1;
      byTopic['F' + q.form + ' ' + q.topic] = (byTopic['F' + q.form + ' ' + q.topic] || 0) + 1;
      byDiff[q.difficulty] = (byDiff[q.difficulty] || 0) + 1;
      if (q.why) withWhy++;
    }
    return { total: questions.length, byForm: byForm, byGroup: byGroup, byTopic: byTopic,
             byDifficulty: byDiff, withWhyNotes: withWhy };
  }

  global.PFR = global.PFR || {};
  global.PFR.Bank = {
    LIMITS: LIMITS, MIN_PER_TOPIC: MIN_PER_TOPIC,
    form: form, lang: lang, build: build, forForm: forForm, view: view, topicName: topicName,
    groups: groups, topics: topics, languages: languages,
    validate: validate, validateLang: validateLang, coverage: coverage, summary: summary
  };
})(window);
