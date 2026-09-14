/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  SOALAN BM: HABA DAN HUKUM GAS
   Fizik Tingkatan 4 KSSM, Bab 4
   Topik 11-14: muatan haba tentu, suhu, haba pendam tentu, hukum gas.
   Format: lihat data/ms/mechanics-1.ms.js dan data/question-bank.js.
   ===================================================================== */

(function (M) {
  'use strict';

  M.topics({
    'Heat': 'Haba',
    'Specific Heat Capacity': 'Muatan Haba Tentu',
    'Temperature and Thermometers': 'Suhu dan Termometer',
    'Specific Latent Heat': 'Haba Pendam Tentu',
    'Gas Laws': 'Hukum Gas'
  });

  M.add({

    /* ---------- 11. MUATAN HABA TENTU ---------- */
    'Formula for heat absorbed when temperature changes?': ['Rumus haba yang diserap apabila suhu berubah?', ['Q = mcθ', 'Q = ml', 'Q = mv', 'Q = mgh'], 'Q = jisim × muatan haba tentu × perubahan suhu.', {'Q = ml': 'Q = ml ialah haba pendam, TANPA perubahan suhu.', 'Q = mgh': 'mgh ialah tenaga keupayaan.'}],
    'SI unit of specific heat capacity?': ['Unit SI bagi muatan haba tentu?', ['J kg⁻¹ °C⁻¹', 'J', 'J/kg', 'J °C'], 'Joule per kilogram per darjah Celsius.', {'J/kg': 'J/kg ialah unit haba PENDAM tentu.', 'J': 'Joule sahaja mengukur tenaga.'}],
    'Specific heat capacity raises 1 kg by how much?': ['Muatan haba tentu menaikkan suhu 1 kg sebanyak?', ['1 °C', '10 °C', '100 °C', '0 °C'], 'Ia ditakrifkan untuk jisim 1 kg dan kenaikan suhu 1 °C.'],
    'A substance with HIGH specific heat capacity?': ['Bahan dengan muatan haba tentu yang TINGGI?', ['Lambat menjadi panas', 'Cepat menjadi panas', 'Tidak boleh dipanaskan', 'Sentiasa berjisim kecil'], 'Ia memerlukan banyak haba bagi setiap darjah.', {'Cepat menjadi panas': 'c tinggi bermaksud ia memerlukan LEBIH banyak haba setiap darjah.'}],
    'Why is water used as an engine coolant?': ['Mengapakah air digunakan sebagai penyejuk enjin?', ['Muatan haba tentu tinggi', 'Muatan haba tentu rendah', 'Ketumpatan tinggi', 'Takat lebur rendah'], 'Ia menyerap banyak haba dengan kenaikan suhu yang kecil.', {'Muatan haba tentu rendah': 'Air berkesan kerana c-nya TINGGI, bukan rendah.'}],
    'In the sea breeze, the land compared with the sea?': ['Semasa bayu laut, daratan berbanding laut?', ['Panas lebih cepat', 'Panas lebih lambat', 'Tidak pernah panas', 'Suhu tetap sama'], 'Daratan mempunyai muatan haba tentu yang lebih rendah.', {'Panas lebih lambat': 'Daratan mempunyai muatan haba LEBIH RENDAH, jadi ia panas lebih cepat.'}],
    'A land breeze blows during the?': ['Bayu darat bertiup pada waktu?', ['Malam', 'Tengah hari', 'Pagi', 'Petang'], 'Pada waktu malam daratan menyejuk lebih cepat daripada laut.'],
    'In Q = mcθ, what does c represent?': ['Dalam Q = mcθ, apakah yang diwakili oleh c?', ['Muatan haba tentu', 'Haba pendam tentu', 'Tenaga haba', 'Perubahan suhu'], 'c ialah muatan haba tentu bahan itu.', {'Haba pendam tentu': 'Haba pendam menggunakan l, dalam Q = ml.', 'Tenaga haba': 'Tenaga haba ialah Q itu sendiri.'}],
    'Same heat given to 1 kg water and 1 kg oil (lower c). Which gets hotter?': ['Haba sama kepada 1 kg air dan 1 kg minyak (c rendah). Mana lebih panas?', ['Minyak', 'Air', 'Sama panas', 'Kedua-dua tidak panas'], 'c lebih rendah bermaksud kenaikan suhu lebih besar.'],
    'Why are cooking pot handles made of plastic?': ['Mengapakah pemegang periuk diperbuat daripada plastik?', ['Konduktor haba lemah', 'Ketumpatan tinggi', 'Takat lebur rendah', 'Haba pendam tinggi'], 'Ia kekal sejuk dan selamat untuk dipegang.'],
    'm = 2 kg, c = 500 J kg⁻¹ °C⁻¹, θ = 10 °C. Find Q.': ['m = 2 kg, c = 500 J kg⁻¹ °C⁻¹, θ = 10 °C. Cari Q.', ['10 000 J', '1000 J', '100 000 J', '250 J'], 'Q = mcθ = 2 × 500 × 10 = 10 000 J.'],
    'Q = 4000 J raises 1 kg by 4 °C. Find c.': ['Q = 4000 J menaikkan suhu 1 kg sebanyak 4 °C. Cari c.', ['1000 J kg⁻¹ °C⁻¹', '16 000 J kg⁻¹ °C⁻¹', '250 J kg⁻¹ °C⁻¹', '4000 J kg⁻¹ °C⁻¹'], 'c = Q ÷ (mθ) = 4000 ÷ 4 = 1000.'],
    'Heat 0.5 kg water (c = 4200) by 20 °C. Find Q.': ['Panaskan 0.5 kg air (c = 4200) sebanyak 20 °C. Cari Q.', ['42 000 J', '4200 J', '21 000 J', '84 000 J'], 'Q = 0.5 × 4200 × 20 = 42 000 J.'],
    'Q = 9000 J, m = 3 kg, c = 1500. Temperature rise?': ['Q = 9000 J, m = 3 kg, c = 1500. Kenaikan suhu?', ['2 °C', '4 °C', '20 °C', '0.5 °C'], 'θ = Q ÷ (mc) = 9000 ÷ 4500 = 2 °C.'],

    /* ---------- 12. SUHU DAN TERMOMETER ---------- */
    'Boiling point of pure water at 1 atm?': ['Takat didih air tulen pada 1 atm?', ['100 °C', '0 °C', '50 °C', '373 °C'], '100 °C, iaitu 373 K pada skala kelvin.', {'373 °C': '373 ialah nilai KELVIN, bukan Celsius.', '0 °C': '0 °C ialah takat beku.'}],
    'Freezing point of pure water?': ['Takat beku air tulen?', ['0 °C', '100 °C', '32 °C', '273 °C'], '0 °C, iaitu 273 K.', {'100 °C': '100 °C ialah takat didih.', '273 °C': '273 ialah nilai pada skala kelvin.'}],
    'Heat always flows from?': ['Haba sentiasa mengalir dari?', ['Panas ke sejuk', 'Sejuk ke panas', 'Dua arah sama rata', 'Tidak mengalir'], 'Haba mengalir dari suhu tinggi ke suhu rendah.'],
    'Absolute zero in degrees Celsius?': ['Sifar mutlak dalam darjah Celsius?', ['−273 °C', '0 °C', '100 °C', '273 °C'], '0 K = −273 °C, suhu terendah yang mungkin.', {'273 °C': 'Sifar mutlak ialah NEGATIF 273 °C.', '0 °C': '0 °C ialah takat ais, bukan sifar mutlak.'}],
    'Convert 27 °C to kelvin.': ['Tukarkan 27 °C kepada kelvin.', ['300 K', '27 K', '246 K', '573 K'], 'K = °C + 273, jadi 27 + 273 = 300 K.', {'246 K': 'Anda tolak 273, sepatutnya tambah.', '27 K': 'Anda terlupa menukar langsung.'}],
    'Convert 373 K to degrees Celsius.': ['Tukarkan 373 K kepada darjah Celsius.', ['100 °C', '373 °C', '646 °C', '0 °C'], '°C = K − 273, jadi 373 − 273 = 100 °C.', {'646 °C': 'Anda tambah 273, sepatutnya tolak.', '373 °C': 'Anda terlupa menukar langsung.'}],
    'Thermal equilibrium means two objects have?': ['Keseimbangan terma bermaksud dua objek mempunyai?', ['Suhu yang sama', 'Tenaga haba sama', 'Jisim yang sama', 'Tiada haba langsung'], 'Pengaliran haba bersih antara keduanya menjadi sifar.'],
    'During BOILING, the temperature?': ['Semasa PENDIDIHAN, suhu?', ['Kekal malar', 'Bertambah', 'Berkurang', 'Turun naik'], 'Semua haba digunakan untuk mengubah keadaan jirim.'],
    'During MELTING, the temperature?': ['Semasa PELEBURAN, suhu?', ['Kekal malar', 'Bertambah', 'Berkurang', 'Berganda dua'], 'Haba pendam memutuskan ikatan, bukan menaikkan suhu.'],
    'The two fixed points of the Celsius scale?': ['Dua takat tetap skala Celsius?', ['Takat ais dan takat stim', 'Suhu bilik dan suhu badan', 'Sifar mutlak dan 100 K', 'Takat lebur dan didih ais'], 'Iaitu 0 °C dan 100 °C pada tekanan piawai.'],
    'Why is mercury used in thermometers?': ['Mengapakah merkuri digunakan dalam termometer?', ['Mengembang secara seragam', 'Ia lut sinar', 'Takat didihnya rendah', 'Melekat pada kaca'], 'Pengembangan seragam memberikan skala yang sekata.'],
    'A clinical thermometer has a constriction to?': ['Termometer klinik mempunyai bahagian sempit untuk?', ['Halang merkuri kembali', 'Menambah kepekaan', 'Mengurangkan kos', 'Menjadikannya kuat'], 'Bacaan kekal sehingga termometer digoncang.'],
    'Impurities in water make the boiling point?': ['Bendasing dalam air menjadikan takat didih?', ['Meningkat', 'Menurun', 'Kekal sama', 'Menjadi sifar'], 'Garam yang terlarut menaikkan takat didih.'],
    'A thermometer with a narrow bore is more?': ['Termometer dengan salur rerambut sempit lebih?', ['Peka', 'Jitu pada suhu tinggi', 'Tahan lasak', 'Murah'], 'Salur sempit memberi pergerakan lebih besar bagi setiap darjah.'],

    /* ---------- 13. HABA PENDAM TENTU ---------- */
    'Formula for latent heat?': ['Rumus haba pendam?', ['Q = ml', 'Q = mcθ', 'Q = mv', 'Q = mgh'], 'Q = jisim × haba pendam tentu.', {'Q = mcθ': 'Rumus itu melibatkan perubahan suhu.', 'Q = mgh': 'mgh ialah tenaga keupayaan.'}],
    'SI unit of specific latent heat?': ['Unit SI bagi haba pendam tentu?', ['J/kg', 'J', 'J kg⁻¹ °C⁻¹', 'kg/J'], 'Joule yang diperlukan bagi setiap kilogram bahan.', {'J kg⁻¹ °C⁻¹': 'Itu unit MUATAN HABA tentu.', 'J': 'Joule sahaja mengukur tenaga.'}],
    'Latent heat of FUSION applies to?': ['Haba pendam PELAKURAN berkaitan dengan?', ['Peleburan dan pembekuan', 'Pendidihan dan kondensasi', 'Pemejalwapan sahaja', 'Penyejatan sahaja'], 'Pelakuran melibatkan perubahan pepejal-cecair.'],
    'Latent heat of VAPORISATION applies to?': ['Haba pendam PENGEWAPAN berkaitan dengan?', ['Pendidihan dan kondensasi', 'Peleburan dan pembekuan', 'Pemejalwapan sahaja', 'Pengembangan pepejal'], 'Pengewapan melibatkan perubahan cecair-gas.'],
    'During a change of state, temperature?': ['Semasa perubahan keadaan jirim, suhu?', ['Kekal malar', 'Bertambah', 'Berkurang', 'Berganda dua'], 'Tenaga digunakan untuk memutuskan ikatan, bukan memanaskan.', {'Bertambah': 'Semua haba digunakan untuk memutuskan ikatan.'}],
    'Latent heat energy is used to?': ['Tenaga haba pendam digunakan untuk?', ['Memutuskan ikatan zarah', 'Menaikkan suhu', 'Menambah jisim', 'Menambah tekanan'], 'Ia mengubah susunan zarah-zarah.', {'Menaikkan suhu': 'Suhu kekal malar semasa perubahan keadaan.'}],
    'Sweat evaporating from skin makes you feel?': ['Peluh yang menyejat dari kulit membuatkan anda berasa?', ['Lebih sejuk', 'Lebih panas', 'Tiada beza', 'Lebih berat'], 'Penyejatan menyerap haba pendam dari badan anda.'],
    'Why does steam burn worse than boiling water?': ['Mengapakah stim melecurkan lebih teruk daripada air mendidih?', ['Membebaskan haba pendam', 'Ia jauh lebih panas', 'Jisimnya lebih besar', 'Ia lebih tumpat'], 'Stim yang terkondensasi membebaskan haba pendam tambahan.'],
    'Ice cools a drink mainly by absorbing?': ['Ais menyejukkan minuman terutamanya dengan menyerap?', ['Haba pendam pelakuran', 'Haba pendam pengewapan', 'Muatan haba sahaja', 'Tiada haba langsung'], 'Ais yang melebur menyerap banyak tenaga pada 0 °C.'],
    'Specific latent heat of fusion of ice ≈?': ['Haba pendam tentu pelakuran ais ≈?', ['3.34 × 10⁵ J/kg', '2.26 × 10⁶ J/kg', '4200 J/kg', '334 J/kg'], 'Kira-kira 334 000 J untuk meleburkan 1 kg ais.'],
    'Specific latent heat of vaporisation of water ≈?': ['Haba pendam tentu pengewapan air ≈?', ['2.26 × 10⁶ J/kg', '3.34 × 10⁵ J/kg', '4200 J/kg', '2260 J/kg'], 'Kira-kira 2 260 000 J untuk mengewapkan 1 kg air.'],
    'm = 2 kg, l = 3.34 × 10⁵ J/kg. Heat to melt it?': ['m = 2 kg, l = 3.34 × 10⁵ J/kg. Haba untuk meleburkannya?', ['6.68 × 10⁵ J', '3.34 × 10⁵ J', '1.67 × 10⁵ J', '6.68 × 10⁴ J'], 'Q = ml = 2 × 3.34 × 10⁵ J.'],
    '2000 J melts 0.01 kg of a solid. Find l.': ['2000 J meleburkan 0.01 kg pepejal. Cari l.', ['2 × 10⁵ J/kg', '20 J/kg', '2000 J/kg', '2 × 10³ J/kg'], 'l = Q ÷ m = 2000 ÷ 0.01 = 200 000 J/kg.'],
    'Heat needed to boil 0.5 kg water (l = 2.26 × 10⁶)?': ['Haba untuk mengewapkan 0.5 kg air (l = 2.26 × 10⁶)?', ['1.13 × 10⁶ J', '2.26 × 10⁶ J', '4.52 × 10⁶ J', '1.13 × 10⁵ J'], 'Q = ml = 0.5 × 2.26 × 10⁶ J.'],

    /* ---------- 14. HUKUM GAS ---------- */
    'Boyle’s Law relates?': ['Hukum Boyle mengaitkan?', ['Tekanan dan isi padu', 'Tekanan dan suhu', 'Isi padu dan suhu', 'Jisim dan isi padu'], 'Pada suhu malar, P berkadar songsang dengan V.', {'Tekanan dan suhu': 'Itu Hukum Gay-Lussac.', 'Isi padu dan suhu': 'Itu Hukum Charles.'}],
    'Boyle’s Law keeps which quantity constant?': ['Hukum Boyle memalarkan kuantiti apa?', ['Suhu', 'Tekanan', 'Isi padu', 'Ketumpatan'], 'Hukum Boyle ialah proses isoterma (suhu malar).'],
    'Charles’ Law relates?': ['Hukum Charles mengaitkan?', ['Isi padu dan suhu', 'Tekanan dan isi padu', 'Tekanan dan suhu', 'Jisim dan suhu'], 'Pada tekanan malar, V berkadar terus dengan T.', {'Tekanan dan isi padu': 'Itu Hukum Boyle.', 'Tekanan dan suhu': 'Itu Hukum Gay-Lussac.'}],
    'Boyle’s Law formula?': ['Rumus Hukum Boyle?', ['PV = pemalar', 'P ÷ V = pemalar', 'V ÷ T = pemalar', 'P ÷ T = pemalar'], 'P₁V₁ = P₂V₂ pada suhu malar.', {'P ÷ V = pemalar': 'P dan V berkadar SONGSANG, jadi PV yang malar.', 'V ÷ T = pemalar': 'Itu Hukum Charles.'}],
    'Charles’ Law formula?': ['Rumus Hukum Charles?', ['V ÷ T = pemalar', 'PV = pemalar', 'P ÷ T = pemalar', 'VT = pemalar'], 'V₁ ÷ T₁ = V₂ ÷ T₂ dengan T dalam kelvin.', {'PV = pemalar': 'Itu Hukum Boyle.', 'P ÷ T = pemalar': 'Itu Hukum Gay-Lussac.'}],
    'Gay-Lussac’s Law relates?': ['Hukum Gay-Lussac mengaitkan?', ['Tekanan dan suhu', 'Tekanan dan isi padu', 'Isi padu dan suhu', 'Jisim dan tekanan'], 'Pada isi padu malar, P berkadar terus dengan T.', {'Tekanan dan isi padu': 'Itu Hukum Boyle.', 'Isi padu dan suhu': 'Itu Hukum Charles.'}],
    'Gay-Lussac’s Law keeps which quantity constant?': ['Hukum Gay-Lussac memalarkan kuantiti apa?', ['Isi padu', 'Tekanan', 'Suhu', 'Jisim'], 'Ia ialah proses isi padu malar.'],
    'In Boyle’s Law, if volume decreases the pressure?': ['Dalam Hukum Boyle, jika isi padu berkurang, tekanan?', ['Bertambah', 'Berkurang', 'Kekal malar', 'Menjadi sifar'], 'P dan V berkadar songsang.', {'Berkurang': 'Memampatkan gas MENAIKKAN tekanannya.'}],
    'Gas pressure is caused by?': ['Tekanan gas disebabkan oleh?', ['Molekul melanggar dinding', 'Graviti ke atas gas', 'Saiz molekul', 'Geseran dalam gas'], 'Perlanggaran yang banyak menghasilkan daya purata.', {'Graviti ke atas gas': 'Tekanan berpunca daripada molekul yang melanggar dinding.', 'Saiz molekul': 'Perlanggarannya yang penting, bukan saiznya.'}],
    'Absolute zero on the kelvin scale?': ['Sifar mutlak pada skala kelvin?', ['0 K', '273 K', '−273 K', '100 K'], '0 K ialah suhu terendah yang mungkin.'],
    'Why does a balloon expand when heated?': ['Mengapakah belon mengembang apabila dipanaskan?', ['Molekul bergerak lebih laju', 'Molekul menjadi besar', 'Jisim bertambah', 'Tekanan jatuh ke sifar'], 'Tenaga kinetik lebih tinggi bermaksud perlanggaran lebih kuat.'],
    'A syringe with a blocked nozzle demonstrates?': ['Picagari dengan muncung tersumbat menunjukkan?', ['Hukum Boyle', 'Hukum Charles', 'Hukum Gay-Lussac', 'Hukum Kepler'], 'Menolak omboh mengurangkan V dan menaikkan P.'],
    'Gas laws must use temperature in?': ['Hukum gas mesti menggunakan suhu dalam?', ['Kelvin', 'Celsius', 'Fahrenheit', 'Mana-mana unit'], 'Hanya skala kelvin bermula dari sifar mutlak.', {'Celsius': 'Hanya skala kelvin bermula dari sifar mutlak.', 'Mana-mana unit': 'Hanya kelvin sesuai untuk hukum gas.'}],
    'P₁ = 100 kPa, V₁ = 2 L, V₂ = 1 L. Find P₂.': ['P₁ = 100 kPa, V₁ = 2 L, V₂ = 1 L. Cari P₂.', ['200 kPa', '50 kPa', '100 kPa', '400 kPa'], 'P₁V₁ = P₂V₂ → 200 = P₂ × 1.'],
    'V₁ = 300 cm³ at 300 K, heated to 600 K. Find V₂.': ['V₁ = 300 cm³ pada 300 K, dipanaskan ke 600 K. Cari V₂.', ['600 cm³', '150 cm³', '300 cm³', '900 cm³'], 'V ÷ T malar, jadi T dua kali ganda menggandakan V.'],
    'P₁ = 100 kPa at 300 K, heated to 600 K at fixed V.': ['P₁ = 100 kPa pada 300 K, dipanaskan ke 600 K, V tetap.', ['200 kPa', '50 kPa', '300 kPa', '100 kPa'], 'P ÷ T malar, jadi T dua kali ganda menggandakan P.'],
    'Which gas law needs a constant temperature?': ['Hukum gas manakah memerlukan suhu malar?', ['Hukum Boyle', 'Hukum Charles', 'Hukum Gay-Lussac', 'Hukum Kepler'], 'Hukum Boyle ialah hukum isoterma.', {'Hukum Charles': 'Hukum Charles memalarkan TEKANAN.', 'Hukum Gay-Lussac': 'Hukum Gay-Lussac memalarkan ISI PADU.'}],
    'A tyre gets hot on a long drive. Its pressure?': ['Tayar menjadi panas dalam perjalanan jauh. Tekanannya?', ['Bertambah', 'Berkurang', 'Kekal sama', 'Jatuh ke sifar'], 'Isi padu tetap, T lebih tinggi, jadi P lebih tinggi (Gay-Lussac).', {'Berkurang': 'Molekul yang lebih panas melanggar dinding lebih kuat, menaikkan P.'}],
    'Doubling the kelvin temperature at constant P doubles the?': ['Menggandakan suhu kelvin pada P malar akan menggandakan?', ['Isi padu', 'Tekanan', 'Jisim', 'Ketumpatan'], 'Hukum Charles: V berkadar terus dengan T.', {'Tekanan': 'Tekanan ialah kuantiti yang dimalarkan di sini.'}],
    'Why must gas-law temperatures never be in Celsius?': ['Mengapakah suhu hukum gas tidak boleh dalam Celsius?', ['Celsius boleh negatif', 'Celsius terlalu kecil', 'Celsius bukan metrik', 'Celsius tiada sifar'], 'Nisbah hanya sah jika bermula dari sifar mutlak.', {'Celsius bukan metrik': 'Celsius ialah metrik - masalahnya ialah kedudukan sifarnya.'}],
    'V1 = 200 cm³ at 400 K, cooled to 200 K. Find V2.': ['V1 = 200 cm³ pada 400 K, disejukkan ke 200 K. Cari V2.', ['100 cm³', '400 cm³', '200 cm³', '50 cm³'], 'V/T malar: separuh T menjadikan V separuh.', {'400 cm³': 'Anda gandakan, sepatutnya bahagi dua.'}],
    'P1 = 300 kPa, V1 = 2 L, P2 = 600 kPa. Find V2.': ['P1 = 300 kPa, V1 = 2 L, P2 = 600 kPa. Cari V2.', ['1 L', '4 L', '2 L', '3 L'], 'P1V1 = P2V2: P dua kali ganda menjadikan V separuh.', {'4 L': 'Anda gandakan V - P dan V berubah secara bertentangan.'}],
    'A gas at 4 atm is compressed from 6 L to 3 L. New pressure?': ['Gas pada 4 atm dimampatkan dari 6 L ke 3 L. Tekanan baharu?', ['8 atm', '2 atm', '4 atm', '12 atm'], 'P₁V₁ = P₂V₂ → 24 = P₂ × 3 → 8 atm.']
  });

})(window.PFR.Bank.lang('ms', 4));
