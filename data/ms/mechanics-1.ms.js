/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  SOALAN BM: MEKANIK (1)
   Fizik Tingkatan 4 KSSM, Bab 1-2
   Topik 1-4: kuantiti fizik, skalar dan vektor, gerakan linear, jatuh bebas.

   Format: 'soalan Inggeris': [soalan BM, [jawapan BM - SUSUNAN SAMA],
                               penerangan BM, {jawapan salah BM: sebab}]
   Nombor, unit dan rumus mesti disalin tepat seperti versi Inggeris.
   Lihat data/question-bank.js untuk butiran penuh.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Physical Quantities': 'Kuantiti Fizik',
    'Scalars and Vectors': 'Skalar dan Vektor',
    'Linear Motion': 'Gerakan Linear',
    'Free Fall Motion': 'Gerakan Jatuh Bebas'
  });

  M.add({

    /* ---------- 1. KUANTITI FIZIK ---------- */
    'SI unit of length?': ['Unit SI bagi panjang?', ['meter', 'sentimeter', 'kilometer', 'batu'], 'Panjang ialah kuantiti asas. Unit SI = meter (m).'],
    'SI unit of mass?': ['Unit SI bagi jisim?', ['kilogram', 'gram', 'newton', 'tan'], 'Jisim ialah kuantiti asas. Unit SI = kilogram (kg).'],
    'SI unit of time?': ['Unit SI bagi masa?', ['saat', 'minit', 'jam', 'hertz'], 'Masa ialah kuantiti asas. Unit SI = saat (s).'],
    'SI unit of temperature?': ['Unit SI bagi suhu?', ['kelvin', 'darjah Celsius', 'Fahrenheit', 'joule'], 'Unit asas SI bagi suhu ialah kelvin (K).'],
    'SI unit of electric current?': ['Unit SI bagi arus elektrik?', ['ampere', 'volt', 'ohm', 'coulomb'], 'Arus ialah kuantiti asas. Unit SI = ampere (A).'],
    'SI unit of force?': ['Unit SI bagi daya?', ['newton', 'joule', 'watt', 'pascal'], 'Daya ialah kuantiti terbitan: 1 N = 1 kg m s⁻².', {'joule': 'Joule ialah unit tenaga.', 'watt': 'Watt ialah unit kuasa.', 'pascal': 'Pascal ialah unit tekanan.'}],
    'SI unit of energy?': ['Unit SI bagi tenaga?', ['joule', 'newton', 'watt', 'pascal'], 'Tenaga dan kerja berkongsi unit joule (J).', {'newton': 'Newton ialah unit daya.', 'watt': 'Watt ialah tenaga per saat, bukan tenaga.', 'pascal': 'Pascal ialah unit tekanan.'}],
    'SI unit of power?': ['Unit SI bagi kuasa?', ['watt', 'joule', 'newton', 'pascal'], 'Kuasa = tenaga ÷ masa, jadi 1 W = 1 J/s.', {'joule': 'Joule ialah tenaga; kuasa ialah tenaga per saat.', 'newton': 'Newton ialah unit daya.'}],
    'SI unit of pressure?': ['Unit SI bagi tekanan?', ['pascal', 'newton', 'joule', 'watt'], 'Tekanan = daya ÷ luas, jadi 1 Pa = 1 N/m².', {'newton': 'Newton ialah daya; tekanan ialah daya per unit luas.', 'joule': 'Joule ialah unit tenaga.'}],
    'Which is a BASE quantity?': ['Yang manakah kuantiti ASAS?', ['Jisim', 'Daya', 'Ketumpatan', 'Isi padu'], 'Kuantiti asas termasuk jisim, panjang dan masa.', {'Daya': 'Daya diterbitkan daripada F = ma.', 'Ketumpatan': 'Ketumpatan ialah jisim dibahagi isi padu.', 'Isi padu': 'Isi padu ialah panjang kuasa tiga, jadi ia terbitan.'}],
    'Which is a DERIVED quantity?': ['Yang manakah kuantiti TERBITAN?', ['Ketumpatan', 'Jisim', 'Masa', 'Panjang'], 'Ketumpatan = jisim ÷ isi padu, jadi ia terbitan.', {'Jisim': 'Jisim ialah salah satu daripada tujuh kuantiti asas.', 'Masa': 'Masa ialah salah satu daripada tujuh kuantiti asas.', 'Panjang': 'Panjang ialah salah satu daripada tujuh kuantiti asas.'}],
    'SI unit of amount of substance?': ['Unit SI bagi kuantiti bahan?', ['mol', 'gram', 'kilogram', 'liter'], 'Kuantiti bahan ialah kuantiti asas: mol (mol).'],
    'Unit SYMBOL for electric current?': ['SIMBOL unit bagi arus elektrik?', ['A', 'I', 'C', 'V'], 'I ialah simbol kuantiti; A ialah simbol unit.', {'I': 'I ialah simbol KUANTITI, bukan unit.', 'C': 'C ialah coulomb, unit cas.', 'V': 'V ialah volt, unit voltan.'}],
    'SI unit of density?': ['Unit SI bagi ketumpatan?', ['kg/m³', 'g/cm³', 'kg m', 'm³/kg'], 'Ketumpatan = jisim ÷ isi padu = kg per meter padu.', {'g/cm³': 'Idea betul, tetapi ini bukan unit SI.', 'm³/kg': 'Itu isi padu per jisim - songsangannya.'}],
    'Prefix for 10⁻³?': ['Imbuhan bagi 10⁻³?', ['mili', 'mikro', 'senti', 'kilo'], 'mili = 10⁻³, mikro = 10⁻⁶, senti = 10⁻².', {'mikro': 'mikro bermaksud 10⁻⁶.', 'senti': 'senti bermaksud 10⁻².', 'kilo': 'kilo bermaksud 10³, seribu kali lebih besar.'}],
    'The prefix "mega" means?': ['Imbuhan "mega" bermaksud?', ['10⁶', '10³', '10⁹', '10⁻⁶'], 'mega = 10⁶, kilo = 10³, giga = 10⁹.'],
    'Derived unit of volume?': ['Unit terbitan bagi isi padu?', ['m³', 'm²', 'm', 'kg/m³'], 'Isi padu = panjang × panjang × panjang = m³.'],
    'Most precise tool for a small diameter?': ['Alat paling persis untuk diameter kecil?', ['Tolok skru mikrometer', 'Angkup vernier', 'Pembaris meter', 'Pita pengukur'], 'Mikrometer membaca 0.01 mm; vernier membaca 0.01 cm.'],
    'SI unit of luminous intensity?': ['Unit SI bagi keamatan berluminositi?', ['kandela', 'lumen', 'lux', 'watt'], 'Keamatan berluminositi ialah kuantiti asas: kandela (cd).'],
    'Convert 5 km into metres.': ['Tukarkan 5 km kepada meter.', ['5000 m', '500 m', '50 000 m', '0.005 m'], '1 km = 1000 m, jadi 5 km = 5000 m.', {'500 m': 'Anda darab dengan 100. Ada 1000 m dalam satu km.', '50 000 m': 'Anda darab dengan 10 000, sepuluh kali terlalu banyak.'}],
    'Convert 2.5 × 10⁻² m into cm.': ['Tukarkan 2.5 × 10⁻² m kepada cm.', ['2.5 cm', '25 cm', '0.25 cm', '250 cm'], '2.5 × 10⁻² m = 0.025 m = 2.5 cm.', {'25 cm': 'Anda gerakkan titik perpuluhan ke arah yang salah.', '0.25 cm': 'Itu ialah 2.5 × 10⁻³ m.'}],
    'Convert 750 g into kg.': ['Tukarkan 750 g kepada kg.', ['0.75 kg', '7.5 kg', '75 kg', '0.075 kg'], 'Bahagi dengan 1000: 750 g = 0.75 kg.', {'7.5 kg': 'Anda bahagi dengan 100, bukan 1000.', '75 kg': 'Anda bahagi dengan 10, bukan 1000.'}],

    /* ---------- 2. SKALAR DAN VEKTOR ---------- */
    'Which is a VECTOR quantity?': ['Yang manakah kuantiti VEKTOR?', ['Sesaran', 'Jarak', 'Laju', 'Jisim'], 'Sesaran mempunyai magnitud DAN arah.', {'Jarak': 'Jarak hanya ada magnitud - sesaran ada arah.', 'Laju': 'Laju hanya ada magnitud - halaju ada arah.', 'Jisim': 'Jisim tidak mempunyai arah.'}],
    'Which is a SCALAR quantity?': ['Yang manakah kuantiti SKALAR?', ['Tenaga', 'Daya', 'Halaju', 'Pecutan'], 'Tenaga hanya mempunyai magnitud.', {'Daya': 'Daya mempunyai arah, jadi ia vektor.', 'Halaju': 'Halaju mempunyai arah, jadi ia vektor.', 'Pecutan': 'Pecutan mempunyai arah, jadi ia vektor.'}],
    'A scalar quantity has only...': ['Kuantiti skalar hanya mempunyai...', ['Magnitud', 'Arah', 'Magnitud & arah', 'Bukan kedua-duanya'], 'Skalar = magnitud sahaja. Vektor = magnitud + arah.'],
    'A vector has magnitude and...': ['Vektor mempunyai magnitud dan...', ['Arah', 'Jisim', 'Laju', 'Tenaga'], 'Arah yang menjadikan sesuatu kuantiti itu vektor.'],
    'Distance is a ... quantity.': ['Jarak ialah kuantiti ...', ['Skalar', 'Vektor', 'Kedua-duanya', 'Bukan kedua-duanya'], 'Jarak tidak mempunyai arah, jadi ia skalar.'],
    'Which PAIR are both vectors?': ['PASANGAN manakah kedua-duanya vektor?', ['Daya & halaju', 'Jisim & laju', 'Jarak & masa', 'Tenaga & kuasa'], 'Daya dan halaju kedua-duanya memerlukan arah.'],
    'Which PAIR are both scalars?': ['PASANGAN manakah kedua-duanya skalar?', ['Laju & jisim', 'Halaju & daya', 'Berat & momentum', 'Pecutan & daya'], 'Laju dan jisim hanya mempunyai magnitud.'],
    'Weight is a vector because it has...': ['Berat ialah vektor kerana ia mempunyai...', ['Arah', 'Jisim', 'Isi padu', 'Ketumpatan'], 'Berat ialah daya, sentiasa berarah ke bawah.'],
    'Temperature is a ... quantity.': ['Suhu ialah kuantiti ...', ['Skalar', 'Vektor', 'Kedua-duanya', 'Bukan kedua-duanya'], 'Suhu hanya mempunyai magnitud.'],
    'Which quantity can be negative to show direction?': ['Kuantiti manakah boleh negatif untuk menunjukkan arah?', ['Halaju', 'Laju', 'Jarak', 'Jisim'], 'Tanda negatif pada vektor menunjukkan arah bertentangan.'],
    'Two 3 N forces act in OPPOSITE directions. Resultant?': ['Dua daya 3 N bertindak pada arah BERTENTANGAN. Paduan?', ['0 N', '6 N', '3 N', '9 N'], 'Daya sama besar dan bertentangan saling membatalkan: 3 − 3 = 0 N.', {'6 N': 'Arah bertentangan ditolak, bukan ditambah.', '3 N': 'Kedua-dua daya bertindak, jadi ia batal sepenuhnya.'}],
    '4 N and 3 N act in the SAME direction. Resultant?': ['4 N dan 3 N bertindak pada arah yang SAMA. Paduan?', ['7 N', '1 N', '5 N', '12 N'], 'Arah sama, jadi tambah: 4 + 3 = 7 N.'],
    '4 N east and 3 N north. Resultant magnitude?': ['4 N ke timur dan 3 N ke utara. Magnitud paduan?', ['5 N', '7 N', '1 N', '12 N'], 'Berserenjang: √(4² + 3²) = 5 N.', {'7 N': 'Daya berserenjang memerlukan Pythagoras, bukan penambahan.', '1 N': 'Itu untuk arah bertentangan, bukan berserenjang.'}],
    '10 N east and 4 N west. Resultant?': ['10 N ke timur dan 4 N ke barat. Paduan?', ['6 N ke timur', '14 N ke timur', '6 N ke barat', '40 N ke timur'], 'Arah bertentangan ditolak: 10 − 4 = 6 N ke timur.'],

    /* ---------- 3. GERAKAN LINEAR ---------- */
    'SI unit of velocity?': ['Unit SI bagi halaju?', ['m/s', 'm', 'm/s²', 's'], 'Halaju = sesaran ÷ masa = meter per saat.', {'m/s²': 'm/s² ialah unit pecutan.', 'm': 'Meter mengukur jarak.'}],
    'SI unit of acceleration?': ['Unit SI bagi pecutan?', ['m/s²', 'm/s', 'm', 'N'], 'Pecutan = perubahan halaju ÷ masa = m/s².', {'m/s': 'm/s ialah halaju, bukan kadar perubahannya.', 'N': 'Newton mengukur daya.'}],
    'Rate of change of velocity is called?': ['Kadar perubahan halaju dipanggil?', ['Pecutan', 'Laju', 'Sesaran', 'Momentum'], 'a = (v − u) ÷ t.'],
    'Speed formula?': ['Rumus laju?', ['jarak ÷ masa', 'masa ÷ jarak', 'jarak × masa', 'jarak + masa'], 'Laju = jumlah jarak ÷ jumlah masa.', {'masa ÷ jarak': 'Itu terbalik.', 'jarak × masa': 'Laju ialah kadar, jadi mesti dibahagi dengan masa.'}],
    'Velocity formula?': ['Rumus halaju?', ['sesaran ÷ masa', 'masa ÷ sesaran', 'sesaran × masa', 'jarak × masa'], 'Halaju menggunakan sesaran, bukan jarak.', {'masa ÷ sesaran': 'Itu terbalik.', 'jarak × masa': 'Halaju ialah kadar, jadi mesti dibahagi dengan masa.'}],
    'Gradient of a displacement-time graph gives?': ['Kecerunan graf sesaran-masa memberikan?', ['Halaju', 'Pecutan', 'Jarak', 'Masa'], 'Perubahan s ÷ perubahan t = halaju.', {'Pecutan': 'Pecutan ialah kecerunan graf HALAJU-masa.'}],
    'Gradient of a velocity-time graph gives?': ['Kecerunan graf halaju-masa memberikan?', ['Pecutan', 'Sesaran', 'Laju', 'Daya'], 'Perubahan v ÷ perubahan t = pecutan.', {'Sesaran': 'Sesaran ialah LUAS di bawah graf halaju-masa.'}],
    'Area under a velocity-time graph gives?': ['Luas di bawah graf halaju-masa memberikan?', ['Sesaran', 'Pecutan', 'Laju', 'Daya'], 'halaju × masa = sesaran.', {'Pecutan': 'Pecutan ialah KECERUNAN, bukan luas.'}],
    'Horizontal line on a displacement-time graph means?': ['Garis mengufuk pada graf sesaran-masa bermaksud?', ['Objek dalam keadaan pegun', 'Halaju seragam', 'Pecutan seragam', 'Nyahpecutan'], 'Kecerunan sifar bermaksud halaju sifar.', {'Halaju seragam': 'Halaju seragam ialah garis lurus yang CONDONG.'}],
    'Horizontal line (v ≠ 0) on a velocity-time graph means?': ['Garis mengufuk (v ≠ 0) pada graf halaju-masa bermaksud?', ['Halaju seragam', 'Pegun', 'Pecutan seragam', 'Nyahpecutan seragam'], 'Kecerunan sifar bermaksud pecutan sifar.'],
    'Negative gradient on a velocity-time graph means?': ['Kecerunan negatif pada graf halaju-masa bermaksud?', ['Nyahpecutan', 'Pecutan', 'Halaju seragam', 'Pegun'], 'Halaju berkurang dengan masa.'],
    'Distance is always ... displacement.': ['Jarak sentiasa ... sesaran.', ['≥ (lebih besar atau sama)', '< (kurang daripada)', '= (sama dengan)', '½ daripada'], 'Jarak ialah seluruh laluan; sesaran ialah garis terus.'],
    'Ticker tape with evenly spaced dots shows?': ['Pita detik dengan titik berjarak sekata menunjukkan?', ['Halaju seragam', 'Pecutan', 'Nyahpecutan', 'Objek pegun'], 'Jarak sama dalam masa sama = halaju seragam.'],
    'A 50 Hz ticker timer makes one tick every?': ['Jangka masa detik 50 Hz membuat satu detik setiap?', ['0.02 s', '0.2 s', '50 s', '0.5 s'], 'T = 1 ÷ f = 1 ÷ 50 = 0.02 s.'],
    'A car travels 100 m in 20 s. Average speed?': ['Kereta bergerak 100 m dalam 20 s. Laju purata?', ['5 m/s', '20 m/s', '2000 m/s', '0.2 m/s'], 'v = 100 ÷ 20 = 5 m/s.'],
    'From rest to 20 m/s in 5 s. Acceleration?': ['Dari pegun ke 20 m/s dalam 5 s. Pecutan?', ['4 m/s²', '100 m/s²', '0.25 m/s²', '15 m/s²'], 'a = (20 − 0) ÷ 5 = 4 m/s².', {'100 m/s²': 'Anda darab, sepatutnya bahagi.', '0.25 m/s²': 'Anda bahagi secara terbalik.'}],
    'u = 5 m/s, a = 2 m/s², t = 3 s. Find v.': ['u = 5 m/s, a = 2 m/s², t = 3 s. Cari v.', ['11 m/s', '10 m/s', '6 m/s', '30 m/s'], 'v = u + at = 5 + (2 × 3) = 11 m/s.', {'6 m/s': 'Anda terlupa menambah halaju awal.', '30 m/s': 'Anda mendarab ketiga-tiga nilai.'}],
    'A runner does one 400 m lap back to the start. Displacement?': ['Pelari berlari satu pusingan 400 m kembali ke titik mula. Sesaran?', ['0 m', '400 m', '200 m', '800 m'], 'Titik mula dan titik tamat adalah sama.', {'400 m': 'Itu jarak yang dilalui, bukan sesaran.', '200 m': 'Sesaran diukur dari titik mula ke titik tamat.'}],
    'u = 0, a = 2 m/s², t = 4 s. Distance travelled?': ['u = 0, a = 2 m/s², t = 4 s. Jarak dilalui?', ['16 m', '8 m', '32 m', '4 m'], 's = ½at² = ½ × 2 × 16 = 16 m.', {'8 m': '8 m/s ialah halaju akhir - gunakan s = ½at².', '32 m': 'Anda tertinggal ½.'}],
    '30 m/s slows to 10 m/s in 4 s. Acceleration?': ['30 m/s menjadi perlahan ke 10 m/s dalam 4 s. Pecutan?', ['−5 m/s²', '5 m/s²', '−10 m/s²', '−2.5 m/s²'], 'a = (10 − 30) ÷ 4 = −5 m/s².', {'5 m/s²': 'Semakin perlahan bermaksud pecutan NEGATIF.'}],
    'u = 2 m/s, v = 10 m/s, t = 4 s. Acceleration?': ['u = 2 m/s, v = 10 m/s, t = 4 s. Pecutan?', ['2 m/s²', '3 m/s²', '8 m/s²', '0.5 m/s²'], 'a = (10 − 2) ÷ 4 = 2 m/s².'],

    /* ---------- 4. GERAKAN JATUH BEBAS ---------- */
    'Value of gravitational acceleration on Earth?': ['Nilai pecutan graviti di Bumi?', ['9.81 m/s²', '9.81 m/s', '0.98 m/s²', '98.1 m/s²'], 'g ≈ 9.81 m/s², sering dibundarkan kepada 10 m/s².', {'9.81 m/s': 'Itu unit halaju, bukan pecutan.', '98.1 m/s²': 'Itu sepuluh kali terlalu besar.'}],
    'In free fall, the only force acting is?': ['Dalam jatuh bebas, satu-satunya daya yang bertindak ialah?', ['Berat', 'Geseran', 'Rintangan udara', 'Daya normal'], 'Jatuh bebas bermaksud hanya graviti yang bertindak.', {'Rintangan udara': 'Jatuh bebas bermaksud rintangan udara diabaikan.', 'Geseran': 'Tiada apa-apa untuk bergeser dalam jatuh bebas.'}],
    'True free fall can only happen in?': ['Jatuh bebas sebenar hanya boleh berlaku dalam?', ['Vakum', 'Udara', 'Air', 'Minyak'], 'Tiada rintangan udara dalam jatuh bebas sebenar.'],
    'A feather and a coin dropped in a vacuum will?': ['Bulu pelepah dan syiling yang dijatuhkan dalam vakum akan?', ['Mendarat serentak', 'Bulu pelepah dahulu', 'Syiling dahulu', 'Kedua-dua tidak jatuh'], 'Pecutan jatuh bebas tidak bergantung pada jisim.'],
    'During free fall, the acceleration is?': ['Semasa jatuh bebas, pecutannya?', ['Malar', 'Bertambah', 'Berkurang', 'Sifar'], 'g adalah malar berhampiran permukaan Bumi.'],
    'A falling object in free fall has velocity that?': ['Objek yang jatuh bebas mempunyai halaju yang?', ['Bertambah secara seragam', 'Kekal malar', 'Berkurang', 'Sentiasa sifar'], 'Pecutan malar bermaksud halaju bertambah secara seragam.'],
    'At the highest point of a ball thrown up, velocity is?': ['Di titik tertinggi bola yang dilontar ke atas, halajunya?', ['0 m/s', 'Maksimum', 'Sama dengan g', '10 m/s'], 'Ia berhenti seketika sebelum jatuh semula.', {'Maksimum': 'Halaju adalah SIFAR seketika di titik paling atas.'}],
    'At the highest point of a thrown ball, acceleration is?': ['Di titik tertinggi bola yang dilontar, pecutannya?', ['9.81 m/s² ke bawah', 'Sifar', '9.81 m/s² ke atas', 'Maksimum'], 'Graviti masih bertindak walaupun halaju sifar.', {'Sifar': 'Graviti masih menarik walaupun halaju sifar.'}],
    'Weight formula?': ['Rumus berat?', ['W = mg', 'W = m ÷ g', 'W = g ÷ m', 'W = mgh'], 'Berat ialah daya graviti yang bertindak pada suatu jisim.', {'W = mgh': 'mgh ialah tenaga keupayaan graviti.', 'W = m ÷ g': 'Berat ialah jisim DIDARAB dengan g.'}],
    'Your MASS on the Moon compared to Earth?': ['JISIM anda di Bulan berbanding di Bumi?', ['Sama', 'Lebih kecil', 'Lebih besar', 'Sifar'], 'Jisim ialah kuantiti jirim; ia tidak pernah berubah.', {'Lebih kecil': 'BERAT anda lebih kecil. Jisim tidak berubah.'}],
    'Your WEIGHT on the Moon compared to Earth?': ['BERAT anda di Bulan berbanding di Bumi?', ['Lebih kecil', 'Sama', 'Lebih besar', 'Sifar'], 'Graviti Bulan lebih lemah, jadi W = mg lebih kecil.', {'Sama': 'Berat ialah mg, dan g di Bulan lebih lemah.'}],
    'Dropped from rest. Velocity after 2 s (g = 10 m/s²)?': ['Dijatuhkan dari pegun. Halaju selepas 2 s (g = 10 m/s²)?', ['20 m/s', '10 m/s', '5 m/s', '40 m/s'], 'v = u + gt = 0 + (10 × 2) = 20 m/s.'],
    'Dropped from rest. Distance fallen in 3 s (g = 10)?': ['Dijatuhkan dari pegun. Jarak jatuh dalam 3 s (g = 10)?', ['45 m', '30 m', '90 m', '15 m'], 'h = ½gt² = ½ × 10 × 9 = 45 m.'],
    'Mass 2 kg, g = 10 m/s². Weight?': ['Jisim 2 kg, g = 10 m/s². Berat?', ['20 N', '0.2 N', '2 N', '5 N'], 'W = mg = 2 × 10 = 20 N.', {'2 N': 'Anda terlupa mendarab dengan g.', '5 N': 'Anda bahagi, sepatutnya darab.'}],
    'Object falls for 1 s from rest (g = 10). Distance?': ['Objek jatuh dari pegun selama 1 s (g = 10). Jarak?', ['5 m', '10 m', '20 m', '1 m'], 'h = ½ × 10 × 1² = 5 m.']
  });

})(window.PFR.Bank.lang('ms', 4));
