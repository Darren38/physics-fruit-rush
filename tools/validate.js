#!/usr/bin/env node
/* =====================================================================
   Physics Fruit Rush v5 - headless content validator
   ---------------------------------------------------------------------
   The same checks the game runs in the browser on every page load, but
   runnable from a terminal and from CI, so a bad question or a broken
   translation can never reach the main branch.

       node tools/validate.js

   Exits 0 when everything is clean, 1 when it is not. No dependencies.

   What it checks
     * every Form's question bank against data/syllabus.js: a real Form,
       a topic from THAT Form, exactly four answers, unique ids
     * every translation (the ms-N.js files in each data/formN folder,
       and data/ms): complete, filed under the right Form, same answer
       order, same numbers, same formulae, same misconception notes
     * the interface dictionaries (lang/*.js): same keys and placeholders
     * that index.html loads every content file, in a working order
     * that nothing calls localStorage.clear()

   v5: the syllabus loads BEFORE the question bank, because the bank
   checks every question against it. Version 4's load-order rule ("every
   data/ file after question-bank.js") would reject that and block the
   deploy, so the rule now expects the syllabus first.

   The content files are plain browser scripts that attach themselves to
   `window`, so they run here inside a tiny fake window in a VM context -
   no build step, no module wrapper. They are loaded in exactly the order
   index.html lists them, so this validates what the game actually loads.
   ===================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function scriptsInIndex() {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const re = /<script[^>]+src="([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1]);
  return out;
}

/* Content = the language engine, the dictionaries, the syllabus and the
   question data. The game modules need a DOM and are not loaded here. */
function isContent(src) {
  return src === 'js/i18n.js' || src.indexOf('lang/') === 0 || src.indexOf('data/') === 0;
}

function loadContent() {
  const sandbox = { console: console };
  sandbox.window = sandbox;          // scripts end with `})(window);`
  vm.createContext(sandbox);

  for (const rel of scriptsInIndex().filter(isContent)) {
    const file = path.join(ROOT, rel);
    if (!fs.existsSync(file)) throw new Error('index.html loads a missing file: ' + rel);
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: rel });
  }
  if (!sandbox.PFR || !sandbox.PFR.Syllabus) throw new Error('content loaded but PFR.Syllabus was never defined');
  if (!sandbox.PFR.Bank) throw new Error('content loaded but PFR.Bank was never defined');
  if (!sandbox.PFR.I18N) throw new Error('content loaded but PFR.I18N was never defined');
  return sandbox.PFR;
}


/* ---------------------------------------------------------------------
   Source guards
   Not content checks, but they protect invariants that are easy to break
   by accident and expensive to discover in a classroom.
   --------------------------------------------------------------------- */

/* Replace every comment body with spaces, keeping newlines so reported
   line numbers still match the file. Without this the storage guard flags
   the very comments that explain the rule. */
function stripComments(src) {
  let out = '';
  let mode = 'code';                       // code | line | block
  for (let i = 0; i < src.length; i++) {
    const c = src[i], d = src[i + 1];
    if (mode === 'code') {
      if (c === '/' && d === '/') { mode = 'line'; out += '  '; i++; continue; }
      if (c === '/' && d === '*') { mode = 'block'; out += '  '; i++; continue; }
      out += c;
    } else if (mode === 'line') {
      if (c === '\n') { mode = 'code'; out += c; } else { out += ' '; }
    } else {
      if (c === '*' && d === '/') { mode = 'code'; out += '  '; i++; continue; }
      out += (c === '\n') ? c : ' ';
    }
  }
  return out;
}

/* 1. localStorage.clear() wipes every key for the origin, including other
      versions of this game and - on a shared school machine - unrelated
      sites. The game may only remove its own prefixed keys. */
function checkNoStorageClear() {
  const problems = [];
  const files = fs.readdirSync(path.join(ROOT, 'js'))
    .filter((f) => f.endsWith('.js'))
    .map((f) => 'js/' + f)
    .concat(['index.html']);

  files.forEach((rel) => {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) return;
    const src = stripComments(fs.readFileSync(full, 'utf8'));
    src.split('\n').forEach((line, i) => {
      if (/localStorage\s*\.\s*clear\s*\(/.test(line)) {
        problems.push(rel + ':' + (i + 1) + ' calls localStorage.clear() - remove only prefixed keys instead');
      }
    });
  });
  return problems;
}

