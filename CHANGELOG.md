# Changelog

All notable changes to Physics Fruit Rush.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project uses [Semantic Versioning](https://semver.org/).

---

## [5.0.0] — 2026-09-14

**Forms 1 to 4.** Physics Fruit Rush grows from a Form 4 game into a KSSM Physics game
for Forms 1–4. It adds 356 new questions for Forms 1–3, every one in both languages, a
Form picker and a separate learner profile for each Form.

### Added

* **Forms 1–3 question banks.** 115, 131 and 110 questions, written from the school's
  Form 1–3 scheme of work, with explanations, misconception notes and full Bahasa Melayu
  translations. With Form 4's 385, the game has **741 questions**.
* **`data/syllabus.js`.** It lists the Forms, topic groups and topics in teaching order.
  Every question must name a Form and a topic from that Form's syllabus.
* **Choose your Form.** The first visit asks which Form. After that a four-tile Form strip
  sits above the game modes with the current Form lit. `?form=2` (or `?tingkatan=2`)
  links open a Form directly and combine with `?lang=bm`.
* **One Form = one learner profile.** Mastery, weak topics, retries, results and best
  scores belong to one Form, so Form 1 play never changes Form 2. "Reset this Form's
  progress" clears one Form only, and the dialog names it.
* **Custom fruit speed** under *More settings*. A slider runs from 60 % to 150 % of
  Normal and shows the seconds it gives for an easy question. The same readout shows
  each preset on that scale (Relaxed 65 % · 6.8 s … Extreme 152 % · 2.9 s).
* **Safe upgrade from Version 4.** A returning student's Form 4 mastery, best scores and
  settings are copied into Form 4 once, after validation. Version 4's own data is left
  untouched.
* **Every device.** Checked at 22 screen sizes, from a 320 px phone to a 1080p projector,
  upright and sideways, with touch input.
* **`tools/qa.html` grows from 7 checks to 22.** New checks cover:
  * per-Form validation;
  * storage isolation;
  * custom-speed limits;
  * engine hardening;
  * planted-error tests;
  * label fit on small and sideways phones.

### Changed

* Progress is stored per Form under `physics-fruit-rush.v5.form<N>.*`, and settings stay
  global. Question ids carry their Form (`f1-12`).
* `tools/validate.js` expects `data/syllabus.js` before `data/question-bank.js`, and
  prints per-Form counts.
* Question Mix moved under *More settings*. Quick Game uses the player's saved speed.
* Sideways phones get a compact score bar and question card, which makes the playfield
  taller. Touch screens get 40 px in-game buttons and setup chips.

### Fixed

* Older iPads and iPhones (iOS 14.0 and earlier) could show a blank screen. The CSS
  `inset` shorthand is replaced by the four sides.
* On iPhones with a notch or Dynamic Island held sideways, the HUD buttons could sit
  under the notch. The game now stays inside the safe area.
* iOS sound could stop after a phone call or an app switch and not return.
* iOS double-tap zoom, and text selection during fast taps and swipes.
* A hand-edited speed key such as `constructor` could reach the engine. Damaged storage
  could load negative counts or another Form's topic.
* In Practice, which always plays at Relaxed, the custom-speed slider could still change
  the saved speed.

---

## [4.0.0] — 2026-09-10

**English ↔ Bahasa Melayu.** The whole game — every screen, all 385 questions, every
explanation and all 154 misconception notes — in both languages, plus the
improvements and bug fixes found while building and auditing it.

### Added — the language system

* **A language switch** at the top of the main menu: *English | Bahasa Melayu*, each
  written in its own language, no flags, 44 px touch targets, a globe icon, and
  `aria-pressed` for screen readers. Available on the menu only — a round keeps the
  language it started in, because answer labels are laid out at launch.
* **Remembered** as a setting, and kept through Reset Progress.
* **`?lang=bm` / `?lang=ms` / `?lang=en`** links, so a teacher can share a link that
  opens in BM. The link's choice is remembered; unknown codes are ignored.
* **English by default**; the browser's language is deliberately not used, because
  on a shared classroom machine it describes whoever set the machine up.
* **`<html lang>` follows the choice**, and a screen-reader-only live region
  announces the change ("Bahasa Melayu dipilih").
* **`translate="no"`** so browser auto-translation cannot mangle correct BM terms.
* **`js/i18n.js`** — the only module that knows the language. Every string is looked
  up by key; there is no `if (language === ...)` anywhere else. `{name}` placeholders
  and `{n|one|many}` plurals; a missing string falls back to English, never blank.
* **`lang/en.js`, `lang/ms.js`** — 163 interface keys each.
* **The Bahasa Melayu question bank** (`data/ms/`, six files, one per chapter) as an
  overlay keyed by the English question text. KSSM Form 4 terms and DBP spelling;
  numbers, units and formulae copied exactly; answers in the same order; every
  misconception note translated. A translation is used only when complete, so a
  question is never half in one language.
* **Practice Mode shows the answer in the other language** ("DALAM BI · Displacement"
  / "IN BM · Sesaran") — SPM papers print every question in both. Hidden when the two
  terms are identical ("newton", "10 000 J").
* **Progress is shared across languages** — mastery, bests and the adaptive model are
  keyed by language-neutral ids.
* **`tools/qa.html`** — every content check plus a label-fit audit through the real
  renderer, in a browser, offline.

### Changed

* **Answers are identified by index, not text.** Correctness, the revealed answer and
  misconception notes follow the answer's position, so they are identical in every
  language.
* **No display text in `config.js`.** Names and descriptions moved to `lang/`;
  sentences that quote a rule ("60 seconds · 5 lives", "Lose 50 points", "up to ×2")
  read the number from `config.js` at runtime.
* **Settings are not progress.** Language, sound and question mix live under
  `settings.*` and survive Reset Progress; the dialog text now says so. V3 cleared
  preferences too, contradicting its own dialog.
* **Sound on/off is remembered** between visits.
* **"Insane" is now "Extreme"** ("Ekstrem"). The internal key is unchanged.
* **Label layouts are cached** instead of re-fitted for every fruit on every frame.
* **Better line breaks on small fruit** — a hyphen between letters is a break point
  ("Kedua-" / "duanya"), and a forced break falls on a syllable boundary with at least
  three letters each side ("Displace-/ment", not "Displaceme-/nt").
* **`tools/validate.js`** now loads exactly what `index.html` loads and also checks
  every translation, the interface dictionaries, script order, and content files that
  `index.html` never loads.

### Fixed

* **The top of the menu could be unreachable.** Centring a column taller than the
  screen pushed the logo — and would have pushed the language switch — above the
  scrollable area on a 720 px laptop. Screens now centre with auto margins.
* **After a one-tap "Practise Momentum" round, the setup screen showed no topic
  selected** and a summary naming a topic with no chip. It now selects the group
  that contains it.
* **The Time Rush description always said "Start with 40 s"**, even with 30 s or 60 s
  chosen. It now quotes the chosen clock.
* The misconception note for "510 m" said "You multiplied instead of dividing"; 510
  comes from *adding* 340 + 170.
* "Diffraction is greatest when the gap size is?" wrote the correct option as
  "wavelength" while every distractor said "λ" — a notation cue. All four now use λ.

### Verified

* All 385 questions translated; 0 problems from the English and BM validators, which
  now require the same numbers, "?" endings, "..." blanks and stressed CAPITALS as
  the English. The validator was itself tested with five deliberately planted errors.
* Every answer label, both languages, desktop / tablet / phone lanes: 0 overflowing,
  none needing more than three lines.
* 40 bot rounds (every mode × speed × language): 0 errors, 0 repeats, 0 overlapping
  labels. A 400-question BM soak: bounded objects, heap +1.3 MB.
* 26 screens × 2 languages at 1280 × 800 and 375 × 812: no horizontal overflow.
* Reset removes exactly the progress keys; settings, other versions and other sites'
  data are untouched. Blocked storage throws nothing.

---

## [3.0.0] — 2026-09-02

Progress, personalisation and classroom polish. The round itself is unchanged —
flight physics, slicing, combo, lives, scoring and the question bank are 2.0's,
deliberately. Everything new sits *around* the round.

### Added — progress you can see

* **Progress panel on the menu.** Overall mastery as a colour-coded bar, plus
  Answered, Strongest and Practise next. One bar and three numbers, not a
  dashboard. Shows a single encouraging line before any questions are answered
  instead of a wall of zeros.
* **Personal bests on the mode buttons.** A `Best 8,420` chip on Quick Game and
  Topic Challenge, so the target is visible at the moment of choosing. Bests are
  stored per mode, so a Survival record never overwrites a Quick Game one. The
  results screen shows `Best in Quick Game: 8,420` under the score.
* **`PRACTISE WEAK TOPICS`** on the menu — one tap into Practice mode on the
  topic the model rates weakest, at the relaxed speed. No setup screen, no topic
  list to scroll.
* **`YOUR NEXT STEP` on the results screen**, naming the topic and the concrete
  reason — *"Practise Refraction of Light — 3 mistakes this round"* — above a
  button that starts exactly that.

### Added — Reset Progress

* **Reset progress**, a deliberately quiet link under the progress panel. It never
  resets immediately: it opens a confirmation dialog naming what will be erased
  and stating that it cannot be undone.
* The dialog opens with focus on **CANCEL**, the safe choice. `Escape` cancels,
  `Tab` is trapped inside it, and focus returns to the opener on close.
  Cancelling changes nothing — verified against a deep snapshot of storage and of
  the in-memory model.
* Confirming clears mastery, all per-mode bests and preferences, resets the
  in-memory learner so selection behaves like a new student immediately, updates
  the menu in place and shows a short confirmation. No page reload.

### Added — `js/storage.js`

2.0 had two modules writing `localStorage` independently — `learner.js` kept
mastery, `game.js` kept best scores, each with its own `try/catch`. That shape is
what makes a "reset everything" button unreliable: a new feature saves a new key
and nobody remembers to clear it. 3.0 introduces one owner of persistence and one
definition of a reset. It enforces two rules:

1. **`localStorage.clear()` is never called.** Every key is prefixed with the
   version namespace and reset removes only keys carrying it, so a shared school
   machine never loses unrelated site data. `tools/validate.js` now fails the
   build if `localStorage.clear()` appears anywhere in the source.
2. **Nothing in it throws.** With storage fully denied, all 13 storage and
   progress entry points return sensible fallbacks; the game plays normally and
   simply forgets between sessions.

Version namespaces stay isolated: resetting 3.0 leaves `physics-fruit-rush.v1.*`
and `.v2.*` untouched.

### Changed — feedback that teaches

* The feedback card was reordered: verdict → the answer → **why the distractor you
  picked is wrong** → what to remember. The most useful line is no longer last.
* `✗ WRONG` → `✗ NOT QUITE`; `⏱ TOO SLOW` → `⏱ TIME UP`.
* Every line hides itself when it has nothing to say, so the card never shows an
  empty row.

### Changed — classroom safety

* **End Round asks first.** On a projector or shared touchscreen the ✕ sits beside
  pause and sound, and a mis-tap used to throw away a whole round. It now pauses
  the clock, asks, and resumes exactly where it was if the answer is "continue
  playing".
* **Slicing is disabled while any dialog is open**, so a swipe aimed at the dialog
  cannot cut a fruit underneath it.
* **Question Mix** is now a visible choice in setup. *Adaptive* (default) favours
  weak topics; *Balanced* draws evenly, which is what a whole-class round wants.
  The choice is remembered.

### Accessibility

* Every interactive element has a visible focus ring.
* Every control is at least 44 px tall, including the reset link.
* The destructive button is distinguished by border, colour **and** label — never
  colour alone.

### Fixed

* The reset link was 37 px tall, below the 44 px touch minimum. Now 44 px.
* `.review-grid > .review:only-child` was a dead rule: both review boxes are
  always present in the DOM and one merely carries `[hidden]`, so `:only-child`
  never matched and a lone box rendered at half width. The grid is now flex, which
  handles it structurally.

---

## [2.0.0] — 2026-09-02

The release 3.0 is built on. Version 1 was correct and playable;
2.0 targets the things that decide whether a student plays a *second* round and
actually learns something.

### Added — game feel

* **Freeze-frame (55 ms) on a correct slice.** The single biggest change. A tiny
  hitch at impact is what makes a hit feel like it *landed*.
* **Cut-line flash** along the exact blade path, so a slice reads as a *cut*.
* **Directional juice** — droplets spray along the blade instead of in a ball.
* **Cut sparks** — ten fast white sparks down the cut line, gone in 0.2 s.
* **Impact ring** on every hit.
* **Combo-scaled screen shake**, hard-capped so a long streak never becomes
  unreadable.
* **Streak aura** on the fruit once a streak reaches 3.
* **Score popups that punch in**, plus a `PERFECT!` call-out for very fast
  correct answers.
* **Streak banners** — `NICE ×3`, `ON FIRE ×5`, `BLAZING ×8`, `UNSTOPPABLE ×12`,
  placed low so they never cover a fruit label.
* **Richer synthesised audio** — the correct-answer chord thickens as the streak
  grows; a distinct round-start figure; quieter UI clicks.

### Added — learning

* **Adaptive revision** (`js/learner.js`). One mastery value per topic, moved by
  every answer and persisted to `localStorage`. Weak topics are weighted up in
  question selection. Measured over 400 simulated 18-question sessions: a topic
  the student keeps failing appears **×1.52** its fair share, a mastered one
  **×0.42** — and still no repeats within a session.
* **Misconception notes.** 154 questions now name the *specific* error behind a
  wrong answer rather than only showing the right one.
* **Practice retry queue.** A question answered wrongly comes back about three
  questions later, so the correction is rehearsed.
* **Strong / Revise results report**, a three-star rating weighting accuracy over
  volume, and a one-tap **PRACTISE: \<TOPIC\>** button.
* **Menu progress line** showing total questions answered and the weakest topic.

### Changed — modes now differ meaningfully

| Mode | Pressure | Lives |
|---|---|---|
| Quick Game | fixed 60 s clock | 5 |
| **Time Rush** | the clock *is* the score — correct answers buy +2.5 s | none |
| Survival | lives only; being too slow costs one | 3 |
| Topic Challenge | fixed set, one topic, mastery report | 5 |
| Practice | none — explanations and retries | ∞ |

Version 1's Quick Game and Time Attack were nearly the same round with a
different number on the clock. Time Rush's "correct answers buy time" turns the
round into a survival curve and produced the longest sessions of any mode in
testing.

### Changed — fairness and readability

* **Guaranteed warm-up** — the first two questions of every round are easy.
* **Bombs ramp with the stage** instead of appearing from question one.
* **Minimum reaction window raised** from 2.3 s to 2.6 s.
* **Survival ramps faster** (a stage every 5 questions rather than 6).
* Answers containing `= ÷ × ⁻ ² ³ ∝` earn an extra 0.45 s of reading time.
* The question sits on a raised card with a cue line tying it to the fruit
  below; the cue shows for the first three questions only, then gets out of the
  way.
* Timer bar and cue turn amber together below 28 % of the window.

### Changed — question bank

* **385 questions** (from 373), **0 validator problems**.
* **Difficulty re-classified.** v1 marked almost everything `medium` — only 20 %
  of the bank was easy while the stage-1 mix asks for ~60 %, so the warm-up could
  not warm anyone up and some topics had just two easy questions. 73 genuine
  one-step recall questions were reclassified. **Easy share is now 39 %**, and
  every topic group has at least eight.
* **Two thin topic groups topped up** so a 20-question Topic Challenge no longer
  shortens itself: Gas Laws 17 → 23, EM Spectrum 16 → 22.
* Unit notation made consistent (`cm³`, not `cm3`).

### Changed — architecture

* New `js/effects.js` — all the game-feel systems moved out of the engine, so
  flight and slicing are readable on their own and every juice value sits next to
  `config.juice`.
* New `js/learner.js` — the adaptive model.
* The bank validator was extended to catch misconception notes pointing at
  options that do not exist, notes attached to the correct answer, missing
  explanations, invalid difficulty values and duplicate ids.

### Fixed

* Combo aura was drawn as a filled disc that greyed out the fruit; it is now an
  outer halo, and tuned down again after it merged into a wash on phones.
* A misconception note referenced `510 m/s` where the option was `510 m` — caught
  by the extended validator during authoring.

---

## [1.0.0] — 2026-09-01

First release.

* 373 questions across 12 topic groups covering all 28 KSSM Form 4 topics.
* Five game modes, four speed presets, 11 procedurally drawn fruit types.
* Ballistic flight model with gravity derived from airtime and apex, so fruit can
  never be flung off-screen and never leaves before the thinking time is up.
* Slicing by mouse drag, finger swipe, stylus, tap, or number keys 1–4.
* Combo multiplier, speed bonus, lives, five-stage difficulty ramp.
* Synthesised audio with an on/off toggle; fully offline.

### Fixed during v1 hardening

* One swipe cut every answer at once and resolved on an arbitrary one; only the
  answer the blade reaches first now counts.
* Resizing or rotating mid-question stranded fruit off-screen.
* Questions repeated far too early — a spent difficulty queue recycled itself
  while other queues still held unseen questions.
* The correct answer was statistically identifiable: it had a fixed airtime while
  distractors varied, making it the last fruit flying 32 % of the time instead of
  25 %. All answers now draw from one shared range.
* A memory leak in the sound engine — every slice allocated a fresh white-noise
  `AudioBuffer` (~18.5 KB per question) that was never released.
* Long answer labels overflowed their lane and covered the neighbouring fruit.
* A second touch on a shared classroom panel cancelled the first student's swipe.
* A cancelled gesture (`pointercancel`) was scored as a tap-slice.
* A large configured life count crashed the HUD.
