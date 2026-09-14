/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  SOALAN BM: CAHAYA
   Fizik Tingkatan 4 KSSM, Bab 5-6
   Topik 20-23: pantulan cahaya, pantulan dalam penuh, pembiasan,
   spektrum elektromagnet.
   Format: lihat data/ms/mechanics-1.ms.js dan data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Light': 'Cahaya',
    'Reflection of Light': 'Pantulan Cahaya',
    'Total Internal Reflection': 'Pantulan Dalam Penuh',
    'Refraction of Light': 'Pembiasan Cahaya',
    'EM Spectrum': 'Spektrum EM',
    'Electromagnetic Spectrum': 'Spektrum Elektromagnet'
  });

  M.add({

    /* ---------- 20. PANTULAN CAHAYA ---------- */
    'The angle of incidence is measured from?': ['Sudut tuju diukur dari?', ['Garis normal', 'Permukaan', 'Tepi cermin', 'Sinar pantulan'], 'Sentiasa ukur sudut optik dari garis normal.', {'Permukaan': 'Sudut optik SENTIASA diukur dari garis normal.'}],
    'Law of reflection: angle i equals?': ['Hukum pantulan: sudut i sama dengan?', ['Sudut r', 'Dua kali sudut r', '90° − r', 'Sifar'], 'Sudut tuju dan sudut pantulan adalah sama.'],
    'An image in a plane mirror is?': ['Imej dalam cermin satah adalah?', ['Maya, tegak, sama saiz', 'Nyata dan songsang', 'Maya dan diperbesar', 'Nyata dan sama saiz'], 'Ia tidak boleh ditangkap pada skrin.', {'Nyata dan songsang': 'Imej cermin tidak boleh ditangkap pada skrin, jadi ia maya.'}],
    'Image distance in a plane mirror equals?': ['Jarak imej dalam cermin satah sama dengan?', ['Jarak objek', 'Dua kali jarak objek', 'Separuh jarak objek', 'Sifar'], 'Imej berada di belakang cermin sejauh objek di hadapan.'],
    'Text looks reversed in a mirror. This is called?': ['Tulisan kelihatan terbalik dalam cermin. Ini dipanggil?', ['Songsang sisi', 'Songsang tegak', 'Pembelauan', 'Pembiasan'], 'Kiri dan kanan kelihatan bertukar.'],
    'A periscope is built from?': ['Periskop dibina daripada?', ['Dua cermin satah', 'Satu cermin satah', 'Kanta cekung', 'Cermin cembung'], 'Dua cermin pada 45° mengalihkan garis penglihatan.'],
    'Convex mirrors are used as blind-spot mirrors because they give?': ['Cermin cembung digunakan di selekoh tajam kerana memberikan?', ['Medan penglihatan luas', 'Imej diperbesar', 'Imej nyata', 'Imej songsang'], 'Ia mencapahkan cahaya dari kawasan yang luas.'],
    'Concave mirrors are used in?': ['Cermin cekung digunakan dalam?', ['Pemantul lampu suluh', 'Cermin pandang belakang', 'Cermin keselamatan kedai', 'Periskop'], 'Ia menghasilkan alur cahaya yang selari.'],
    'A rough surface causes?': ['Permukaan kasar menyebabkan?', ['Pantulan resap', 'Pantulan sekata', 'Pembiasan', 'Pantulan dalam penuh'], 'Sinar tersebar ke banyak arah.', {'Pantulan sekata': 'Pantulan sekata memerlukan permukaan yang licin.'}],
    'A ray hits a mirror at 30° to the SURFACE. Angle of reflection?': ['Sinar mengenai cermin pada 30° dari PERMUKAAN. Sudut pantulan?', ['60°', '30°', '90°', '120°'], 'Dari garis normal: 90 − 30 = 60°, jadi r = 60°.', {'30°': 'Itu dari permukaan. Dari garis normal ialah 90 − 30 = 60°.'}],
    'A ray strikes a mirror along the normal. Angle of reflection?': ['Sinar mengenai cermin di sepanjang garis normal. Sudut pantulan?', ['0°', '45°', '90°', '180°'], 'Ia terpantul terus kembali melalui laluan yang sama.'],

    /* ---------- 21. PANTULAN DALAM PENUH ---------- */
    'TIR happens when the angle of incidence is?': ['Pantulan dalam penuh berlaku apabila sudut tuju?', ['Melebihi sudut genting', 'Di bawah sudut genting', 'Tepat 0°', 'Tepat 90°'], 'Melebihi sudut genting, tiada cahaya terbias keluar.', {'Di bawah sudut genting': 'Di bawah sudut genting, cahaya terbias keluar.'}],
    'Optical fibres work using?': ['Gentian optik berfungsi menggunakan?', ['Pantulan dalam penuh', 'Pembiasan sahaja', 'Pembelauan', 'Interferens'], 'Cahaya terpantul berulang kali di dalam teras.'],
    'TIR needs light to travel from?': ['Pantulan dalam penuh memerlukan cahaya bergerak dari?', ['Tumpat ke kurang tumpat', 'Kurang tumpat ke tumpat', 'Udara ke kaca', 'Vakum ke kaca'], 'Contohnya, kaca ke udara atau air ke udara.', {'Kurang tumpat ke tumpat': 'Pantulan dalam penuh hanya dari medium LEBIH TUMPAT ke kurang tumpat.', 'Udara ke kaca': 'Itu kurang tumpat ke tumpat - arah yang salah.'}],
    'At exactly the critical angle, the refracted ray travels at?': ['Pada sudut genting, sinar biasan bergerak pada?', ['90° dari garis normal', '0° dari garis normal', '45° dari garis normal', 'Sudut yang sama dengan i'], 'Ia menyusur di sepanjang permukaan sempadan.'],
    'Formula for the critical angle?': ['Rumus sudut genting?', ['sin c = 1 ÷ n', 'sin c = n', 'tan c = n', 'cos c = 1 ÷ n'], 'n lebih besar memberi sudut genting lebih kecil.', {'sin c = n': 'Rumusnya sin c = 1 ÷ n, jadi n besar memberi c kecil.'}],
    'A mirage is caused by?': ['Logamaya disebabkan oleh?', ['Pantulan dalam penuh', 'Pembelauan', 'Interferens', 'Cermin di atas jalan'], 'Udara panas berhampiran jalan kurang tumpat secara optik.'],
    'Which device uses TIR?': ['Alat manakah menggunakan pantulan dalam penuh?', ['Periskop prisma', 'Kanta cembung', 'Cermin satah', 'Cermin cekung'], 'Prisma 45° membelokkan cahaya 90° tanpa lapisan perak.'],
    'A HIGHER refractive index gives a critical angle that is?': ['Indeks biasan yang LEBIH TINGGI memberi sudut genting yang?', ['Lebih kecil', 'Lebih besar', 'Tidak berubah', 'Sifar'], 'sin c = 1 ÷ n, jadi n lebih besar bermaksud c lebih kecil.', {'Lebih besar': 'sin c = 1 ÷ n, jadi n lebih besar memberi sudut LEBIH KECIL.'}],
    'Why does a diamond sparkle?': ['Mengapakah berlian berkilauan?', ['Sudut genting kecil', 'Sangat tumpat', 'Membelaukan cahaya', 'Berwarna'], 'n ≈ 2.42, jadi c ≈ 24° dan cahaya terperangkap.'],
    'Endoscopes used by doctors rely on?': ['Endoskop yang digunakan oleh doktor bergantung pada?', ['Pantulan dalam penuh', 'Pembelauan', 'Interferens', 'Pelembapan'], 'Gentian optik membawa cahaya dan imej dari dalam badan.'],
    'n = 1.5. Critical angle ≈?': ['n = 1.5. Sudut genting ≈?', ['42°', '30°', '48°', '60°'], 'sin c = 1 ÷ 1.5 = 0.667, jadi c ≈ 41.8°.', {'30°': '30° ialah sudut genting bagi n = 2.0.'}],
    'n = 2.0. Critical angle ≈?': ['n = 2.0. Sudut genting ≈?', ['30°', '45°', '60°', '15°'], 'sin c = 0.5, jadi c = 30°.'],

    /* ---------- 22. PEMBIASAN CAHAYA ---------- */
    'Refraction is caused by a change in the ... of light.': ['Pembiasan disebabkan oleh perubahan ... cahaya.', ['Laju', 'Warna', 'Frekuensi', 'Amplitud'], 'Cahaya menjadi perlahan dalam medium lebih tumpat lalu terbias.', {'Frekuensi': 'Frekuensi tidak pernah berubah; LAJU yang berubah.', 'Warna': 'Warna tidak berubah - laju yang berubah.'}],
    'Light travels fastest in?': ['Cahaya bergerak paling laju dalam?', ['Vakum', 'Air', 'Kaca', 'Berlian'], 'c = 3 × 10⁸ m/s ialah laju maksimum.', {'Air': 'Cahaya paling perlahan dalam medium paling tumpat.', 'Berlian': 'Berlian mempunyai n tertinggi, jadi cahaya paling perlahan di situ.'}],
    'Light going from air into glass bends?': ['Cahaya dari udara ke kaca terbias?', ['Mendekati normal', 'Menjauhi normal', 'Sepanjang normal', 'Terus ke belakang'], 'Memasuki medium lebih tumpat, cahaya terbias mendekati normal.', {'Menjauhi normal': 'Memasuki medium LEBIH TUMPAT, cahaya terbias MENDEKATI normal.'}],
    'Light leaving glass into air bends?': ['Cahaya dari kaca ke udara terbias?', ['Menjauhi normal', 'Mendekati normal', 'Tidak terbias', 'Tepat 90°'], 'Lajunya bertambah, jadi ia terbias menjauhi normal.', {'Mendekati normal': 'Keluar ke medium KURANG tumpat, cahaya terbias MENJAUHI normal.'}],
    'Snell’s law for refractive index?': ['Hukum Snell bagi indeks biasan?', ['n = sin i ÷ sin r', 'n = sin r ÷ sin i', 'n = i ÷ r', 'n = r ÷ i'], 'Nisbah sinus, dari udara ke dalam medium.', {'n = sin r ÷ sin i': 'Itu terbalik.', 'n = i ÷ r': 'Gunakan SINUS sudut, bukan sudut itu sendiri.'}],
    'During refraction, the frequency?': ['Semasa pembiasan, frekuensi?', ['Kekal sama', 'Bertambah', 'Berkurang', 'Berganda dua'], 'Frekuensi ditetapkan oleh sumber.', {'Bertambah': 'Frekuensi ditetapkan oleh sumber dan tidak pernah berubah.', 'Berkurang': 'Frekuensi ditetapkan oleh sumber dan tidak pernah berubah.'}],
    'During refraction, the wavelength?': ['Semasa pembiasan, panjang gelombang?', ['Berubah', 'Kekal sama', 'Menjadi sifar', 'Sentiasa berganda'], 'v berubah dan f tetap, jadi λ mesti berubah.'],
    'Refractive index of air is about?': ['Indeks biasan udara lebih kurang?', ['1.0', '1.33', '1.5', '2.42'], 'Udara hampir sama dengan vakum.'],
    'Refractive index of water is about?': ['Indeks biasan air lebih kurang?', ['1.33', '1.0', '1.5', '2.42'], 'Kaca kira-kira 1.5 dan berlian kira-kira 2.42.'],
    'A swimming pool looks shallower because of?': ['Kolam renang kelihatan lebih cetek kerana?', ['Pembiasan', 'Pantulan', 'Pembelauan', 'Interferens'], 'Sinar terbias apabila keluar dari air.'],
    'n = real depth ÷ ?': ['n = dalam nyata ÷ ?', ['Dalam ketara', 'Jarak objek', 'Tinggi imej', 'Panjang fokus'], 'Inilah kaedah dalam nyata dan dalam ketara.'],
    'n = c ÷ v means light inside the medium is?': ['n = c ÷ v bermaksud cahaya dalam medium, berbanding vakum, adalah?', ['Lebih perlahan', 'Lebih laju', 'Sama laju', 'Berhenti sepenuhnya'], 'n > 1 sentiasa, jadi v < c.', {'Lebih laju': 'n sentiasa lebih besar daripada 1, jadi v mesti kurang daripada c.'}],
    'sin i = 0.6 and sin r = 0.4. Refractive index?': ['sin i = 0.6 dan sin r = 0.4. Indeks biasan?', ['1.5', '0.67', '2.4', '1.0'], 'n = 0.6 ÷ 0.4 = 1.5.'],
    'Real depth 8 cm, n = 1.33. Apparent depth ≈?': ['Dalam nyata 8 cm, n = 1.33. Dalam ketara ≈?', ['6 cm', '10.6 cm', '4 cm', '8 cm'], 'Dalam ketara = 8 ÷ 1.33 ≈ 6 cm.'],
    'Light speed in a medium with n = 1.5 (c = 3 × 10⁸)?': ['Laju cahaya dalam medium dengan n = 1.5 (c = 3 × 10⁸)?', ['2 × 10⁸ m/s', '4.5 × 10⁸ m/s', '1.5 × 10⁸ m/s', '3 × 10⁸ m/s'], 'v = c ÷ n = 3 × 10⁸ ÷ 1.5.'],

    /* ---------- 23. SPEKTRUM ELEKTROMAGNET ---------- */
    'Which has the LONGEST wavelength?': ['Yang manakah mempunyai panjang gelombang PALING PANJANG?', ['Gelombang radio', 'Sinar gama', 'Sinar-X', 'Sinar ultraungu'], 'Gelombang radio berada di hujung panjang gelombang panjang.', {'Sinar gama': 'Sinar gama mempunyai panjang gelombang PALING PENDEK.', 'Sinar-X': 'Sinar-X berhampiran hujung panjang gelombang pendek.'}],
    'Which has the HIGHEST frequency?': ['Yang manakah mempunyai frekuensi PALING TINGGI?', ['Sinar gama', 'Gelombang radio', 'Gelombang mikro', 'Sinar inframerah'], 'Sinar gama paling bertenaga.', {'Gelombang radio': 'Gelombang radio mempunyai frekuensi PALING RENDAH.', 'Sinar inframerah': 'Inframerah berada di bawah cahaya nampak.'}],
    'Speed of all EM waves in a vacuum?': ['Laju semua gelombang EM dalam vakum?', ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '340 m/s', '3 × 10¹⁰ m/s'], 'Semua gelombang EM bergerak pada laju c dalam vakum.', {'340 m/s': '340 m/s ialah laju BUNYI di udara.'}],
    'Which EM wave can the human eye detect?': ['Gelombang EM manakah dapat dikesan oleh mata manusia?', ['Cahaya nampak', 'Sinar inframerah', 'Sinar ultraungu', 'Sinar-X'], 'Hanya kira-kira 400-700 nm yang boleh dilihat.'],
    'All electromagnetic waves are?': ['Semua gelombang elektromagnet ialah gelombang?', ['Melintang', 'Membujur', 'Mekanikal', 'Bunyi'], 'Medan elektrik dan magnet bergetar berserenjang.', {'Membujur': 'Gelombang EM bergetar BERSERENJANG dengan arah perambatan.', 'Mekanikal': 'Gelombang EM tidak memerlukan medium langsung.'}],
    'Which is used in TV remote controls?': ['Yang manakah digunakan dalam alat kawalan jauh TV?', ['Sinar inframerah', 'Sinar ultraungu', 'Sinar-X', 'Sinar gama'], 'LED inframerah jarak dekat menghantar isyarat.'],
    'Which is used for satellite communication?': ['Yang manakah digunakan untuk komunikasi satelit?', ['Gelombang mikro', 'Sinar gama', 'Sinar-X', 'Sinar ultraungu'], 'Gelombang mikro mudah menembusi atmosfera.'],
    'Which EM wave causes sunburn?': ['Gelombang EM manakah menyebabkan kulit terbakar matahari?', ['Sinar ultraungu', 'Sinar inframerah', 'Gelombang radio', 'Gelombang mikro'], 'UV merosakkan sel kulit.', {'Sinar inframerah': 'Inframerah dirasai sebagai haba; UV merosakkan kulit.'}],
    'Which is used to image broken bones?': ['Yang manakah digunakan untuk mengimej tulang patah?', ['Sinar-X', 'Gelombang radio', 'Sinar inframerah', 'Gelombang mikro'], 'Tulang menyerap sinar-X lebih banyak daripada tisu lembut.'],
    'Which is used to sterilise equipment and treat cancer?': ['Yang manakah digunakan untuk mensteril alatan dan merawat kanser?', ['Sinar gama', 'Gelombang radio', 'Sinar inframerah', 'Cahaya nampak'], 'Sinaran gama membunuh sel dan bakteria.'],
    'Which lies between microwaves and visible light?': ['Yang manakah terletak antara gelombang mikro dan cahaya nampak?', ['Sinar inframerah', 'Sinar ultraungu', 'Sinar-X', 'Gelombang radio'], 'Susunan: radio, mikro, IM, nampak, UV, X, gama.'],
    'Which lies between visible light and X-rays?': ['Yang manakah terletak antara cahaya nampak dan sinar-X?', ['Sinar ultraungu', 'Sinar inframerah', 'Gelombang mikro', 'Sinar gama'], 'UV berada selepas hujung ungu.'],
    'As frequency increases, photon energy?': ['Apabila frekuensi bertambah, tenaga foton?', ['Bertambah', 'Berkurang', 'Kekal sama', 'Menjadi sifar'], 'Frekuensi lebih tinggi bermaksud gelombang lebih bertenaga.', {'Berkurang': 'Frekuensi lebih tinggi bermaksud LEBIH banyak tenaga setiap foton.'}],
    'Infrared radiation is used in?': ['Sinaran inframerah digunakan dalam?', ['Pengimejan terma', 'Imbasan tulang', 'Siaran radio', 'Pensterilan makanan'], 'Objek panas memancarkan inframerah.'],
    'Which EM wave is used to cook food in a microwave oven?': ['Gelombang EM manakah memasak makanan dalam ketuhar gelombang mikro?', ['Gelombang mikro', 'Sinar-X', 'Sinar gama', 'Gelombang radio'], 'Gelombang mikro beresonans dengan molekul air dalam makanan.', {'Sinar-X': 'Sinar-X menembusi makanan tanpa memanaskannya.'}],
    'Which EM wave is used for radio and TV broadcasting?': ['Gelombang EM manakah digunakan untuk siaran radio dan TV?', ['Gelombang radio', 'Sinar inframerah', 'Sinar ultraungu', 'Sinar gama'], 'Gelombang radio bergerak jauh dan terbelau di sekeliling halangan.', {'Sinar inframerah': 'Inframerah berjarak dekat, digunakan untuk alat kawalan jauh.'}],
    'Which EM wave is used to detect forged banknotes?': ['Gelombang EM manakah digunakan untuk mengesan wang kertas palsu?', ['Sinar ultraungu', 'Sinar inframerah', 'Gelombang radio', 'Gelombang mikro'], 'UV menjadikan dakwat keselamatan berpendarfluor.', {'Sinar inframerah': 'Inframerah menunjukkan haba, bukan tanda keselamatan pendarfluor.'}],
    'All EM waves carry which two fields?': ['Semua gelombang EM membawa dua medan apa?', ['Elektrik dan magnet', 'Elektrik dan graviti', 'Magnet dan bunyi', 'Haba dan cahaya'], 'Kedua-dua medan bergetar berserenjang antara satu sama lain.', {'Haba dan cahaya': 'Haba dan cahaya ialah dua gelombang EM, bukan medan.'}],
    'Which EM wave has a wavelength of about 1 cm?': ['Gelombang EM manakah mempunyai panjang gelombang kira-kira 1 cm?', ['Gelombang mikro', 'Sinar gama', 'Cahaya nampak', 'Sinar ultraungu'], 'Gelombang mikro dari kira-kira 1 mm hingga 30 cm.', {'Cahaya nampak': 'Cahaya nampak kira-kira 5 × 10⁻⁷ m, jauh lebih kecil.'}],
    'An X-ray has f = 3 × 10¹⁸ Hz. Wavelength?': ['Sinar-X mempunyai f = 3 × 10¹⁸ Hz. Panjang gelombang?', ['1 × 10⁻¹⁰ m', '1 × 10⁻⁸ m', '9 × 10²⁶ m', '1 × 10¹⁰ m'], 'λ = c ÷ f = 3 × 10⁸ ÷ 3 × 10¹⁸.', {'9 × 10²⁶ m': 'Anda darab c dengan f, sepatutnya bahagi.'}],
    'A radio wave has λ = 3 m. Frequency? (c = 3 × 10⁸)': ['Gelombang radio mempunyai λ = 3 m. Frekuensi? (c = 3 × 10⁸)', ['1 × 10⁸ Hz', '9 × 10⁸ Hz', '1 × 10⁶ Hz', '3 × 10⁸ Hz'], 'f = c ÷ λ = 3 × 10⁸ ÷ 3.'],
    'An EM wave has f = 6 × 10¹⁴ Hz. Wavelength?': ['Gelombang EM mempunyai f = 6 × 10¹⁴ Hz. Panjang gelombang?', ['5 × 10⁻⁷ m', '2 × 10⁶ m', '1.8 × 10²³ m', '5 × 10⁷ m'], 'λ = c ÷ f = 3 × 10⁸ ÷ 6 × 10¹⁴.']
  });

})(window.PFR.Bank.lang('ms', 4));
