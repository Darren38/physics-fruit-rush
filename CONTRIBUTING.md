# Contributing

Most contributions to this project are **questions and translations**, not code —
and you do not need to know JavaScript for either.

---

## Adding or fixing a question

Questions live under `data/`, one set per Form:

| Form | English questions | Bahasa Melayu |
|---|---|---|
| Form 1 | `data/form1/questions-1.js`, `questions-2.js` | `data/form1/ms-1.js`, `ms-2.js` |
| Form 2 | `data/form2/questions-1.js`, `questions-2.js` | `data/form2/ms-1.js`, `ms-2.js` |
| Form 3 | `data/form3/questions-1.js`, `questions-2.js` | `data/form3/ms-1.js`, `ms-2.js` |
| Form 4 | `data/questions-mechanics.js`, `questions-heat-waves.js`, `questions-light.js` | `data/ms/*.ms.js` |

Questions are grouped in blocks, `G('Topic group', 'Topic', [ ...rows ])`. The group and
topic must exist for that Form in `data/syllabus.js`. The validator rejects a question
filed under another Form's topic, and a syllabus topic with fewer than five questions.

Each question is one row:

```js
['m', 'SI unit of momentum?', ['kg m/s', 'N', 'J', 'W'], 'p = mv → kg × m/s.',
 { 'N': 'Newton is force.', 'J': 'Joule is energy.' }]
```

| Position | Meaning |
|---|---|
| 1 | Difficulty — `'e'` easy, `'m'` medium, `'h'` hard |
| 2 | The question. Keep it under ~78 characters. |
| 3 | Four answers. **The first one is always the correct answer.** |
| 4 | A one-line explanation, under ~60 characters. |
| 5 | *Optional* — misconception notes for wrong answers. |

### The rules that matter

**Put the correct answer first.** The game shuffles positions at runtime, so you
never have to think about answer order, and you cannot accidentally create a
pattern where the answer is always in the same place.

**Pick the difficulty honestly.**

* `e` — one-step recall a student should answer instantly ("SI unit of force?")
* `m` — needs a concept link or a rule applied ("If the distance doubles…")
* `h` — a calculation or multi-step reasoning ("m = 2 kg, a = 3 m/s². Force?")

This is not cosmetic. The game's warm-up and difficulty ramp read these labels,
so a hard question mislabelled easy will be thrown at a student in their first
five seconds.

**Write distractors from real mistakes.** A good wrong answer is one a student
would actually choose: unit confusion (`joule` for force), an inverted formula
(`sin r / sin i`), an inverse-square slip (halving the distance → "double"), a
sign error, or a reversed concept (convex ↔ concave). Avoid silly options — they
make the question free.

**Add a misconception note where the distractor teaches something.** The fifth
element maps a *wrong* answer to the error it represents. When the student
slices it, the game names the mistake:

> ✗ NOT QUITE — Answer: newton
> *"joule" — Joule is the unit of energy.*

Keep each note under ~78 characters. Notes must never be attached to the correct
answer — the validator will reject that.

**Keep answers short.** Under 28 characters. A student is reading them off a
moving fruit.

---

## Translating — Bahasa Melayu

Every English question has a Bahasa Melayu row in the same Form's translation file (see
the table above), **keyed by the exact English question text**. A translation filed
under the wrong Form is reported.

```js
'SI unit of force?': ['Unit SI bagi daya?',
                      ['newton', 'joule', 'watt', 'pascal'],
                      'Daya ialah kuantiti terbitan: 1 N = 1 kg m s⁻².',
                      { 'joule': 'Joule ialah unit tenaga.' }],
```

| Position | Meaning |
|---|---|
| key | The English question, character for character. |
| 1 | The BM question. |
| 2 | The four answers **in the same order as the English** — the first is correct. |
| 3 | The BM explanation. |
| 4 | Misconception notes, keyed by the **BM** answer text. Every English note needs one. |

**Rules the validator enforces:**

* Numbers, units and formulae stay exactly as in English — "10 000 J", "p = mv".
  The same numbers must appear in the question, explanation and notes.
* A question that ends with "?" or contains a "..." blank keeps it.
* A word stressed in CAPITALS in English ("Which is a **BASE** quantity?") stays
  stressed ("Yang manakah kuantiti **ASAS**?").
* Same length limits as English. If BM does not fit, rephrase — do not raise the limit.
* Use that Form's KSSM textbook terms and DBP spelling. Watch the traps:
  *short-sightedness* is **rabun jauh**, *long-sightedness* is **rabun dekat**;
  *water* is **air**, *air* is **udara**.

**If you change an English question**, its BM row stops matching. The validator
reports it as an *orphan* — update the key and the translation together.

**Interface text** (buttons, headings, feedback) lives in `lang/en.js` and
`lang/ms.js`. Add every new key to both, with the same `{placeholders}`.

**Adding a third language** needs no code. Add these four things:
* `lang/xx.js`;
* one translation file per Form that registers with `PFR.Bank.lang('xx', N)`;
* a button with `data-lang="xx"` in `index.html`;
* `'xx'` in `SUPPORTED` in `js/i18n.js`.

---

## Before you open a pull request

Run the validator:

```bash
node tools/validate.js
```

It checks the English bank: each question's Form and topic against `data/syllabus.js`,
unique ids, duplicates, missing or over-long options, missing explanations, invalid
difficulty, and misconception notes pointing at options that do not exist. It also
checks **every translation** (complete, same order, same numbers and formulae,
same misconception notes, nothing left in English), the interface dictionaries,
and that `index.html` loads every content file in a working order. CI runs the
same check on every pull request.

**No Node?** Open `tools/qa.html` in a browser instead. It runs the same checks and
also puts every answer label through the real label fitter at desktop, tablet, phone,
small-phone and sideways-phone sizes. The game itself also runs the checks on page load and prints them to
the browser console.

Then play a round of **Topic Challenge** on the topic you touched. It is the
fastest way to see your question the way a student will.

---

## Changing the game itself

Every tunable number lives in `js/config.js` — speeds, reaction windows, scoring,
lives, feedback timings, flight physics, the adaptive constants and all the
"juice" values. Try changing that file before changing anything else.

The code is deliberately plain: no framework, no build step, no dependencies.
Please keep it that way. Modules are separated by concern:

```
config.js    every tunable number (and no display text)
storage.js   the only owner of localStorage - global settings vs per-Form progress
i18n.js      the only file that knows which language is on screen
audio.js     synthesised sound (no audio files)
fruits.js    procedural fruit artwork and answer labels
effects.js   juice, screen shake, popups, freeze-frame
engine.js    flight physics, slicing, rendering
learner.js   adaptive revision model
game.js      modes, scoring, lives, stages, the end report
ui.js        screens, HUD, feedback, results  (the ONLY file touching the DOM)
main.js      bootstrap, input, main loop
```

Three rules the codebase tries hard to keep:

1. **An effect may never obscure an answer label.** Debris draws behind live
   fruit, the cut flash is short, screen shake is capped.
2. **"Harder" must never mean "unreadable".** Reaction windows are derived from
   difficulty, speed and *how much text there is to read* — never random.
3. **No language checks outside `i18n.js`.** Ask for a key with `t('...')`; keep
   identifiers (topics, modes, answers) language-neutral.
