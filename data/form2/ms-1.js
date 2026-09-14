/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  SOALAN BM: TINGKATAN 2 (1 daripada 2)
   Daya · Elektrik dan Kemagnetan
   Istilah mengikut buku teks Sains Tingkatan 2 KSSM (Bab 7 dan 8).
   Format dan peraturan: lihat data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Forces': 'Daya',
    'Push and Pull': 'Daya Tolakan dan Tarikan',
    'Moment of a Force': 'Momen Daya',
    'Levers': 'Tuas',
    'Electricity and Magnetism': 'Elektrik dan Kemagnetan',
    'Electricity': 'Elektrik',
    'Series and Parallel Circuits': 'Litar Bersiri dan Selari',
    'Electromagnets': 'Kemagnetan dan Elektromagnet'
  });

  M.add({

    /* ---------- DAYA TOLAKAN DAN TARIKAN ---------- */
    'A force is a push or a?': ['Daya ialah tolakan atau?', ['Tarikan', 'Haba', 'Bunyi', 'Warna'], 'Setiap daya ialah sama ada tolakan atau tarikan.'],
    'Opening a drawer is an example of a?': ['Membuka laci ialah contoh?', ['Tarikan', 'Tolakan', 'Putaran', 'Lantunan'], 'Anda menarik laci ke arah anda.'],
    'Kicking a football is an example of a?': ['Menendang bola ialah contoh?', ['Tolakan', 'Tarikan', 'Angkatan', 'Picitan'], 'Kaki anda menolak bola menjauhi anda.'],
    'The SI unit of force is the?': ['Unit SI bagi daya ialah?', ['newton', 'kilogram', 'joule', 'meter'], 'Daya diukur dalam newton (N).', {'kilogram': 'Kilogram mengukur jisim, bukan daya.'}],
    'Which instrument measures force?': ['Alat yang manakah mengukur daya?', ['Neraca spring', 'Pembaris', 'Jam randik', 'Termometer'], 'Spring meregang lebih panjang untuk daya yang lebih besar.'],
    'A force can change an object’s speed, direction or?': ['Daya boleh mengubah laju, arah atau?', ['Bentuk', 'Warna', 'Bau', 'Umur'], 'Memicit span mengubah bentuknya.'],
    'The force that slows down a sliding book is?': ['Daya yang memperlahankan buku yang menggelongsor ialah?', ['Geseran', 'Kemagnetan', 'Daya apungan', 'Elektrik'], 'Geseran bertindak menentang gerakan antara dua permukaan.'],
    'The force that pulls objects towards the Earth is?': ['Daya yang menarik objek ke arah Bumi ialah?', ['Graviti', 'Geseran', 'Kemagnetan', 'Rintangan udara'], 'Graviti memberikan berat kepada setiap objek.'],
    'Two EQUAL forces pull a rope in opposite directions. The rope?': ['Dua daya yang SAMA menarik tali dalam arah bertentangan. Tali itu?', ['Tidak bergerak', 'Bergerak ke kiri', 'Bergerak ke kanan', 'Putus serta-merta'], 'Daya seimbang saling membatalkan, jadi gerakan tidak berubah.'],
    'Forces of 8 N and 5 N push a box in opposite directions. Resultant?': ['Daya 8 N dan 5 N menolak kotak dalam arah bertentangan. Paduan?', ['3 N', '13 N', '40 N', '8 N'], 'Daya bertentangan ditolak: 8 − 5 = 3 N.', {'13 N': 'Daya bertentangan DITOLAK; bukan ditambah.'}],

    /* ---------- MOMEN DAYA ---------- */
    'The turning effect of a force is called its?': ['Kesan putaran sesuatu daya dipanggil?', ['Momen', 'Berat', 'Tekanan', 'Ketumpatan'], 'Momen menyebabkan objek berputar pada satu pangsi.'],
    'The point an object turns about is the?': ['Titik tempat objek berputar ialah?', ['Pangsi', 'Beban', 'Daya', 'Tepi'], 'Pangsi juga dipanggil fulkrum.'],
    'Turning a tap on uses a?': ['Memulas pili air menggunakan?', ['Momen', 'Tekanan', 'Pantulan', 'Getaran'], 'Tangan anda memutar pili pada pusatnya.'],
    'Moment = force × ?': ['Momen = daya × ?', ['Jarak dari pangsi', 'Jisim', 'Masa', 'Luas'], 'Momen = daya × jarak serenjang dari pangsi.'],
    'The SI unit of moment is?': ['Unit SI bagi momen ialah?', ['N m', 'N', 'kg m', 'J/s'], 'Newton didarab meter menghasilkan newton meter (N m).', {'N': 'Newton mengukur daya; momen juga memerlukan jarak.'}],
    'Why is a door handle placed far from the hinge?': ['Mengapakah pemegang pintu diletakkan jauh dari engsel?', ['Putaran besar, daya kecil', 'Nampak lebih cantik', 'Pintu lebih ringan', 'Untuk menahan pintu'], 'Jarak yang lebih besar memberi momen lebih besar untuk daya yang sama.'],
    'A spanner with a LONGER handle makes turning a nut?': ['Spanar dengan pemegang LEBIH PANJANG menjadikan memutar nat?', ['Lebih mudah', 'Lebih sukar', 'Mustahil', 'Tiada beza'], 'Jarak lebih panjang memberi momen lebih besar untuk daya yang sama.'],
    'A see-saw balances when the moments on each side are?': ['Jongkang-jongkit seimbang apabila momen pada setiap sisi?', ['Sama', 'Sifar', 'Berganda', 'Ke atas'], 'Momen ikut arah jam = momen lawan arah jam.'],
    'A 10 N force acts 0.5 m from a pivot. Moment?': ['Daya 10 N bertindak 0.5 m dari pangsi. Momen?', ['5 N m', '20 N m', '10.5 N m', '0.05 N m'], 'Momen = 10 × 0.5 = 5 N m.', {'20 N m': 'Anda bahagi - momen ialah daya DIDARAB jarak.'}],
    'A 20 N child sits 2 m from a see-saw pivot. What force at 1 m balances it?': ['Kanak-kanak 20 N duduk 2 m dari pangsi. Daya apakah pada 1 m mengimbanginya?', ['40 N', '10 N', '20 N', '22 N'], '20 × 2 = F × 1, maka F = 40 N.', {'10 N': 'Daya yang lebih dekat mesti LEBIH BESAR untuk seimbang.'}],

    /* ---------- TUAS ---------- */
    'A lever is a simple machine that turns about a?': ['Tuas ialah mesin ringkas yang berputar pada?', ['Fulkrum', 'Roda', 'Spring', 'Tali'], 'Setiap tuas mempunyai fulkrum, daya dan beban.'],
    'Simple machines make work easier by reducing the?': ['Mesin ringkas memudahkan kerja dengan mengurangkan?', ['Daya yang diperlukan', 'Beban', 'Jarak yang dilalui', 'Masa yang diambil'], 'Daya yang kecil boleh menggerakkan beban yang besar.'],
    'In a see-saw, the fulcrum is?': ['Pada jongkang-jongkit, fulkrum berada?', ['Di tengah', 'Di satu hujung', 'Di bawah beban', 'Tidak diperlukan'], 'Jongkang-jongkit ialah tuas kelas pertama.'],
    'In a wheelbarrow, the load is between the fulcrum and the?': ['Pada kereta sorong, beban berada di antara fulkrum dan?', ['Daya', 'Roda', 'Tanah', 'Batang pemegang'], 'Beban di tengah menjadikannya tuas kelas kedua.'],
    'A fishing rod is which class of lever?': ['Joran ialah tuas kelas yang mana?', ['Kelas ketiga', 'Kelas pertama', 'Kelas kedua', 'Bukan tuas'], 'Daya berada di antara fulkrum dan beban.'],
    'Which is a FIRST class lever?': ['Yang manakah tuas kelas PERTAMA?', ['Gunting', 'Kereta sorong', 'Joran', 'Penyepit'], 'Fulkrum berada di antara daya dan beban.'],
    'Tweezers are which class of lever?': ['Penyepit ialah tuas kelas yang mana?', ['Kelas ketiga', 'Kelas pertama', 'Kelas kedua', 'Bukan tuas'], 'Jari anda menekan di antara pangsi dan beban.'],
    'A pulley is used to?': ['Takal digunakan untuk?', ['Angkat beban dengan mudah', 'Memanaskan air', 'Menyimpan elektrik', 'Mengukur jisim'], 'Takal mengubah arah daya yang dikenakan.'],
    'Mechanical advantage = load ÷ ?': ['Kelebihan mekanik = beban ÷ ?', ['Daya', 'Jarak', 'Masa', 'Laju'], 'MA = beban ÷ daya; MA lebih besar bermakna daya lebih kecil.'],
    'A 600 N load is lifted with a 200 N effort. Mechanical advantage?': ['Beban 600 N diangkat dengan daya 200 N. Kelebihan mekanik?', ['3', '400', '800', '0.33'], 'MA = beban ÷ daya = 600 ÷ 200 = 3.'],

    /* ---------- ELEKTRIK ---------- */
    'The flow of electric charge is called?': ['Pengaliran cas elektrik dipanggil?', ['Arus', 'Voltan', 'Rintangan', 'Kuasa'], 'Arus elektrik ialah pengaliran cas.'],
    'The SI unit of current is the?': ['Unit SI bagi arus ialah?', ['ampere', 'volt', 'ohm', 'watt'], 'Arus diukur dalam ampere (A).', {'volt': 'Volt mengukur voltan, bukan arus.'}],
    'Which instrument measures current?': ['Alat yang manakah mengukur arus?', ['Ammeter', 'Voltmeter', 'Termometer', 'Barometer'], 'Ammeter disambung secara bersiri.', {'Voltmeter': 'Voltmeter mengukur voltan.'}],
    'The SI unit of voltage is the?': ['Unit SI bagi voltan ialah?', ['volt', 'ampere', 'ohm', 'joule'], 'Voltan diukur dalam volt (V).'],
    'Which material is a good conductor of electricity?': ['Bahan manakah konduktor elektrik yang baik?', ['Kuprum', 'Getah', 'Plastik', 'Kaca'], 'Logam seperti kuprum membenarkan arus mengalir dengan mudah.', {'Getah': 'Getah ialah penebat - ia menghalang arus.'}],
    'Wires are coated in plastic because plastic is an?': ['Wayar disalut plastik kerana plastik ialah?', ['Penebat', 'Konduktor', 'Magnet', 'Elektrod'], 'Plastik menghalang arus sampai ke tangan anda.'],
    'A bulb lights up only when the circuit is?': ['Mentol hanya menyala apabila litar?', ['Lengkap', 'Terputus', 'Terbuka', 'Kosong'], 'Arus memerlukan litar yang lengkap untuk mengalir.'],
    'The SI unit of resistance is the?': ['Unit SI bagi rintangan ialah?', ['ohm', 'volt', 'ampere', 'newton'], 'Rintangan diukur dalam ohm (Ω).'],
    'Which part pushes current around a circuit?': ['Bahagian manakah menolak arus mengelilingi litar?', ['Sel (bateri)', 'Mentol', 'Suis', 'Wayar'], 'Sel membekalkan voltan yang menggerakkan arus.'],
    'V = 6 V, I = 2 A. Resistance?': ['V = 6 V, I = 2 A. Rintangan?', ['3 Ω', '12 Ω', '8 Ω', '4 Ω'], 'R = V ÷ I = 6 ÷ 2 = 3 Ω.', {'12 Ω': 'Anda darab - rintangan ialah V DIBAHAGI dengan I.'}],

    /* ---------- LITAR BERSIRI DAN SELARI ---------- */
    'In a series circuit, the components are joined in?': ['Dalam litar bersiri, komponen disambung dalam?', ['Satu gelung sahaja', 'Cabang berasingan', 'Bentuk bintang', 'Tiada gelung'], 'Arus hanya ada satu laluan dalam litar bersiri.'],
    'In a parallel circuit, the components are on?': ['Dalam litar selari, komponen berada pada?', ['Cabang berasingan', 'Satu gelung sahaja', 'Satu wayar sahaja', 'Tiada wayar'], 'Setiap cabang memberi arus laluannya sendiri.'],
    'In a series circuit, if one bulb breaks, the others?': ['Dalam litar bersiri, jika satu mentol rosak, mentol lain?', ['Padam', 'Lebih terang', 'Terus menyala', 'Berkelip'], 'Satu-satunya laluan terputus, jadi arus berhenti.', {'Terus menyala': 'Itu berlaku dalam litar SELARI, di mana setiap mentol ada laluan sendiri.'}],
    'In a parallel circuit, if one bulb breaks, the others?': ['Dalam litar selari, jika satu mentol rosak, mentol lain?', ['Terus menyala', 'Padam', 'Lebih malap', 'Meletup'], 'Cabang lain masih membentuk litar yang lengkap.'],
    'Houses are wired in parallel so that?': ['Rumah didawaikan secara selari supaya?', ['Setiap alat bekerja sendiri', 'Wayar lebih pendek', 'Bil lebih murah', 'Lampu lebih malap'], 'Setiap perkakas mendapat voltan penuh dan suisnya sendiri.'],
    'Adding more bulbs in SERIES makes each bulb?': ['Menambah lebih banyak mentol secara BERSIRI menjadikan setiap mentol?', ['Lebih malap', 'Lebih terang', 'Sama sahaja', 'Lebih panas'], 'Voltan yang sama dikongsi oleh lebih banyak mentol.'],
    'Two identical bulbs in parallel, compared with one alone, are?': ['Dua mentol serupa dalam litar selari, berbanding satu mentol sahaja, adalah?', ['Sama terang', 'Lebih malap', 'Dua kali lebih terang', 'Padam'], 'Setiap cabang mendapat voltan penuh daripada sel.'],
    'In a series circuit, the current is?': ['Dalam litar bersiri, arusnya?', ['Sama di semua tempat', 'Lebih besar dekat sel', 'Sifar dalam mentol', 'Berbeza dalam setiap mentol'], 'Hanya ada satu laluan, jadi arus yang sama mengalir.'],
    'Two 3 Ω resistors in series. Total resistance?': ['Dua perintang 3 Ω secara bersiri. Jumlah rintangan?', ['6 Ω', '1.5 Ω', '9 Ω', '3 Ω'], 'Dalam bersiri, R = R₁ + R₂ = 3 + 3 = 6 Ω.', {'1.5 Ω': '1.5 Ω ialah jawapan bagi litar SELARI.'}],
    'Two 4 Ω resistors in parallel. Total resistance?': ['Dua perintang 4 Ω secara selari. Jumlah rintangan?', ['2 Ω', '8 Ω', '4 Ω', '16 Ω'], 'Dua perintang sama secara selari memberi separuh: 4 ÷ 2 = 2 Ω.'],

    /* ---------- KEMAGNETAN DAN ELEKTROMAGNET ---------- */
    'A magnet has a north pole and a?': ['Magnet mempunyai kutub utara dan kutub?', ['Selatan', 'Timur', 'Barat', 'Tengah'], 'Setiap magnet mempunyai dua kutub, utara dan selatan.'],
    'Like poles of two magnets will?': ['Kutub sejenis dua magnet akan?', ['Menolak', 'Menarik', 'Melebur', 'Melekat'], 'Utara menolak utara; selatan menolak selatan.', {'Menarik': 'Kutub TIDAK sejenis menarik; kutub sejenis menolak.'}],
    'Which material is attracted by a magnet?': ['Bahan manakah ditarik oleh magnet?', ['Besi', 'Kuprum', 'Plastik', 'Kayu'], 'Besi, keluli, nikel dan kobalt ialah bahan magnet.', {'Kuprum': 'Kuprum ialah logam, tetapi bukan bahan magnet.'}],
    'An electromagnet is made by passing current through a?': ['Elektromagnet dibuat dengan mengalirkan arus melalui?', ['Gegelung wayar', 'Rod kaca', 'Gelang getah', 'Tiub plastik'], 'Arus dalam gegelung menghasilkan medan magnet.'],
    'Which device uses an electromagnet?': ['Alat manakah menggunakan elektromagnet?', ['Loceng elektrik', 'Lilin', 'Cermin', 'Pembaris'], 'Elektromagnet menarik pemukul ke arah loceng.'],
    'A soft-iron core inside the coil makes the electromagnet?': ['Teras besi lembut dalam gegelung menjadikan elektromagnet?', ['Lebih kuat', 'Lebih lemah', 'Lebih ringan', 'Terpadam'], 'Besi menumpukan medan magnet.'],
    'Which makes an electromagnet STRONGER?': ['Yang manakah menjadikan elektromagnet LEBIH KUAT?', ['Lebih banyak lilitan', 'Kurang arus', 'Teras plastik', 'Kurang lilitan'], 'Lebih banyak lilitan dan arus memberi medan lebih kuat.'],
    'Switching off the current makes an electromagnet?': ['Mematikan arus menyebabkan elektromagnet?', ['Hilang kemagnetannya', 'Lebih kuat', 'Lebih panas', 'Lebih berat'], 'Elektromagnet hanya berfungsi semasa arus mengalir.'],
    'Scrapyard cranes use electromagnets because they?': ['Kren di tempat besi buruk menggunakan elektromagnet kerana ia?', ['Boleh dimatikan', 'Sangat ringan', 'Tidak perlu kuasa', 'Menarik semua logam'], 'Kren melepaskan besi buruk dengan mematikan arus.', {'Menarik semua logam': 'Hanya logam magnet seperti besi dan keluli yang ditarik.'}],
    'A compass needle points towards the Earth’s?': ['Jarum kompas menghala ke arah?', ['Utara', 'Timur', 'Barat', 'Pusat Bumi'], 'Bumi bertindak seperti magnet gergasi.']
  });

})(window.PFR.Bank.lang('ms', 2));
