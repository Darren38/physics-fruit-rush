/* =====================================================================
   PHYSICS FRUIT RUSH v7  --  SOALAN BM: TINGKATAN 4, LATIHAN PENILAIAN
   Soalan Pasca-Penilaian Fizik Tingkatan 4 (2 Nov 2026).
   Istilah mengikut buku teks Fizik Tingkatan 4 KSSM.
   Format dan peraturan: lihat data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Assessment Practice': 'Latihan Penilaian',
    'Post-Assessment': 'Pasca-Penilaian'
  });

  M.add({
    'What is a physical quantity?': ['Apakah kuantiti fizik?', ['Diukur dengan nombor + unit', 'Tidak boleh diukur', 'Hanya ada unit', 'Tiada nilai'], 'Kuantiti fizik boleh diukur dan mempunyai nilai serta unit.', {'Hanya ada unit': 'Kuantiti perlu ada nombor (magnitud) dan juga unit.'}],
    'Which of the following is a base quantity?': ['Antara berikut, yang manakah kuantiti asas?', ['Masa', 'Laju', 'Daya', 'Isi padu'], 'Masa ialah kuantiti asas; laju, daya dan isi padu ialah kuantiti terbitan.'],
    'Which of the following is a derived quantity?': ['Antara berikut, yang manakah kuantiti terbitan?', ['Daya', 'Panjang', 'Jisim', 'Masa'], 'Daya = jisim × pecutan, jadi ia diterbitkan daripada kuantiti asas.'],
    'What is the SI unit of force?': ['Apakah unit SI bagi daya?', ['Newton (N)', 'Kilogram (kg)', 'Meter (m)', 'Saat (s)'], 'Daya diukur dalam unit newton (N).', {'Kilogram (kg)': 'Kilogram ialah unit jisim, bukan daya.'}],
    'What is force?': ['Apakah daya?', ['Tolakan atau tarikan', 'Tenaga tersimpan dalam objek', 'Laju sesuatu objek', 'Jisim sesuatu objek'], 'Daya ialah tolakan atau tarikan yang bertindak ke atas objek.'],
    'Which effect can a force cause?': ['Apakah kesan yang boleh disebabkan oleh daya?', ['Laju, arah atau gerakan', 'Ubah bentuk sahaja', 'Ubah gerakan sahaja', 'Tiada kesan'], 'Daya boleh mengubah laju, arah gerakan dan bentuk - bukan satu sahaja.', {'Ubah bentuk sahaja': 'Daya boleh ubah bentuk, dan juga laju serta arah.'}],
    'Which tool is commonly used to measure force?': ['Alat manakah yang biasa digunakan untuk mengukur daya?', ['Neraca spring', 'Termometer', 'Jam randik', 'Pembaris'], 'Neraca spring membaca daya dalam newton daripada regangan springnya.'],
    'What is gravity?': ['Apakah graviti?', ['Tarikan antara jisim', 'Menolak objek menjauh', 'Satu jenis tenaga', 'Satu unit pengukuran'], 'Graviti ialah daya tarikan antara semua objek yang mempunyai jisim.'],
    'Why do objects fall to the ground?': ['Mengapakah objek jatuh ke tanah?', ['Jisim besar Bumi menariknya', 'Udara menolaknya ke bawah', 'Objek itu berat', 'Kerana haba'], 'Jisim Bumi yang besar menghasilkan tarikan graviti yang kuat ke atas setiap objek.', {'Udara menolaknya ke bawah': 'Objek tetap jatuh dalam vakum - graviti yang menariknya, bukan udara.'}],
    'Which factor increases gravitational force?': ['Faktor manakah yang menambah daya graviti?', ['Jisim lebih besar', 'Jisim lebih kecil', 'Jarak lebih jauh', 'Tiada perubahan'], 'Daya graviti bertambah dengan jisim dan menjadi lemah dengan jarak.', {'Jarak lebih jauh': 'Jarak yang lebih jauh menjadikan daya graviti LEBIH LEMAH.'}],
    'What is heat?': ['Apakah haba?', ['Tenaga dari panas ke sejuk', 'Ukuran kepanasan', 'Nilai suhu', 'Jenis daya'], 'Haba ialah tenaga yang dipindahkan dari objek panas ke objek sejuk.', {'Ukuran kepanasan': 'Itu suhu - haba ialah tenaga yang mengalir.'}],
    'What does temperature measure?': ['Apakah yang diukur oleh suhu?', ['Darjah kepanasan', 'Tenaga haba sesuatu objek', 'Jisim sesuatu objek', 'Daya sesuatu objek'], 'Suhu ialah darjah kepanasan atau kesejukan sesuatu objek.', {'Tenaga haba sesuatu objek': 'Haba ialah tenaga; suhu hanya menunjukkan darjah kepanasan.'}],
    'Which material heats up more slowly?': ['Bahan manakah yang lebih lambat menjadi panas?', ['Air', 'Logam', 'Plastik', 'Kaca'], 'Air mempunyai muatan haba tentu yang tinggi, jadi perlu lebih banyak haba.', {'Logam': 'Logam mempunyai muatan haba tentu yang RENDAH dan cepat panas.'}],
    'What is the main difference between a longitudinal and a transverse wave?': ['Apakah perbezaan utama antara gelombang membujur dan melintang?', ['Arah getaran', 'Laju gelombang', 'Frekuensi', 'Panjang gelombang'], 'Gelombang membujur bergetar selari dengan arah perambatan; melintang berserenjang.'],
    'Which of the following is an example of a longitudinal wave?': ['Antara berikut, yang manakah contoh gelombang membujur?', ['Gelombang bunyi', 'Gelombang cahaya', 'Gelombang air', 'Gelombang radio'], 'Bunyi merambat sebagai mampatan dan regangan - gelombang membujur.'],
    'The number of complete waves produced in one second is called?': ['Bilangan gelombang lengkap yang dihasilkan dalam satu saat dipanggil?', ['Frekuensi', 'Amplitud', 'Panjang gelombang', 'Tempoh'], 'Frekuensi diukur dalam hertz (Hz): bilangan gelombang lengkap sesaat.', {'Tempoh': 'Tempoh ialah masa bagi SATU gelombang lengkap.'}],
    'The distance between two consecutive crests or troughs is called?': ['Jarak antara dua puncak atau dua lembangan berturutan dipanggil?', ['Panjang gelombang', 'Frekuensi', 'Amplitud', 'Tempoh'], 'Panjang gelombang (λ) ialah panjang satu gelombang lengkap.'],
    'The maximum displacement from the equilibrium position is called?': ['Sesaran maksimum dari kedudukan keseimbangan dipanggil?', ['Amplitud', 'Frekuensi', 'Halaju', 'Panjang gelombang'], 'Amplitud yang lebih besar bermakna gelombang membawa lebih banyak tenaga.'],
    'Reflection of waves occurs when waves?': ['Pantulan gelombang berlaku apabila gelombang?', ['Terpantul dari permukaan', 'Berubah laju', 'Tersebar', 'Bergabung'], 'Gelombang terpantul mengekalkan laju, frekuensi dan panjang gelombangnya.'],
    'Refraction happens when a wave?': ['Pembiasan berlaku apabila gelombang?', ['Berubah arah kerana laju', 'Berhenti bergerak', 'Diserap', 'Terpantul sepenuhnya'], 'Perubahan laju antara medium mengubah arah perambatan gelombang.', {'Terpantul sepenuhnya': 'Terpantul balik ialah pantulan, bukan pembiasan.'}],
    'When waves pass through a narrow gap and spread out, this is called?': ['Apabila gelombang melalui celah sempit dan tersebar, ini dipanggil?', ['Pembelauan', 'Pantulan', 'Pembiasan', 'Resonans'], 'Pembelauan paling ketara apabila saiz celah hampir sama dengan panjang gelombang.'],
    'Constructive interference occurs when?': ['Interferens membina berlaku apabila?', ['Amplitud bertambah', 'Gelombang saling membatal', 'Gelombang berhenti', 'Frekuensi menjadi sifar'], 'Puncak bertemu puncak, jadi gelombang bergabung menjadi amplitud lebih besar.', {'Gelombang saling membatal': 'Saling membatal ialah interferens MEMUSNAH.'}],
    'Resonance occurs when an object vibrates at its?': ['Resonans berlaku apabila objek bergetar pada?', ['Frekuensi aslinya', 'Laju maksimum', 'Amplitud terendah', 'Panjang gelombang terpendek'], 'Apabila dipaksa pada frekuensi aslinya, objek bergetar dengan amplitud maksimum.'],
    'Heavy damping in a system will?': ['Pelembapan yang tinggi dalam suatu sistem akan?', ['Cepat mengurangkan getaran', 'Menambah ayunan', 'Menambah frekuensi', 'Menyebabkan resonans'], 'Pelembapan mengurangkan tenaga, jadi amplitud cepat berkurang.'],
    'Which lens is thicker at the centre than at the edges?': ['Kanta manakah yang lebih tebal di tengah berbanding di tepi?', ['Kanta cembung', 'Kanta cekung', 'Kanta satah', 'Kanta silinder'], 'Kanta cembung (penumpu) lebih tebal di bahagian tengah.', {'Kanta cekung': 'Kanta cekung lebih NIPIS di bahagian tengah.'}],
    'Constant temperature: 400 cm³ of gas at 100 kPa goes to 200 kPa. New volume?': ['Suhu malar: 400 cm³ gas pada 100 kPa menjadi 200 kPa. Isi padu baharu?', ['200 cm³', '800 cm³', '400 cm³', '100 cm³'], 'P₁V₁ = P₂V₂: 100 × 400 = 200 × V₂, maka V₂ = 200 cm³.', {'800 cm³': 'Tekanan berganda, jadi isi padu menjadi SEPARUH - bukan berganda.'}],
    'Constant pressure: 300 cm³ of gas at 27°C is heated to 127°C. New volume?': ['Tekanan malar: 300 cm³ gas pada 27°C dipanaskan ke 127°C. Isi padu baharu?', ['400 cm³', '1411 cm³', '225 cm³', '300 cm³'], 'Guna kelvin: 300 K → 400 K, maka V₂ = 300 × 400 ÷ 300 = 400 cm³.', {'1411 cm³': 'Anda guna °C. Hukum gas perlukan kelvin: tambah 273 dahulu.'}],
    'A water wave has a frequency of 5 Hz and a wavelength of 2 m. Its speed?': ['Gelombang air berfrekuensi 5 Hz dan panjang gelombang 2 m. Lajunya?', ['10 m/s', '2.5 m/s', '7 m/s', '0.4 m/s'], 'Laju, v = fλ = 5 × 2 = 10 m/s.', {'2.5 m/s': 'Anda membahagi - laju ialah frekuensi DIDARAB panjang gelombang.'}],
    'Constant volume: gas at 150 kPa and 300 K is heated to 400 K. New pressure?': ['Isi padu malar: gas 150 kPa, 300 K dipanaskan ke 400 K. Tekanan baharu?', ['200 kPa', '112.5 kPa', '150 kPa', '550 kPa'], 'P₁/T₁ = P₂/T₂, maka P₂ = 150 × 400 ÷ 300 = 200 kPa.', {'112.5 kPa': 'Pemanasan MENAIKKAN tekanan - nisbah anda terbalik.'}],
    'A 20 N force is applied to a 4 kg object. Acceleration?': ['Daya 20 N dikenakan pada objek 4 kg. Pecutan?', ['5 m/s²', '80 m/s²', '16 m/s²', '0.2 m/s²'], 'a = F ÷ m = 20 ÷ 4 = 5 m/s².', {'80 m/s²': 'Anda mendarab - pecutan ialah daya DIBAHAGI dengan jisim.'}]
  });

})(window.PFR.Bank.lang('ms', 4));
