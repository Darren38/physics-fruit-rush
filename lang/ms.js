/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  TEKS ANTARA MUKA BAHASA MELAYU
   ---------------------------------------------------------------------
   Setiap perkataan antara muka. Teks soalan berada dalam data/ms/.

   Istilah mengikut buku teks Fizik Tingkatan 4 KSSM dan ejaan DBP.
   Istilah permainan dipilih supaya biasa kepada murid Malaysia:
     slice  -> tebas     swipe -> leret     tap   -> ketik
     streak -> rentetan  lives -> nyawa     round -> pusingan
     score  -> markah    points -> mata     reset -> tetapkan semula

   Kunci mesti sama dengan lang/en.js. {nama} diisi oleh permainan.
   Bahasa Melayu tidak menanda jamak, jadi '{n} soalan' sudah memadai
   walaupun versi Inggeris menggunakan {n|question|questions}.
   ===================================================================== */

window.PFR.I18N.register('ms', {

  /* ---- penukar bahasa ---- */
  'lang.announce': 'Bahasa Melayu dipilih',

  /* ---- menu utama ---- */
  'menu.subtitle': 'FIZIK TINGKATAN 4 KSSM',
  'menu.tag1': 'Fikir Pantas.',
  'menu.tag2': 'Tebas Lebih Pantas.',
  'menu.quick': 'MAIN CEPAT',
  'menu.quick.sub': '{quickSecs} saat · {quickLives} nyawa · semua topik',
  'menu.topic': 'CABARAN TOPIK',
  'menu.topic.sub': 'Satu topik, kemudian laporan penguasaan',
  'menu.practice': 'LATIHAN',
  'menu.practice.sub': 'Tanpa tekanan · penerangan · cuba semula',
  'menu.more': 'MOD LAIN',
  'menu.more.sub': 'Kejar Masa · Bertahan · tetapan kelajuan',
  'menu.help': 'CARA BERMAIN',
  'menu.help.sub': 'Hanya 15 saat',
  'menu.best': 'Terbaik {score}',
  'menu.bank': '{n} soalan dalam {groups} kumpulan topik',
  'menu.offline': 'Boleh guna luar talian',
  'menu.nologin': 'Tanpa log masuk',

  /* ---- panel kemajuan ---- */
  'progress.head': 'KEMAJUAN ANDA',
  'progress.empty': 'Jawab beberapa soalan untuk mula membina kemajuan anda.',
  'progress.mastery': 'Penguasaan keseluruhan',
  'progress.answered': 'Dijawab',
  'progress.strongest': 'Paling kuat',
  'progress.next': 'Latih seterusnya',
  'progress.notYet': 'Belum ada',
  'progress.keepPlaying': 'Teruskan bermain',
  'progress.practiseWeak': 'LATIH TOPIK LEMAH',
  'progress.startWith': 'Mulakan dengan {topic}',
  'progress.reset': 'Tetapkan semula kemajuan',

  /* ---- persediaan ---- */
  'setup.head': 'Sediakan Pusingan',
  'nav.back': 'Kembali ke menu',
  'setup.mode': 'Mod Permainan',
  'setup.clock': 'Masa Permulaan',
  'setup.speed': 'Kelajuan Buah',
  'setup.topic': 'Topik',
  'setup.mix': 'Campuran Soalan',
  'setup.start': 'MULA BERMAIN',
  'setup.practiceSpeed': 'Mod Latihan sentiasa berjalan pada kelajuan Santai.',
  'setup.nQuestions': '{n} soalan',
  'setup.seconds': '{n} s',
  'topic.all': 'Semua Topik',

  'mix.adaptive': 'Adaptif',
  'mix.adaptive.title': 'Lebih banyak soalan daripada topik yang anda lemah.',
  'mix.adaptive.hint': 'Topik yang kerap anda salah akan muncul lebih kerap.',
  'mix.balanced': 'Seimbang',
  'mix.balanced.title': 'Soalan diagihkan sama rata merentas topik.',
  'mix.balanced.hint': 'Setiap topik mendapat bahagian yang sama. Sesuai untuk mengajar satu topik penuh.',

  /* ---- mod ---- */
  'mode.quick': 'Main Cepat',
  'mode.quick.blurb': '{quickSecs} saat, {quickLives} nyawa. Pusingan yang paling mudah.',
  'mode.timerush': 'Kejar Masa',
  'mode.timerush.blurb': 'Mula dengan {rushSecs} s. Setiap jawapan betul menambah {rushBonus} s.',
  'mode.survival': 'Bertahan',
  'mode.survival.blurb': 'Tiada jam. {survLives} nyawa, dan terlalu lambat akan kehilangan satu.',
  'mode.topic': 'Cabaran Topik',
  'mode.topic.blurb': 'Satu topik, {topicQs} soalan, kemudian laporan penguasaan.',
  'mode.practice': 'Latihan',
  'mode.practice.blurb': 'Tiada jam, tiada nyawa. Ada penerangan, dan soalan yang salah akan diulang.',

  /* ---- kelajuan ---- */
  'speed.relaxed': 'Santai',
  'speed.relaxed.blurb': 'Perlahan dan tenang. Terbaik untuk kali pertama atau ulang kaji.',
  'speed.normal': 'Biasa',
  'speed.normal.blurb': 'Rentak arked yang biasa.',
  'speed.fast': 'Pantas',
  'speed.fast.blurb': 'Buah lebih laju, masa berfikir lebih singkat.',
  'speed.insane': 'Ekstrem',
  'speed.insane.blurb': 'Sekelip mata, terus hilang. Untuk murid yang sudah mahir.',

  /* ---- aras soalan ---- */
  'diff.easy': 'mudah',
  'diff.medium': 'sederhana',
  'diff.hard': 'sukar',

  /* ---- cara bermain ---- */
  'help.head': 'Cara Bermain',
  'help.read': 'BACA',
  'help.read.p': 'Soalan Fizik yang ringkas dipaparkan di bahagian atas skrin.',
  'help.think': 'FIKIR',
  'help.think.p': 'Buah-buahan melambung — setiap satu membawa satu pilihan jawapan.',
  'help.slice': 'TEBAS',
  'help.slice.p': 'Leret terus merentasi buah yang betul. Ketik juga boleh.',
  'help.streak': 'RENTETAN',
  'help.streak.p': 'Jawab betul berturut-turut untuk pengganda sehingga ×{maxMult}.',
  'help.correct': '✓ Betul',
  'help.correct.p': 'Mata, bonus kelajuan, dan rentetan anda bertambah.',
  'help.wrong': '✗ Salah',
  'help.wrong.p': 'Hilang {wrongPenalty} mata dan satu nyawa. Buah yang betul akan ditunjukkan.',
  'help.slow': '⏳ Terlalu lambat',
  'help.slow.p': 'Hilang {missPenalty} mata dan rentetan. Hanya mod Bertahan mengambil nyawa.',
  'help.bomb': '✖ Bom',
  'help.bomb.p': 'Bom gelap muncul lewat dalam pusingan. Jangan sekali-kali tebas.',
  'help.kbd': 'Papan kekunci:',
  'help.kbd.slice': 'tebas buah dari kiri ke kanan.',
  'help.kbd.pause': 'untuk jeda.',
  'help.start': 'SEDIA? MULA',

  /* ---- HUD permainan ---- */
  'hud.score': 'MARKAH',
  'hud.streak': 'RENTETAN',
  'hud.lives': 'NYAWA',
  'hud.time': 'MASA',
  'hud.stage': 'TAHAP',
  'hud.question': 'SOALAN',
  'hud.answered': 'DIJAWAB',
  'hud.sound': 'Bunyi hidup atau mati',
  'hud.pause': 'Jeda',
  'hud.end': 'Tamatkan pusingan',
  'q.cue': 'Tebas jawapan yang betul',

  'count.ready': 'BERSEDIA',
  'count.go': 'MULA!',

  /* ---- kad maklum balas ---- */
  'fb.correct': 'BETUL!',
  'fb.streak': 'RENTETAN ×{n}',
  'fb.points': '+{n} mata',
  'fb.wrong': '✗ BELUM TEPAT',
  'fb.miss': '⏱ MASA TAMAT',
  'fb.answer': 'Jawapan: {answer}',
  'fb.why': '“{chosen}” — {note}',
  'fb.remember': 'Ingat',
  'fb.alt.en': 'Dalam BI',
  'fb.alt.ms': 'Dalam BM',

  'pause.head': 'Dijeda',
  'pause.resume': 'SAMBUNG',
  'pause.end': 'TAMATKAN PUSINGAN',

  /* ---- sepanduk rentetan dan teks di kanvas ---- */
  'combo.0': 'BAGUS',
  'combo.1': 'BERAPI',
  'combo.2': 'MEMBARA',
  'combo.3': 'TIADA TANDINGAN',
  'fx.perfect': 'SEMPURNA!',
  'fx.bomb': 'BOM!  −{n}',

  /* ---- keputusan ---- */
  'res.lives': 'NYAWA HABIS',
  'res.time': 'MASA TAMAT!',
  'res.quit': 'PUSINGAN DITAMATKAN',
  'res.complete': 'PUSINGAN SELESAI!',
  'res.rating': 'Penilaian pusingan: {stars} daripada 3 bintang',
  'res.score': 'MARKAH',
  'res.newBest': 'REKOD PERIBADI BAHARU!',
  'res.best': 'Terbaik dalam {mode}: {score}',
  'res.correct': 'Betul',
  'res.accuracy': 'Ketepatan',
  'res.streak': 'Rentetan terbaik',
  'res.wrong': 'Salah',
  'res.slow': 'Terlalu lambat',
  'res.reaction': 'Purata reaksi',
  'res.nextHead': 'LANGKAH SETERUSNYA',
  'res.nextMisses': 'Latih {topic} — {n} kesilapan dalam pusingan ini',
  'res.nextPlain': 'Latih {topic}',
  'res.practiseBtn': 'LATIH {topic}',
  'res.strong': '⭐ Kuat',
  'res.revise': '📚 Ulang kaji',
  'res.again': 'MAIN LAGI',
  'res.change': 'TUKAR TOPIK ATAU MOD',
  'res.menu': 'MENU UTAMA',

  'msg.warmup': 'Memanaskan badan selesai. Sekarang main satu pusingan penuh!',
  'msg.outstanding': 'Cemerlang — pantas DAN tepat.',
  'msg.excellent': 'Fizik yang hebat. Cuba kelajuan lebih tinggi pula.',
  'msg.reflexes': 'Refleks yang hebat. Kekalkan ketepatan itu.',
  'msg.solid': 'Kerja yang mantap. Cuba ingat dengan lebih pantas.',
  'msg.gettingThere': 'Semakin baik. Ulang kaji topik di bawah.',
  'msg.slowDown': 'Perlahan sedikit dan baca — ketepatan lebih penting daripada kelajuan.',
  'msg.practice': 'Cuba Mod Latihan untuk membina asas dahulu.',

  /* ---- dialog ---- */
  'dlg.cancel': 'BATAL',
  'dlg.confirm': 'SAHKAN',
  'dlg.end.title': 'Tamatkan pusingan ini?',
  'dlg.end.body': 'Pusingan anda akan tamat sekarang dan keputusannya akan dipaparkan.',
  'dlg.end.cancel': 'TERUSKAN BERMAIN',
  'dlg.end.confirm': 'TAMATKAN PUSINGAN',
  'dlg.reset.title': 'Tetapkan semula semua kemajuan?',
  'dlg.reset.body': 'Ini akan memadam penguasaan, sejarah soalan dan markah terbaik anda pada peranti ini. Tetapan anda, seperti bahasa dan bunyi, dikekalkan. Tindakan ini tidak boleh dibatalkan.',
  'dlg.reset.confirm': 'TETAPKAN SEMULA',
  'snack.reset.title': 'Kemajuan ditetapkan semula',
  'snack.reset.body': 'Anda bermula dari awal.'
});
