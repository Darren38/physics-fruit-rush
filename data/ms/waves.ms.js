/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  SOALAN BM: GELOMBANG
   Fizik Tingkatan 4 KSSM, Bab 5
   Topik 15-19: gelombang, pantulan, pelembapan dan resonans,
   interferens, pembelauan.
   Format: lihat data/ms/mechanics-1.ms.js dan data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Waves': 'Gelombang',
    'Reflection of Waves': 'Pantulan Gelombang',
    'Damping and Resonance': 'Pelembapan dan Resonans',
    'Interference of Waves': 'Interferens Gelombang',
    'Diffraction of Waves': 'Pembelauan Gelombang'
  });

  M.add({

    /* ---------- 15. GELOMBANG ---------- */
    'SI unit of frequency?': ['Unit SI bagi frekuensi?', ['hertz', 'saat', 'meter', 'm/s'], '1 Hz = satu gelombang lengkap sesaat.', {'saat': 'Saat mengukur TEMPOH, bukan frekuensi.', 'm/s': 'm/s ialah laju gelombang.'}],
    'SI unit of wavelength?': ['Unit SI bagi panjang gelombang?', ['meter', 'hertz', 'saat', 'm/s'], 'Panjang gelombang ialah jarak, diukur dalam meter.', {'hertz': 'Hertz mengukur frekuensi.', 'm/s': 'm/s ialah laju gelombang.'}],
    'Wave speed formula?': ['Rumus laju gelombang?', ['v = fλ', 'v = f ÷ λ', 'v = λ ÷ f', 'v = ft'], 'Laju = frekuensi × panjang gelombang.', {'v = λ ÷ f': 'Itu terbalik.', 'v = f ÷ λ': 'Itu terbalik.'}],
    'Maximum displacement from the rest position?': ['Sesaran maksimum dari kedudukan keseimbangan?', ['Amplitud', 'Panjang gelombang', 'Frekuensi', 'Tempoh'], 'Amplitud mengukur saiz ayunan.', {'Panjang gelombang': 'Panjang gelombang ialah jarak antara dua puncak.'}],
    'Time taken for one complete oscillation?': ['Masa untuk satu ayunan lengkap?', ['Tempoh', 'Frekuensi', 'Amplitud', 'Panjang gelombang'], 'Tempoh T diukur dalam saat.', {'Frekuensi': 'Frekuensi ialah bilangan ayunan sesaat - salingannya.'}],
    'Sound waves are?': ['Gelombang bunyi ialah gelombang?', ['Membujur', 'Melintang', 'Elektromagnet', 'Pegun'], 'Zarah udara bergetar selari dengan arah perambatan.', {'Melintang': 'Udara bergetar SELARI dengan arah perambatan.', 'Elektromagnet': 'Bunyi memerlukan medium; ia gelombang mekanikal.'}],
    'Light waves are?': ['Gelombang cahaya ialah gelombang?', ['Melintang', 'Membujur', 'Mekanikal', 'Bunyi'], 'Medannya bergetar berserenjang dengan arah perambatan.', {'Membujur': 'Cahaya bergetar BERSERENJANG dengan arah perambatan.', 'Mekanikal': 'Cahaya boleh merambat melalui vakum, jadi ia bukan mekanikal.'}],
    'Relationship between period and frequency?': ['Hubungan antara tempoh dan frekuensi?', ['T = 1 ÷ f', 'T = f', 'T = f²', 'T = 2f'], 'Kedua-duanya salingan antara satu sama lain.', {'T = f': 'Kedua-duanya salingan, bukan sama.'}],
    'In a TRANSVERSE wave, the vibration is?': ['Dalam gelombang MELINTANG, getarannya?', ['Berserenjang arah perambatan', 'Selari arah perambatan', 'Dalam bulatan', 'Tiada'], 'Bayangkan tali yang dihentak ke atas dan ke bawah.', {'Selari arah perambatan': 'Getaran selari menggambarkan gelombang MEMBUJUR.'}],
    'In a LONGITUDINAL wave, the vibration is?': ['Dalam gelombang MEMBUJUR, getarannya?', ['Selari arah perambatan', 'Berserenjang arah perambatan', 'Membulat', 'Rawak'], 'Bayangkan spring slinki yang ditolak ke depan dan ke belakang.', {'Berserenjang arah perambatan': 'Getaran berserenjang menggambarkan gelombang MELINTANG.'}],
    'Compressions and rarefactions occur in?': ['Mampatan dan regangan berlaku dalam?', ['Gelombang membujur', 'Gelombang melintang', 'Gelombang cahaya', 'Gelombang air'], 'Ia ialah kawasan bertekanan tinggi dan rendah.'],
    'Waves transfer ... without transferring matter.': ['Gelombang memindahkan ... tanpa memindahkan jirim.', ['Tenaga', 'Jisim', 'Zarah', 'Elektron'], 'Medium itu sendiri tidak bergerak bersama gelombang.'],
    'Distance between two consecutive crests?': ['Jarak antara dua puncak berturutan?', ['Panjang gelombang', 'Amplitud', 'Tempoh', 'Frekuensi'], 'Satu gelombang penuh, simbol λ.'],
    'At the same speed, a higher frequency gives a ... wavelength.': ['Pada laju yang sama, frekuensi lebih tinggi memberi panjang gelombang ...', ['Lebih pendek', 'Lebih panjang', 'Sama', 'Sifar'], 'v = fλ, jadi f naik bermaksud λ turun.'],
    'A wavefront is?': ['Muka gelombang ialah?', ['Garis titik-titik sefasa', 'Arah perambatan', 'Amplitud gelombang', 'Laju gelombang'], 'Contohnya, garis yang menyambungkan puncak-puncak.'],
    'f = 50 Hz, λ = 2 m. Wave speed?': ['f = 50 Hz, λ = 2 m. Laju gelombang?', ['100 m/s', '25 m/s', '52 m/s', '0.04 m/s'], 'v = fλ = 50 × 2 = 100 m/s.', {'25 m/s': 'Anda bahagi, sepatutnya darab.', '52 m/s': 'Anda tambah, sepatutnya darab.'}],
    'v = 340 m/s, f = 170 Hz. Wavelength?': ['v = 340 m/s, f = 170 Hz. Panjang gelombang?', ['2 m', '0.5 m', '510 m', '170 m'], 'λ = v ÷ f = 340 ÷ 170 = 2 m.', {'510 m': 'Anda tambah, sepatutnya bahagi: 340 + 170 = 510.', '0.5 m': 'Anda bahagi secara terbalik.'}],
    'T = 0.2 s. Frequency?': ['T = 0.2 s. Frekuensi?', ['5 Hz', '0.2 Hz', '20 Hz', '2 Hz'], 'f = 1 ÷ T = 1 ÷ 0.2 = 5 Hz.', {'0.2 Hz': 'Frekuensi ialah 1 ÷ T, bukan T itu sendiri.', '20 Hz': 'Semak titik perpuluhan: 1 ÷ 0.2 = 5.'}],
    'f = 4 Hz, λ = 0.5 m. Wave speed?': ['f = 4 Hz, λ = 0.5 m. Laju gelombang?', ['2 m/s', '8 m/s', '4.5 m/s', '0.125 m/s'], 'v = fλ = 4 × 0.5 = 2 m/s.'],

    /* ---------- 16. PANTULAN GELOMBANG ---------- */
    'In reflection, the angle of incidence equals?': ['Dalam pantulan, sudut tuju sama dengan?', ['Sudut pantulan', 'Sudut biasan', 'Sudut genting', '90°'], 'Itulah hukum pantulan.'],
    'An echo is caused by?': ['Gema disebabkan oleh?', ['Pantulan bunyi', 'Pembiasan bunyi', 'Pembelauan', 'Interferens'], 'Bunyi terpantul dari permukaan keras dan kembali.'],
    'After reflection, the wavelength?': ['Selepas pantulan, panjang gelombang?', ['Kekal sama', 'Bertambah', 'Berkurang', 'Menjadi sifar'], 'Pantulan hanya mengubah arah.'],
    'After reflection, the frequency?': ['Selepas pantulan, frekuensi?', ['Kekal sama', 'Bertambah', 'Berkurang', 'Berganda dua'], 'Frekuensi ditentukan oleh sumber.', {'Bertambah': 'Frekuensi ditetapkan oleh sumber dan tidak pernah berubah.'}],
    'After reflection, the wave speed?': ['Selepas pantulan, laju gelombang?', ['Kekal sama', 'Bertambah', 'Berkurang', 'Menjadi sifar'], 'Medium tidak berubah, jadi v tidak berubah.'],
    'After reflection, the direction of travel?': ['Selepas pantulan, arah perambatan?', ['Berubah', 'Kekal sama', 'Menjadi rawak', 'Menjadi sifar'], 'Hanya arah yang diubah oleh pantulan.'],
    'Sonar works by reflecting?': ['Sonar berfungsi dengan memantulkan?', ['Gelombang bunyi', 'Gelombang cahaya', 'Gelombang radio', 'Sinar-X'], 'Kapal menggunakannya untuk mengukur kedalaman laut.'],
    'The normal is a line drawn ... to the surface.': ['Garis normal dilukis ... dengan permukaan.', ['Berserenjang', 'Selari', 'Pada 45°', 'Melengkung'], 'Semua sudut diukur dari garis normal.'],
    'Reflection is used in which medical scan?': ['Pantulan digunakan dalam imbasan perubatan yang mana?', ['Ultrabunyi', 'Sinar-X', 'MRI', 'Ujian darah'], 'Ultrabunyi yang terpantul membina imej.'],

    /* ---------- 17. PELEMBAPAN DAN RESONANS ---------- */
    'Damping causes the amplitude to?': ['Pelembapan menyebabkan amplitud?', ['Berkurang', 'Bertambah', 'Kekal malar', 'Berganda dua'], 'Ayunan beransur-ansur hilang.', {'Bertambah': 'Pelembapan mengeluarkan tenaga, jadi amplitud berkurang.', 'Kekal malar': 'Tenaga hilang, jadi ia tidak boleh kekal malar.'}],
    'Resonance happens when the driving frequency equals?': ['Resonans berlaku apabila frekuensi daya luar sama dengan?', ['Frekuensi asli', 'Sifar', 'Dua kali frekuensi asli', 'Separuh frekuensi asli'], 'Pemindahan tenaga paling cekap pada ketika itu.', {'Dua kali frekuensi asli': 'Resonans memerlukan frekuensi yang SAMA, bukan gandaannya.'}],
    'Damping is caused by a loss of?': ['Pelembapan disebabkan oleh kehilangan?', ['Tenaga', 'Jisim', 'Frekuensi', 'Panjang gelombang'], 'Tenaga hilang sebagai haba dan bunyi.'],
    'External damping is due to?': ['Pelembapan luar disebabkan oleh?', ['Geseran dengan persekitaran', 'Daya dalaman molekul', 'Graviti', 'Pertambahan jisim'], 'Contohnya, rintangan udara pada bandul.'],
    'During damping, the frequency of oscillation?': ['Semasa pelembapan, frekuensi ayunan?', ['Kekal sama', 'Bertambah', 'Banyak berkurang', 'Menjadi sifar'], 'Hanya amplitud yang berkurang; frekuensi kekal.'],
    'At resonance, the amplitude is?': ['Semasa resonans, amplitudnya?', ['Maksimum', 'Minimum', 'Sifar', 'Malar'], 'Sistem menyerap tenaga paling banyak.'],
    'The Tacoma Narrows Bridge collapse is an example of?': ['Keruntuhan Jambatan Tacoma Narrows ialah contoh?', ['Resonans berbahaya', 'Resonans berguna', 'Pelembapan', 'Pembelauan'], 'Angin menggetarkan jambatan pada frekuensi aslinya.'],
    'A microwave oven heats food by resonance of?': ['Ketuhar gelombang mikro memanaskan makanan melalui resonans?', ['Molekul air', 'Molekul lemak', 'Atom logam', 'Molekul udara'], 'Gelombang mikro sepadan dengan frekuensi molekul air.'],
    'Soldiers break step on a bridge to avoid?': ['Askar tidak berkawad seirama di atas jambatan untuk mengelak?', ['Resonans', 'Pelembapan', 'Pembelauan', 'Pembiasan'], 'Kawad seirama boleh menyamai frekuensi asli jambatan.'],
    'Natural frequency is the frequency at which a system?': ['Frekuensi asli ialah frekuensi apabila sistem?', ['Berayun secara bebas', 'Dipaksa bergetar', 'Berhenti bergerak', 'Hilang semua tenaganya'], 'Ia bergantung pada sistem itu, bukan pada daya luar.'],
    'Tuning a radio to a station uses?': ['Menala radio ke sesebuah stesen menggunakan?', ['Resonans', 'Pelembapan', 'Interferens', 'Pembiasan'], 'Litar dipadankan dengan frekuensi stesen.'],
    'A shock absorber in a car provides?': ['Penyerap hentakan dalam kereta menyediakan?', ['Pelembapan', 'Resonans', 'Amplifikasi', 'Pembelauan'], 'Ia cepat mengeluarkan tenaga ayunan yang tidak diingini.'],

    /* ---------- 18. INTERFERENS GELOMBANG ---------- */
    'Interference happens when two waves?': ['Interferens berlaku apabila dua gelombang?', ['Bersuperposisi', 'Dipantulkan', 'Dibiaskan', 'Dibelaukan'], 'Sesaran kedua-dua gelombang dijumlahkan.'],
    'CONSTRUCTIVE interference occurs when waves meet?': ['Interferens MEMBINA berlaku apabila gelombang bertemu?', ['Sefasa', 'Berlawanan fasa', 'Pada sudut tegak', 'Tidak pernah'], 'Puncak bertemu puncak, jadi amplitud dijumlahkan.', {'Berlawanan fasa': 'Berlawanan fasa menghasilkan interferens MEMUSNAH.'}],
    'DESTRUCTIVE interference occurs when waves meet?': ['Interferens MEMUSNAH berlaku apabila gelombang bertemu?', ['Berlawanan fasa', 'Sefasa', 'Di sumber', 'Pada sudut tegak'], 'Puncak bertemu lembangan, jadi ia saling membatalkan.', {'Sefasa': 'Sefasa menghasilkan interferens MEMBINA.'}],
    'Constructive interference produces?': ['Interferens membina menghasilkan?', ['Amplitud lebih besar', 'Amplitud sifar', 'Panjang gelombang pendek', 'Laju lebih tinggi'], 'Sesaran paduan ialah hasil tambahnya.'],
    'Destructive interference produces?': ['Interferens memusnah menghasilkan?', ['Amplitud kecil atau sifar', 'Amplitud maksimum', 'Frekuensi lebih tinggi', 'Panjang gelombang bertambah'], 'Sesaran yang bertentangan saling membatalkan.'],
    'The principle of superposition says the displacement is?': ['Prinsip superposisi menyatakan sesaran paduan ialah?', ['Hasil tambah sesaran', 'Hasil darab sesaran', 'Sentiasa bezanya', 'Sentiasa sifar'], 'Tambahkan sesaran setiap gelombang pada titik itu.'],
    'A stable interference pattern needs sources that are?': ['Corak interferens yang stabil memerlukan sumber yang?', ['Koheren', 'Berlainan frekuensi', 'Berjauhan', 'Bergerak laju'], 'Sumber koheren mengekalkan corak yang stabil.'],
    'Coherent sources have?': ['Sumber koheren mempunyai?', ['f sama, beza fasa malar', 'Amplitud berlainan', 'Frekuensi berlainan', 'Fasa rawak'], 'Itulah sebabnya laser digunakan dalam eksperimen ini.'],
    'In Young’s double slit, wider slit separation makes fringes?': ['Dalam dwicelah Young, jarak celah lebih besar menjadikan pinggir?', ['Lebih rapat', 'Lebih jauh', 'Lebih terang', 'Hilang'], 'x = λD ÷ a, jadi a lebih besar memberi x lebih kecil.'],
    'Young’s double slit formula for wavelength?': ['Rumus dwicelah Young bagi panjang gelombang?', ['λ = ax ÷ D', 'λ = aD ÷ x', 'λ = xD ÷ a', 'λ = a ÷ xD'], 'Daripada x = λD ÷ a, disusun semula untuk λ.'],

    /* ---------- 19. PEMBELAUAN GELOMBANG ---------- */
    'Diffraction is the ... of waves at a gap or edge.': ['Pembelauan ialah ... gelombang di celah atau tepi.', ['Penyebaran', 'Pemantulan balik', 'Pembengkokan di sempadan', 'Pembatalan'], 'Gelombang tersebar melepasi halangan.'],
    'Diffraction is greatest when the gap size is?': ['Pembelauan paling ketara apabila saiz celah?', ['Hampir sama dengan λ', 'Jauh melebihi λ', 'Tepat dua kali λ', 'Tiada kaitan dengan λ'], 'Saiz yang setanding memberi penyebaran paling banyak.', {'Jauh melebihi λ': 'Celah yang lebar hampir tidak menyebarkan gelombang.'}],
    'A SMALLER gap produces?': ['Celah yang LEBIH KECIL menghasilkan?', ['Lebih banyak pembelauan', 'Kurang pembelauan', 'Tiada pembelauan', 'Berlaku pantulan'], 'Celah sempit menyebarkan gelombang dengan lebih banyak.', {'Kurang pembelauan': 'Celah sempit menyebarkan gelombang LEBIH banyak.'}],
    'A LONGER wavelength produces?': ['Panjang gelombang yang LEBIH PANJANG menghasilkan?', ['Lebih banyak pembelauan', 'Kurang pembelauan', 'Tiada perubahan', 'Berlaku pantulan'], 'Gelombang panjang lebih mudah membelok di sekeliling halangan.'],
    'After diffraction, the wavelength?': ['Selepas pembelauan, panjang gelombang?', ['Kekal sama', 'Bertambah', 'Berkurang', 'Berganda dua'], 'Hanya arah dan amplitud yang berubah.'],
    'After diffraction, the frequency?': ['Selepas pembelauan, frekuensi?', ['Kekal sama', 'Bertambah', 'Berkurang', 'Menjadi separuh'], 'Frekuensi ditetapkan oleh sumber.'],
    'After diffraction, the amplitude usually?': ['Selepas pembelauan, amplitud biasanya?', ['Berkurang', 'Bertambah', 'Kekal sama', 'Berganda dua'], 'Tenaga tersebar ke kawasan yang lebih luas.'],
    'Why can you hear round a corner but not see?': ['Mengapakah anda boleh mendengar tetapi tidak melihat di sebalik selekoh?', ['Panjang gelombangnya besar', 'Bunyi bergerak lebih laju', 'Bunyi lebih kuat', 'Bunyi gelombang melintang'], 'Gelombang yang lebih panjang lebih banyak terbelau.'],
    'Which diffracts most through a doorway?': ['Yang manakah paling banyak terbelau melalui pintu?', ['Bunyi', 'Cahaya nampak', 'Sinar-X', 'Sinar gama'], 'Panjang gelombang bunyi kira-kira satu meter.']
  });

})(window.PFR.Bank.lang('ms'));
