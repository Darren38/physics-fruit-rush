/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  SOALAN BM: TINGKATAN 3 (1 daripada 2)
   Elektrik dan Kemagnetan · Tenaga dan Kuasa
   Istilah mengikut buku teks Sains Tingkatan 3 KSSM (Bab 6 dan 7).
   Format dan peraturan: lihat data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Electricity and Magnetism': 'Elektrik dan Kemagnetan',
    'Renewable Energy': 'Tenaga Boleh Diperbaharui',
    'Magnetic Fields': 'Medan Magnet',
    'Energy and Power': 'Tenaga dan Kuasa',
    'Forms of Energy': 'Bentuk Tenaga',
    'Work and Power': 'Kerja dan Kuasa',
    'Conservation of Energy': 'Keabadian Tenaga'
  });

  M.add({

    /* ---------- TENAGA BOLEH DIPERBAHARUI ---------- */
    'Which is a RENEWABLE energy source?': ['Yang manakah sumber tenaga BOLEH DIPERBAHARUI?', ['Suria', 'Arang batu', 'Gas asli', 'Petroleum'], 'Cahaya matahari tidak akan habis dalam jangka masa hayat manusia.', {'Gas asli': 'Gas asli ialah bahan api fosil - ia akan habis.'}],
    'Solar panels change sunlight into?': ['Panel suria menukarkan cahaya matahari kepada?', ['Tenaga elektrik', 'Tenaga kimia', 'Tenaga bunyi', 'Tenaga nuklear'], 'Sel suria menukarkan cahaya terus kepada elektrik.'],
    'A wind turbine uses the energy of moving air, which is?': ['Turbin angin menggunakan tenaga udara yang bergerak, iaitu?', ['Tenaga kinetik', 'Tenaga kimia', 'Tenaga nuklear', 'Tenaga keupayaan kenyal'], 'Udara yang bergerak memutarkan bilah turbin dan penjana.'],
    'A hydroelectric dam uses the energy of?': ['Empangan hidroelektrik menggunakan tenaga daripada?', ['Air yang jatuh', 'Kayu yang dibakar', 'Batuan panas', 'Garam laut'], 'Air dari tempat tinggi memutarkan turbin semasa ia jatuh.'],
    'Which is a DISADVANTAGE of solar power?': ['Yang manakah KELEMAHAN tenaga suria?', ['Tiada kuasa waktu malam', 'Mencemarkan udara', 'Akan habis', 'Bersifat radioaktif'], 'Panel memerlukan cahaya matahari; output menurun pada waktu malam dan hari mendung.'],
    'Which is a disadvantage of wind power?': ['Yang manakah kelemahan tenaga angin?', ['Angin tidak selalu bertiup', 'Membebaskan karbon dioksida', 'Bahan apinya akan habis', 'Memerlukan arang batu'], 'Turbin hanya berputar apabila angin bertiup.'],
    'Malaysia’s largest hydroelectric dam is in?': ['Empangan hidroelektrik terbesar di Malaysia terletak di?', ['Sarawak (Bakun)', 'Melaka', 'Perlis', 'Pulau Pinang'], 'Empangan Bakun di Sungai Balui boleh menjana 2400 MW.'],
    'Renewable energy sources are better for the environment because they?': ['Sumber tenaga boleh diperbaharui lebih baik untuk alam sekitar kerana ia?', ['Kurang mencemarkan', 'Sentiasa lebih murah', 'Tidak memerlukan mesin', 'Hanya berfungsi waktu siang'], 'Ia tidak membakar bahan api, jadi hanya sedikit karbon dioksida dibebaskan.'],
    'Energy from heat deep inside the Earth is?': ['Tenaga daripada haba di dalam Bumi ialah?', ['Tenaga geoterma', 'Tenaga pasang surut', 'Tenaga suria', 'Tenaga angin'], 'Batuan panas memanaskan air menjadi stim untuk memutarkan turbin.'],
    'Why do we still use fossil fuels alongside renewables?': ['Mengapakah bahan api fosil masih digunakan bersama tenaga boleh diperbaharui?', ['Bekalan kuasa yang stabil', 'Ia boleh diperbaharui', 'Ia bebas pencemaran', 'Ia tidak akan habis'], 'Stesen janakuasa boleh membakar bahan api bila-bila masa, siang atau malam.'],

    /* ---------- MEDAN MAGNET ---------- */
    'The region around a magnet where it exerts a force is its?': ['Kawasan di sekeliling magnet yang mengenakan daya dipanggil?', ['Medan magnet', 'Arus elektrik', 'Zon haba', 'Kutub'], 'Bahan magnet mengalami daya di mana-mana dalam medan itu.'],
    'Outside a magnet, field lines go from?': ['Di luar magnet, garis medan menghala dari?', ['Kutub utara ke kutub selatan', 'Kutub selatan ke kutub utara', 'Dari sisi ke sisi', 'Dari tengah ke luar'], 'Di luar magnet, garis medan menghala dari N ke S.', {'Kutub selatan ke kutub utara': 'Di luar magnet, garis medan keluar dari kutub UTARA.'}],
    'Where is a bar magnet’s field STRONGEST?': ['Di manakah medan magnet bar PALING KUAT?', ['Di kutub', 'Di tengah', 'Jauh dari magnet', 'Sama di semua tempat'], 'Garis medan paling rapat di kutub.'],
    'Which can show the shape of a magnetic field?': ['Yang manakah boleh menunjukkan bentuk medan magnet?', ['Serbuk besi', 'Hablur garam', 'Pasir', 'Gula'], 'Serbuk besi tersusun mengikut garis medan.'],
    'Field lines drawn CLOSER together mean the field is?': ['Garis medan yang LEBIH RAPAT bermakna medan itu?', ['Lebih kuat', 'Lebih lemah', 'Terbalik', 'Sifar'], 'Kerapatan garis menunjukkan kekuatan medan.'],
    'Magnetic field lines never?': ['Garis medan magnet tidak pernah?', ['Bersilang', 'Melengkung', 'Keluar dari kutub', 'Masuk ke kutub'], 'Medan hanya ada satu arah di setiap titik, jadi garis tidak bersilang.'],
    'A compass placed near a magnet points?': ['Kompas yang diletakkan dekat magnet akan menghala?', ['Mengikut garis medan', 'Sentiasa ke timur', 'Tegak ke atas', 'Secara rawak'], 'Jarum kompas sejajar dengan medan magnet.'],
    'Between two facing north poles, the field lines?': ['Di antara dua kutub utara yang bertentangan, garis medan?', ['Saling menolak', 'Bercantum', 'Hilang', 'Membentuk bulatan'], 'Kutub sama menolak, jadi garis melengkung menjauhi satu sama lain.'],
    'The Earth’s magnetic field protects us from?': ['Medan magnet Bumi melindungi kita daripada?', ['Zarah angin suria', 'Cahaya bulan', 'Hujan', 'Hujan meteor'], 'Ia memesongkan angin suria menjauhi Bumi.'],
    'A wire carrying current has a magnetic field shaped like?': ['Dawai yang membawa arus mempunyai medan magnet berbentuk?', ['Bulatan di sekeliling dawai', 'Garis lurus', 'Satu titik', 'Tiada bentuk'], 'Medan membentuk gelang di sekeliling dawai yang membawa arus.'],

    /* ---------- BENTUK TENAGA ---------- */
    'The energy of a moving object is?': ['Tenaga bagi objek yang bergerak ialah?', ['Tenaga kinetik', 'Tenaga keupayaan', 'Tenaga kimia', 'Tenaga nuklear'], 'Semua benda yang bergerak mempunyai tenaga kinetik.'],
    'Energy stored in food and batteries is?': ['Tenaga yang tersimpan dalam makanan dan bateri ialah?', ['Tenaga kimia', 'Tenaga kinetik', 'Tenaga bunyi', 'Tenaga cahaya'], 'Tindak balas kimia membebaskan tenaga tersimpan ini.'],
    'A stretched rubber band stores?': ['Gelang getah yang diregangkan menyimpan?', ['Tenaga keupayaan kenyal', 'Tenaga kimia', 'Tenaga bunyi', 'Tenaga terma'], 'Meregangkan atau memampatkan objek menyimpan tenaga keupayaan kenyal.'],
    'A book on a high shelf has?': ['Buku di atas rak yang tinggi mempunyai?', ['Tenaga keupayaan', 'Tenaga kinetik', 'Tenaga bunyi', 'Tenaga elektrik'], 'Ketinggiannya dari tanah memberikannya tenaga keupayaan graviti.'],
    'The SI unit of energy is the?': ['Unit SI bagi tenaga ialah?', ['joule', 'watt', 'newton', 'volt'], 'Semua bentuk tenaga diukur dalam joule (J).', {'watt': 'Watt mengukur kuasa - tenaga per saat.'}],
    'Energy stored in the nucleus of an atom is?': ['Tenaga yang tersimpan dalam nukleus atom ialah?', ['Tenaga nuklear', 'Tenaga kimia', 'Tenaga kinetik', 'Tenaga keupayaan kenyal'], 'Stesen janakuasa nuklear membebaskan tenaga ini.'],
    'The energy of an object due to its moving particles is?': ['Tenaga objek disebabkan oleh zarah-zarahnya yang bergerak ialah?', ['Tenaga terma', 'Tenaga keupayaan kenyal', 'Tenaga nuklear', 'Tenaga bunyi'], 'Zarah yang lebih laju bermakna tenaga terma yang lebih tinggi.'],
    'A charged balloon stuck to a wall stores?': ['Belon bercas yang melekat pada dinding menyimpan?', ['Tenaga elektrostatik', 'Tenaga nuklear', 'Tenaga kinetik', 'Tenaga bunyi'], 'Cas elektrik yang terpisah menyimpan tenaga elektrostatik.'],
    'A student running on the track mainly has?': ['Murid yang berlari di trek terutamanya mempunyai?', ['Tenaga kinetik', 'Tenaga keupayaan kenyal', 'Tenaga nuklear', 'Tenaga cahaya'], 'Jisim yang bergerak mempunyai tenaga kinetik.'],
    'Which object has the MOST gravitational potential energy?': ['Objek yang manakah mempunyai tenaga keupayaan graviti PALING BANYAK?', ['Kotak 2 kg di rak 5 m', 'Kotak 2 kg di rak 1 m', 'Kotak 1 kg di rak 1 m', 'Kotak 2 kg di atas lantai'], 'Tenaga keupayaan graviti = mgh: jisim × tinggi terbesar menang.'],

    /* ---------- KERJA DAN KUASA ---------- */
    'Work is done when a force moves an object through a?': ['Kerja dilakukan apabila daya menggerakkan objek melalui suatu?', ['Jarak', 'Warna', 'Suhu', 'Isi padu'], 'Kerja = daya × jarak yang digerakkan pada arah daya.'],
    'The SI unit of work is the?': ['Unit SI bagi kerja ialah?', ['joule', 'watt', 'newton', 'pascal'], 'Kerja ialah tenaga yang dipindahkan, jadi ia diukur dalam joule.'],
    'Power is the rate of doing?': ['Kuasa ialah kadar melakukan?', ['Kerja', 'Jisim', 'Daya', 'Jarak'], 'Kuasa = kerja yang dilakukan ÷ masa yang diambil.'],
    'The SI unit of power is the?': ['Unit SI bagi kuasa ialah?', ['watt', 'joule', 'newton', 'volt'], '1 watt = 1 joule per saat.', {'joule': 'Joule mengukur tenaga; kuasa ialah joule PER SAAT.'}],
    'Pushing hard on a wall that does not move does?': ['Menolak dinding yang tidak bergerak dengan kuat melakukan?', ['Tiada kerja', 'Banyak kerja', 'Sedikit kuasa', 'Kerja negatif'], 'Tanpa gerakan, tiada jarak, jadi kerja = 0.'],
    'Work done is equal to the energy?': ['Kerja yang dilakukan sama dengan tenaga yang?', ['Dipindahkan', 'Dimusnahkan', 'Dicipta', 'Hilang selama-lamanya'], 'Melakukan kerja memindahkan tenaga dari satu bentuk ke bentuk lain.'],
    'Two students of equal mass climb the same stairs. The FASTER one has more?': ['Dua murid sama jisim mendaki tangga sama. Yang LEBIH LAJU mempunyai lebih?', ['Kuasa', 'Jisim', 'Kerja dilakukan', 'Ketinggian'], 'Kerja yang sama dalam masa yang lebih singkat bermakna kuasa lebih besar.', {'Kerja dilakukan': 'Jisim dan tinggi yang sama bermakna kerja SAMA - hanya masa berbeza.'}],
    'A 50 N force pushes a box 4 m. Work done?': ['Daya 50 N menolak kotak sejauh 4 m. Kerja dilakukan?', ['200 J', '12.5 J', '54 J', '46 J'], 'W = F × s = 50 × 4 = 200 J.', {'12.5 J': 'Anda membahagi - kerja ialah daya DIDARAB dengan jarak.'}],
    'A motor does 600 J of work in 3 s. Power?': ['Motor melakukan 600 J kerja dalam 3 s. Kuasa?', ['200 W', '1800 W', '603 W', '0.005 W'], 'P = W ÷ t = 600 ÷ 3 = 200 W.', {'1800 W': 'Anda mendarab - kuasa ialah kerja DIBAHAGI dengan masa.'}],
    'A 60 kg student climbs 5 m. Work against gravity? (g = 10)': ['Murid 60 kg memanjat 5 m. Kerja melawan graviti? (g = 10)', ['3000 J', '300 J', '65 J', '12 J'], 'W = mgh = 60 × 10 × 5 = 3000 J.'],

    /* ---------- KEABADIAN TENAGA ---------- */
    'The principle of conservation of energy says energy cannot be?': ['Prinsip keabadian tenaga menyatakan tenaga tidak boleh?', ['Dicipta atau dimusnahkan', 'Disimpan', 'Dipindahkan', 'Diukur'], 'Tenaga hanya berubah dari satu bentuk ke bentuk yang lain.'],
    'A torch changes chemical energy into light and?': ['Lampu suluh menukarkan tenaga kimia kepada cahaya dan?', ['Haba', 'Jisim', 'Kemagnetan', 'Tekanan'], 'Sebahagian tenaga sentiasa dibebaskan sebagai haba.'],
    'A falling ball changes potential energy into?': ['Bola yang jatuh menukarkan tenaga keupayaan kepada?', ['Tenaga kinetik', 'Tenaga kimia', 'Tenaga nuklear', 'Tenaga keupayaan kenyal'], 'Bola semakin laju apabila ketinggiannya berkurang.'],
    'At the top of a roller coaster, the car has the MOST?': ['Di puncak roller coaster, apakah yang PALING TINGGI bagi kereta itu?', ['Tenaga keupayaan', 'Tenaga kinetik', 'Tenaga bunyi', 'Laju'], 'Ketinggian paling besar di puncak, jadi tenaga keupayaan graviti paling tinggi.'],
    'When a kettle boils water, electrical energy becomes mainly?': ['Apabila cerek mendidihkan air, tenaga elektrik kebanyakannya menjadi?', ['Tenaga terma', 'Tenaga cahaya', 'Tenaga kinetik', 'Tenaga nuklear'], 'Elemen pemanas memanaskan air.'],
    'Energy that is not useful, such as heat from a phone charger, is?': ['Tenaga yang tidak berguna, seperti haba daripada pengecas telefon, ialah?', ['Tenaga terbuang', 'Tenaga dimusnahkan', 'Tenaga dicipta', 'Tenaga tersimpan'], 'Ia tersebar ke persekitaran dan sukar digunakan semula.', {'Tenaga dimusnahkan': 'Tenaga tidak pernah dimusnahkan - ia tersebar sebagai haba.'}],
    'A bouncing ball goes lower each bounce because energy is?': ['Bola yang melantun semakin rendah setiap lantunan kerana tenaga?', ['Menjadi haba dan bunyi', 'Dimusnahkan setiap lantunan', 'Bertukar menjadi jisim', 'Tersimpan dalam udara'], 'Setiap lantunan memindahkan sebahagian tenaga kepada haba dan bunyi.', {'Dimusnahkan setiap lantunan': 'Tenaga TIDAK PERNAH dimusnahkan - ia menjadi haba dan bunyi.'}],
    'In a hydroelectric station, the potential energy of water becomes?': ['Di stesen hidroelektrik, tenaga keupayaan air bertukar menjadi?', ['Tenaga elektrik', 'Tenaga kimia', 'Tenaga nuklear', 'Tenaga cahaya'], 'Air yang jatuh memutarkan turbin yang menggerakkan penjana.'],
    'A device takes in 100 J and gives out 60 J of useful energy. Efficiency?': ['Alat menerima 100 J dan mengeluarkan 60 J tenaga berguna. Kecekapan?', ['60%', '40%', '160%', '100%'], 'Kecekapan = berguna ÷ jumlah × 100% = 60 ÷ 100 × 100% = 60%.'],
    'A falling ball loses 40 J of potential energy. Kinetic energy gained?': ['Bola yang jatuh kehilangan 40 J tenaga keupayaan. Tenaga kinetik diperoleh?', ['40 J', '20 J', '80 J', '0 J'], 'Tanpa rintangan udara, semua 40 J tenaga keupayaan yang hilang menjadi tenaga kinetik.']

  });

})(window.PFR.Bank.lang('ms', 3));
