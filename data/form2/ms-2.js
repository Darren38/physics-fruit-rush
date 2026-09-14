/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  SOALAN BM: TINGKATAN 2 (2 daripada 2)
   Haba · Gelombang Bunyi · Angkasa Lepas
   Istilah mengikut buku teks Sains Tingkatan 2 KSSM (Bab 9-13).
   Nama planet mengikut istilah Melayu: Utarid, Zuhrah, Bumi, Marikh,
   Musytari, Zuhal, Uranus, Neptun.
   Format dan peraturan: lihat data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Heat': 'Haba',
    'Heat and Temperature': 'Haba dan Suhu',
    'Heat Transfer': 'Pemindahan Haba',
    'Sound Waves': 'Gelombang Bunyi',
    'Uses of Sound': 'Kegunaan Gelombang Bunyi',
    'Space': 'Angkasa Lepas',
    'Stars and Galaxies': 'Bintang dan Galaksi',
    'Solar System': 'Sistem Suria',
    'Space Technology': 'Teknologi Angkasa Lepas'
  });

  M.add({

    /* ---------- HABA DAN SUHU ---------- */
    'Heat is a form of?': ['Haba ialah satu bentuk?', ['Tenaga', 'Daya', 'Jirim', 'Tekanan'], 'Haba ialah tenaga yang mengalir kerana perbezaan suhu.'],
    'Temperature tells us how?': ['Suhu memberitahu kita tentang?', ['Darjah panas atau sejuk', 'Berat sesuatu', 'Saiz sesuatu', 'Laju gerakan'], 'Suhu ialah darjah kepanasan, dalam °C atau K.'],
    'The SI unit of heat energy is the?': ['Unit SI bagi tenaga haba ialah?', ['joule', 'darjah Celsius', 'kelvin', 'watt'], 'Haba ialah tenaga, jadi diukur dalam joule (J).', {'darjah Celsius': 'Darjah Celsius mengukur suhu, bukan haba.'}],
    'The SI unit of temperature is the?': ['Unit SI bagi suhu ialah?', ['kelvin', 'joule', 'newton', 'watt'], 'Suhu diukur dalam kelvin (K) atau °C.'],
    'A thermometer measures?': ['Termometer mengukur?', ['Suhu', 'Tenaga haba', 'Jisim', 'Tekanan'], 'Termometer menunjukkan darjah kepanasan sesuatu.', {'Tenaga haba': 'Termometer menunjukkan suhu, bukan jumlah haba.'}],
    'Heat always flows from a?': ['Haba sentiasa mengalir dari objek?', ['Lebih panas ke lebih sejuk', 'Lebih sejuk ke lebih panas', 'Lebih besar ke lebih kecil', 'Lebih berat ke lebih ringan'], 'Haba mengalir sehingga kedua-duanya mencapai suhu yang sama.'],
    'Two objects at the SAME temperature are in?': ['Dua objek pada suhu yang SAMA berada dalam?', ['Keseimbangan terma', 'Gerakan', 'Pengembangan', 'Sinaran'], 'Tiada aliran haba bersih antara kedua-duanya.'],
    'A hot drink left on a table will?': ['Minuman panas yang dibiarkan di atas meja akan?', ['Sejuk ke suhu bilik', 'Kekal panas selamanya', 'Menjadi lebih panas', 'Membeku'], 'Haba mengalir keluar sehingga suhunya sama dengan persekitaran.'],
    'Heating a substance makes its particles?': ['Memanaskan sesuatu bahan menyebabkan zarahnya?', ['Bergerak lebih laju', 'Bergerak lebih perlahan', 'Berhenti bergerak', 'Menjadi lebih kecil'], 'Lebih banyak haba bermakna lebih banyak tenaga kinetik.'],
    'A big pot of warm water or a cup of boiling water: more heat energy?': ['Periuk besar air suam atau secawan air mendidih: yang mana lebih banyak haba?', ['Periuk besar', 'Cawan', 'Sama banyak', 'Tiada'], 'Tenaga haba bergantung juga pada jisim, bukan suhu sahaja.', {'Cawan': 'Cawan lebih panas, tetapi periuk menyimpan jauh lebih banyak tenaga.'}],

    /* ---------- PEMINDAHAN HABA ---------- */
    'Heat transfer through a solid is called?': ['Pemindahan haba melalui pepejal dipanggil?', ['Konduksi', 'Perolakan', 'Sinaran', 'Penyejatan'], 'Zarah yang bergetar memindahkan haba di sepanjang pepejal.'],
    'Heat transfer by moving liquids or gases is?': ['Pemindahan haba oleh cecair atau gas yang bergerak ialah?', ['Perolakan', 'Konduksi', 'Sinaran', 'Pantulan'], 'Bendalir panas naik dan bendalir sejuk turun.'],
    'Heat from the Sun reaches the Earth by?': ['Haba dari Matahari sampai ke Bumi melalui?', ['Sinaran', 'Konduksi', 'Perolakan', 'Penyejatan'], 'Sinaran tidak memerlukan medium - ia merentasi ruang kosong.', {'Perolakan': 'Angkasa tiada udara, jadi perolakan tidak boleh berlaku.'}],
    'Which is the BEST conductor of heat?': ['Yang manakah konduktor haba TERBAIK?', ['Sudu logam', 'Sudu kayu', 'Sudu plastik', 'Sudu getah'], 'Logam mengkonduksikan haba dengan baik.'],
    'Why do pots have wooden or plastic handles?': ['Mengapakah periuk mempunyai pemegang kayu atau plastik?', ['Ia konduktor yang lemah', 'Ia berat', 'Ia nampak cantik', 'Ia mudah melebur'], 'Pemegang penebat kekal sejuk untuk dipegang.'],
    'A sea breeze during the day is caused by?': ['Bayu laut pada waktu siang disebabkan oleh?', ['Perolakan', 'Konduksi', 'Pantulan', 'Kemagnetan'], 'Udara panas di atas daratan naik; udara laut yang lebih sejuk masuk.'],
    'Which surface is the BEST absorber of radiation?': ['Permukaan manakah penyerap sinaran TERBAIK?', ['Hitam pudar', 'Putih berkilat', 'Perak berkilat', 'Putih licin'], 'Permukaan gelap dan pudar menyerap dan memancarkan sinaran dengan baik.'],
    'Why are houses in hot countries often painted white?': ['Mengapakah rumah di negara panas selalu dicat putih?', ['Putih memantulkan haba', 'Putih menyerap haba', 'Putih lebih murah', 'Putih mengkonduksi haba'], 'Warna cerah dan berkilat memantulkan sinaran.', {'Putih menyerap haba': 'Putih MEMANTULKAN haba; hitam menyerapnya.'}],
    'Where is a room heater best placed?': ['Di manakah pemanas bilik paling sesuai diletakkan?', ['Di bahagian bawah', 'Dekat siling', 'Di luar bilik', 'Dalam almari'], 'Udara panas naik dan tersebar ke seluruh bilik melalui perolakan.'],
    'A vacuum flask keeps drinks hot by reducing?': ['Kelalang vakum mengekalkan minuman panas dengan mengurangkan?', ['Semua pemindahan haba', 'Sinaran sahaja', 'Cahaya sahaja', 'Beratnya sendiri'], 'Vakum menghalang konduksi dan perolakan; lapisan perak menghalang sinaran.'],
    'Why does a metal chair feel colder than a wooden chair in the same room?': ['Dalam bilik sama, mengapakah kerusi logam terasa lebih sejuk daripada kayu?', ['Logam konduktor lebih baik', 'Logam lebih sejuk', 'Kayu menghasilkan haba', 'Logam tiada haba'], 'Kedua-duanya pada suhu bilik; logam menarik haba dari kulit lebih cepat.', {'Logam lebih sejuk': 'Kedua-duanya pada suhu yang SAMA - logam cuma konduktor lebih baik.'}],

    /* ---------- GELOMBANG BUNYI ---------- */
    'Sound is produced by?': ['Bunyi dihasilkan oleh?', ['Objek yang bergetar', 'Sinar cahaya', 'Magnet', 'Haba'], 'Objek yang bergetar menyebabkan udara bergetar.'],
    'Sound cannot travel through?': ['Bunyi tidak boleh merambat melalui?', ['Vakum', 'Udara', 'Air', 'Keluli'], 'Bunyi memerlukan zarah untuk memindahkan getaran.', {'Keluli': 'Bunyi merambat LEBIH LAJU dalam keluli berbanding udara.'}],
    'Sound travels FASTEST through?': ['Bunyi merambat PALING LAJU melalui?', ['Pepejal', 'Cecair', 'Gas', 'Vakum'], 'Zarah dalam pepejal paling rapat antara satu sama lain.'],
    'Sound waves are?': ['Gelombang bunyi ialah gelombang?', ['Membujur', 'Melintang', 'Elektromagnet', 'Cahaya halimunan'], 'Zarah udara bergetar selari dengan arah perambatan.'],
    'The loudness of a sound depends on its?': ['Kenyaringan bunyi bergantung pada?', ['Amplitud', 'Frekuensi', 'Warna', 'Laju'], 'Amplitud yang lebih besar menghasilkan bunyi lebih nyaring.', {'Frekuensi': 'Frekuensi menentukan KELANGSINGAN, bukan kenyaringan.'}],
    'The pitch of a sound depends on its?': ['Kelangsingan bunyi bergantung pada?', ['Frekuensi', 'Amplitud', 'Kenyaringan', 'Laju'], 'Frekuensi yang lebih tinggi menghasilkan kelangsingan lebih tinggi.'],
    'The unit of frequency is the?': ['Unit bagi frekuensi ialah?', ['hertz', 'desibel', 'meter', 'saat'], '1 Hz = satu getaran sesaat.', {'desibel': 'Desibel mengukur kenyaringan.'}],
    'An echo is a sound that has been?': ['Gema ialah bunyi yang telah?', ['Dipantulkan', 'Diserap', 'Dibiaskan', 'Dikuatkan'], 'Bunyi dipantulkan oleh permukaan keras dan kembali.'],
    'Humans can hear frequencies from about?': ['Manusia boleh mendengar frekuensi kira-kira dari?', ['20 Hz hingga 20 000 Hz', '0 Hz hingga 20 Hz', '1 Hz hingga 100 Hz', '1 MHz hingga 5 MHz'], 'Bunyi melebihi 20 000 Hz ialah ultrabunyi.'],
    'You see lightning, then hear thunder 3 s later. Why the delay?': ['Anda nampak kilat, kemudian dengar guruh 3 s kemudian. Mengapa lewat?', ['Cahaya bergerak lebih laju', 'Bunyi bergerak lebih laju', 'Guruh terhasil kemudian', 'Mata lebih pantas'], 'Cahaya tiba hampir serta-merta; bunyi hanya kira-kira 340 m setiap saat.', {'Bunyi bergerak lebih laju': 'Cahaya kira-kira sejuta kali lebih laju daripada bunyi.'}],

    /* ---------- KEGUNAAN GELOMBANG BUNYI ---------- */
    'Sound above 20 000 Hz is called?': ['Bunyi melebihi 20 000 Hz dipanggil?', ['Ultrabunyi', 'Infrabunyi', 'Gema', 'Bising'], 'Kelangsingannya terlalu tinggi untuk didengar oleh manusia.'],
    'Bats find their prey using?': ['Kelawar mencari mangsa menggunakan?', ['Ekolokasi', 'Kemagnetan', 'Inframerah', 'Bau sahaja'], 'Kelawar mendengar gema daripada bunyinya sendiri.'],
    'Doctors use ultrasound to see?': ['Doktor menggunakan ultrabunyi untuk melihat?', ['Bayi dalam kandungan', 'Tulang patah dengan jelas', 'Bintang pada waktu malam', 'Stesen radio'], 'Gema ultrabunyi membina imej dengan selamat.', {'Tulang patah dengan jelas': 'Tulang patah dilihat menggunakan sinar-X.'}],
    'Ships measure the depth of the sea using?': ['Kapal mengukur kedalaman laut menggunakan?', ['Sonar', 'Radar', 'Kompas', 'Termometer'], 'Sonar mengukur masa gema dari dasar laut.', {'Radar': 'Radar menggunakan gelombang radio, bukan bunyi.'}],
    'Dolphins use echolocation to?': ['Ikan lumba-lumba menggunakan ekolokasi untuk?', ['Mencari makanan dan objek', 'Memanaskan badan', 'Bernafas dalam air', 'Melihat warna'], 'Gema yang kembali memberitahu kedudukan sesuatu.'],
    'Ultrasound is used to clean?': ['Ultrabunyi digunakan untuk membersihkan?', ['Barang kemas dan kanta', 'Jalan berlumpur', 'Pakaian dengan tangan', 'Tayar kereta'], 'Getaran menanggalkan kotoran daripada objek yang halus.'],
    'Soft furnishings in a cinema are used to?': ['Kelengkapan lembut dalam pawagam digunakan untuk?', ['Menyerap bunyi', 'Memantulkan bunyi', 'Menghasilkan gema', 'Menguatkan bunyi'], 'Bahan yang lembut dan kasar mengurangkan gema.'],
    'Why do people wear ear protectors near loud machines?': ['Mengapakah orang memakai pelindung telinga dekat mesin yang bising?', ['Melindungi pendengaran', 'Mendengar lebih baik', 'Memanaskan telinga', 'Nampak selamat'], 'Bunyi yang sangat kuat boleh merosakkan telinga.'],
    'Infrasound is sound BELOW about?': ['Infrabunyi ialah bunyi DI BAWAH kira-kira?', ['20 Hz', '200 Hz', '2000 Hz', '20 000 Hz'], 'Gajah boleh berkomunikasi menggunakan infrabunyi.'],
    'Sonar echo returns after 2 s. Sound travels at 1500 m/s in water. Depth?': ['Gema sonar kembali selepas 2 s. Laju bunyi dalam air 1500 m/s. Kedalaman?', ['1500 m', '3000 m', '750 m', '6000 m'], 'Kedalaman = (1500 × 2) ÷ 2 = 1500 m, kerana bunyi pergi dan balik.', {'3000 m': 'Bunyi turun DAN naik semula, jadi bahagikan jarak dengan dua.'}],

    /* ---------- BINTANG DAN GALAKSI ---------- */
    'The Sun is a?': ['Matahari ialah sebuah?', ['Bintang', 'Planet', 'Bulan', 'Komet'], 'Matahari ialah bintang yang paling dekat dengan Bumi.'],
    'Our galaxy is called the?': ['Galaksi kita dipanggil?', ['Bima Sakti', 'Andromeda', 'Sistem Suria', 'Orion'], 'Bima Sakti mengandungi berbilion bintang.', {'Sistem Suria': 'Sistem Suria ialah Matahari dan planetnya - sebahagian kecil sahaja.'}],
    'A cloud of gas and dust where stars are born is a?': ['Awan gas dan debu tempat bintang lahir ialah?', ['Nebula', 'Komet', 'Lohong hitam', 'Planet'], 'Graviti menarik gas bergabung menjadi bintang baharu.'],
    'The Milky Way galaxy has the shape of a?': ['Galaksi Bima Sakti berbentuk?', ['Pilin', 'Kubus', 'Garis lurus', 'Segi tiga'], 'Kita melihatnya dari sisi sebagai jalur bintang merentasi langit.'],
    'Stars produce light and heat by?': ['Bintang menghasilkan cahaya dan haba melalui?', ['Pelakuran nuklear', 'Pembakaran arang', 'Pantulan cahaya', 'Elektrik'], 'Nukleus hidrogen bercantum menjadi helium dan membebaskan tenaga.'],
    'The colour of a star tells us its?': ['Warna bintang memberitahu kita tentang?', ['Suhu permukaannya', 'Umurnya yang tepat', 'Jaraknya', 'Jisimnya sahaja'], 'Bintang biru paling panas; bintang merah lebih sejuk.'],
    'Which star is the HOTTEST?': ['Bintang manakah yang PALING PANAS?', ['Bintang biru', 'Bintang merah', 'Bintang jingga', 'Bintang kuning'], 'Bintang biru mempunyai permukaan paling panas.'],
    'A group of stars forming a pattern in the sky is a?': ['Sekumpulan bintang yang membentuk corak di langit ialah?', ['Buruj', 'Galaksi', 'Nebula', 'Orbit'], 'Contohnya buruj Orion dan buruj Pari.'],
    'A very massive star may end its life as a?': ['Bintang yang sangat besar jisimnya mungkin berakhir sebagai?', ['Lohong hitam', 'Planet', 'Komet', 'Bulan'], 'Terasnya runtuh begitu kuat sehingga cahaya pun tidak dapat keluar.'],
    'A light-year is a unit of?': ['Tahun cahaya ialah unit bagi?', ['Jarak', 'Masa', 'Laju', 'Kecerahan'], 'Ia ialah jarak yang dilalui cahaya dalam satu tahun.', {'Masa': 'Walaupun namanya begitu, tahun cahaya mengukur JARAK.'}],

    /* ---------- SISTEM SURIA ---------- */
    'The planet closest to the Sun is?': ['Planet yang paling dekat dengan Matahari ialah?', ['Utarid', 'Zuhrah', 'Bumi', 'Marikh'], 'Utarid ialah planet paling kecil dan paling dalam.'],
    'The largest planet in the Solar System is?': ['Planet terbesar dalam Sistem Suria ialah?', ['Musytari', 'Zuhal', 'Bumi', 'Neptun'], 'Diameter Musytari lebih daripada 11 kali diameter Bumi.'],
    'Which planet is known as the Red Planet?': ['Planet manakah dikenali sebagai Planet Merah?', ['Marikh', 'Zuhrah', 'Musytari', 'Utarid'], 'Debu besi oksida memberi warna merah kepada Marikh.'],
    'How many planets orbit the Sun?': ['Berapakah bilangan planet yang mengorbit Matahari?', ['Lapan', 'Sembilan', 'Tujuh', 'Sepuluh'], 'Pluto dikelaskan semula sebagai planet kerdil pada 2006.'],
    'The planets move around the Sun in paths called?': ['Planet bergerak mengelilingi Matahari dalam laluan yang dipanggil?', ['Orbit', 'Paksi', 'Galaksi', 'Kawah'], 'Graviti mengekalkan setiap planet dalam orbitnya.'],
    'The HOTTEST planet is?': ['Planet yang PALING PANAS ialah?', ['Zuhrah', 'Utarid', 'Marikh', 'Bumi'], 'Atmosfera karbon dioksida yang tebal memerangkap haba.', {'Utarid': 'Utarid lebih dekat, tetapi Zuhrah memerangkap lebih banyak haba.'}],
    'Which planet has the most famous rings?': ['Planet manakah mempunyai gelang yang paling terkenal?', ['Zuhal', 'Marikh', 'Utarid', 'Zuhrah'], 'Gelangnya terdiri daripada ais dan batuan.'],
    'Day and night happen because the Earth is?': ['Siang dan malam berlaku kerana Bumi?', ['Berputar pada paksinya', 'Mengorbit Matahari', 'Mengorbit Bulan', 'Bergerak dekat Matahari'], 'Satu putaran mengambil masa kira-kira 24 jam.', {'Mengorbit Matahari': 'Satu orbit mengelilingi Matahari mengambil masa SETAHUN, bukan sehari.'}],
    'Most asteroids are found between Mars and?': ['Kebanyakan asteroid ditemui di antara Marikh dan?', ['Musytari', 'Bumi', 'Zuhrah', 'Zuhal'], 'Kawasan ini dipanggil lingkaran asteroid.'],
    'A comet has a glowing tail when it is?': ['Komet mempunyai ekor yang bercahaya apabila ia?', ['Dekat dengan Matahari', 'Jauh dari Matahari', 'Di belakang planet', 'Di dalam bulan'], 'Matahari memanaskan aisnya, yang mengalir keluar sebagai ekor.'],

    /* ---------- TEKNOLOGI ANGKASA LEPAS ---------- */
    'A vehicle that carries astronauts or satellites into space is a?': ['Kenderaan yang membawa angkasawan atau satelit ke angkasa lepas ialah?', ['Roket', 'Kapal selam', 'Kereta api', 'Peluncur'], 'Roket menolak gas panas ke bawah untuk bergerak ke atas.'],
    'An uncrewed spacecraft sent to explore other planets is a?': ['Kapal angkasa tanpa manusia yang dihantar meneroka planet lain ialah?', ['Kuar angkasa', 'Stesen angkasa', 'Belon udara panas', 'Teleskop'], 'Kuar seperti Voyager menghantar data kembali ke Bumi.'],
    'Which instrument helps us see distant stars?': ['Alat manakah membantu kita melihat bintang yang jauh?', ['Teleskop', 'Mikroskop', 'Periskop', 'Stetoskop'], 'Teleskop mengumpul dan memfokuskan cahaya dari jauh.'],
    'A rocket moves forward because hot gas is pushed?': ['Roket bergerak ke hadapan kerana gas panas ditolak?', ['Ke belakang', 'Ke hadapan', 'Ke sisi', 'Ke dalam bahan api'], 'Menolak gas ke satu arah menolak roket ke arah bertentangan.'],
    'Astronauts float in a space station because they are?': ['Angkasawan terapung dalam stesen angkasa kerana mereka?', ['Jatuh bebas keliling Bumi', 'Terlalu jauh dari graviti', 'Lebih ringan daripada udara', 'Dipegang oleh magnet'], 'Graviti masih bertindak; mereka jatuh mengelilingi Bumi bersama stesen.', {'Terlalu jauh dari graviti': 'Graviti di sana masih kira-kira 90% sekuat di Bumi.'}],
    'The first person to walk on the Moon was?': ['Orang pertama yang berjalan di Bulan ialah?', ['Neil Armstrong', 'Yuri Gagarin', 'Isaac Newton', 'Galileo Galilei'], 'Beliau menjejakkan kaki di Bulan pada tahun 1969.', {'Yuri Gagarin': 'Gagarin ialah orang pertama ke ANGKASA, pada tahun 1961.'}],
    'The first Malaysian astronaut, who flew in 2007, was?': ['Angkasawan pertama Malaysia, yang terbang pada 2007, ialah?', ['Sheikh Muszaphar Shukor', 'Neil Armstrong', 'Yuri Gagarin', 'Buzz Aldrin'], 'Beliau terbang ke Stesen Angkasa Antarabangsa pada 2007.'],
    'Space telescopes are placed above the atmosphere to?': ['Teleskop angkasa diletakkan di atas atmosfera untuk?', ['Mendapat imej lebih jelas', 'Lebih dekat dengan bintang', 'Kekal hangat', 'Menjimatkan bahan api'], 'Atmosfera mengaburkan dan menghalang sebahagian cahaya.', {'Lebih dekat dengan bintang': 'Jarak yang dijimatkan sangat kecil - kelebihannya ialah cahaya yang jelas.'}],
    'Which space technology gives us weather forecasts?': ['Teknologi angkasa manakah memberikan ramalan cuaca?', ['Satelit cuaca', 'Kuar ke Marikh', 'Kenderaan di Bulan', 'Teleskop'], 'Satelit memotret awan dan ribut dari orbit.'],
    'Rockets must reach a very high speed to?': ['Roket mesti mencapai laju yang sangat tinggi untuk?', ['Melepasi graviti Bumi', 'Mengelak awan', 'Kekal sejuk', 'Menjimatkan oksigen'], 'Jika terlalu perlahan, graviti akan menariknya kembali.']
  });

})(window.PFR.Bank.lang('ms', 2));
