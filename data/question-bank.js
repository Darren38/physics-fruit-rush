/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  QUESTION BANK REGISTRY
   KSSM Form 4 Physics (Malaysia)
   ---------------------------------------------------------------------
   This file defines the bank format, the builder and the self-validator.
   The questions themselves live in the three subject files, loaded AFTER
   this one:

       data/questions-mechanics.js
       data/questions-heat-waves.js
       data/questions-light.js

   AUTHORING FORMAT (compact rows, expanded into full objects by build):

       [ difficulty, question, [answers...], explanation, why? ]

   * difficulty  'e' = easy | 'm' = medium | 'h' = hard
   * answers     THE FIRST ANSWER IS ALWAYS THE CORRECT ONE.
                 The game shuffles answer order at runtime, so an author
                 never has to think about position. Give exactly 4.
   * explanation ONE short line, under ~60 characters. Shown whenever the
                 student gets it wrong, and always in Practice Mode.
   * why         OPTIONAL. A map from a WRONG answer to the misconception
                 it represents:

                     { 'joule': 'That is the unit of energy, not force.' }

   ---------------------------------------------------------------------
   TRANSLATIONS  (new in v4)

   English is the source. Each other language is an OVERLAY in its own
   folder - data/ms/ for Bahasa Melayu - keyed by the English question
   text, the way gettext keys by source string:

       'SI unit of force?': [
         'Unit SI bagi daya?',                          // question
         ['newton', 'joule', 'watt', 'pascal'],         // SAME ORDER as English
         'Daya ialah kuantiti terbitan: 1 N = 1 kg m s⁻².',
         { 'joule': 'Joule ialah unit tenaga.' }         // why, keyed by BM text
       ]

   Why key by the English text rather than by position or by id?
   * Reordering or inserting English questions cannot misalign anything.
   * If someone edits an English question, its translation becomes an
     "orphan" and validateLang() says so - instead of a stale BM question
     silently sitting under a changed English one.
   * A teacher reviewing the BM file sees the English right beside it.

   Answers are matched by POSITION, so everything the game tracks about an
   answer (which one is correct, which misconception it carries) is
   language-neutral. A translation is used only when it is complete; a
   question is never shown half in one language and half in another.

   Every question object produced by build() looks like:

       { id, group, topic, difficulty,
         question, answers, correctAnswer, explanation, why,   (English)
         whyIdx: { answerIndex: note },
         tr: { ms: { question, answers, explanation, why: {index: note} } } }

   Read question text through view(q, lang), never from the fields.
   ===================================================================== */

