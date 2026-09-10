/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  SOALAN BM: KANTA DAN ALAT OPTIK
   Fizik Tingkatan 4 KSSM, Bab 6
   Topik 24-28: kanta cekung, kanta cembung, kanta pembesar,
   mikroskop, teleskop.

   Nota istilah: short-sightedness = RABUN JAUH (tidak nampak jauh),
   long-sightedness = RABUN DEKAT. Mudah tertukar semasa menterjemah.
   Format: lihat data/ms/mechanics-1.ms.js dan data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Lenses': 'Kanta',
    'Concave Lens': 'Kanta Cekung',
    'Convex Lens': 'Kanta Cembung',
    'Optical Instruments': 'Alat Optik',
    'Magnifying Glass': 'Kanta Pembesar',
    'Microscope': 'Mikroskop',
    'Telescope': 'Teleskop'
  });

  M.add({

    /* ---------- 24. KANTA CEKUNG ---------- */
    'A concave lens is also called a?': ['Kanta cekung juga dipanggil?', ['Kanta pencapah', 'Kanta penumpu', 'Kanta satah', 'Kanta cembung'], 'Ia mencapahkan sinar selari ke arah luar.', {'Kanta penumpu': 'Penumpu menggambarkan kanta CEMBUNG.'}],
    'A concave lens is ... at the centre.': ['Kanta cekung ... di bahagian tengah.', ['Lebih nipis', 'Lebih tebal', 'Sama tebal', 'Rata sepenuhnya'], 'Nipis di tengah, tebal di tepi.', {'Lebih tebal': 'Tebal di tengah menggambarkan kanta CEMBUNG.'}],
    'The image from a concave lens is always?': ['Imej yang dibentuk oleh kanta cekung sentiasa?', ['Maya, tegak, dikecilkan', 'Nyata dan songsang', 'Nyata dan diperbesar', 'Maya dan diperbesar'], 'Benar bagi sebarang kedudukan objek nyata.', {'Nyata dan songsang': 'Kanta cekung tidak pernah membentuk imej nyata.'}],
    'Parallel rays through a concave lens appear to come from?': ['Sinar selari melalui kanta cekung seolah-olah datang dari?', ['Titik fokus utama', 'Pusat optik', 'Infiniti', 'Objek itu sendiri'], 'Sinar mencapah dari titik fokus maya.'],
    'The focal length of a concave lens is taken as?': ['Panjang fokus kanta cekung diambil sebagai?', ['Negatif', 'Positif', 'Sifar', 'Infiniti'], 'Konvensyen tanda bagi fokus maya.'],
    'Concave lenses correct which eye defect?': ['Kanta cekung membetulkan kecacatan mata yang mana?', ['Rabun jauh', 'Rabun dekat', 'Astigmatisme', 'Buta warna'], 'Ia mengalihkan imej ke belakang tepat pada retina.', {'Rabun dekat': 'Rabun dekat dibetulkan dengan kanta CEMBUNG.'}],
    'Can a concave lens form a real image of a real object?': ['Bolehkah kanta cekung membentuk imej nyata bagi objek nyata?', ['Tidak sama sekali', 'Ya, sentiasa', 'Hanya di 2F', 'Hanya di F'], 'Sinar yang mencapah tidak pernah bertemu pada skrin.'],
    'Concave lenses are used in?': ['Kanta cekung digunakan dalam?', ['Lubang intai pintu', 'Kanta pembesar', 'Projektor', 'Kamera ringkas'], 'Ia memberi pandangan yang luas dan dikecilkan.'],

    /* ---------- 25. KANTA CEMBUNG ---------- */
    'A convex lens is also called a?': ['Kanta cembung juga dipanggil?', ['Kanta penumpu', 'Kanta pencapah', 'Kanta satah', 'Kanta cekung'], 'Ia menumpukan sinar selari ke satu titik fokus.', {'Kanta pencapah': 'Pencapah menggambarkan kanta CEKUNG.'}],
    'A convex lens is ... at the centre.': ['Kanta cembung ... di bahagian tengah.', ['Lebih tebal', 'Lebih nipis', 'Rata', 'Berongga'], 'Tebal di tengah, nipis di tepi.', {'Lebih nipis': 'Nipis di tengah menggambarkan kanta CEKUNG.'}],
    'Parallel rays through a convex lens meet at?': ['Sinar selari melalui kanta cembung bertemu di?', ['Titik fokus utama', 'Pusat optik', 'Infiniti', '2F'], 'Titik itu terletak satu panjang fokus dari kanta.'],
    'Distance from optical centre to principal focus?': ['Jarak dari pusat optik ke titik fokus utama?', ['Panjang fokus', 'Jejari kelengkungan', 'Jarak objek', 'Jarak imej'], 'Simbol f, diukur di sepanjang paksi utama.'],
    'Object BEYOND 2F. The image is?': ['Objek MELEBIHI 2F. Imejnya?', ['Nyata, songsang, dikecilkan', 'Nyata, songsang, diperbesar', 'Maya dan tegak', 'Sama saiz'], 'Inilah susunan kamera.', {'Nyata, songsang, diperbesar': 'Melebihi 2F, imejnya DIKECILKAN.'}],
    'Object AT 2F. The image is?': ['Objek DI 2F. Imejnya?', ['Nyata, songsang, sama saiz', 'Nyata dan diperbesar', 'Maya dan tegak', 'Di infiniti'], 'Imej juga terbentuk di 2F pada sisi yang satu lagi.'],
    'Object BETWEEN F and 2F. The image is?': ['Objek ANTARA F dan 2F. Imejnya?', ['Nyata, songsang, diperbesar', 'Nyata dan dikecilkan', 'Maya dan tegak', 'Terbentuk di F'], 'Inilah susunan projektor.'],
    'Object AT F. The image forms?': ['Objek DI F. Imej terbentuk?', ['Di infiniti', 'Di 2F', 'Di F', 'Tepat di belakang kanta'], 'Sinar yang keluar adalah selari.'],
    'Object BETWEEN F and the lens. The image is?': ['Objek ANTARA F dan kanta. Imejnya?', ['Maya, tegak, diperbesar', 'Nyata dan songsang', 'Nyata dan dikecilkan', 'Di infiniti'], 'Inilah susunan kanta pembesar.', {'Nyata dan songsang': 'Di dalam F, imejnya maya dan tegak.'}],
    'The lens formula?': ['Rumus kanta?', ['1/f = 1/u + 1/v', 'f = u + v', '1/f = 1/u − 1/v', 'f = uv'], 'Menggunakan konvensyen nyata-adalah-positif.', {'1/f = 1/u − 1/v': 'Konvensyen nyata-adalah-positif menggunakan TAMBAH.', 'f = u + v': 'Panjang fokus bukan hasil tambah biasa.'}],
    'Linear magnification formula?': ['Rumus pembesaran linear?', ['m = v ÷ u', 'm = u ÷ v', 'm = uv', 'm = v − u'], 'Juga sama dengan tinggi imej ÷ tinggi objek.', {'m = u ÷ v': 'Itu terbalik.'}],
    'Convex lenses correct which eye defect?': ['Kanta cembung membetulkan kecacatan mata yang mana?', ['Rabun dekat', 'Rabun jauh', 'Astigmatisme', 'Katarak'], 'Ia membawa imej ke hadapan tepat pada retina.', {'Rabun jauh': 'Rabun jauh dibetulkan dengan kanta CEKUNG.'}],
    'u = 30 cm, v = 60 cm. Magnification?': ['u = 30 cm, v = 60 cm. Pembesaran?', ['2', '0.5', '90', '30'], 'm = v ÷ u = 60 ÷ 30 = 2.'],
    'f = 10 cm, u = 20 cm. Image distance v?': ['f = 10 cm, u = 20 cm. Jarak imej v?', ['20 cm', '10 cm', '30 cm', '6.7 cm'], '1/v = 1/10 − 1/20 = 1/20, jadi v = 20 cm.'],
    'f = 5 cm, u = 10 cm. Magnification?': ['f = 5 cm, u = 10 cm. Pembesaran?', ['1', '2', '0.5', '5'], 'v = 10 cm, jadi m = 10 ÷ 10 = 1.'],

    /* ---------- 26. KANTA PEMBESAR ---------- */
    'A magnifying glass uses which lens?': ['Kanta pembesar menggunakan kanta jenis apa?', ['Cembung', 'Cekung', 'Satah', 'Silinder'], 'Satu kanta penumpu dengan panjang fokus yang pendek.'],
    'The object must be placed?': ['Objek mesti diletakkan?', ['Antara F dan kanta', 'Di 2F', 'Melebihi 2F', 'Tepat di F'], 'Hanya di situ imejnya maya dan diperbesar.', {'Melebihi 2F': 'Melebihi 2F memberi imej NYATA yang kecil, bukan kanta pembesar.'}],
    'The image from a magnifying glass is?': ['Imej daripada kanta pembesar adalah?', ['Maya, tegak, diperbesar', 'Nyata dan songsang', 'Maya dan dikecilkan', 'Nyata dan diperbesar'], 'Imej dilihat pada sisi yang sama dengan objek.'],
    'For higher magnification, use a lens with?': ['Untuk pembesaran lebih tinggi, gunakan kanta dengan?', ['Panjang fokus lebih pendek', 'Panjang fokus lebih panjang', 'Diameter lebih besar', 'Kaca lebih nipis'], 'Kuasa kanta bertambah apabila f berkurang.', {'Panjang fokus lebih panjang': 'Panjang fokus yang LEBIH PENDEK memberi pembesaran lebih besar.'}],
    'A magnification of 5× means the image is?': ['Pembesaran 5× bermaksud imej itu?', ['5 kali lebih tinggi', '5 kali lebih kecil', 'Tepat 5 cm tinggi', '5 meter jauhnya'], 'Pembesaran ialah nisbah ketinggian yang mudah.'],
    'Where should the eye be placed?': ['Di manakah mata patut diletakkan?', ['Dekat dengan kanta', 'Jauh dari kanta', 'Di objek', 'Di belakang objek'], 'Ini memberi medan penglihatan paling luas.'],

    /* ---------- 27. MIKROSKOP ---------- */
    'A compound microscope uses how many convex lenses?': ['Mikroskop majmuk menggunakan berapa kanta cembung?', ['Dua', 'Satu', 'Tiga', 'Tiada'], 'Kanta objek dan kanta mata.'],
    'The lens nearest the object is called the?': ['Kanta yang paling dekat dengan objek dipanggil?', ['Kanta objek', 'Kanta mata', 'Kondenser', 'Cermin'], 'Ia membentuk imej nyata yang pertama.'],
    'The objective focal length compared with the eyepiece?': ['Panjang fokus kanta objek berbanding kanta mata?', ['Lebih pendek', 'Lebih panjang', 'Sama', 'Sifar'], 'fo < fe dalam mikroskop majmuk.', {'Lebih panjang': 'Dalam mikroskop, kanta objek LEBIH PENDEK. Teleskop sebaliknya.'}],
    'The image formed by the objective lens is?': ['Imej yang dibentuk oleh kanta objek adalah?', ['Nyata, songsang, diperbesar', 'Maya dan tegak', 'Nyata dan dikecilkan', 'Terbentuk di infiniti'], 'Kanta mata kemudian membesarkan imej ini.'],
    'The eyepiece of a microscope acts as a?': ['Kanta mata mikroskop bertindak sebagai?', ['Kanta pembesar', 'Cermin satah', 'Kanta cekung', 'Prisma'], 'Ia melihat imej pertama dari dalam fokusnya.'],
    'The final image in a compound microscope is?': ['Imej akhir dalam mikroskop majmuk adalah?', ['Maya, songsang, diperbesar', 'Nyata dan tegak', 'Maya dan dikecilkan', 'Nyata dan songsang'], 'Songsang berbanding objek asal.'],
    'The object is placed where relative to the objective?': ['Di manakah objek diletakkan berbanding kanta objek?', ['Sedikit melepasi fokusnya', 'Di fokus kanta mata', 'Di infiniti', 'Antara dua kanta'], 'Antara fo dan 2fo memberi imej nyata yang diperbesar.'],
    'Objective m = 5, eyepiece m = 10. Total magnification?': ['Kanta objek m = 5, kanta mata m = 10. Pembesaran keseluruhan?', ['50', '15', '2', '0.5'], 'm keseluruhan = 5 × 10 = 50.'],
    'Objective m = 4, total m = 40. Eyepiece magnification?': ['Kanta objek m = 4, jumlah m = 40. Pembesaran kanta mata?', ['10', '36', '160', '4'], 'me = 40 ÷ 4 = 10.'],

    /* ---------- 28. TELESKOP ---------- */
    'An astronomical telescope uses?': ['Teleskop astronomi menggunakan?', ['Dua kanta cembung', 'Dua kanta cekung', 'Satu kanta sahaja', 'Cembung dan cekung'], 'Kanta objek berfokus panjang dan kanta mata berfokus pendek.'],
    'The objective lens of a telescope has a ... focal length.': ['Kanta objek teleskop mempunyai panjang fokus yang ...', ['Panjang', 'Pendek', 'Sifar', 'Negatif'], 'fo > fe, bertentangan dengan mikroskop.', {'Pendek': 'Kanta objek teleskop PANJANG. Kanta objek mikroskop pendek.'}],
    'Magnification formula for a telescope?': ['Rumus pembesaran teleskop?', ['m = fo ÷ fe', 'm = fe ÷ fo', 'm = fo × fe', 'm = fo + fe'], 'Nisbah dua panjang fokus.', {'m = fe ÷ fo': 'Itu terbalik.', 'm = fo × fe': 'Ia nisbah, bukan hasil darab.'}],
    'Length of a telescope in normal adjustment?': ['Panjang teleskop dalam pelarasan normal?', ['fo + fe', 'fo − fe', 'fo × fe', 'fo ÷ fe'], 'Kedua-dua titik fokus bertemu di dalam tiub.', {'fo − fe': 'Kedua-dua titik fokus bertemu, jadi panjangnya DITAMBAH.'}],
    'The final image in an astronomical telescope is?': ['Imej akhir dalam teleskop astronomi adalah?', ['Maya dan songsang', 'Nyata dan tegak', 'Maya dan tegak', 'Nyata dan songsang'], 'Itulah sebabnya ia tidak digunakan untuk melihat di darat.'],
    'A larger objective diameter gives?': ['Diameter kanta objek yang lebih besar memberi?', ['Imej lebih terang', 'Pembesaran lebih tinggi', 'Imej lebih kecil', 'Teleskop lebih pendek'], 'Lebih banyak cahaya dikumpul dari objek.', {'Pembesaran lebih tinggi': 'Diameter menentukan KECERAHAN; panjang fokus menentukan pembesaran.'}],
    'In a telescope, the object is effectively at?': ['Dalam teleskop, objek dianggap berada di?', ['Infiniti', 'Titik fokus', 'Antara F dan 2F', 'Di 2F'], 'Bintang sangat jauh, jadi sinarnya tiba selari.'],
    'fo = 100 cm, fe = 5 cm. Magnification?': ['fo = 100 cm, fe = 5 cm. Pembesaran?', ['20', '500', '105', '0.05'], 'm = 100 ÷ 5 = 20.'],
    'fo = 90 cm, fe = 6 cm. Length in normal adjustment?': ['fo = 90 cm, fe = 6 cm. Panjang dalam pelarasan normal?', ['96 cm', '84 cm', '15 cm', '540 cm'], 'Panjang = fo + fe = 90 + 6 = 96 cm.']
  });

})(window.PFR.Bank.lang('ms'));