/* 2. Load order. Classic scripts run top to bottom, so a file that uses
      another at load time must come after it. */
function checkScriptOrder() {
  const order = scriptsInIndex();
  const at = (src) => order.indexOf(src);
  const problems = [];

  function before(first, then, why) {
    if (at(first) === -1) { problems.push('index.html never loads ' + first); return; }
    then.forEach((src) => {
      if (at(src) !== -1 && at(src) < at(first)) {
        problems.push('index.html loads ' + src + ' before ' + first + ' (' + why + ')');
      }
    });
  }

  before('js/config.js', ['js/storage.js'], 'storage reads the namespace from config');
  before('js/storage.js', ['js/learner.js', 'js/game.js', 'js/ui.js', 'js/main.js'], 'they persist through storage');
  before('js/i18n.js', order.filter((s) => s.indexOf('lang/') === 0), 'dictionaries register with i18n');
  before('data/syllabus.js', ['data/question-bank.js'], 'the bank checks every question against the syllabus');
  before('data/question-bank.js', order.filter((s) => s.indexOf('data/') === 0 &&
    s !== 'data/question-bank.js' && s !== 'data/syllabus.js'), 'question files register with the bank');
  return problems;
}

/* 3. A content file on disk that index.html never loads is a translation
      or a topic the students will never see. */
function checkUnreferenced() {
  const loaded = {};
  scriptsInIndex().forEach((s) => { loaded[s] = true; });
  const problems = [];

  function walk(dir) {
    fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).forEach((e) => {
      const rel = dir + '/' + e.name;
      if (e.isDirectory()) walk(rel);
      else if (e.name.endsWith('.js') && !loaded[rel]) problems.push(rel + ' exists but index.html never loads it');
    });
  }
  walk('data');
  walk('lang');
  return problems;
}

function main() {
  let PFR;
  try {
    PFR = loadContent();
  } catch (err) {
    console.error('FAIL  could not load the content: ' + err.message);
    process.exit(1);
  }

  const Bank = PFR.Bank, I18N = PFR.I18N;
  const questions = Bank.build();
  let problems = Bank.validate(questions);
  const langs = Bank.languages().filter((c) => c !== 'en');
  langs.forEach((code) => { problems = problems.concat(Bank.validateLang(questions, code)); });
  problems = problems
    .concat(I18N.audit())
    .concat(checkNoStorageClear())
    .concat(checkScriptOrder())
    .concat(checkUnreferenced());

  const summary = Bank.summary(questions);
  const forms = Object.keys(summary.byForm || {});
  console.log('Physics Fruit Rush - content');
  console.log('  questions           ' + summary.total +
    (forms.length ? '  (' + forms.map((f) => 'Form ' + f + ': ' + summary.byForm[f]).join(', ') + ')' : ''));
  console.log('  topic groups        ' + Object.keys(summary.byGroup).length);
  console.log('  fine topics         ' + Object.keys(summary.byTopic).length);
  console.log('  easy / med / hard   ' + summary.byDifficulty.easy + ' / ' +
    summary.byDifficulty.medium + ' / ' + summary.byDifficulty.hard);
  console.log('  misconception notes ' + summary.withWhyNotes);
  langs.forEach((code) => {
    const cov = Bank.coverage(questions, code);
    console.log('  translation "' + code + '"    ' + cov.translated + ' / ' + cov.total);
  });
  console.log('  interface keys      ' + I18N.keys('en').length + ' per language');

  /* A topic group smaller than the Topic Challenge length is not an error,
     but it does mean that mode will shorten itself, so it is worth saying.
     Groups are counted per Form ("F2 Heat"), never across Forms. */
  const thin = Object.keys(summary.byGroup).filter((g) => summary.byGroup[g] < 20);
  if (thin.length) {
    console.log('');
    console.log('NOTE  topic groups with fewer than 20 questions (Topic Challenge will shorten itself):');
    thin.forEach((g) => console.log('        ' + g + ' = ' + summary.byGroup[g]));
  }

  if (problems.length) {
    console.error('');
    console.error('FAIL  ' + problems.length + ' problem(s):');
    problems.forEach((p) => console.error('        ' + p));
    process.exit(1);
  }

  console.log('');
  console.log('OK    content is clean.');
  process.exit(0);
}

main();
