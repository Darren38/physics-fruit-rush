/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  SOALAN BM: TINGKATAN 1 (2 daripada 2)
   Cahaya dan Optik · Bumi
   Istilah mengikut buku teks Sains Tingkatan 1 KSSM (Bab 8 dan 9).
   Format dan peraturan: lihat data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Light and Optics': 'Cahaya dan Optik',
    'Colours of Light': 'Warna Cahaya',
    'Dispersion of Light': 'Penyebaran Cahaya',
    'Mirrors': 'Cermin',
    'Earth': 'Bumi',
    'Structure of the Earth': 'Struktur Bumi',
    'Geohazards': 'Fenomena Geobencana',
    'Age and Resources of the Earth': 'Usia dan Sumber Bumi'
  });

  M.add({

    /* ---------- WARNA CAHAYA ---------- */
    'The three primary colours of light are red, green and?': ['Tiga warna primer cahaya ialah merah, hijau dan?', ['Biru', 'Kuning', 'Ungu', 'Jingga'], 'Cahaya merah, hijau dan biru boleh menghasilkan semua warna lain.', {'Kuning': 'Kuning ialah warna primer CAT, bukan cahaya.'}],
    'Red light + green light gives?': ['Cahaya merah + cahaya hijau menghasilkan?', ['Kuning', 'Biru', 'Putih', 'Perang'], 'Cahaya merah dan hijau bergabung menjadi kuning.', {'Perang': 'Campuran CAT boleh menjadi perang; campuran cahaya menjadi kuning.'}],
    'Red, green and blue light together give?': ['Cahaya merah, hijau dan biru bersama menghasilkan?', ['Putih', 'Hitam', 'Perang', 'Kelabu'], 'Ketiga-tiga warna primer bergabung menjadi cahaya putih.'],
    'An object that does not let light through is?': ['Objek yang tidak membenarkan cahaya melaluinya ialah?', ['Legap', 'Lut sinar', 'Lut cahaya', 'Berkilat'], 'Objek legap menghalang cahaya dan membentuk bayang-bayang.'],
    'Red light + blue light gives?': ['Cahaya merah + cahaya biru menghasilkan?', ['Magenta', 'Sian', 'Kuning', 'Hijau'], 'Cahaya merah dan biru bergabung menjadi magenta.'],
    'Green light + blue light gives?': ['Cahaya hijau + cahaya biru menghasilkan?', ['Sian', 'Magenta', 'Kuning', 'Merah'], 'Cahaya hijau dan biru bergabung menjadi sian.'],
    'A red shirt looks red because it?': ['Baju merah kelihatan merah kerana ia?', ['Memantulkan cahaya merah', 'Menyerap cahaya merah', 'Menghasilkan cahaya merah', 'Membiaskan cahaya merah'], 'Ia menyerap warna lain dan memantulkan merah.', {'Menyerap cahaya merah': 'Ia memantulkan merah - itulah warna yang sampai ke mata anda.'}],
    'A red filter lets through only?': ['Penapis merah hanya membenarkan laluan?', ['Cahaya merah', 'Cahaya biru', 'Cahaya putih', 'Cahaya hijau'], 'Penapis melepaskan warnanya sendiri dan menyerap yang lain.'],
    'A TV screen makes all its colours from?': ['Skrin TV menghasilkan semua warnanya daripada?', ['Merah, hijau dan biru', 'Merah, kuning dan biru', 'Hitam dan putih', 'Jingga dan ungu'], 'Titik kecil merah, hijau dan biru bergabung.'],
    'A red apple under pure blue light looks?': ['Epal merah di bawah cahaya biru tulen kelihatan?', ['Hitam', 'Merah', 'Biru', 'Ungu'], 'Tiada cahaya merah untuk dipantulkan, jadi ia kelihatan hitam.'],
    'White light through a red filter, then a blue filter, gives?': ['Cahaya putih melalui penapis merah, kemudian penapis biru, menghasilkan?', ['Tiada cahaya', 'Cahaya magenta', 'Cahaya putih', 'Cahaya merah'], 'Penapis merah hanya melepaskan merah; penapis biru menyekat merah.'],

    /* ---------- PENYEBARAN CAHAYA ---------- */
    'Splitting white light into its colours is called?': ['Pemisahan cahaya putih kepada warna-warnanya dipanggil?', ['Penyebaran', 'Pantulan', 'Penyerapan', 'Kondensasi'], 'Prisma menyebarkan cahaya putih menjadi spektrum.'],
    'Which object splits white light into a spectrum?': ['Objek manakah memisahkan cahaya putih menjadi spektrum?', ['Prisma', 'Cermin satah', 'Sehelai kertas', 'Sudu logam'], 'Setiap warna dibiaskan dengan sudut berbeza dalam kaca.'],
    'How many colours are usually named in the spectrum?': ['Berapakah warna yang biasanya dinamakan dalam spektrum?', ['Tujuh', 'Tiga', 'Lima', 'Sepuluh'], 'Merah, jingga, kuning, hijau, biru, indigo dan ungu.'],
    'A rainbow forms when sunlight passes through?': ['Pelangi terbentuk apabila cahaya matahari melalui?', ['Titisan hujan', 'Awan debu', 'Daun pokok', 'Asap'], 'Setiap titisan hujan bertindak seperti prisma kecil.'],
    'Which colour bends the MOST in a prism?': ['Warna manakah paling BANYAK dibiaskan oleh prisma?', ['Ungu', 'Merah', 'Hijau', 'Kuning'], 'Ungu dibiaskan paling banyak dan merah paling sedikit.', {'Merah': 'Merah dibiaskan PALING SEDIKIT - ia di bahagian atas spektrum.'}],
    'Which colour bends the LEAST in a prism?': ['Warna manakah paling SEDIKIT dibiaskan oleh prisma?', ['Merah', 'Ungu', 'Biru', 'Indigo'], 'Cahaya merah dibiaskan paling sedikit oleh prisma.'],
    'The colours on the back of a CD come from light being?': ['Warna pada belakang cakera padat (CD) terhasil kerana cahaya?', ['Dipisahkan kepada warna', 'Diserap oleh CD', 'Dihasilkan oleh CD', 'Ditukar kepada haba'], 'Alur halus pada CD memisahkan cahaya putih.'],
    'A diamond sparkles with colours because it?': ['Berlian berkilau dengan warna-warni kerana ia?', ['Sangat menyebarkan cahaya', 'Bercahaya dalam gelap', 'Menyerap semua cahaya', 'Berwarna di dalamnya'], 'Ia membiaskan setiap warna dengan sudut yang berbeza.'],
    'The colour between green and indigo in the spectrum is?': ['Warna di antara hijau dan indigo dalam spektrum ialah?', ['Biru', 'Kuning', 'Jingga', 'Ungu'], 'Susunannya merah, jingga, kuning, hijau, biru, indigo, ungu.'],
    'The rainbow colours on a thin film of oil are due to?': ['Warna pelangi pada lapisan nipis minyak disebabkan oleh?', ['Cahaya terpisah kepada warna', 'Minyak itu berwarna', 'Air bertukar menjadi gas', 'Haba daripada minyak'], 'Lapisan nipis memisahkan cahaya putih kepada warna.'],

    /* ---------- CERMIN ---------- */
    'A mirror works by?': ['Cermin berfungsi dengan cara?', ['Memantulkan cahaya', 'Menyerap cahaya', 'Menghasilkan cahaya', 'Memisahkan cahaya'], 'Cahaya dipantulkan oleh permukaan yang licin dan berkilat.'],
    'The image in a plane mirror is?': ['Imej dalam cermin satah adalah?', ['Tegak dan sama saiz', 'Terbalik', 'Jauh lebih besar', 'Jauh lebih kecil'], 'Cermin satah menghasilkan imej tegak dan sama saiz.'],
    'Words look reversed in a mirror. This is called?': ['Tulisan kelihatan terbalik dalam cermin. Ini dipanggil?', ['Songsang sisi', 'Pembiasan', 'Penyebaran', 'Pembelauan'], 'Kiri dan kanan kelihatan bertukar dalam cermin.'],
    'A mirror reflects well because its surface is?': ['Cermin memantulkan cahaya dengan baik kerana permukaannya?', ['Licin dan berkilat', 'Kasar dan gelap', 'Lembut dan kusam', 'Basah dan sejuk'], 'Permukaan licin dan berkilat memantulkan cahaya dengan sekata.'],
    'The angle of incidence equals the angle of?': ['Sudut tuju sama dengan sudut?', ['Pantulan', 'Pembiasan', 'Penyebaran', 'Penyerapan'], 'Ini ialah hukum pantulan: i = r.'],
    'Why is AMBULANCE written backwards on the front of an ambulance?': ['Mengapakah AMBULANS ditulis terbalik di hadapan ambulans?', ['Supaya betul dalam cermin', 'Supaya nampak moden', 'Ia kesilapan ejaan', 'Untuk jimat cat'], 'Pemandu di hadapan melihatnya betul dalam cermin mereka.'],
    'Which mirror gives a car driver a wide view?': ['Cermin manakah memberi pemandu pandangan yang luas?', ['Cermin cembung', 'Cermin cekung', 'Cermin satah', 'Cermin pecah'], 'Cermin cembung memberi medan penglihatan lebih luas.'],
    'A dentist uses which mirror to see a magnified tooth?': ['Doktor gigi menggunakan cermin apa untuk melihat gigi yang diperbesar?', ['Cermin cekung', 'Cermin cembung', 'Cermin satah', 'Prisma kaca'], 'Pada jarak dekat, cermin cekung memberi imej diperbesar.'],
    'A periscope uses two mirrors to?': ['Periskop menggunakan dua cermin untuk?', ['Melihat melepasi halangan', 'Membesarkan bintang', 'Memisahkan cahaya', 'Menyimpan cahaya'], 'Cermin memantulkan cahaya mengelilingi selekoh.'],
    'A ray hits a mirror at 40° to the normal. Angle of reflection?': ['Sinar tuju membuat 40° dengan garis normal. Sudut pantulan?', ['40°', '50°', '80°', '90°'], 'Sudut pantulan = sudut tuju = 40°.', {'50°': '50° diukur dari permukaan; kedua-dua sudut diukur dari normal.'}],

    /* ---------- STRUKTUR BUMI ---------- */
    'The outermost layer of the Earth is the?': ['Lapisan paling luar Bumi ialah?', ['Kerak', 'Mantel', 'Teras luar', 'Teras dalam'], 'Kerak berbatu yang nipis ialah tempat kita tinggal.'],
    'The layer between the crust and the core is the?': ['Lapisan di antara kerak dan teras ialah?', ['Mantel', 'Kerak', 'Atmosfera', 'Lautan'], 'Mantel ialah batuan panas yang boleh mengalir perlahan.'],
    'The centre of the Earth is the?': ['Bahagian tengah Bumi ialah?', ['Teras dalam', 'Mantel', 'Kerak', 'Teras luar'], 'Teras dalam ialah besi dan nikel pepejal.'],
    'Which layer of the Earth is liquid metal?': ['Lapisan Bumi manakah terdiri daripada logam cecair?', ['Teras luar', 'Teras dalam', 'Kerak', 'Mantel atas'], 'Teras luar ialah besi dan nikel yang lebur.'],
    'The Earth’s core is made mostly of?': ['Teras Bumi kebanyakannya terdiri daripada?', ['Besi dan nikel', 'Pasir dan tanah liat', 'Air dan ais', 'Emas dan perak'], 'Logam tumpat tenggelam ke pusat Bumi sejak dahulu.'],
    'Which layer of the Earth is the THINNEST?': ['Lapisan Bumi manakah yang PALING NIPIS?', ['Kerak', 'Mantel', 'Teras luar', 'Teras dalam'], 'Kerak hanya kira-kira 5 hingga 70 km tebal.'],
    'Deeper inside the Earth, the temperature?': ['Semakin dalam di dalam Bumi, suhunya?', ['Meningkat', 'Menurun', 'Kekal sama', 'Jatuh ke sifar'], 'Teras Bumi beribu-ribu darjah panasnya.'],
    'Hot rock moving slowly in the mantle forms?': ['Batuan panas yang bergerak perlahan dalam mantel membentuk?', ['Arus perolakan', 'Air pasang surut', 'Angin kencang', 'Gema'], 'Batuan panas naik, menyejuk dan tenggelam dalam kitaran perlahan.'],
    'The crust is broken into large pieces called?': ['Kerak Bumi terpecah kepada kepingan besar yang dipanggil?', ['Plat tektonik', 'Gunung', 'Takungan magma', 'Dasar laut'], 'Plat-plat bergerak perlahan di atas mantel.'],
    'Why is the core the densest layer?': ['Mengapakah teras ialah lapisan paling tumpat?', ['Logam berat mendap di situ', 'Ia paling sejuk', 'Ia penuh dengan air', 'Ia paling banyak udara'], 'Besi dan nikel yang tumpat tenggelam ke pusat Bumi.'],

    /* ---------- FENOMENA GEOBENCANA ---------- */
    'A sudden shaking of the ground is?': ['Gegaran tanah secara tiba-tiba ialah?', ['Gempa bumi', 'Tsunami', 'Tanah runtuh', 'Banjir'], 'Batuan tergelincir di sepanjang sesar dan menghantar gelombang.'],
    'Giant sea waves caused by an undersea earthquake are?': ['Ombak laut gergasi akibat gempa bumi dasar laut ialah?', ['Tsunami', 'Air pasang', 'Monsun', 'Riak'], 'Dasar laut bergerak dan menolak ombak yang sangat besar.'],
    'Molten rock that erupts from a volcano is called?': ['Batuan lebur yang meletus dari gunung berapi dipanggil?', ['Lava', 'Magma', 'Abu', 'Kerak'], 'Magma dipanggil lava apabila sampai ke permukaan.', {'Magma': 'Magma ialah batuan lebur yang masih di BAWAH tanah.'}],
    'Soil and rock sliding down a slope after heavy rain is a?': ['Tanah dan batuan menggelongsor menuruni cerun selepas hujan lebat ialah?', ['Tanah runtuh', 'Tsunami', 'Gempa bumi', 'Letusan'], 'Hujan menjadikan cerun berat dan licin.'],
    'Most earthquakes happen near the edges of?': ['Kebanyakan gempa bumi berlaku berhampiran sempadan?', ['Plat tektonik', 'Sungai', 'Bandar', 'Gurun'], 'Plat bergeser, menjauh atau berlanggar di sempadannya.'],
    'An instrument that records earthquakes is a?': ['Alat yang merekod gempa bumi ialah?', ['Seismograf', 'Barometer', 'Termometer', 'Teleskop'], 'Ia merekod gegaran sebagai garis beralun.'],
    'During an earthquake indoors, you should?': ['Semasa gempa bumi di dalam bangunan, anda perlu?', ['Tunduk, lindung, berpaut', 'Terus lari ke luar', 'Berdiri dekat tingkap', 'Guna lif'], 'Lindungi kepala anda di bawah meja yang kukuh.'],
    'A tsunami warning means you should move?': ['Amaran tsunami bermakna anda perlu bergerak?', ['Ke kawasan tinggi', 'Ke pantai', 'Ke ruang bawah tanah', 'Dekat sungai'], 'Ombak tsunami membanjiri tanah pantai yang rendah.'],
    'Which country lies on the Pacific Ring of Fire?': ['Negara manakah terletak di Lingkaran Api Pasifik?', ['Indonesia', 'Mesir', 'Brazil', 'Arab Saudi'], 'Banyak gunung berapi dan gempa bumi mengelilingi Lautan Pasifik.'],
    'Why is Sabah more at risk of earthquakes than Penang?': ['Mengapakah Sabah lebih berisiko gempa bumi berbanding Pulau Pinang?', ['Ia dekat sempadan plat', 'Ia lebih banyak hujan', 'Bangunannya lebih tinggi', 'Ia lebih banyak sungai'], 'Sabah dekat sempadan plat aktif; gempa bumi Ranau 2015 menggegarkan Gunung Kinabalu.'],

    /* ---------- USIA DAN SUMBER BUMI ---------- */
    'The remains of ancient living things preserved in rock are?': ['Tinggalan hidupan purba yang terawet dalam batuan ialah?', ['Fosil', 'Mineral', 'Hablur', 'Magma'], 'Fosil menunjukkan hidupan pada zaman dahulu.'],
    'Petroleum and natural gas are examples of?': ['Petroleum dan gas asli ialah contoh?', ['Bahan api fosil', 'Tenaga boleh diperbaharui', 'Logam', 'Tanah'], 'Ia terbentuk daripada tumbuhan dan haiwan purba.'],
    'Which is a mineral resource from the Earth?': ['Yang manakah sumber mineral dari Bumi?', ['Bijih timah', 'Air hujan', 'Cahaya matahari', 'Angin'], 'Malaysia pernah menjadi pengeluar bijih timah utama dunia.'],
    'Coal is formed mainly from ancient?': ['Arang batu terbentuk terutamanya daripada sisa purba?', ['Tumbuhan', 'Batuan', 'Logam', 'Ais'], 'Sisa tumbuhan yang tertanam dimampatkan menjadi arang batu.'],
    'The Earth is about how old?': ['Berapakah usia Bumi lebih kurang?', ['4.6 bilion tahun', '6000 tahun', '1 juta tahun', '100 bilion tahun'], 'Batuan dan meteorit menunjukkan usia Bumi kira-kira 4.6 bilion tahun.'],
    'Deeper rock layers are usually?': ['Lapisan batuan yang lebih dalam biasanya?', ['Lebih tua', 'Lebih muda', 'Sama usia', 'Lebih lembut'], 'Lapisan baharu mendap di atas lapisan lama.'],
    'Scientists find the age of old rocks using?': ['Ahli sains menentukan usia batuan lama menggunakan?', ['Pentarikhan radioaktif', 'Warnanya', 'Beratnya', 'Baunya'], 'Unsur radioaktif mereput pada kadar yang tetap.'],
    'Fossil fuels are non-renewable because they?': ['Bahan api fosil tidak boleh diperbaharui kerana ia?', ['Ambil jutaan tahun terbentuk', 'Terdapat di bawah tanah', 'Ia berbentuk cecair', 'Terbakar terlalu perlahan'], 'Kita menggunakannya jauh lebih cepat daripada ia terbentuk.'],
    'Burning fossil fuels releases the gas?': ['Pembakaran bahan api fosil membebaskan gas?', ['Karbon dioksida', 'Oksigen', 'Nitrogen', 'Helium'], 'Karbon dioksida memerangkap haba dan memanaskan Bumi.'],
    'Why should we recycle metals like aluminium?': ['Mengapakah kita perlu mengitar semula logam seperti aluminium?', ['Bijih logam terhad', 'Logam itu berat', 'Logam terlalu murah', 'Logam cepat reput'], 'Bijih logam ialah sumber yang tidak boleh diperbaharui.']
  });

})(window.PFR.Bank.lang('ms', 1));
