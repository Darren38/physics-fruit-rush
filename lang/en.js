/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  ENGLISH INTERFACE TEXT
   ---------------------------------------------------------------------
   Every word of the interface. Question text lives in data/, not here.

   British spelling throughout ("practise" the verb, "practice" the noun),
   because that is the convention Malaysian schools teach.

   {name} is filled in by the game. {n|one|many} picks the singular or
   plural. Numbers such as {quickSecs} come from config.js, so changing a
   rule there changes the sentence here automatically.

   If you add a key, add it to lang/ms.js too - the QA page and the
   console self-check both list any key that exists in only one file.
   ===================================================================== */

window.PFR.I18N.register('en', {

  /* ---- language switch ---- */
  'lang.announce': 'English selected',

  /* ---- v5: Forms ---- */
  'form.name': 'Form {n}',
  'form.short': 'Form {n}',
  'form.word': 'FORM',
  'form.choose': 'Choose your Form',
  'form.note': 'Each Form keeps its own progress.',
  'form.announce': '{form} selected',

  /* ---- v5: speed and More settings ---- */
  'menu.speedTag': 'Speed: {speed}',
  'setup.more': 'More settings',
  'speed.customPct': 'Custom {pct}%',
  'speed.custom.blurb': 'Your own pace: {pct}% of Normal, about {secs} s for an easy question.',
  'custom.head': 'Custom Fruit Speed',
  'custom.lead': 'Fine-tune how fast the fruit fly. Moving the slider selects Custom.',
  'custom.slower': 'Slower',
  'custom.faster': 'Faster',
  'custom.value': '{pct}% of Normal',
  'custom.think': 'About {secs} s to answer an easy question',
  'custom.valuetext': '{name}: {pct} percent of Normal speed, about {secs} seconds for an easy question',
  'custom.reset': 'Back to Normal',
  'custom.tag': 'Custom',
  'progress.headForm': '{form} PROGRESS',

  /* ---- main menu ---- */
  'menu.subtitle': 'KSSM PHYSICS',
  'menu.tag1': 'Think Fast.',
  'menu.tag2': 'Slice Faster.',
  'menu.quick': 'QUICK GAME',
  'menu.quick.sub': '{quickSecs} seconds · {quickLives} {quickLives|life|lives} · all topics',
  'menu.topic': 'TOPIC CHALLENGE',
  'menu.topic.sub': 'One topic, then a mastery report',
  'menu.practice': 'PRACTICE',
  'menu.practice.sub': 'No pressure · explanations · retries',
  'menu.more': 'MORE MODES',
  'menu.more.sub': 'Time Rush · Survival · speed settings',
  'menu.help': 'HOW TO PLAY',
  'menu.help.sub': 'Takes 15 seconds',
  'menu.best': 'Best {score}',
  'menu.bank': '{n} {n|question|questions} across {groups} topic {groups|group|groups}',
  'menu.offline': 'Works offline',
  'menu.nologin': 'No login needed',

  /* ---- progress panel ---- */
  'progress.head': 'YOUR PROGRESS',
  'progress.empty': 'Play a few questions to start building your progress in this Form.',
  'progress.mastery': 'Overall mastery',
  'progress.answered': 'Answered',
  'progress.strongest': 'Strongest',
  'progress.next': 'Practise next',
  'progress.notYet': 'Not yet',
  'progress.keepPlaying': 'Keep playing',
  'progress.practiseWeak': 'PRACTISE WEAK TOPICS',
  'progress.startWith': 'Start with {topic}',
  'progress.reset': 'Reset this Form’s progress',

  /* ---- setup ---- */
  'setup.head': 'Set Up The Round',
  'nav.back': 'Back to menu',
  'setup.mode': 'Game Mode',
  'setup.clock': 'Starting Clock',
  'setup.speed': 'Fruit Speed',
  'setup.topic': 'Topic',
  'setup.mix': 'Question Mix',
  'setup.start': 'START GAME',
  'setup.practiceSpeed': 'Practice Mode always runs at the relaxed speed.',
  'setup.nQuestions': '{n} {n|question|questions}',
  'setup.seconds': '{n} s',
  'topic.all': 'All Topics',

  'mix.adaptive': 'Adaptive',
  'mix.adaptive.title': 'More questions from topics you are weak at.',
  'mix.adaptive.hint': 'Topics you keep getting wrong come up more often.',
  'mix.balanced': 'Balanced',
  'mix.balanced.title': 'Spread questions evenly across the topic.',
  'mix.balanced.hint': 'Every topic gets an equal share. Good for teaching a whole topic.',

  /* ---- modes ---- */
  'mode.quick': 'Quick Game',
  'mode.quick.blurb': '{quickSecs} seconds, {quickLives} {quickLives|life|lives}. The straightforward round.',
  'mode.timerush': 'Time Rush',
  'mode.timerush.blurb': 'Start with {rushSecs} s. Every correct answer buys {rushBonus} s more.',
  'mode.survival': 'Survival',
  'mode.survival.blurb': 'No clock. {survLives} {survLives|life|lives}, and being too slow costs one.',
  'mode.topic': 'Topic Challenge',
  'mode.topic.blurb': 'One topic, {topicQs} questions, then a mastery report.',
  'mode.practice': 'Practice',
  'mode.practice.blurb': 'No clock, no lives. Explanations, and wrong ones come back.',

  /* ---- speeds ---- */
  'speed.relaxed': 'Relaxed',
  'speed.relaxed.blurb': 'Slow and calm. Best for a first try or revision.',
  'speed.normal': 'Normal',
  'speed.normal.blurb': 'The default arcade pace.',
  'speed.fast': 'Fast',
  'speed.fast.blurb': 'Quicker fruit, shorter thinking time.',
  'speed.insane': 'Extreme',
  'speed.insane.blurb': 'Blink and it is gone. For students who already know this.',

  /* ---- question difficulty ---- */
  'diff.easy': 'easy',
  'diff.medium': 'medium',
  'diff.hard': 'hard',

  /* ---- how to play ---- */
  'help.head': 'How To Play',
  'help.read': 'READ',
  'help.read.p': 'A short Physics question sits at the top of the screen.',
  'help.think': 'THINK',
  'help.think.p': 'Fruits fly up — each one carries a possible answer.',
  'help.slice': 'SLICE',
  'help.slice.p': 'Swipe straight through the correct fruit. A tap works too.',
  'help.streak': 'STREAK',
  'help.streak.p': 'Chain correct answers to build a multiplier up to ×{maxMult}.',
  'help.correct': '✓ Correct',
  'help.correct.p': 'Points, a speed bonus, and your streak grows.',
  'help.wrong': '✗ Wrong',
  'help.wrong.p': 'Lose {wrongPenalty} points and a life. The correct fruit is revealed.',
  'help.slow': '⏳ Too slow',
  'help.slow.p': 'Lose {missPenalty} points and your streak. Only Survival takes a life.',
  'help.bomb': '✖ Bomb',
  'help.bomb.p': 'Dark bombs appear later in a round. Never slice them.',
  'help.kbd': 'Keyboard:',
  'help.kbd.slice': 'slice fruit left to right.',
  'help.kbd.pause': 'pauses.',
  'help.start': 'READY? START',

  /* ---- in-game HUD ---- */
  'hud.score': 'SCORE',
  'hud.streak': 'STREAK',
  'hud.lives': 'LIVES',
  'hud.time': 'TIME',
  'hud.stage': 'STAGE',
  'hud.question': 'QUESTION',
  'hud.answered': 'ANSWERED',
  'hud.sound': 'Sound on or off',
  'hud.pause': 'Pause',
  'hud.end': 'End round',
  'q.cue': 'Slice the correct answer',

  'count.ready': 'GET READY',
  'count.go': 'GO!',

  /* ---- feedback card ---- */
  'fb.correct': 'CORRECT!',
  'fb.streak': 'STREAK ×{n}',
  'fb.points': '+{n} {n|point|points}',
  'fb.wrong': '✗ NOT QUITE',
  'fb.miss': '⏱ TIME UP',
  'fb.answer': 'Answer: {answer}',
  'fb.why': '“{chosen}” — {note}',
  'fb.remember': 'Remember',
  /* Practice Mode shows the answer in the language NOT on screen, because
     SPM papers print every question in both. Keyed by the language being
     shown, so a third language only needs one more line. */
  'fb.alt.en': 'In English',
  'fb.alt.ms': 'In BM',

  'pause.head': 'Paused',
  'pause.resume': 'RESUME',
  'pause.end': 'END ROUND',

  /* ---- streak banners and canvas call-outs ---- */
  'combo.0': 'NICE',
  'combo.1': 'ON FIRE',
  'combo.2': 'BLAZING',
  'combo.3': 'UNSTOPPABLE',
  'fx.perfect': 'PERFECT!',
  'fx.bomb': 'BOMB!  −{n}',

  /* ---- results ---- */
  'res.lives': 'OUT OF LIVES',
  'res.time': 'TIME UP!',
  'res.quit': 'ROUND ENDED',
  'res.complete': 'ROUND COMPLETE!',
  'res.rating': 'Round rating: {stars} of 3 stars',
  'res.score': 'SCORE',
  'res.newBest': 'NEW PERSONAL BEST!',
  'res.best': 'Best in {mode}: {score}',
  'res.correct': 'Correct',
  'res.accuracy': 'Accuracy',
  'res.streak': 'Best streak',
  'res.wrong': 'Wrong',
  'res.slow': 'Too slow',
  'res.reaction': 'Avg reaction',
  'res.nextHead': 'YOUR NEXT STEP',
  'res.nextMisses': 'Practise {topic} — {n} {n|mistake|mistakes} this round',
  'res.nextPlain': 'Practise {topic}',
  'res.practiseBtn': 'PRACTISE {topic}',
  'res.strong': '⭐ Strong',
  'res.revise': '📚 Revise',
  'res.again': 'PLAY AGAIN',
  'res.change': 'CHANGE TOPIC OR MODE',
  'res.menu': 'MAIN MENU',

  'msg.warmup': 'Warm-up done. Now play a full round!',
  'msg.outstanding': 'Outstanding — fast AND accurate.',
  'msg.excellent': 'Excellent Physics. Try a faster speed next.',
  'msg.reflexes': 'Great reflexes. Keep that accuracy up.',
  'msg.solid': 'Solid work. Push for quicker recall.',
  'msg.gettingThere': 'Getting there. Revise the topics below.',
  'msg.slowDown': 'Slow down and read — accuracy beats speed here.',
  'msg.practice': 'Try Practice Mode to build the basics first.',

  /* ---- dialogs ---- */
  'dlg.cancel': 'CANCEL',
  'dlg.confirm': 'CONFIRM',
  'dlg.end.title': 'End this round?',
  'dlg.end.body': 'Your round will end now and your results will be shown.',
  'dlg.end.cancel': 'CONTINUE PLAYING',
  'dlg.end.confirm': 'END ROUND',
  'dlg.reset.title': 'Reset {form} progress?',
  'dlg.reset.body': 'This erases your {form} mastery, question history and best scores on this device. Other Forms and your settings, such as language and speed, are kept. It cannot be undone.',
  'dlg.reset.confirm': 'RESET PROGRESS',
  'snack.reset.title': '{form} progress reset',
  'snack.reset.body': 'You are starting fresh.'
});
