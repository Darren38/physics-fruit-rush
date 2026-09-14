/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  SOALAN BM: TINGKATAN 3 (2 daripada 2)
   Keradioaktifan · Cuaca Angkasa · Penerokaan Angkasa Lepas
   Istilah mengikut buku teks Sains Tingkatan 3 KSSM (Bab 8-10).
   Format dan peraturan: lihat data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Radioactivity': 'Keradioaktifan',
    'Atoms and Isotopes': 'Atom dan Isotop',
    'Radiation and Its Uses': 'Sinaran dan Kegunaannya',
    'Space Weather': 'Cuaca Angkasa',
    'Activities of the Sun': 'Aktiviti Matahari',
    'Planets and Orbits': 'Planet dan Orbit',
    'Space Exploration': 'Penerokaan Angkasa Lepas',
    'Phases of the Moon': 'Fasa Bulan',
    'Satellites': 'Satelit'
  });

  M.add({

    /* ---------- ATOM DAN ISOTOP ---------- */
    'The centre of an atom is called the?': ['Bahagian tengah atom dipanggil?', ['Nukleus', 'Elektron', 'Petala', 'Orbit'], 'Nukleus mengandungi proton dan neutron.'],
    'Which particle has a NEGATIVE charge?': ['Zarah yang manakah bercas NEGATIF?', ['Elektron', 'Proton', 'Neutron', 'Nukleus'], 'Elektron bergerak mengelilingi nukleus dan membawa cas negatif.', {'Proton': 'Proton bercas POSITIF.'}],
    'Which particle has NO charge?': ['Zarah yang manakah TIDAK bercas?', ['Neutron', 'Proton', 'Elektron', 'Ion'], 'Neutron bersifat neutral.'],
    'Protons and neutrons are found in the?': ['Proton dan neutron terdapat di dalam?', ['Nukleus', 'Petala elektron', 'Ruang kosong', 'Orbit luar'], 'Hampir semua jisim atom terletak di dalam nukleus.'],
    'Isotopes have the same number of protons but different numbers of?': ['Isotop mempunyai bilangan proton yang sama tetapi bilangan berbeza bagi?', ['Neutron', 'Elektron', 'Proton', 'Nukleus'], 'Karbon-12 dan karbon-14 hanya berbeza pada bilangan neutron.'],
    'The proton number of an atom is the number of?': ['Nombor proton sesuatu atom ialah bilangan?', ['Proton', 'Neutron', 'Elektron dan neutron', 'Nukleon'], 'Nombor proton menentukan jenis unsur.'],
    'An unstable isotope that gives out radiation is a?': ['Isotop tidak stabil yang memancarkan sinaran ialah?', ['Radioisotop', 'Isotop stabil', 'Molekul', 'Logam'], 'Radioisotop mereput dan memancarkan sinaran.'],
    'Carbon-14 is used by archaeologists to?': ['Karbon-14 digunakan oleh ahli arkeologi untuk?', ['Menentukan usia tinggalan', 'Membuat bahan api', 'Membunuh kuman', 'Membuat magnet'], 'Reputannya yang tetap menentukan usia bahan yang pernah hidup.'],
    'An atom has 6 protons and 8 neutrons. Its nucleon number?': ['Atom mempunyai 6 proton dan 8 neutron. Nombor nukleonnya?', ['14', '6', '8', '2'], 'Nombor nukleon = proton + neutron = 6 + 8 = 14.', {'6': '6 ialah nombor proton, bukan nombor nukleon.'}],
    'A neutral atom has 11 protons. How many electrons?': ['Atom neutral mempunyai 11 proton. Berapakah bilangan elektron?', ['11', '22', '0', '12'], 'Dalam atom neutral, bilangan elektron sama dengan bilangan proton.'],

    /* ---------- SINARAN DAN KEGUNAANNYA ---------- */
    'Radiation that can knock electrons out of atoms is called?': ['Sinaran yang boleh mengeluarkan elektron daripada atom dipanggil?', ['Sinaran mengion', 'Gelombang bunyi', 'Cahaya nampak', 'Gelombang radio'], 'Ia menghasilkan ion yang boleh merosakkan sel hidup.'],
    'Radiation always around us from natural sources is?': ['Sinaran semula jadi yang sentiasa ada di sekeliling kita ialah?', ['Sinaran latar belakang', 'Pelakuran nuklear', 'Tenaga suria', 'Elektrik statik'], 'Ia datang daripada batuan, tanah, angkasa lepas dan juga makanan.'],
    'Who discovered the radioactive elements polonium and radium?': ['Siapakah yang menemui unsur radioaktif polonium dan radium?', ['Marie Curie', 'Isaac Newton', 'Albert Einstein', 'Galileo Galilei'], 'Beliau memenangi dua Hadiah Nobel atas kerjanya.'],
    'Which symbol warns of radioactive materials?': ['Simbol yang manakah memberi amaran tentang bahan radioaktif?', ['Trefoil (tiga bilah)', 'Tengkorak dan tulang', 'Palang merah', 'Kilat'], 'Trefoil kuning dan hitam menandakan bahaya sinaran.'],
    'Smoke detectors contain a small source of?': ['Pengesan asap mengandungi sumber kecil?', ['Sinaran alfa', 'Inframerah sahaja', 'Gelombang radio', 'Ultraungu'], 'Asap menghalang zarah alfa lalu mencetuskan penggera.'],
    'Hospitals use gamma rays to?': ['Hospital menggunakan sinar gama untuk?', ['Membunuh sel kanser', 'Mengukur suhu', 'Memanaskan pesakit', 'Menguji pendengaran'], 'Sinar gama yang difokuskan memusnahkan sel tumor.'],
    'Which radiation is the MOST penetrating?': ['Sinaran yang manakah mempunyai kuasa penembusan PALING TINGGI?', ['Gama', 'Alfa', 'Beta', 'Inframerah'], 'Sinar gama memerlukan plumbum tebal atau konkrit untuk menghalangnya.', {'Alfa': 'Alfa dihalang oleh sehelai KERTAS.'}],
    'Alpha radiation can be stopped by?': ['Sinaran alfa boleh dihalang oleh?', ['Sehelai kertas', 'Tiada apa-apa', 'Plumbum tebal sahaja', 'Konkrit sahaja'], 'Zarah alfa besar dan perlahan.'],
    'Workers with radioactive sources wear a badge to?': ['Pekerja yang mengendalikan sumber radioaktif memakai lencana untuk?', ['Mengukur dos sinaran', 'Menunjukkan nama', 'Menghalang semua sinaran', 'Memanaskan badan'], 'Lencana itu merekodkan jumlah sinaran yang diterima.'],
    'Food can be exposed to gamma rays to?': ['Makanan boleh didedahkan kepada sinar gama untuk?', ['Membunuh bakteria', 'Menjadikannya radioaktif', 'Menambah vitamin', 'Mengubah warnanya'], 'Penyinaran membunuh kuman tanpa menjadikan makanan radioaktif.', {'Menjadikannya radioaktif': 'Makanan yang disinari TIDAK menjadi radioaktif.'}],

    /* ---------- AKTIVITI MATAHARI ---------- */
    'A stream of charged particles flowing out from the Sun is the?': ['Aliran zarah bercas yang keluar dari Matahari dipanggil?', ['Angin suria', 'Bayu laut', 'Monsun', 'Arus jet'], 'Angin suria bertiup ke seluruh Sistem Suria.'],
    'A sudden, bright burst of energy on the Sun is a?': ['Letusan tenaga yang terang dan tiba-tiba pada Matahari ialah?', ['Nyalaan suria', 'Tompok matahari', 'Gerhana', 'Komet'], 'Nyalaan suria membebaskan tenaga yang sangat besar dalam beberapa minit.'],
    'Dark, cooler patches on the Sun’s surface are?': ['Tompok gelap yang lebih sejuk pada permukaan Matahari ialah?', ['Tompok matahari', 'Kawah', 'Lautan', 'Awan'], 'Medan magnet yang kuat di situ menghalang sebahagian haba.'],
    'A huge cloud of plasma blasted from the Sun is a?': ['Awan plasma besar yang dilontar dari Matahari ialah?', ['Lentingan jisim korona', 'Gerhana matahari', 'Hujan meteor', 'Fasa bulan'], 'CME boleh sampai ke Bumi dalam satu hingga tiga hari.'],
    'The colourful lights near the poles caused by solar particles are?': ['Cahaya berwarna-warni berhampiran kutub akibat zarah suria ialah?', ['Aurora', 'Pelangi', 'Kilat', 'Logamaya'], 'Zarah suria menyebabkan gas di atmosfera atas bercahaya.'],
    'Strong solar storms can damage?': ['Ribut suria yang kuat boleh merosakkan?', ['Satelit dan grid kuasa', 'Awan hujan', 'Pasang surut laut', 'Gunung'], 'Zarah bercas menghasilkan arus dan mengganggu peranti elektronik.'],
    'Space weather describes conditions caused mainly by the?': ['Cuaca angkasa menerangkan keadaan yang terutamanya disebabkan oleh?', ['Matahari', 'Bulan', 'Awan', 'Lautan'], 'Aktiviti suria mencorakkan cuaca angkasa di sekitar Bumi.'],
    'The Sun’s activity rises and falls in a cycle of about?': ['Aktiviti Matahari meningkat dan menurun dalam kitaran kira-kira?', ['11 tahun', '1 tahun', '100 tahun', '1 bulan'], 'Bilangan tompok matahari memuncak kira-kira setiap 11 tahun.'],
    'Which layer of the Sun do we see as its surface?': ['Lapisan Matahari yang manakah kita lihat sebagai permukaannya?', ['Fotosfera', 'Teras', 'Zon sinaran', 'Angin suria'], 'Fotosfera memancarkan kebanyakan cahaya nampak.'],
    'Why can solar storms disrupt GPS and radio signals?': ['Mengapakah ribut suria boleh mengganggu isyarat GPS dan radio?', ['Ia mengganggu ionosfera', 'Ia menghalang semua cahaya', 'Ia menyejukkan Bumi', 'Ia menghasilkan hujan'], 'Zarah bercas mengubah atmosfera atas yang dilalui isyarat.'],

    /* ---------- PLANET DAN ORBIT ---------- */
    'The path a planet takes around the Sun is its?': ['Lintasan planet mengelilingi Matahari dipanggil?', ['Orbit', 'Paksi', 'Bayang-bayang', 'Kawah'], 'Graviti mengekalkan setiap planet dalam orbitnya.'],
    'The time the Earth takes to orbit the Sun once is?': ['Masa yang diambil oleh Bumi untuk mengorbit Matahari sekali ialah?', ['Kira-kira 365 hari', 'Kira-kira 24 jam', 'Kira-kira 30 hari', 'Kira-kira 7 hari'], 'Satu orbit mengelilingi Matahari ialah satu tahun.', {'Kira-kira 24 jam': '24 jam ialah satu PUTARAN - satu hari, bukan setahun.'}],
    'The force that keeps the planets in orbit is?': ['Daya yang mengekalkan planet dalam orbit ialah?', ['Graviti', 'Kemagnetan', 'Geseran', 'Angin'], 'Graviti Matahari menarik setiap planet.'],
    'Planets further from the Sun take ... to orbit it.': ['Planet yang lebih jauh dari Matahari mengambil masa ... untuk mengorbitnya.', ['Lebih lama', 'Lebih singkat', 'Masa yang sama', 'Tiada masa'], 'Ia bergerak lebih jauh dan lebih perlahan.'],
    'The orbits of the planets are shaped like slightly?': ['Orbit planet berbentuk seperti?', ['Bulatan memanjang (elips)', 'Segi empat sempurna', 'Garis lurus', 'Zigzag'], 'Orbit planet ialah elips yang hampir berbentuk bulatan.'],
    'Which planet takes the LONGEST to orbit the Sun?': ['Planet yang manakah mengambil masa PALING LAMA untuk mengorbit Matahari?', ['Neptun', 'Utarid', 'Bumi', 'Marikh'], 'Neptun ialah planet yang paling jauh dari Matahari.'],
    'A natural object that orbits a planet is a?': ['Objek semula jadi yang mengorbit sesebuah planet ialah?', ['Bulan', 'Bintang', 'Komet', 'Galaksi'], 'Bulan ialah satelit semula jadi Bumi.'],
    'Inner planets such as Earth and Mars are mainly made of?': ['Planet dalam seperti Bumi dan Marikh terutamanya diperbuat daripada?', ['Batuan', 'Gas', 'Ais sahaja', 'Logam sahaja'], 'Planet dalam kecil dan berbatu; planet luar ialah gergasi gas.'],
    'The Earth’s tilted axis causes?': ['Paksi Bumi yang condong menyebabkan?', ['Musim', 'Siang dan malam', 'Pasang surut', 'Gerhana'], 'Kecondongan mengubah sudut cahaya matahari yang sampai ke setiap tempat.', {'Siang dan malam': 'Siang dan malam berlaku kerana PUTARAN Bumi.'}],
    'A planet orbits the Sun in 2 years. Compared with Earth, it is?': ['Sebuah planet mengorbit Matahari dalam 2 tahun. Berbanding Bumi, ia?', ['Lebih jauh dari Matahari', 'Lebih dekat dengan Matahari', 'Pada jarak yang sama', 'Di dalam Matahari'], 'Masa orbit yang lebih lama bermakna orbit yang lebih besar.'],

    /* ---------- FASA BULAN ---------- */
    'The Moon shines because it?': ['Bulan bersinar kerana ia?', ['Memantulkan cahaya matahari', 'Menghasilkan cahaya sendiri', 'Sedang terbakar', 'Memantulkan lampu bandar'], 'Bulan tidak mempunyai cahayanya sendiri.', {'Menghasilkan cahaya sendiri': 'Bulan bukan bintang - ia hanya memantulkan cahaya matahari.'}],
    'When the whole lit face of the Moon is seen, it is a?': ['Apabila seluruh permukaan Bulan yang disinari kelihatan, ia ialah?', ['Bulan purnama', 'Anak bulan', 'Bulan sabit', 'Separuh bulan'], 'Matahari menyinari seluruh sisi Bulan yang menghadap kita.'],
    'When the Moon cannot be seen at all, it is a?': ['Apabila Bulan langsung tidak kelihatan, ia ialah?', ['Anak bulan', 'Bulan purnama', 'Bulan cembung', 'Separuh bulan'], 'Sisi Bulan yang disinari menghadap menjauhi Bumi.'],
    'A thin curved sliver of the Moon is a?': ['Bahagian Bulan yang nipis dan melengkung ialah?', ['Bulan sabit', 'Bulan purnama', 'Bulan cembung', 'Anak bulan'], 'Hanya sebahagian kecil sisi yang disinari menghadap kita.'],
    'A complete cycle of Moon phases takes about?': ['Satu kitaran lengkap fasa Bulan mengambil masa kira-kira?', ['29.5 hari', '7 hari', '365 hari', '24 jam'], 'Satu bulan qamari kira-kira 29.5 hari - asas kalendar Hijrah.'],
    'When the lit part of the Moon grows each night, it is?': ['Apabila bahagian Bulan yang disinari bertambah setiap malam, ia sedang?', ['Membesar', 'Mengecil', 'Bergerhana', 'Terbenam'], 'Membesar bermaksud bahagian yang kelihatan semakin besar.'],
    'When the lit part of the Moon shrinks each night, it is?': ['Apabila bahagian Bulan yang disinari berkurang setiap malam, ia sedang?', ['Mengecil', 'Membesar', 'Terbit', 'Mengorbit'], 'Mengecil bermaksud bahagian yang kelihatan semakin kecil.'],
    'We always see the same side of the Moon because it?': ['Kita sentiasa melihat sisi Bulan yang sama kerana ia?', ['Berputar sekali setiap orbit', 'Tidak berputar', 'Leper', 'Sangat dekat'], 'Ia berputar sekali pada paksinya bagi setiap orbit mengelilingi Bumi.', {'Tidak berputar': 'Ia MEMANG berputar - tepat sekali setiap orbit.'}],
    'The phases of the Moon are caused by?': ['Fasa Bulan disebabkan oleh?', ['Kedudukannya dalam orbit', 'Bayang-bayang Bumi', 'Awan yang menutupinya', 'Saiznya yang berubah'], 'Kita melihat bahagian sisi bercahayanya yang berbeza semasa ia mengorbit.', {'Bayang-bayang Bumi': 'Bayang-bayang Bumi menyebabkan GERHANA, bukan fasa Bulan.'}],
    'Why is the sky black on the Moon even in the daytime?': ['Mengapakah langit di Bulan hitam walaupun pada waktu siang?', ['Tiada atmosfera', 'Matahari lebih malap', 'Sentiasa waktu malam', 'Tanahnya gelap'], 'Tanpa udara untuk menyerakkan cahaya matahari, langit kekal hitam.'],

    /* ---------- SATELIT ---------- */
    'An artificial object placed in orbit around the Earth is a?': ['Objek buatan manusia yang diletakkan di orbit mengelilingi Bumi ialah?', ['Satelit', 'Meteor', 'Komet', 'Planet'], 'Satelit dilancarkan ke orbit menggunakan roket.'],
    'Satellites help us with?': ['Satelit membantu kita dalam?', ['Cuaca, TV dan navigasi', 'Menanam padi lebih cepat', 'Menurunkan hujan', 'Menghentikan gempa bumi'], 'Satelit memerhati Bumi, menghantar isyarat dan menentukan kedudukan kita.'],
    'GPS in a phone uses signals from?': ['GPS dalam telefon menggunakan isyarat daripada?', ['Satelit', 'Menara radio sahaja', 'Bulan', 'Lampu jalan'], 'Beberapa satelit menentukan kedudukan tepat anda.'],
    'A satellite that stays above the same place on Earth is?': ['Satelit yang sentiasa berada di atas tempat yang sama di Bumi ialah?', ['Geopegun', 'Kutub', 'Jatuh', 'Bulan'], 'Ia mengorbit sekali setiap 24 jam, sepadan dengan putaran Bumi.'],
    'Malaysia’s own communication satellites are called?': ['Satelit komunikasi milik Malaysia dinamakan?', ['MEASAT', 'Hubble', 'Voyager', 'Apollo'], 'Satelit MEASAT membawa isyarat TV dan internet untuk Malaysia.'],
    'Satellites stay in orbit because of?': ['Satelit kekal di orbit kerana?', ['Graviti dan kelajuannya', 'Enjin sentiasa menyala', 'Magnet di Bumi', 'Udara menampungnya'], 'Ia bergerak cukup laju sehingga terus jatuh mengelilingi Bumi.'],
    'Satellites that watch forests and floods are used for?': ['Satelit yang memantau hutan dan banjir digunakan untuk?', ['Penderiaan jauh', 'Melombong emas', 'Melancarkan roket', 'Memetakan Marikh'], 'Ia merakam gambar Bumi untuk memantau perubahan.'],
    'Old satellites and rocket parts left in orbit are called?': ['Satelit lama dan bahagian roket yang tertinggal di orbit dipanggil?', ['Sisa angkasa', 'Debu bintang', 'Meteorit', 'Komet'], 'Sisa angkasa boleh berlanggar dengan satelit yang masih berfungsi.'],
    'The International Space Station is a?': ['Stesen Angkasa Antarabangsa ialah?', ['Satelit berawak', 'Planet', 'Bintang', 'Bulan'], 'Angkasawan tinggal dan bekerja di dalamnya semasa ia mengorbit Bumi.'],
    'Why are rockets launched from near the equator when possible?': ['Mengapakah roket dilancarkan berhampiran khatulistiwa jika boleh?', ['Putaran Bumi menambah laju', 'Graviti lebih kuat di situ', 'Langit lebih cerah di situ', 'Cuaca lebih panas di situ'], 'Bumi berputar paling laju di khatulistiwa, memberi roket tambahan laju.', {'Graviti lebih kuat di situ': 'Graviti sebenarnya sedikit LEBIH LEMAH di khatulistiwa.'}]

  });

})(window.PFR.Bank.lang('ms', 3));