(function (global) {
  'use strict';

  var RAW = [];
  var DIFF = { e: 'easy', m: 'medium', h: 'hard' };
  var BASE = 'en';

  /* Readability limits, the same in every language. The fruit label can
     wrap to three lines and shrink, but past these lengths a phone screen
     turns into a wall of text. A translation that cannot fit is a signal
     to rephrase, not to raise the limit. */
  var LIMITS = { question: 78, answer: 28, why: 78, explanation: 90 };

  var TR = {};   // lang -> { topics: {name: display}, entries: {enQuestion: row}, dupes: [] }

  /* An answer containing real words is expected to be translated. One made
     only of numbers, units and symbols ("10 000 J", "p = mv", "N kg") must
     be copied exactly. The short-word list catches "At 2F" and "½ of",
     which have no three-letter word but are still English. */
  var WORDY = /[A-Za-z]{3,}|\b(?:at|of|in|on|to|by|or|is|no|up)\b/i;

  function own(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }

  /* ---------------------------------------------------------------
     Parity between a translation and its English source.
     --------------------------------------------------------------- */

  /* Digits and superscripts. "10 000" gives two tokens in both languages,
     so spacing conventions compare equal; a changed value does not. */
  var NUM = /\d+(?:[.,]\d+)*|[\u2070\u00b9\u00b2\u00b3\u2074-\u2079\u207b]+/g;

  /* Capitalised words that are names, not stress. */
  var ACRONYM = { SI: 1, EM: 1, TV: 1, TIR: 1, MRI: 1, LED: 1, UV: 1, IR: 1, AU: 1,
                  KSSM: 1, SPM: 1, II: 1, III: 1, IV: 1 };

  function numbers(s) { return (String(s).match(NUM) || []).sort().join(' '); }

  function stressed(s) {
    var m = String(s).match(/\b[A-Z]{3,}\b/g) || [];
    for (var i = 0; i < m.length; i++) if (!ACRONYM[m[i]]) return true;
    return false;
  }

  function untidy(s) { return /^\s|\s$|\s{2}/.test(String(s)); }

  var ENGLISH_PROSE = /\b(?:the|is|are|of|and|to|in|for|with|that|this|it|by|from|not|you|your|when|which|what|how|why|an)\b/i;

  function parity(where, what, en, tr, problems) {
    en = String(en); tr = String(tr);
    /* A calculation question whose BM says "5 kg" where the English says
       "2 kg" is a wrong question with a right-looking answer. */
    if (numbers(en) !== numbers(tr)) {
      problems.push(where + ' ' + what + ': numbers differ from English (' +
        (numbers(en) || 'none') + ' vs ' + (numbers(tr) || 'none') + ')');
    }
    if ((en.slice(-1) === '?') !== (tr.slice(-1) === '?')) {
      problems.push(where + ' ' + what + ': only one language ends with "?"');
    }
    if ((en.indexOf('...') !== -1) !== (tr.indexOf('...') !== -1)) {
      problems.push(where + ' ' + what + ': the "..." blank is in only one language');
    }
    /* "Which is a BASE quantity?" - the capitals ARE the question. */
    if (stressed(en) && !stressed(tr)) {
      problems.push(where + ' ' + what + ': English stresses a word in CAPITALS, the translation does not');
    }
    /* Identical text is fine for "mega = 10⁶, kilo = 10³" - the same in
       both languages - but not for an English sentence left in place.
       English prose gives itself away through its small words. */
    if (en === tr && ENGLISH_PROSE.test(en)) {
      problems.push(where + ' ' + what + ': identical to the English - not translated?');
    }
    if (untidy(tr)) problems.push(where + ' ' + what + ': stray or doubled spaces');
  }

  /* Register one topic's worth of rows. */
  function G(group, topic, rows) {
    RAW.push({ group: group, topic: topic, rows: rows });
  }

  /* The registrar a translation file receives:
       (function (M) { M.topics({...}); M.add({...}); })(PFR.Bank.lang('ms')); */
  function lang(code) {
    var box = TR[code] || (TR[code] = { topics: {}, entries: {}, dupes: [] });
    return {
      topics: function (map) {
        for (var k in map) if (own(map, k)) box.topics[k] = map[k];
      },
      add: function (map) {
        for (var k in map) {
          if (!own(map, k)) continue;
          if (own(box.entries, k)) box.dupes.push(k);
          box.entries[k] = map[k];
        }
      }
    };
  }

  /* { 'wrong answer text': note } -> { index: note }. Index 0 is the
     correct answer and never carries a note. */
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

  /* Expand the compact rows into full question objects. */
  function build() {
    var out = [];
    var id = 1;
    for (var i = 0; i < RAW.length; i++) {
      var block = RAW[i];
      for (var j = 0; j < block.rows.length; j++) {
        var r = block.rows[j];
        var q = {
          id: id++,
          group: block.group,
          topic: block.topic,
          difficulty: DIFF[r[0]] || 'medium',
          question: r[1],
          answers: r[2].slice(),
          correctAnswer: r[2][0],
          explanation: r[3] || '',
          why: r[4] || null,
          tr: {}
        };
        q.whyIdx = whyByIndex(q.answers, q.why);

        for (var code in TR) {
          if (!own(TR, code)) continue;
          var e = TR[code].entries[q.question];
          if (!e) continue;
          var ans = (e[1] || []).slice();
          q.tr[code] = {
            question: e[0] || '',
            answers: ans,
            explanation: e[2] || '',
            whyRaw: e[3] || null,
            why: whyByIndex(ans, e[3] || null)
          };
        }
        out.push(q);
      }
    }
    return out;
  }

  /* A translation is usable only when nothing in it is missing. */
  function complete(q, code) {
    var t = q.tr && q.tr[code];
    if (!t || !t.question || !t.explanation) return false;
    if (!t.answers || t.answers.length !== q.answers.length) return false;
    for (var i = 0; i < t.answers.length; i++) {
      if (!t.answers[i] && t.answers[i] !== 0) return false;
    }
    return true;
  }

  /* The text of one question in one language. Falls back to English as a
     WHOLE when the translation is incomplete. */
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

  /* Distinct group names, in the order they were registered. */
  function groups(questions) {
    var seen = {}, list = [];
    for (var i = 0; i < questions.length; i++) {
      var g = questions[i].group;
      if (!seen[g]) { seen[g] = true; list.push(g); }
    }
    return list;
  }

  /* Distinct fine-grained topic names. */
  function topics(questions) {
    var seen = {}, list = [];
    for (var i = 0; i < questions.length; i++) {
      var t = questions[i].topic;
      if (!seen[t]) { seen[t] = true; list.push(t); }
    }
    return list;
  }

  /* ---------------------------------------------------------------
     Self-check of the English source. Runs on every page load.
     --------------------------------------------------------------- */
  function validate(questions) {
    var problems = [];
    var texts = {};
    var ids = {};

    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var where = '#' + q.id + ' [' + q.topic + '] "' + q.question + '"';

      if (ids[q.id]) problems.push(where + ' duplicate id');
      ids[q.id] = true;

      if (!q.group) problems.push(where + ' has no group');
      if (!q.topic) problems.push(where + ' has no topic');
      if (['easy', 'medium', 'hard'].indexOf(q.difficulty) === -1) {
        problems.push(where + ' invalid difficulty "' + q.difficulty + '"');
      }
      if (!q.explanation) problems.push(where + ' has no explanation');
      else if (q.explanation.length > LIMITS.explanation) problems.push(where + ' explanation is long (' + q.explanation.length + ' chars)');

      if (q.answers.length < 4) problems.push(where + ' has only ' + q.answers.length + ' answers');
      [q.question, q.explanation].concat(q.answers).forEach(function (txt) {
        if (untidy(txt)) problems.push(where + ' stray or doubled spaces in "' + txt + '"');
      });
      if (q.question.length > LIMITS.question) problems.push(where + ' question text is long (' + q.question.length + ' chars)');
      if (q.answers.indexOf(q.correctAnswer) === -1) problems.push(where + ' correct answer missing from options');

      var seen = {};
      for (var k = 0; k < q.answers.length; k++) {
        var a = String(q.answers[k]).trim().toLowerCase();
        if (seen[a]) problems.push(where + ' duplicate option "' + q.answers[k] + '"');
        seen[a] = true;
        if (!q.answers[k] && q.answers[k] !== 0) problems.push(where + ' has an empty option');
        if (String(q.answers[k]).length > LIMITS.answer) problems.push(where + ' option too long: "' + q.answers[k] + '"');
      }

      /* The `why` map must only describe options that actually exist, and
         must never describe the correct answer. */
      if (q.why) {
        for (var w in q.why) {
          if (!own(q.why, w)) continue;
          if (q.answers.indexOf(w) === -1) {
            problems.push(where + ' why-note for missing option "' + w + '"');
          } else if (w === q.correctAnswer) {
            problems.push(where + ' why-note attached to the CORRECT answer');
          }
          if (String(q.why[w]).length > LIMITS.why) {
            problems.push(where + ' why-note too long for "' + w + '"');
          }
        }
      }

      var key = q.question.trim().toLowerCase();
      if (texts[key]) problems.push(where + ' duplicates question #' + texts[key]);
      texts[key] = q.id;
    }
    return problems;
  }

  /* ---------------------------------------------------------------
     Self-check of one translation.
     --------------------------------------------------------------- */
  function validateLang(questions, code) {
    var problems = [];
    var box = TR[code];
    if (!box) return ['no translations registered for "' + code + '"'];

    var known = {}, texts = {}, groupsSeen = {}, topicsSeen = {};

    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      known[q.question] = true;
      groupsSeen[q.group] = true;
      topicsSeen[q.topic] = true;

      var where = code + ' #' + q.id + ' [' + q.topic + '] "' + q.question + '"';
      var t = q.tr[code];
      if (!t) { problems.push(where + ' has no translation'); continue; }

      if (!t.question) {
        problems.push(where + ' translation has no question text');
      } else {
        if (t.question.length > LIMITS.question) {
          problems.push(where + ' translated question is long (' + t.question.length + ' chars): "' + t.question + '"');
        }
        var tk = t.question.trim().toLowerCase();
        if (texts[tk]) problems.push(where + ' translated text duplicates #' + texts[tk]);
        texts[tk] = q.id;
      }

      if (!t.explanation) problems.push(where + ' translation has no explanation');
      else if (t.explanation.length > LIMITS.explanation) {
        problems.push(where + ' translated explanation is long (' + t.explanation.length + ' chars)');
      }
      if (t.question) parity(where, 'question', q.question, t.question, problems);
      if (t.explanation) parity(where, 'explanation', q.explanation, t.explanation, problems);

      if (!t.answers || t.answers.length !== q.answers.length) {
        problems.push(where + ' has ' + (t.answers ? t.answers.length : 0) +
          ' translated answers, expected ' + q.answers.length);
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

          /* Numbers, units and formulae are the same in every language. A
             translated "10 000 J" that became "10000 J" is a typo, not a
             translation - and a changed formula would be a wrong answer. */
          var en = String(q.answers[k]);
          if (!WORDY.test(en) && a !== en) {
            problems.push(where + ' option ' + k + ' should stay "' + en + '" but is "' + a + '"');
          }
        }
      }

      if (t.whyRaw) {
        for (var w in t.whyRaw) {
          if (!own(t.whyRaw, w)) continue;
          var wi = t.answers ? t.answers.indexOf(w) : -1;
          if (wi === -1) problems.push(where + ' translated why-note for missing option "' + w + '"');
          else if (wi === 0) problems.push(where + ' translated why-note attached to the CORRECT answer');
          if (String(t.whyRaw[w]).length > LIMITS.why) {
            problems.push(where + ' translated why-note too long for "' + w + '"');
          }
        }
      }

      /* A misconception the English names but the translation does not
         means a BM student gets less teaching for the same mistake. */
      if (q.whyIdx) {
        for (var idx in q.whyIdx) {
          if (!own(q.whyIdx, idx)) continue;
          if (!t.why || !t.why[idx]) {
            problems.push(where + ' is missing the why-note for option ' + idx + ' ("' + q.answers[idx] + '")');
          } else {
            parity(where, 'why-note ' + idx, q.whyIdx[idx], t.why[idx], problems);
          }
        }
      }
    }

    for (var key in box.entries) {
      if (own(box.entries, key) && !known[key]) {
        problems.push(code + ' orphan translation for "' + key + '" (English text changed or removed?)');
      }
    }
    for (var d = 0; d < box.dupes.length; d++) {
      problems.push(code + ' question translated twice: "' + box.dupes[d] + '"');
    }
    var g;
    for (g in groupsSeen) if (own(groupsSeen, g) && !own(box.topics, g)) problems.push(code + ' no name for topic group "' + g + '"');
    for (g in topicsSeen) if (own(topicsSeen, g) && !own(box.topics, g)) problems.push(code + ' no name for topic "' + g + '"');
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

  /* Coverage summary, used by the QA page and handy for a teacher
     adding questions. */
  function summary(questions) {
    var byGroup = {}, byTopic = {}, byDiff = { easy: 0, medium: 0, hard: 0 };
    var withWhy = 0;
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      byGroup[q.group] = (byGroup[q.group] || 0) + 1;
      byTopic[q.topic] = (byTopic[q.topic] || 0) + 1;
      byDiff[q.difficulty] = (byDiff[q.difficulty] || 0) + 1;
      if (q.why) withWhy++;
    }
    return { total: questions.length, byGroup: byGroup, byTopic: byTopic, byDifficulty: byDiff, withWhyNotes: withWhy };
  }

  global.PFR = global.PFR || {};
  global.PFR.Bank = {
    LIMITS: LIMITS,
    G: G, lang: lang, build: build, view: view, topicName: topicName,
    groups: groups, topics: topics, languages: languages,
    validate: validate, validateLang: validateLang, coverage: coverage, summary: summary
  };
})(window);
