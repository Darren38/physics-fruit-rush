/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  SOALAN BM: MEKANIK (2)
   Fizik Tingkatan 4 KSSM, Bab 2-3
   Topik 5-10: inersia, daya, momentum, impuls, kegravitian, Kepler.
   Format: lihat data/ms/mechanics-1.ms.js dan data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Forces & Inertia': 'Daya & Inersia',
    'Inertia and Newton I': 'Inersia dan Hukum Newton I',
    'Force and Newton II': 'Daya dan Hukum Newton II',
    'Momentum & Impulse': 'Momentum & Impuls',
    'Momentum': 'Momentum',
    'Impulse and Impulsive Force': 'Impuls dan Daya Impuls',
    'Gravitation & Kepler': 'Kegravitian & Kepler',
    'Gravitational Force': 'Daya Graviti',
    'Kepler’s Laws': 'Hukum Kepler'
  });

  M.add({

    /* ---------- 5. INERSIA / HUKUM NEWTON PERTAMA ---------- */
    'What is inertia?': ['Apakah inersia?', ['Menentang perubahan gerakan', 'Daya penghenti gerakan', 'Kadar perubahan halaju', 'Tenaga jasad bergerak'], 'Inersia menentang sebarang perubahan keadaan gerakan.', {'Daya penghenti gerakan': 'Inersia bukan satu daya.', 'Kadar perubahan halaju': 'Itu ialah pecutan.'}],
    'Inertia depends on?': ['Inersia bergantung pada?', ['Jisim', 'Laju', 'Isi padu', 'Bentuk'], 'Semakin besar jisim, semakin besar inersia.', {'Laju': 'Lori yang diletakkan pun masih mempunyai inersia yang besar.', 'Bentuk': 'Hanya jisim yang penting.'}],
    'Inertia is measured by which quantity?': ['Inersia diukur oleh kuantiti apa?', ['Jisim', 'Berat', 'Daya', 'Halaju'], 'Jisim ialah ukuran inersia.'],
    'Which law explains inertia?': ['Hukum manakah menerangkan inersia?', ['Hukum Newton Pertama', 'Hukum Newton Kedua', 'Hukum Newton Ketiga', 'Hukum Hooke'], 'Hukum Pertama juga dikenali sebagai hukum inersia.', {'Hukum Newton Kedua': 'Hukum Kedua ialah F = ma.', 'Hukum Newton Ketiga': 'Hukum Ketiga berkaitan tindakan dan tindak balas.'}],
    'A larger mass means?': ['Jisim yang lebih besar bermaksud?', ['Inersia lebih besar', 'Inersia lebih kecil', 'Inersia yang sama', 'Tiada inersia'], 'Inersia bertambah dengan jisim.'],
    'A bus stops suddenly. Passengers lurch?': ['Bas berhenti secara mengejut. Penumpang terhumban?', ['Ke hadapan', 'Ke belakang', 'Ke sisi', 'Ke bawah'], 'Badan terus bergerak ke hadapan kerana inersia.', {'Ke belakang': 'Badan anda terus bergerak ke HADAPAN apabila bas berhenti.'}],
    'A bus starts suddenly. Passengers lurch?': ['Bas bergerak secara mengejut. Penumpang terhumban?', ['Ke belakang', 'Ke hadapan', 'Ke atas', 'Tidak bergerak'], 'Badan cenderung kekal pegun kerana inersia.', {'Ke hadapan': 'Badan anda kekal pegun, jadi anda terhumban ke BELAKANG.'}],
    'Why do we wear seat belts?': ['Mengapakah kita memakai tali pinggang keledar?', ['Menghalang badan ke hadapan', 'Menambah laju kereta', 'Mengurangkan jisim kereta', 'Menambah geseran jalan'], 'Tali pinggang membekalkan daya untuk menentang inersia anda.'],
    'Shaking sauce out of a bottle uses?': ['Menggoncang sos keluar dari botol menggunakan?', ['Inersia', 'Geseran', 'Graviti sahaja', 'Tekanan udara'], 'Sos terus bergerak apabila botol berhenti.'],
    'Newton I: a body keeps its motion unless...': ['Newton I: jasad mengekalkan gerakannya kecuali...', ['daya paduan bertindak', 'ia mempunyai jisim', 'ada geseran', 'ia memecut'], 'Hanya daya paduan (tidak seimbang) boleh mengubah gerakan.'],
    'Which has the LARGEST inertia?': ['Yang manakah mempunyai inersia PALING BESAR?', ['Lori bermuatan', 'Lori kosong', 'Motosikal', 'Basikal'], 'Jisim terbesar bermaksud inersia terbesar.'],
    'Why do lorries have lower speed limits?': ['Mengapakah lori mempunyai had laju yang lebih rendah?', ['Inersianya besar', 'Inersianya kecil', 'Tiada brek', 'Lebih ringan'], 'Jisim besar = inersia besar = jarak brek panjang.'],
    'A book rests on a table because...': ['Buku kekal pegun di atas meja kerana...', ['daya-dayanya seimbang', 'tiada daya bertindak', 'graviti sifar di situ', 'ia tiada inersia'], 'Berat ke bawah diseimbangkan oleh daya normal ke atas.'],
    'A headrest in a car protects against?': ['Penahan kepala dalam kereta melindungi daripada?', ['Cedera leher ketika dirempuh', 'Inersia ke hadapan', 'Kehilangan momentum', 'Rintangan udara'], 'Apabila dirempuh dari belakang, ia menggerakkan kepala bersama badan.'],

    /* ---------- 8. HUKUM NEWTON KEDUA / DAYA ---------- */
    'Newton’s Second Law formula?': ['Rumus Hukum Newton Kedua?', ['F = ma', 'F = mv', 'F = m ÷ a', 'F = mgh'], 'Daya paduan = jisim × pecutan.', {'F = mv': 'mv ialah momentum.', 'F = mgh': 'mgh ialah tenaga keupayaan.'}],
    'Which quantity is measured in newtons?': ['Kuantiti manakah diukur dalam newton?', ['Daya', 'Jisim', 'Tenaga', 'Kuasa'], 'Newton ialah unit SI bagi daya.'],
    '1 N gives a 1 kg mass an acceleration of?': ['1 N memberikan jisim 1 kg pecutan sebanyak?', ['1 m/s²', '1 m/s', '10 m/s²', '9.81 m/s²'], 'Itulah takrif newton.'],
    'With constant force, acceleration is ... to mass.': ['Dengan daya malar, pecutan ... jisim.', ['Berkadar songsang dengan', 'Berkadar terus dengan', 'Sama dengan', 'Tiada kaitan dengan'], 'a = F ÷ m, jadi jisim lebih besar memberi a lebih kecil.'],
    'With constant mass, acceleration is ... to resultant force.': ['Dengan jisim malar, pecutan ... daya paduan.', ['Berkadar terus dengan', 'Berkadar songsang dengan', 'Sama dengan', 'Tiada kaitan dengan'], 'a = F ÷ m, jadi F lebih besar memberi a lebih besar.'],
    'A zero resultant force means the object is?': ['Daya paduan sifar bermaksud objek itu?', ['Pegun atau halaju seragam', 'Memecut', 'Menyahpecut', 'Bergerak dalam bulatan'], 'Tiada daya paduan bermaksud tiada pecutan.'],
    'Newton’s Third Law states?': ['Hukum Newton Ketiga menyatakan?', ['Tindakan = tindak balas', 'F = ma', 'Momentum diabadikan', 'Tenaga diabadikan'], 'Daya sentiasa wujud berpasangan, sama besar dan bertentangan arah.'],
    'Action and reaction forces act on?': ['Daya tindakan dan tindak balas bertindak pada?', ['Objek berlainan', 'Objek yang sama', 'Tiada objek', 'Objek lebih berat sahaja'], 'Itulah sebabnya kedua-duanya tidak saling membatalkan.'],
    'Which is a CONTACT force?': ['Yang manakah daya SENTUHAN?', ['Geseran', 'Daya graviti', 'Daya magnet', 'Daya elektrostatik'], 'Geseran memerlukan permukaan yang bersentuhan.'],
    'm = 2 kg, a = 3 m/s². Force?': ['m = 2 kg, a = 3 m/s². Daya?', ['6 N', '5 N', '1.5 N', '9 N'], 'F = ma = 2 × 3 = 6 N.', {'5 N': 'Anda tambah, sepatutnya darab.', '1.5 N': 'Anda bahagi, sepatutnya darab.'}],
    'F = 20 N, m = 4 kg. Acceleration?': ['F = 20 N, m = 4 kg. Pecutan?', ['5 m/s²', '80 m/s²', '0.2 m/s²', '24 m/s²'], 'a = F ÷ m = 20 ÷ 4 = 5 m/s².', {'80 m/s²': 'Anda darab, sepatutnya bahagi.', '0.2 m/s²': 'Anda bahagi secara terbalik.'}],
    'F = 12 N, a = 3 m/s². Mass?': ['F = 12 N, a = 3 m/s². Jisim?', ['4 kg', '36 kg', '15 kg', '0.25 kg'], 'm = F ÷ a = 12 ÷ 3 = 4 kg.'],
    '5 kg pushed by 30 N against 10 N friction. Acceleration?': ['5 kg ditolak 30 N melawan geseran 10 N. Pecutan?', ['4 m/s²', '6 m/s²', '8 m/s²', '2 m/s²'], 'Daya paduan = 20 N, jadi a = 20 ÷ 5 = 4 m/s².', {'6 m/s²': 'Anda terlupa menolak geseran 10 N.', '8 m/s²': 'Anda tambah geseran, sepatutnya tolak.'}],
    'Weight of a 5 kg mass (g = 10 m/s²)?': ['Berat jisim 5 kg (g = 10 m/s²)?', ['50 N', '5 N', '0.5 N', '500 N'], 'W = mg = 5 × 10 = 50 N.', {'5 N': 'Anda terlupa mendarab dengan g.', '0.5 N': 'Anda bahagi dengan g, sepatutnya darab.'}],
    'm = 0.5 kg, F = 4 N. Acceleration?': ['m = 0.5 kg, F = 4 N. Pecutan?', ['8 m/s²', '2 m/s²', '0.125 m/s²', '4.5 m/s²'], 'a = 4 ÷ 0.5 = 8 m/s².'],

    /* ---------- 6. MOMENTUM ---------- */
    'Momentum formula?': ['Rumus momentum?', ['p = mv', 'p = m ÷ v', 'p = ma', 'p = mgh'], 'Momentum = jisim × halaju.', {'p = ma': 'ma ialah daya.', 'p = mgh': 'mgh ialah tenaga keupayaan.'}],
    'SI unit of momentum?': ['Unit SI bagi momentum?', ['kg m/s', 'N', 'J', 'W'], 'p = mv memberikan kg × m/s.', {'N': 'Newton ialah daya.', 'J': 'Joule ialah tenaga.', 'W': 'Watt ialah kuasa.'}],
    'Momentum is a ... quantity.': ['Momentum ialah kuantiti ...', ['Vektor', 'Skalar', 'Kedua-duanya', 'Bukan kedua-duanya'], 'Arahnya mengikut arah halaju.'],
    'Conservation of momentum applies when?': ['Keabadian momentum berlaku apabila?', ['Tiada daya luar bertindak', 'Geseran besar', 'Objek dalam keadaan pegun', 'Jisim berubah'], 'Sistem tertutup mengekalkan jumlah momentumnya.'],
    'In an ELASTIC collision, what is conserved?': ['Dalam perlanggaran KENYAL, apakah yang diabadikan?', ['Momentum & tenaga kinetik', 'Momentum sahaja', 'Tenaga kinetik sahaja', 'Tiada'], 'Perlanggaran kenyal mengekalkan kedua-dua kuantiti.'],
    'In an INELASTIC collision, what is conserved?': ['Dalam perlanggaran TIDAK KENYAL, apakah yang diabadikan?', ['Momentum sahaja', 'Tenaga kinetik sahaja', 'Kedua-duanya', 'Tiada'], 'Sebahagian tenaga kinetik menjadi haba dan bunyi.'],
    'Total momentum before a collision equals?': ['Jumlah momentum sebelum perlanggaran sama dengan?', ['Jumlah momentum selepas', 'Sifar', 'Jumlah tenaga kinetik', 'Separuh nilai selepas'], 'Itulah prinsip keabadian momentum.'],
    'A rocket moves forward because gas is pushed?': ['Roket bergerak ke hadapan kerana gas ditolak?', ['Ke belakang', 'Ke hadapan', 'Ke atas', 'Ke sisi'], 'Momentum yang sama besar dan bertentangan diberikan kepada roket.'],
    'Greater momentum: 1000 kg at 10 m/s or 2000 kg at 5 m/s?': ['Momentum lebih besar: 1000 kg pada 10 m/s atau 2000 kg pada 5 m/s?', ['Sama besar', 'Kereta 1000 kg', 'Lori 2000 kg', 'Tidak boleh dibandingkan'], 'Kedua-duanya memberi p = 10 000 kg m/s.'],
    'm = 2 kg, v = 4 m/s. Momentum?': ['m = 2 kg, v = 4 m/s. Momentum?', ['8 kg m/s', '2 kg m/s', '6 kg m/s', '0.5 kg m/s'], 'p = mv = 2 × 4 = 8 kg m/s.', {'6 kg m/s': 'Anda tambah, sepatutnya darab.', '0.5 kg m/s': 'Anda bahagi, sepatutnya darab.'}],
    'm = 0.5 kg, v = 10 m/s. Momentum?': ['m = 0.5 kg, v = 10 m/s. Momentum?', ['5 kg m/s', '20 kg m/s', '10 kg m/s', '0.05 kg m/s'], 'p = 0.5 × 10 = 5 kg m/s.'],
    'p = 12 kg m/s, m = 3 kg. Velocity?': ['p = 12 kg m/s, m = 3 kg. Halaju?', ['4 m/s', '36 m/s', '9 m/s', '0.25 m/s'], 'v = p ÷ m = 12 ÷ 3 = 4 m/s.'],
    '2 kg at 3 m/s hits a still 1 kg and they stick. Speed?': ['2 kg pada 3 m/s melanggar 1 kg yang pegun dan melekat. Laju?', ['2 m/s', '3 m/s', '1.5 m/s', '6 m/s'], 'p = 6 kg m/s dikongsi oleh 3 kg memberi 2 m/s.', {'3 m/s': 'Kongsikan momentum kepada JUMLAH jisim 3 kg.', '6 m/s': '6 kg m/s ialah momentum, bukan laju.'}],
    'At rest, 2 kg flies right at 3 m/s. A 3 kg flies left at?': ['Dari pegun, 2 kg tercampak ke kanan pada 3 m/s. 3 kg ke kiri pada?', ['2 m/s', '3 m/s', '4.5 m/s', '1 m/s'], 'Momentum kekal 0: 2 × 3 = 3 × v, jadi v = 2 m/s.'],
    'm = 60 kg, v = 5 m/s. Momentum?': ['m = 60 kg, v = 5 m/s. Momentum?', ['300 kg m/s', '65 kg m/s', '12 kg m/s', '30 kg m/s'], 'p = 60 × 5 = 300 kg m/s.'],

    /* ---------- 7. IMPULS DAN DAYA IMPULS ---------- */
    'Impulse is equal to the change in?': ['Impuls sama dengan perubahan dalam?', ['Momentum', 'Tenaga', 'Jisim', 'Halaju'], 'Impuls = mv − mu = perubahan momentum.', {'Tenaga': 'Impuls mengubah momentum, bukan tenaga.', 'Halaju': 'Perubahan halaju sahaja mengabaikan jisim.'}],
    'SI unit of impulse?': ['Unit SI bagi impuls?', ['N s', 'N', 'J', 'kg'], 'Impuls = daya × masa, jadi N s (= kg m/s).', {'N': 'Impuls ialah daya × MASA, jadi N s.', 'J': 'Joule ialah tenaga.'}],
    'Impulse formula?': ['Rumus impuls?', ['Impuls = F × t', 'Impuls = F ÷ t', 'Impuls = m × a', 'Impuls = ½mv²'], 'Daya didarab dengan masa daya itu bertindak.'],
    'Impulsive force formula?': ['Rumus daya impuls?', ['F = (mv − mu) ÷ t', 'F = mv × t', 'F = m ÷ t', 'F = mgh'], 'Kadar perubahan momentum.'],
    'A LONGER collision time gives?': ['Masa perlanggaran yang LEBIH PANJANG memberikan?', ['Daya impuls lebih kecil', 'Daya impuls lebih besar', 'Daya yang sama', 'Daya sifar'], 'Perubahan momentum yang sama diagihkan dalam masa lebih lama.', {'Daya impuls lebih besar': 'Lebih banyak masa bermaksud daya KURANG untuk perubahan yang sama.'}],
    'Airbags reduce injury by?': ['Beg udara mengurangkan kecederaan dengan?', ['Menambah masa hentaman', 'Menambah daya', 'Mengurangkan jisim anda', 'Menambah momentum'], 'Masa lebih lama bermaksud daya impuls lebih kecil.', {'Menambah daya': 'Ia MENGURANGKAN daya dengan memanjangkan masa.'}],
    'Crumple zones work by?': ['Zon remuk berfungsi dengan?', ['Menambah masa hentaman', 'Menjadikan kereta tegar', 'Menambah momentum', 'Mengurangkan jisim kereta'], 'Ia remuk, lalu memanjangkan masa perlanggaran.'],
    'Why do helmets have soft padding?': ['Mengapakah topi keledar mempunyai pelapik lembut?', ['Menambah masa hentaman', 'Menambah daya', 'Menambah momentum', 'Mengurangkan jisim anda'], 'Pelapik memanjangkan masa hentaman, lalu mengurangkan daya.'],
    'A high jumper lands on a thick mattress to?': ['Peserta lompat tinggi mendarat di atas tilam tebal untuk?', ['Lebih masa, kurang daya', 'Tambah daya', 'Tambah momentum', 'Tambah impuls'], 'Pendaratan lembut mengagihkan hentian dalam masa lebih lama.'],
    'Impulsive force is LARGE when collision time is?': ['Daya impuls BESAR apabila masa perlanggaran?', ['Singkat', 'Panjang', 'Sifar', 'Malar'], 'F = perubahan momentum ÷ t, jadi t kecil memberi F besar.'],
    'A karate expert breaks a board using?': ['Pakar karate mematahkan papan menggunakan?', ['Daya besar, masa singkat', 'Daya kecil, masa panjang', 'Impuls sifar', 'Halaju seragam'], 'Masa sentuhan yang sangat singkat menghasilkan daya yang besar.'],
    'Impulse is a ... quantity.': ['Impuls ialah kuantiti ...', ['Vektor', 'Skalar', 'Kedua-duanya', 'Bukan kedua-duanya'], 'Arahnya sama dengan arah daya yang dikenakan.'],
    'm = 2 kg, 0 to 5 m/s in 0.5 s. Impulsive force?': ['m = 2 kg, 0 ke 5 m/s dalam 0.5 s. Daya impuls?', ['20 N', '10 N', '5 N', '2.5 N'], 'Perubahan p = 10 kg m/s; F = 10 ÷ 0.5 = 20 N.'],
    'A 3 kg body changes from 4 m/s to 0. Impulse?': ['Jasad 3 kg berubah dari 4 m/s ke 0. Impuls?', ['12 N s', '3 N s', '4 N s', '0 N s'], 'Impuls = mv − mu = 0 − 12, magnitudnya 12 N s.'],
    'F = 50 N acting for 0.2 s. Impulse?': ['F = 50 N bertindak selama 0.2 s. Impuls?', ['10 N s', '250 N s', '0.004 N s', '50 N s'], 'Impuls = Ft = 50 × 0.2 = 10 N s.'],

    /* ---------- 9. DAYA GRAVITI ---------- */
    'Gravitational force between two masses is?': ['Daya graviti antara dua jisim adalah?', ['Sentiasa menarik', 'Sentiasa menolak', 'Kadang-kadang menolak', 'Sentiasa sifar'], 'Graviti hanya menarik objek ke arah satu sama lain.'],
    'Newton’s law of universal gravitation?': ['Hukum Kegravitian Semesta Newton?', ['F = GMm ÷ r²', 'F = GMm ÷ r', 'F = Gm ÷ r²', 'F = GMmr²'], 'Hukum kuasa dua songsang dengan jarak r.'],
    'If the distance DOUBLES, the force becomes?': ['Jika jarak menjadi DUA KALI, daya menjadi?', ['Satu perempat', 'Separuh', 'Dua kali ganda', 'Empat kali ganda'], 'Kuasa dua songsang: 1 ÷ 2² = ¼.', {'Separuh': 'Ini hukum kuasa DUA songsang, jadi ia satu perempat.'}],
    'If the distance is HALVED, the force becomes?': ['Jika jarak menjadi SEPARUH, daya menjadi?', ['Empat kali ganda', 'Dua kali ganda', 'Separuh', 'Satu perempat'], 'Kuasa dua songsang: 1 ÷ (½)² = 4.', {'Dua kali ganda': 'Kuasa dua songsang: separuh r menjadikannya EMPAT kali.'}],
    'If one mass doubles, the force becomes?': ['Jika satu jisim menjadi dua kali, daya menjadi?', ['Dua kali ganda', 'Separuh', 'Empat kali ganda', 'Tidak berubah'], 'F berkadar terus dengan setiap jisim.'],
    'What does G stand for?': ['G mewakili apa?', ['Pemalar kegravitian', 'Pecutan graviti', 'Kekuatan medan graviti', 'Berat'], 'G = 6.67 × 10⁻¹¹ N m² kg⁻², sama di mana-mana.'],
    'Unit of gravitational field strength?': ['Unit kekuatan medan graviti?', ['N/kg', 'N kg', 'kg/N', 'N m'], 'g = F ÷ m, jadi newton per kilogram.'],
    'What keeps a satellite in orbit?': ['Apakah yang mengekalkan satelit dalam orbit?', ['Daya graviti', 'Daya magnet', 'Geseran', 'Rintangan udara'], 'Graviti membekalkan daya memusat.'],
    'Gravitational force is strongest when objects are?': ['Daya graviti paling kuat apabila objek?', ['Berjisim besar dan dekat', 'Ringan dan dekat', 'Berjisim besar dan jauh', 'Ringan dan jauh'], 'F bertambah dengan jisim dan berkurang dengan jarak.'],
    'Centripetal force on a satellite is provided by?': ['Daya memusat pada satelit dibekalkan oleh?', ['Graviti', 'Geseran', 'Tegangan', 'Daya normal'], 'Ia sentiasa menarik satelit ke arah Bumi.'],
    'Weight of 10 kg where g = 1.6 N/kg (Moon)?': ['Berat 10 kg apabila g = 1.6 N/kg (Bulan)?', ['16 N', '100 N', '6.25 N', '1.6 N'], 'W = mg = 10 × 1.6 = 16 N.'],
    'Distance is tripled. Gravitational force becomes?': ['Jarak menjadi tiga kali. Daya graviti menjadi?', ['Satu persembilan', 'Satu pertiga', 'Tiga kali ganda', 'Sembilan kali ganda'], 'Kuasa dua songsang: 1 ÷ 3² = 1/9.'],

    /* ---------- 10. HUKUM KEPLER ---------- */
    'Kepler I: planets orbit the Sun in?': ['Kepler I: planet mengorbit Matahari dalam bentuk?', ['Elips', 'Bulatan sempurna', 'Garis lurus', 'Lingkaran'], 'Orbit berbentuk elips, bukan bulatan.', {'Bulatan sempurna': 'Orbit ialah elips; bulatan hanya kes khas.'}],
    'In Kepler I, the Sun sits at?': ['Dalam Kepler I, Matahari terletak di?', ['Satu fokus elips', 'Tepat di pusat', 'Di luar orbit', 'Kedua-dua fokus serentak'], 'Matahari berada di salah satu daripada dua fokus.'],
    'Kepler II is about?': ['Kepler II berkaitan dengan?', ['Luas sama dalam masa sama', 'T² ∝ r³', 'Orbit elips', 'F = GMm ÷ r²'], 'Garis ke Matahari mencakupi luas yang sama dalam masa yang sama.'],
    'A planet moves FASTEST when it is?': ['Planet bergerak PALING LAJU apabila ia?', ['Paling dekat dengan Matahari', 'Paling jauh dari Matahari', 'Pada laju malar', 'Di fokus kosong'], 'Luas sama dalam masa sama memerlukan keadaan ini.', {'Paling jauh dari Matahari': 'Luas sama bermaksud ia memecut apabila DEKAT dengan Matahari.'}],
    'Kepler III formula?': ['Rumus Kepler III?', ['T² ∝ r³', 'T ∝ r', 'T³ ∝ r²', 'T² ∝ r'], 'Kuasa dua tempoh berkadar terus dengan kuasa tiga jejari.'],
    'A planet farther from the Sun has a period that is?': ['Planet yang lebih jauh dari Matahari mempunyai tempoh yang?', ['Lebih panjang', 'Lebih pendek', 'Sama', 'Sifar'], 'T² ∝ r³, jadi r lebih besar memberi T lebih besar.'],
    'The law of areas is Kepler’s?': ['Hukum luas ialah Hukum Kepler yang?', ['Kedua', 'Pertama', 'Ketiga', 'Keempat'], 'Kepler II ialah hukum luas yang sama.'],
    'Kepler’s laws describe?': ['Hukum Kepler menerangkan?', ['Gerakan planet', 'Gerakan gelombang', 'Pemindahan haba', 'Arus elektrik'], 'Ia menerangkan cara planet mengorbit Matahari.'],
    'Kepler III links the period to?': ['Kepler III mengaitkan tempoh dengan?', ['Jejari orbit', 'Jisim planet', 'Warna planet', 'Bilangan bulan'], 'Hanya jejari orbit yang penting.'],
    'Planet A: r = 1 AU, T = 1 yr. Planet B: r = 4 AU. T?': ['Planet A: r = 1 AU, T = 1 tahun. Planet B: r = 4 AU. T?', ['8 tahun', '4 tahun', '16 tahun', '2 tahun'], 'T² = r³, jadi T = √(4³) = 8 tahun.'],
    'A planet has r = 9 times Earth’s. Its period?': ['Planet mempunyai r = 9 kali r Bumi. Tempohnya?', ['27 tahun', '9 tahun', '81 tahun', '3 tahun'], 'T = √(9³) = √729 = 27 tahun.']
  });

})(window.PFR.Bank.lang('ms', 4));
