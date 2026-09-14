/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  SOALAN BM: TINGKATAN 1 (1 daripada 2)
   Penyiasatan Saintifik · Jirim
   Istilah mengikut buku teks Sains Tingkatan 1 KSSM dan ejaan DBP.

   Format: 'soalan Inggeris': [soalan BM, [jawapan BM - SUSUNAN SAMA],
                               penerangan BM, {jawapan salah BM: sebab}]
   Nombor, unit dan rumus mesti disalin tepat seperti versi Inggeris.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Scientific Investigation': 'Penyiasatan Saintifik',
    'Physics in Daily Life': 'Fizik dalam Kehidupan Harian',
    'Density': 'Ketumpatan',
    'Matter': 'Jirim',
    'States of Matter': 'Keadaan Jirim',
    'Pressure': 'Tekanan',
    'Thermal Expansion': 'Pengembangan Terma'
  });

  M.add({

    /* ---------- FIZIK DALAM KEHIDUPAN HARIAN ---------- */
    'Physics is mainly the study of matter and?': ['Fizik terutamanya kajian tentang jirim dan?', ['Tenaga', 'Sel hidup', 'Resipi kimia', 'Pertumbuhan tumbuhan'], 'Fizik menerangkan kelakuan jirim dan tenaga.', {'Sel hidup': 'Sel hidup dikaji dalam Biologi.'}],
    'A ball rolling down a slope is an example of?': ['Bola yang bergolek menuruni cerun ialah contoh?', ['Gerakan', 'Peleburan', 'Penyejatan', 'Pencernaan'], 'Gerakan ialah perubahan kedudukan mengikut masa.'],
    'Which instrument measures time?': ['Alat yang manakah mengukur masa?', ['Jam randik', 'Pembaris', 'Termometer', 'Neraca alur'], 'Jam randik mengukur masa dalam saat.', {'Termometer': 'Termometer mengukur suhu.'}],
    'Which instrument measures temperature?': ['Alat yang manakah mengukur suhu?', ['Termometer', 'Jam randik', 'Ammeter', 'Pita pengukur'], 'Termometer mengukur darjah kepanasan sesuatu.', {'Ammeter': 'Ammeter mengukur arus elektrik.'}],
    'The SI unit of length is the?': ['Unit SI bagi panjang ialah?', ['meter', 'sentimeter', 'inci', 'kaki'], 'Panjang diukur dalam meter (m).'],
    'The SI unit of mass is the?': ['Unit SI bagi jisim ialah?', ['kilogram', 'gram', 'newton', 'liter'], 'Jisim diukur dalam kilogram (kg).', {'newton': 'Newton ialah unit daya, bukan jisim.'}],
    'Which is a FORCE in daily life?': ['Yang manakah DAYA dalam kehidupan harian?', ['Tolakan pada pintu', 'Warna cat', 'Bau makanan', 'Bentuk cawan'], 'Daya ialah tolakan atau tarikan.'],
    'A fan changes electrical energy mainly into?': ['Kipas menukar tenaga elektrik terutamanya kepada?', ['Tenaga kinetik', 'Tenaga kimia', 'Tenaga nuklear', 'Tenaga cahaya'], 'Bilah kipas yang berputar mempunyai tenaga kinetik.'],
    'In an investigation, the factor you change on purpose is the?': ['Dalam penyiasatan, faktor yang anda ubah dengan sengaja ialah?', ['Pemboleh ubah dimanipulasi', 'Pemboleh ubah bergerak balas', 'Pemboleh ubah dimalarkan', 'Kesimpulan'], 'Anda sendiri yang mengubah pemboleh ubah dimanipulasi.', {'Pemboleh ubah bergerak balas': 'Pemboleh ubah bergerak balas ialah yang anda ukur.'}],
    'A statement to be tested in an experiment is a?': ['Pernyataan yang diuji dalam eksperimen ialah?', ['Hipotesis', 'Kesimpulan', 'Keputusan', 'Rajah'], 'Hipotesis ialah ramalan yang boleh diuji.'],
    'Convert 2.5 m into centimetres.': ['Tukarkan 2.5 m kepada sentimeter.', ['250 cm', '25 cm', '2500 cm', '0.25 cm'], '1 m = 100 cm, maka 2.5 × 100 = 250 cm.', {'25 cm': 'Anda darab dengan 10. Ada 100 cm dalam 1 m.'}],
    'Convert 1500 g into kilograms.': ['Tukarkan 1500 g kepada kilogram.', ['1.5 kg', '15 kg', '150 kg', '0.15 kg'], '1000 g = 1 kg, maka 1500 ÷ 1000 = 1.5 kg.'],

    /* ---------- KETUMPATAN ---------- */
    'Density is mass divided by?': ['Ketumpatan ialah jisim dibahagi dengan?', ['Isi padu', 'Berat', 'Luas', 'Masa'], 'Ketumpatan = jisim ÷ isi padu.'],
    'The SI unit of density is?': ['Unit SI bagi ketumpatan ialah?', ['kg/m³', 'kg', 'm³', 'N/m²'], 'Jisim dalam kg dibahagi dengan isi padu dalam m³.', {'N/m²': 'N/m² ialah unit tekanan.'}],
    'An object LESS dense than water will?': ['Objek yang KURANG tumpat daripada air akan?', ['Terapung', 'Tenggelam', 'Larut', 'Melebur'], 'Objek kurang tumpat terapung di atas cecair lebih tumpat.', {'Tenggelam': 'Hanya objek LEBIH tumpat daripada air yang tenggelam.'}],
    'An object MORE dense than water will?': ['Objek yang LEBIH tumpat daripada air akan?', ['Tenggelam', 'Terapung', 'Tersejat', 'Mengembang'], 'Objek lebih tumpat tenggelam dalam cecair kurang tumpat.'],
    'Why does cooking oil float on water?': ['Mengapakah minyak masak terapung di atas air?', ['Minyak kurang tumpat', 'Minyak lebih berat', 'Minyak lebih panas', 'Jisim minyak lebih besar'], 'Cecair yang kurang tumpat sentiasa berada di atas.', {'Minyak lebih berat': 'Terapung bergantung pada ketumpatan, bukan berat.'}],
    'Why does a big steel ship float?': ['Mengapakah kapal keluli yang besar terapung?', ['Udara merendahkan ketumpatan', 'Keluli kurang tumpat', 'Air itu melekit', 'Kapal tiada berat'], 'Seluruh kapal, termasuk udaranya, kurang tumpat daripada air.', {'Keluli kurang tumpat': 'Keluli pepejal tenggelam - udara di dalam kapal yang membantu.'}],
    'A cork and a stone of equal size. Which is denser?': ['Gabus dan batu yang sama saiz. Yang manakah lebih tumpat?', ['Batu', 'Gabus', 'Kedua-duanya sama', 'Tiada'], 'Isi padunya sama, tetapi jisim batu lebih besar.'],
    'The density of pure water is about?': ['Ketumpatan air tulen lebih kurang?', ['1 g/cm³', '10 g/cm³', '0.1 g/cm³', '100 g/cm³'], 'Ketumpatan air ialah 1 g/cm³, atau 1000 kg/m³.'],
    'Ice floats on water because ice is?': ['Ais terapung di atas air kerana ais?', ['Kurang tumpat daripada air', 'Lebih sejuk daripada air', 'Lebih berat daripada air', 'Penuh dengan garam'], 'Air mengembang apabila membeku, jadi ais kurang tumpat.'],
    'Mass 200 g, volume 100 cm³. Density?': ['Jisim 200 g, isi padu 100 cm³. Ketumpatan?', ['2 g/cm³', '0.5 g/cm³', '20 000 g/cm³', '300 g/cm³'], 'ρ = m ÷ V = 200 ÷ 100 = 2 g/cm³.', {'0.5 g/cm³': 'Anda bahagi isi padu dengan jisim - sepatutnya jisim ÷ isi padu.'}],
    'Density 8 g/cm³, volume 5 cm³. Mass?': ['Ketumpatan 8 g/cm³, isi padu 5 cm³. Jisim?', ['40 g', '1.6 g', '13 g', '0.6 g'], 'm = ρ × V = 8 × 5 = 40 g.'],

    /* ---------- KEADAAN JIRIM ---------- */
    'Which state has a fixed shape and a fixed volume?': ['Keadaan jirim manakah mempunyai bentuk dan isi padu tetap?', ['Pepejal', 'Cecair', 'Gas', 'Wap'], 'Zarah pepejal tersusun rapat dan hanya bergetar.', {'Cecair': 'Cecair mengikut bentuk bekasnya.'}],
    'Which state takes the shape of its container but keeps its volume?': ['Keadaan manakah mengikut bentuk bekas tetapi isi padunya tetap?', ['Cecair', 'Pepejal', 'Gas', 'Hablur'], 'Zarah cecair boleh menggelongsor melepasi satu sama lain.'],
    'Which state spreads out to fill any container?': ['Keadaan manakah merebak memenuhi apa-apa bekas?', ['Gas', 'Cecair', 'Pepejal', 'Ais'], 'Zarah gas bergerak laju dan merebak.'],
    'A solid changing into a liquid is called?': ['Pepejal yang bertukar menjadi cecair dipanggil?', ['Peleburan', 'Pembekuan', 'Pendidihan', 'Kondensasi'], 'Haba membolehkan zarah bebas bergerak dan mengalir.', {'Pembekuan': 'Pembekuan ialah cecair bertukar menjadi pepejal.'}],
    'Water vapour on a cold mirror turns into droplets. This is?': ['Wap air pada cermin sejuk menjadi titisan. Ini ialah?', ['Kondensasi', 'Penyejatan', 'Peleburan', 'Pemejalwapan'], 'Zarah gas yang disejukkan bergabung menjadi cecair.', {'Penyejatan': 'Penyejatan ialah cecair bertukar MENJADI gas.'}],
    'In which state do the particles move FASTEST?': ['Dalam keadaan manakah zarah bergerak PALING LAJU?', ['Gas', 'Cecair', 'Pepejal', 'Sama dalam semua'], 'Zarah gas mempunyai tenaga kinetik paling tinggi.'],
    'In which state are the particles closest together?': ['Dalam keadaan manakah zarah paling rapat?', ['Pepejal', 'Cecair', 'Gas', 'Stim'], 'Zarah pepejal tersusun dalam corak yang tetap.'],
    'When a solid is heated, its particles?': ['Apabila pepejal dipanaskan, zarahnya?', ['Bergetar lebih laju', 'Berhenti bergerak', 'Menjadi lebih besar', 'Hilang'], 'Haba memberi zarah lebih banyak tenaga kinetik.', {'Menjadi lebih besar': 'Zarah tidak membesar - ia bergerak lebih laju.'}],
    'Why can a gas be squashed easily?': ['Mengapakah gas mudah dimampatkan?', ['Ruang antara zarah besar', 'Zarahnya lembut', 'Gas tiada jisim', 'Gas tiada zarah'], 'Zarah gas berjauhan, jadi boleh ditolak lebih rapat.'],
    'Wet clothes dry in the sun. This is?': ['Pakaian basah kering di bawah matahari. Ini ialah?', ['Penyejatan', 'Kondensasi', 'Pembekuan', 'Peleburan'], 'Zarah air terlepas dari permukaan sebagai wap.'],
    'Ice cream melting in a bowl is gaining?': ['Aiskrim yang melebur dalam mangkuk sedang menerima?', ['Haba', 'Jisim', 'Zarah', 'Kesejukan'], 'Peleburan memerlukan tenaga haba dari persekitaran.', {'Kesejukan': 'Kesejukan tidak mengalir - haba yang mengalir masuk.'}],

    /* ---------- TEKANAN ---------- */
    'Pressure is force divided by?': ['Tekanan ialah daya dibahagi dengan?', ['Luas', 'Jisim', 'Isi padu', 'Masa'], 'Tekanan = daya ÷ luas.'],
    'The SI unit of pressure is the?': ['Unit SI bagi tekanan ialah?', ['pascal', 'newton', 'joule', 'meter'], '1 pascal (Pa) = 1 N/m².', {'newton': 'Newton ialah daya; tekanan ialah daya per luas.'}],
    'Snowshoes stop you sinking because they?': ['Kasut salji menghalang anda terbenam kerana ia?', ['Sebarkan daya ke luas besar', 'Menjadikan anda ringan', 'Mencairkan salji', 'Menambah tekanan'], 'Luas lebih besar bermakna tekanan pada salji lebih kecil.'],
    'A sharp knife cuts well because its edge has a very small?': ['Kuantiti apakah yang sangat kecil pada mata pisau yang tajam?', ['Luas', 'Jisim', 'Berat', 'Panjang'], 'Luas yang kecil menghasilkan tekanan yang besar.'],
    'The SAME force on a smaller area gives?': ['Daya yang SAMA pada luas yang lebih kecil menghasilkan?', ['Tekanan lebih tinggi', 'Tekanan lebih rendah', 'Tekanan yang sama', 'Tekanan sifar'], 'P = F ÷ A, jadi A lebih kecil bermakna P lebih besar.', {'Tekanan lebih rendah': 'Dibahagi dengan luas LEBIH KECIL memberi tekanan LEBIH BESAR.'}],
    'Why do tractors have wide tyres?': ['Mengapakah traktor mempunyai tayar yang lebar?', ['Kurangkan tekanan pada tanah', 'Supaya lebih laju', 'Supaya lebih berat', 'Supaya nampak besar'], 'Tayar lebar menyebarkan berat supaya tidak terbenam.'],
    'Why does a nail have a sharp point?': ['Mengapakah paku mempunyai hujung yang tajam?', ['Tekanan tinggi di hujung', 'Kurang jisim untuk dibawa', 'Tekanan rendah di hujung', 'Supaya mudah bengkok'], 'Luas yang kecil menukar daya kecil kepada tekanan besar.'],
    'Air pressure is caused by?': ['Tekanan udara disebabkan oleh?', ['Zarah udara melanggar objek', 'Haba dari Matahari', 'Angin sahaja', 'Awan yang menekan'], 'Zarah udara yang bergerak menolak setiap permukaan.'],
    'Force 20 N on an area of 4 m². Pressure?': ['Daya 20 N pada luas 4 m². Tekanan?', ['5 Pa', '80 Pa', '24 Pa', '0.2 Pa'], 'P = F ÷ A = 20 ÷ 4 = 5 Pa.', {'80 Pa': 'Anda darab - tekanan ialah daya DIBAHAGI dengan luas.'}],
    'Pressure 50 Pa on an area of 2 m². Force?': ['Tekanan 50 Pa pada luas 2 m². Daya?', ['100 N', '25 N', '52 N', '48 N'], 'F = P × A = 50 × 2 = 100 N.'],

    /* ---------- PENGEMBANGAN TERMA ---------- */
    'When most solids are heated, they?': ['Apabila kebanyakan pepejal dipanaskan, ia akan?', ['Mengembang', 'Mengecut', 'Hilang jisim', 'Berubah warna'], 'Zarah yang dipanaskan bergetar lebih dan perlukan ruang.', {'Mengecut': 'Pepejal mengecut apabila DISEJUKKAN, bukan dipanaskan.'}],
    'When a gas is cooled, it?': ['Apabila gas disejukkan, ia akan?', ['Mengecut', 'Mengembang', 'Bertambah jisim', 'Menjadi lebih berat'], 'Zarah yang lebih perlahan memerlukan ruang lebih kecil.'],
    'Gaps are left between railway tracks to allow for?': ['Ruang ditinggalkan di antara landasan kereta api untuk?', ['Pengembangan', 'Hujan', 'Pengaratan', 'Angin'], 'Pada hari panas, landasan mengembang ke dalam ruang itu.'],
    'Bridges have expansion joints so that they?': ['Jambatan mempunyai sambungan pengembangan supaya ia?', ['Tidak retak ketika panas', 'Nampak cantik', 'Lebih murah', 'Muat lebih banyak kereta'], 'Sambungan memberi ruang untuk jambatan mengembang.'],
    'A liquid-in-glass thermometer works because the liquid?': ['Termometer cecair dalam kaca berfungsi kerana cecairnya?', ['Mengembang jika dipanaskan', 'Berubah warna', 'Menyejat', 'Menjadi lebih berat'], 'Cecair naik dalam tiub apabila ia mengembang.'],
    'A tight metal lid on a glass jar is easier to open after?': ['Penutup logam yang ketat pada balang kaca lebih mudah dibuka selepas?', ['Dialirkan air panas', 'Dimasukkan ke peti beku', 'Balang digoncang', 'Diketuk dengan ais'], 'Penutup logam mengembang lebih banyak daripada balang kaca.'],
    'Which expands the MOST for the same heating?': ['Yang manakah mengembang PALING BANYAK untuk pemanasan yang sama?', ['Gas', 'Cecair', 'Pepejal', 'Semuanya sama'], 'Zarah gas berjauhan dan bergerak bebas.'],
    'Why do power cables sag on hot days?': ['Mengapakah kabel elektrik mengendur pada hari panas?', ['Ia mengembang dan memanjang', 'Ia menjadi lebih berat', 'Burung hinggap padanya', 'Ia melebur'], 'Logam yang dipanaskan mengembang, jadi kabel memanjang.'],
    'During expansion, the particles themselves?': ['Semasa pengembangan, zarah itu sendiri?', ['Kekal sama saiz', 'Menjadi lebih besar', 'Menjadi lebih kecil', 'Hilang'], 'Zarah bergerak lebih jauh; zarah tidak membesar.', {'Menjadi lebih besar': 'Zarah tidak membesar - ruang di antaranya yang bertambah.'}],
    'A dented table-tennis ball in hot water pops back because?': ['Bola pingpong kemek dalam air panas kembali bulat kerana?', ['Udara di dalam mengembang', 'Air menolak ke dalam', 'Bola itu melebur', 'Bola menjadi lebih berat'], 'Udara yang dipanaskan mengembang dan menolak kemek keluar.']
  });

})(window.PFR.Bank.lang('ms', 1));
