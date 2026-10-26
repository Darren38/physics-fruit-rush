/* =====================================================================
   PHYSICS FRUIT RUSH v7  --  FORM 4: ASSESSMENT PRACTICE
   The 30 questions of the F4 Physics post-assessment (2 Nov 2026), as
   one topic, so students can drill exactly those questions in Topic
   Challenge or Practice - and meet them in Quick Game too.

   The 25 multiple-choice items keep their correct answers; long options
   are shortened to fit a fruit. The 5 written calculations (gas laws,
   v = f x wavelength, F = ma) became four-option questions whose wrong
   answers are the usual slips: degrees Celsius instead of kelvin, an
   inverted ratio, multiplying instead of dividing.
   Format is documented in data/question-bank.js (first answer = correct).
   ===================================================================== */

(function (G) {
  'use strict';

  G('Assessment Practice', 'Post-Assessment', [
    ['e', 'What is a physical quantity?', ['Measured with number + unit', 'Cannot be measured', 'Has only a unit', 'Has no value'], 'A physical quantity can be measured and has a value and a unit.', {'Has only a unit': 'A quantity needs a number (its magnitude) as well as a unit.'}],
    ['e', 'Which of the following is a base quantity?', ['Time', 'Speed', 'Force', 'Volume'], 'Time is a base quantity; speed, force and volume are derived.'],
    ['e', 'Which of the following is a derived quantity?', ['Force', 'Length', 'Mass', 'Time'], 'Force = mass × acceleration, so it is derived from base quantities.'],
    ['e', 'What is the SI unit of force?', ['Newton (N)', 'Kilogram (kg)', 'Metre (m)', 'Second (s)'], 'Force is measured in newtons (N).', {'Kilogram (kg)': 'The kilogram is the unit of mass, not force.'}],
    ['e', 'What is force?', ['A push or a pull', 'Energy stored in an object', 'The speed of an object', 'The mass of an object'], 'A force is a push or a pull acting on an object.'],
    ['m', 'Which effect can a force cause?', ['Speed, direction or motion', 'Change shape only', 'Change motion only', 'No effect'], 'A force can change speed, direction of motion and shape - not just one.', {'Change shape only': 'A force can change shape, but also speed and direction.'}],
    ['e', 'Which tool is commonly used to measure force?', ['Spring balance', 'Thermometer', 'Stopwatch', 'Ruler'], 'A spring balance reads force in newtons from how far the spring stretches.'],
    ['e', 'What is gravity?', ['Attraction between masses', 'Pushes objects away', 'A type of energy', 'A unit of measurement'], 'Gravity is the force of attraction between all objects with mass.'],
    ['m', 'Why do objects fall to the ground?', ['Earth’s big mass pulls them', 'Air pushes them down', 'Objects are heavy', 'Because of heat'], 'The Earth’s large mass gives a strong gravitational pull on every object.', {'Air pushes them down': 'Objects fall even in a vacuum - gravity pulls them, not air.'}],
    ['m', 'Which factor increases gravitational force?', ['Larger mass', 'Smaller mass', 'Larger distance', 'No change'], 'Gravitational force grows with mass and gets weaker with distance.', {'Larger distance': 'A larger distance makes the gravitational force WEAKER.'}],
    ['e', 'What is heat?', ['Energy moving hot to cold', 'Measure of hotness', 'Temperature value', 'Type of force'], 'Heat is energy transferred from a hotter object to a colder one.', {'Measure of hotness': 'That is temperature - heat is the energy that flows.'}],
    ['e', 'What does temperature measure?', ['Degree of hotness', 'Heat energy of an object', 'Mass of an object', 'Force of an object'], 'Temperature is the degree of hotness or coldness of an object.', {'Heat energy of an object': 'Heat is energy; temperature only says how hot it is.'}],
    ['m', 'Which material heats up more slowly?', ['Water', 'Metal', 'Plastic', 'Glass'], 'Water has a high specific heat capacity, so it needs more heat to warm up.', {'Metal': 'Metals have a LOW specific heat capacity and heat up fast.'}],
    ['m', 'What is the main difference between a longitudinal and a transverse wave?', ['Direction of vibration', 'Speed of wave', 'Frequency', 'Wavelength'], 'Longitudinal waves vibrate along the direction of travel; transverse ones across it.'],
    ['e', 'Which of the following is an example of a longitudinal wave?', ['Sound wave', 'Light wave', 'Water wave', 'Radio wave'], 'Sound travels as compressions and rarefactions - a longitudinal wave.'],
    ['e', 'The number of complete waves produced in one second is called?', ['Frequency', 'Amplitude', 'Wavelength', 'Period'], 'Frequency is measured in hertz (Hz): complete waves per second.', {'Period': 'The period is the time for ONE complete wave.'}],
    ['e', 'The distance between two consecutive crests or troughs is called?', ['Wavelength', 'Frequency', 'Amplitude', 'Period'], 'Wavelength (λ) is the length of one complete wave.'],
    ['e', 'The maximum displacement from the equilibrium position is called?', ['Amplitude', 'Frequency', 'Velocity', 'Wavelength'], 'A larger amplitude means the wave carries more energy.'],
    ['e', 'Reflection of waves occurs when waves?', ['Bounce back from a surface', 'Change speed', 'Spread out', 'Combine together'], 'Reflected waves keep the same speed, frequency and wavelength.'],
    ['m', 'Refraction happens when a wave?', ['Bends as its speed changes', 'Stops moving', 'Is absorbed', 'Bounces back completely'], 'A change of speed between media changes the direction of the wave.', {'Bounces back completely': 'Bouncing back is reflection, not refraction.'}],
    ['m', 'When waves pass through a narrow gap and spread out, this is called?', ['Diffraction', 'Reflection', 'Refraction', 'Resonance'], 'Diffraction is greatest when the gap is about the size of the wavelength.'],
    ['m', 'Constructive interference occurs when?', ['Amplitudes add up', 'Waves cancel each other', 'Waves stop moving', 'Frequency becomes zero'], 'Crest meets crest, so the waves combine into a larger amplitude.', {'Waves cancel each other': 'Cancelling out is DESTRUCTIVE interference.'}],
    ['m', 'Resonance occurs when an object vibrates at its?', ['Natural frequency', 'Maximum speed', 'Lowest amplitude', 'Shortest wavelength'], 'Forced at its natural frequency, an object vibrates with maximum amplitude.'],
    ['m', 'Heavy damping in a system will?', ['Reduce vibrations quickly', 'Increase oscillations', 'Increase frequency', 'Cause resonance'], 'Damping takes energy away, so the amplitude dies down quickly.'],
    ['e', 'Which lens is thicker at the centre than at the edges?', ['Convex lens', 'Concave lens', 'Plane lens', 'Cylindrical lens'], 'A convex (converging) lens bulges in the middle.', {'Concave lens': 'A concave lens is THINNER at the centre.'}],
    ['h', 'Constant temperature: 400 cm³ of gas at 100 kPa goes to 200 kPa. New volume?', ['200 cm³', '800 cm³', '400 cm³', '100 cm³'], 'P₁V₁ = P₂V₂: 100 × 400 = 200 × V₂, so V₂ = 200 cm³.', {'800 cm³': 'Pressure doubled, so the volume HALVES - it does not double.'}],
    ['h', 'Constant pressure: 300 cm³ of gas at 27°C is heated to 127°C. New volume?', ['400 cm³', '1411 cm³', '225 cm³', '300 cm³'], 'Use kelvin: 300 K → 400 K, so V₂ = 300 × 400 ÷ 300 = 400 cm³.', {'1411 cm³': 'You used °C. Gas laws need kelvin: add 273 first.'}],
    ['m', 'A water wave has a frequency of 5 Hz and a wavelength of 2 m. Its speed?', ['10 m/s', '2.5 m/s', '7 m/s', '0.4 m/s'], 'v = fλ = 5 × 2 = 10 m/s.', {'2.5 m/s': 'You divided - speed is frequency TIMES wavelength.'}],
    ['h', 'Constant volume: gas at 150 kPa and 300 K is heated to 400 K. New pressure?', ['200 kPa', '112.5 kPa', '150 kPa', '550 kPa'], 'P₁/T₁ = P₂/T₂, so P₂ = 150 × 400 ÷ 300 = 200 kPa.', {'112.5 kPa': 'Heating RAISES the pressure - you turned the ratio upside down.'}],
    ['m', 'A 20 N force is applied to a 4 kg object. Acceleration?', ['5 m/s²', '80 m/s²', '16 m/s²', '0.2 m/s²'], 'a = F ÷ m = 20 ÷ 4 = 5 m/s².', {'80 m/s²': 'You multiplied - acceleration is force DIVIDED by mass.'}]
  ]);

})(window.PFR.Bank.form(4));
