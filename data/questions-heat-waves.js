/* =====================================================================
   PHYSICS FRUIT RUSH  --  QUESTIONS: HEAT, GAS LAWS AND WAVES
   KSSM Form 4 Physics, Chapters 4-5
   Topics 11-19.
   Format is documented in data/question-bank.js  (first answer = correct)
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- 11. SPECIFIC HEAT CAPACITY ---------- */
  G('Heat', 'Specific Heat Capacity', [
    ['e', 'Formula for heat absorbed when temperature changes?', ['Q = mcθ', 'Q = ml', 'Q = mv', 'Q = mgh'], 'Q = mass × specific heat capacity × temp change.', {'Q = ml': 'Q = ml is latent heat, with NO temperature change.', 'Q = mgh': 'mgh is potential energy.'}],
    ['e', 'SI unit of specific heat capacity?', ['J kg⁻¹ °C⁻¹', 'J', 'J/kg', 'J °C'], 'Joules per kilogram per degree Celsius.', {'J/kg': 'J/kg is specific LATENT heat.', 'J': 'The joule alone measures energy.'}],
    ['m', 'Specific heat capacity raises 1 kg by how much?', ['1 °C', '10 °C', '100 °C', '0 °C'], 'It is defined for a 1 kg mass and a 1 °C rise.'],
    ['m', 'A substance with HIGH specific heat capacity?', ['Heats up slowly', 'Heats up quickly', 'Cannot be heated', 'Always has low mass'], 'It needs a lot of heat for each degree.', {'Heats up quickly': 'High c means it needs MORE heat for each degree.'}],
    ['m', 'Why is water used as an engine coolant?', ['High specific heat capacity', 'Low specific heat capacity', 'High density', 'Low melting point'], 'It absorbs a lot of heat for a small temp rise.', {'Low specific heat capacity': 'Water works because its c is HIGH, not low.'}],
    ['m', 'In the sea breeze, the land compared with the sea?', ['Heats up faster', 'Heats up slower', 'Never heats up', 'Stays at the same temp'], 'Land has a lower specific heat capacity.', {'Heats up slower': 'Land has the LOWER heat capacity, so it heats faster.'}],
    ['e', 'A land breeze blows during the?', ['Night', 'Noon', 'Morning', 'Afternoon'], 'At night the land cools faster than the sea.'],
    ['m', 'In Q = mcθ, what does c represent?', ['Specific heat capacity', 'Specific latent heat', 'Heat energy', 'Temperature change'], 'c is the specific heat capacity of the material.', {'Specific latent heat': 'Latent heat uses l, in Q = ml.', 'Heat energy': 'Heat energy is Q itself.'}],
    ['m', 'Same heat given to 1 kg water and 1 kg oil (lower c). Which gets hotter?', ['The oil', 'The water', 'Both equally', 'Neither heats up'], 'Lower c means a bigger temperature rise.'],
    ['m', 'Why are cooking pot handles made of plastic?', ['Poor heat conductors', 'High density', 'Low melting point', 'High latent heat'], 'It stays cool and safe to hold.'],
    ['h', 'm = 2 kg, c = 500 J kg⁻¹ °C⁻¹, θ = 10 °C. Find Q.', ['10 000 J', '1000 J', '100 000 J', '250 J'], 'Q = mcθ = 2 × 500 × 10 = 10 000 J.'],
    ['h', 'Q = 4000 J raises 1 kg by 4 °C. Find c.', ['1000 J kg⁻¹ °C⁻¹', '16 000 J kg⁻¹ °C⁻¹', '250 J kg⁻¹ °C⁻¹', '4000 J kg⁻¹ °C⁻¹'], 'c = Q ÷ (mθ) = 4000 ÷ 4 = 1000.'],
    ['h', 'Heat 0.5 kg water (c = 4200) by 20 °C. Find Q.', ['42 000 J', '4200 J', '21 000 J', '84 000 J'], 'Q = 0.5 × 4200 × 20 = 42 000 J.'],
    ['h', 'Q = 9000 J, m = 3 kg, c = 1500. Temperature rise?', ['2 °C', '4 °C', '20 °C', '0.5 °C'], 'θ = Q ÷ (mc) = 9000 ÷ 4500 = 2 °C.']
  ]);

  /* ---------- 12. BOILING, FREEZING AND THERMOMETERS ---------- */
  G('Heat', 'Temperature and Thermometers', [
    ['e', 'Boiling point of pure water at 1 atm?', ['100 °C', '0 °C', '50 °C', '373 °C'], '100 °C, which is 373 K on the kelvin scale.', {'373 °C': '373 is the KELVIN value, not Celsius.', '0 °C': '0 °C is the freezing point.'}],
    ['e', 'Freezing point of pure water?', ['0 °C', '100 °C', '32 °C', '273 °C'], '0 °C, which is 273 K.', {'100 °C': '100 °C is the boiling point.', '273 °C': '273 belongs to the kelvin scale.'}],
    ['e', 'Heat always flows from?', ['Hot to cold', 'Cold to hot', 'Both ways equally', 'It does not flow'], 'Heat flows down a temperature difference.'],
    ['m', 'Absolute zero in degrees Celsius?', ['−273 °C', '0 °C', '100 °C', '273 °C'], '0 K = −273 °C, the lowest possible temperature.', {'273 °C': 'Absolute zero is MINUS 273 °C.', '0 °C': '0 °C is the ice point, not absolute zero.'}],
    ['m', 'Convert 27 °C to kelvin.', ['300 K', '27 K', '246 K', '573 K'], 'K = °C + 273, so 27 + 273 = 300 K.', {'246 K': 'You subtracted 273 instead of adding it.', '27 K': 'You forgot to convert at all.'}],
    ['m', 'Convert 373 K to degrees Celsius.', ['100 °C', '373 °C', '646 °C', '0 °C'], '°C = K − 273, so 373 − 273 = 100 °C.', {'646 °C': 'You added 273 instead of subtracting it.', '373 °C': 'You forgot to convert at all.'}],
    ['m', 'Thermal equilibrium means two objects have?', ['The same temperature', 'The same heat energy', 'The same mass', 'No heat at all'], 'Net heat flow between them becomes zero.'],
    ['e', 'During BOILING, the temperature?', ['Stays constant', 'Increases', 'Decreases', 'Fluctuates'], 'All heat goes into changing the state.'],
    ['e', 'During MELTING, the temperature?', ['Stays constant', 'Increases', 'Decreases', 'Doubles'], 'Latent heat breaks bonds, not raising temperature.'],
    ['m', 'The two fixed points of the Celsius scale?', ['Ice point and steam point', 'Room temp and body temp', 'Absolute zero and 100 K', 'Melting and boiling of ice'], 'They are 0 °C and 100 °C at standard pressure.'],
    ['m', 'Why is mercury used in thermometers?', ['It expands uniformly', 'It is transparent', 'It has a low boiling point', 'It sticks to glass'], 'Uniform expansion gives an even scale.'],
    ['m', 'A clinical thermometer has a constriction to?', ['Stop mercury flowing back', 'Increase sensitivity', 'Reduce the cost', 'Make it stronger'], 'The reading is held until it is shaken down.'],
    ['m', 'Impurities in water make the boiling point?', ['Increase', 'Decrease', 'Stay the same', 'Become zero'], 'Dissolved salt raises the boiling point.'],
    ['m', 'A thermometer with a narrow bore is more?', ['Sensitive', 'Accurate at high temps', 'Durable', 'Cheap'], 'A narrow bore gives a bigger movement per degree.']
  ]);

  /* ---------- 13. SPECIFIC LATENT HEAT ---------- */
  G('Heat', 'Specific Latent Heat', [
    ['e', 'Formula for latent heat?', ['Q = ml', 'Q = mcθ', 'Q = mv', 'Q = mgh'], 'Q = mass × specific latent heat.', {'Q = mcθ': 'That formula includes a temperature change.', 'Q = mgh': 'mgh is potential energy.'}],
    ['e', 'SI unit of specific latent heat?', ['J/kg', 'J', 'J kg⁻¹ °C⁻¹', 'kg/J'], 'Joules needed per kilogram of substance.', {'J kg⁻¹ °C⁻¹': 'That is specific HEAT CAPACITY.', 'J': 'The joule alone measures energy.'}],
    ['e', 'Latent heat of FUSION applies to?', ['Melting and freezing', 'Boiling and condensing', 'Sublimation only', 'Evaporation only'], 'Fusion covers the solid-liquid change.'],
    ['e', 'Latent heat of VAPORISATION applies to?', ['Boiling and condensing', 'Melting and freezing', 'Sublimation only', 'Expansion of solids'], 'Vaporisation covers the liquid-gas change.'],
    ['e', 'During a change of state, temperature?', ['Remains constant', 'Increases', 'Decreases', 'Doubles'], 'Energy goes to breaking bonds, not heating.', {'Increases': 'All the heat goes into breaking bonds instead.'}],
    ['m', 'Latent heat energy is used to?', ['Break particle bonds', 'Raise the temperature', 'Increase the mass', 'Increase the pressure'], 'It changes the arrangement of the particles.', {'Raise the temperature': 'Temperature stays constant during a change of state.'}],
    ['e', 'Sweat evaporating from skin makes you feel?', ['Cooler', 'Warmer', 'No different', 'Heavier'], 'Evaporation takes latent heat from your body.'],
    ['m', 'Why does steam burn worse than boiling water?', ['It releases latent heat too', 'It is much hotter', 'It has more mass', 'It is denser'], 'Condensing steam gives out extra latent heat.'],
    ['m', 'Ice cools a drink mainly by absorbing?', ['Latent heat of fusion', 'Latent heat of vaporisation', 'Only specific heat', 'No heat at all'], 'Melting ice absorbs a lot of energy at 0 °C.'],
    ['m', 'Specific latent heat of fusion of ice ≈?', ['3.34 × 10⁵ J/kg', '2.26 × 10⁶ J/kg', '4200 J/kg', '334 J/kg'], 'About 334 000 J to melt 1 kg of ice.'],
    ['m', 'Specific latent heat of vaporisation of water ≈?', ['2.26 × 10⁶ J/kg', '3.34 × 10⁵ J/kg', '4200 J/kg', '2260 J/kg'], 'About 2 260 000 J to boil away 1 kg.'],
    ['h', 'm = 2 kg, l = 3.34 × 10⁵ J/kg. Heat to melt it?', ['6.68 × 10⁵ J', '3.34 × 10⁵ J', '1.67 × 10⁵ J', '6.68 × 10⁴ J'], 'Q = ml = 2 × 3.34 × 10⁵ J.'],
    ['h', '2000 J melts 0.01 kg of a solid. Find l.', ['2 × 10⁵ J/kg', '20 J/kg', '2000 J/kg', '2 × 10³ J/kg'], 'l = Q ÷ m = 2000 ÷ 0.01 = 200 000 J/kg.'],
    ['h', 'Heat needed to boil 0.5 kg water (l = 2.26 × 10⁶)?', ['1.13 × 10⁶ J', '2.26 × 10⁶ J', '4.52 × 10⁶ J', '1.13 × 10⁵ J'], 'Q = ml = 0.5 × 2.26 × 10⁶ J.']
  ]);

  /* ---------- 14. GAS LAWS ---------- */
  G('Gas Laws', 'Gas Laws', [
    ['e', 'Boyle’s Law relates?', ['Pressure and volume', 'Pressure and temperature', 'Volume and temperature', 'Mass and volume'], 'At constant temperature, P is inversely ∝ V.', {'Pressure and temperature': 'That is Gay-Lussac’s Law.', 'Volume and temperature': 'That is Charles’ Law.'}],
    ['e', 'Boyle’s Law keeps which quantity constant?', ['Temperature', 'Pressure', 'Volume', 'Density'], 'Boyle’s Law is an isothermal process.'],
    ['e', 'Charles’ Law relates?', ['Volume and temperature', 'Pressure and volume', 'Pressure and temperature', 'Mass and temperature'], 'At constant pressure, V is proportional to T.', {'Pressure and volume': 'That is Boyle’s Law.', 'Pressure and temperature': 'That is Gay-Lussac’s Law.'}],
    ['e', 'Boyle’s Law formula?', ['PV = constant', 'P ÷ V = constant', 'V ÷ T = constant', 'P ÷ T = constant'], 'P₁V₁ = P₂V₂ at constant temperature.', {'P ÷ V = constant': 'P and V are INVERSELY proportional, so PV is constant.', 'V ÷ T = constant': 'That is Charles’ Law.'}],
    ['e', 'Charles’ Law formula?', ['V ÷ T = constant', 'PV = constant', 'P ÷ T = constant', 'VT = constant'], 'V₁ ÷ T₁ = V₂ ÷ T₂ with T in kelvin.', {'PV = constant': 'That is Boyle’s Law.', 'P ÷ T = constant': 'That is Gay-Lussac’s Law.'}],
    ['e', 'Gay-Lussac’s Law relates?', ['Pressure and temperature', 'Pressure and volume', 'Volume and temperature', 'Mass and pressure'], 'At constant volume, P is proportional to T.', {'Pressure and volume': 'That is Boyle’s Law.', 'Volume and temperature': 'That is Charles’ Law.'}],
    ['m', 'Gay-Lussac’s Law keeps which quantity constant?', ['Volume', 'Pressure', 'Temperature', 'Mass'], 'It is a constant-volume (isochoric) process.'],
    ['e', 'In Boyle’s Law, if volume decreases the pressure?', ['Increases', 'Decreases', 'Stays constant', 'Becomes zero'], 'P and V are inversely proportional.', {'Decreases': 'Squeezing a gas RAISES its pressure.'}],
    ['m', 'Gas pressure is caused by?', ['Molecules hitting the walls', 'Gravity on the gas', 'The size of the molecules', 'Friction in the gas'], 'Countless collisions produce an average force.', {'Gravity on the gas': 'Pressure comes from molecules striking the walls.', 'The size of the molecules': 'It is their collisions that matter, not their size.'}],
    ['e', 'Absolute zero on the kelvin scale?', ['0 K', '273 K', '−273 K', '100 K'], '0 K is the lowest possible temperature.'],
    ['m', 'Why does a balloon expand when heated?', ['Molecules move faster', 'Molecules become bigger', 'The mass increases', 'Pressure drops to zero'], 'Higher kinetic energy means harder collisions.'],
    ['m', 'A syringe with a blocked nozzle demonstrates?', ['Boyle’s Law', 'Charles’ Law', 'Gay-Lussac’s Law', 'Kepler’s Law'], 'Pushing the plunger cuts V and raises P.'],
    ['e', 'Gas laws must use temperature in?', ['Kelvin', 'Celsius', 'Fahrenheit', 'Any unit'], 'Only the kelvin scale starts at absolute zero.', {'Celsius': 'Only the kelvin scale starts at absolute zero.', 'Any unit': 'Only kelvin works in the gas laws.'}],
    ['h', 'P₁ = 100 kPa, V₁ = 2 L, V₂ = 1 L. Find P₂.', ['200 kPa', '50 kPa', '100 kPa', '400 kPa'], 'P₁V₁ = P₂V₂ → 200 = P₂ × 1.'],
    ['h', 'V₁ = 300 cm³ at 300 K, heated to 600 K. Find V₂.', ['600 cm³', '150 cm³', '300 cm³', '900 cm³'], 'V ÷ T constant, so doubling T doubles V.'],
    ['h', 'P₁ = 100 kPa at 300 K, heated to 600 K at fixed V.', ['200 kPa', '50 kPa', '300 kPa', '100 kPa'], 'P ÷ T constant, so doubling T doubles P.'],
    ['e', 'Which gas law needs a constant temperature?', ['Boyle’s Law', 'Charles’ Law', 'Gay-Lussac’s Law', 'Kepler’s Law'], 'Boyle’s Law is the isothermal one.', {'Charles’ Law': 'Charles’ Law holds the PRESSURE constant.', 'Gay-Lussac’s Law': 'Gay-Lussac holds the VOLUME constant.'}],
    ['e', 'A tyre gets hot on a long drive. Its pressure?', ['Increases', 'Decreases', 'Stays the same', 'Falls to zero'], 'Fixed volume, higher T, so higher P (Gay-Lussac).', {'Decreases': 'Hotter molecules hit the walls harder, raising P.'}],
    ['m', 'Doubling the kelvin temperature at constant P doubles the?', ['Volume', 'Pressure', 'Mass', 'Density'], 'Charles’ Law: V is proportional to T.', {'Pressure': 'Pressure is what is being held constant here.'}],
    ['m', 'Why must gas-law temperatures never be in Celsius?', ['Celsius can be negative', 'Celsius is too small', 'Celsius is not metric', 'Celsius has no zero'], 'Ratios only work from absolute zero upwards.', {'Celsius is not metric': 'Celsius is metric - the problem is where its zero sits.'}],
    ['h', 'V1 = 200 cm³ at 400 K, cooled to 200 K. Find V2.', ['100 cm³', '400 cm³', '200 cm³', '50 cm³'], 'V/T constant: halving T halves V.', {'400 cm³': 'You doubled instead of halving.'}],
    ['h', 'P1 = 300 kPa, V1 = 2 L, P2 = 600 kPa. Find V2.', ['1 L', '4 L', '2 L', '3 L'], 'P1V1 = P2V2: doubling P halves V.', {'4 L': 'You doubled V - P and V move opposite ways.'}],
    ['h', 'A gas at 4 atm is compressed from 6 L to 3 L. New pressure?', ['8 atm', '2 atm', '4 atm', '12 atm'], 'P₁V₁ = P₂V₂ → 24 = P₂ × 3 → 8 atm.']
  ]);

  /* ---------- 15. WAVES ---------- */
  G('Waves', 'Waves', [
    ['e', 'SI unit of frequency?', ['hertz', 'second', 'metre', 'm/s'], '1 Hz = one complete wave per second.', {'second': 'The second measures the PERIOD, not the frequency.', 'm/s': 'm/s is wave speed.'}],
    ['e', 'SI unit of wavelength?', ['metre', 'hertz', 'second', 'm/s'], 'Wavelength is a distance, measured in metres.', {'hertz': 'Hertz measures frequency.', 'm/s': 'm/s is wave speed.'}],
    ['e', 'Wave speed formula?', ['v = fλ', 'v = f ÷ λ', 'v = λ ÷ f', 'v = ft'], 'Speed = frequency × wavelength.', {'v = λ ÷ f': 'That is upside down.', 'v = f ÷ λ': 'That is upside down.'}],
    ['e', 'Maximum displacement from the rest position?', ['Amplitude', 'Wavelength', 'Frequency', 'Period'], 'Amplitude measures the size of the oscillation.', {'Wavelength': 'Wavelength is the distance between two crests.'}],
    ['e', 'Time taken for one complete oscillation?', ['Period', 'Frequency', 'Amplitude', 'Wavelength'], 'The period T is measured in seconds.', {'Frequency': 'Frequency is how many per second - the reciprocal.'}],
    ['e', 'Sound waves are?', ['Longitudinal', 'Transverse', 'Electromagnetic', 'Stationary'], 'Air particles vibrate along the travel direction.', {'Transverse': 'Air vibrates ALONG the direction of travel.', 'Electromagnetic': 'Sound needs a medium; it is mechanical.'}],
    ['e', 'Light waves are?', ['Transverse', 'Longitudinal', 'Mechanical', 'Sound waves'], 'The fields vibrate across the travel direction.', {'Longitudinal': 'Light vibrates ACROSS the direction of travel.', 'Mechanical': 'Light travels through a vacuum, so it is not mechanical.'}],
    ['e', 'Relationship between period and frequency?', ['T = 1 ÷ f', 'T = f', 'T = f²', 'T = 2f'], 'They are reciprocals of each other.', {'T = f': 'They are reciprocals, not equal.'}],
    ['m', 'In a TRANSVERSE wave, the vibration is?', ['Perpendicular to travel', 'Parallel to travel', 'In a circle', 'Absent'], 'Think of a rope flicked up and down.', {'Parallel to travel': 'Parallel vibration describes a LONGITUDINAL wave.'}],
    ['m', 'In a LONGITUDINAL wave, the vibration is?', ['Parallel to travel', 'Perpendicular to travel', 'Circular', 'Random'], 'Think of a slinky pushed back and forth.', {'Perpendicular to travel': 'Perpendicular vibration describes a TRANSVERSE wave.'}],
    ['e', 'Compressions and rarefactions occur in?', ['Longitudinal waves', 'Transverse waves', 'Light waves', 'Water waves'], 'They are regions of high and low pressure.'],
    ['e', 'Waves transfer ... without transferring matter.', ['Energy', 'Mass', 'Particles', 'Electrons'], 'The medium itself does not travel along.'],
    ['e', 'Distance between two consecutive crests?', ['Wavelength', 'Amplitude', 'Period', 'Frequency'], 'One full wave length, symbol λ.'],
    ['m', 'At the same speed, a higher frequency gives a ... wavelength.', ['Shorter', 'Longer', 'Identical', 'Zero'], 'v = fλ, so f up means λ down.'],
    ['m', 'A wavefront is?', ['A line of points in phase', 'The direction of travel', 'The wave amplitude', 'The wave speed'], 'For example, the line along a set of crests.'],
    ['h', 'f = 50 Hz, λ = 2 m. Wave speed?', ['100 m/s', '25 m/s', '52 m/s', '0.04 m/s'], 'v = fλ = 50 × 2 = 100 m/s.', {'25 m/s': 'You divided instead of multiplying.', '52 m/s': 'You added instead of multiplying.'}],
    ['h', 'v = 340 m/s, f = 170 Hz. Wavelength?', ['2 m', '0.5 m', '510 m', '170 m'], 'λ = v ÷ f = 340 ÷ 170 = 2 m.', {'510 m': 'You added instead of dividing: 340 + 170 = 510.', '0.5 m': 'You divided the wrong way round.'}],
    ['h', 'T = 0.2 s. Frequency?', ['5 Hz', '0.2 Hz', '20 Hz', '2 Hz'], 'f = 1 ÷ T = 1 ÷ 0.2 = 5 Hz.', {'0.2 Hz': 'Frequency is 1 ÷ T, not T itself.', '20 Hz': 'Check the decimal point: 1 ÷ 0.2 = 5.'}],
    ['h', 'f = 4 Hz, λ = 0.5 m. Wave speed?', ['2 m/s', '8 m/s', '4.5 m/s', '0.125 m/s'], 'v = fλ = 4 × 0.5 = 2 m/s.']
  ]);

  /* ---------- 16. REFLECTION OF WAVES ---------- */
  G('Waves', 'Reflection of Waves', [
    ['e', 'In reflection, the angle of incidence equals?', ['The angle of reflection', 'The angle of refraction', 'The critical angle', '90°'], 'That is the law of reflection.'],
    ['e', 'An echo is caused by?', ['Reflection of sound', 'Refraction of sound', 'Diffraction', 'Interference'], 'Sound bounces off a hard surface and returns.'],
    ['m', 'After reflection, the wavelength?', ['Stays the same', 'Increases', 'Decreases', 'Becomes zero'], 'Reflection changes direction only.'],
    ['m', 'After reflection, the frequency?', ['Stays the same', 'Increases', 'Decreases', 'Doubles'], 'Frequency is set by the source.', {'Increases': 'Frequency is fixed by the source and never changes.'}],
    ['m', 'After reflection, the wave speed?', ['Stays the same', 'Increases', 'Decreases', 'Becomes zero'], 'The medium is unchanged, so v is unchanged.'],
    ['m', 'After reflection, the direction of travel?', ['Changes', 'Stays the same', 'Becomes random', 'Becomes zero'], 'Only direction is altered by reflection.'],
    ['e', 'Sonar works by reflecting?', ['Sound waves', 'Light waves', 'Radio waves', 'X-rays'], 'Ships use it to measure sea depth.'],
    ['e', 'The normal is a line drawn ... to the surface.', ['Perpendicular', 'Parallel', 'At 45°', 'Curved'], 'All angles are measured from the normal.'],
    ['m', 'Reflection is used in which medical scan?', ['Ultrasound', 'X-ray', 'MRI', 'Blood test'], 'Reflected ultrasound builds up the image.']
  ]);

  /* ---------- 17. DAMPING AND RESONANCE ---------- */
  G('Waves', 'Damping and Resonance', [
    ['e', 'Damping causes the amplitude to?', ['Decrease', 'Increase', 'Stay constant', 'Double'], 'The oscillation slowly dies away.', {'Increase': 'Damping removes energy, so amplitude falls.', 'Stay constant': 'Energy is lost, so it cannot stay constant.'}],
    ['e', 'Resonance happens when the driving frequency equals?', ['The natural frequency', 'Zero', 'Double the natural frequency', 'Half the natural frequency'], 'Energy transfer is then at its most efficient.', {'Double the natural frequency': 'Resonance needs a MATCH, not a multiple.'}],
    ['e', 'Damping is caused by a loss of?', ['Energy', 'Mass', 'Frequency', 'Wavelength'], 'Energy leaves as heat and sound.'],
    ['m', 'External damping is due to?', ['Friction with surroundings', 'Internal molecular forces', 'Gravity', 'An increase in mass'], 'For example, air resistance on a pendulum.'],
    ['m', 'During damping, the frequency of oscillation?', ['Stays the same', 'Increases', 'Decreases a lot', 'Becomes zero'], 'Only the amplitude falls; frequency holds.'],
    ['e', 'At resonance, the amplitude is?', ['Maximum', 'Minimum', 'Zero', 'Constant'], 'The system absorbs the most energy.'],
    ['m', 'The Tacoma Narrows Bridge collapse is an example of?', ['Dangerous resonance', 'Useful resonance', 'Damping', 'Diffraction'], 'Wind drove the bridge at its natural frequency.'],
    ['m', 'A microwave oven heats food by resonance of?', ['Water molecules', 'Fat molecules', 'Metal atoms', 'Air molecules'], 'Microwaves match the water molecule frequency.'],
    ['m', 'Soldiers break step on a bridge to avoid?', ['Resonance', 'Damping', 'Diffraction', 'Refraction'], 'Marching in step could match the natural frequency.'],
    ['m', 'Natural frequency is the frequency at which a system?', ['Oscillates freely', 'Is forced to vibrate', 'Stops moving', 'Loses all its energy'], 'It depends on the system, not on the driver.'],
    ['m', 'Tuning a radio to a station uses?', ['Resonance', 'Damping', 'Interference', 'Refraction'], 'The circuit is matched to the station frequency.'],
    ['m', 'A shock absorber in a car provides?', ['Damping', 'Resonance', 'Amplification', 'Diffraction'], 'It quickly removes unwanted oscillation energy.']
  ]);

  /* ---------- 18. INTERFERENCE OF WAVES ---------- */
  G('Waves', 'Interference of Waves', [
    ['e', 'Interference happens when two waves?', ['Superpose', 'Reflect', 'Refract', 'Diffract'], 'Their displacements add together.'],
    ['m', 'CONSTRUCTIVE interference occurs when waves meet?', ['In phase', 'Out of phase', 'At right angles', 'Never'], 'Crest meets crest, so amplitudes add.', {'Out of phase': 'Out of phase gives DESTRUCTIVE interference.'}],
    ['m', 'DESTRUCTIVE interference occurs when waves meet?', ['Out of phase', 'In phase', 'At the source', 'At right angles'], 'Crest meets trough, so they cancel.', {'In phase': 'In phase gives CONSTRUCTIVE interference.'}],
    ['m', 'Constructive interference produces?', ['A larger amplitude', 'Zero amplitude', 'A shorter wavelength', 'A higher speed'], 'The resultant displacement is the sum.'],
    ['m', 'Destructive interference produces?', ['Reduced or zero amplitude', 'Maximum amplitude', 'Higher frequency', 'Longer wavelength'], 'Opposite displacements cancel out.'],
    ['m', 'The principle of superposition says the displacement is?', ['The sum of each wave', 'The product of each wave', 'Always the difference', 'Always zero'], 'Add the individual displacements at that point.'],
    ['m', 'A stable interference pattern needs sources that are?', ['Coherent', 'Of different frequency', 'Far apart', 'Moving quickly'], 'Coherence keeps the pattern steady.'],
    ['m', 'Coherent sources have?', ['Same f, constant phase', 'Different amplitude', 'Different frequency', 'Random phase'], 'This is why a laser is used in the experiment.'],
    ['m', 'In Young’s double slit, wider slit separation makes fringes?', ['Closer together', 'Further apart', 'Brighter', 'Disappear'], 'x = λD ÷ a, so a bigger a gives a smaller x.'],
    ['h', 'Young’s double slit formula for wavelength?', ['λ = ax ÷ D', 'λ = aD ÷ x', 'λ = xD ÷ a', 'λ = a ÷ xD'], 'From x = λD ÷ a, rearranged for λ.']
  ]);

  /* ---------- 19. DIFFRACTION OF WAVES ---------- */
  G('Waves', 'Diffraction of Waves', [
    ['e', 'Diffraction is the ... of waves at a gap or edge.', ['Spreading', 'Bouncing back', 'Bending at a boundary', 'Cancelling'], 'The wave spreads out beyond the obstacle.'],
    ['m', 'Diffraction is greatest when the gap size is?', ['Similar to λ', 'Much larger than λ', 'Exactly double λ', 'Unrelated to λ'], 'Comparable sizes give the most spreading.', {'Much larger than λ': 'A wide gap barely spreads the wave at all.'}],
    ['m', 'A SMALLER gap produces?', ['More diffraction', 'Less diffraction', 'No diffraction', 'Reflection instead'], 'Narrow gaps spread waves out more.', {'Less diffraction': 'Narrow gaps spread the wave MORE.'}],
    ['m', 'A LONGER wavelength produces?', ['More diffraction', 'Less diffraction', 'No change', 'Reflection instead'], 'Long waves bend around obstacles more easily.'],
    ['m', 'After diffraction, the wavelength?', ['Stays the same', 'Increases', 'Decreases', 'Doubles'], 'Only the direction and amplitude change.'],
    ['m', 'After diffraction, the frequency?', ['Stays the same', 'Increases', 'Decreases', 'Halves'], 'Frequency is fixed by the source.'],
    ['m', 'After diffraction, the amplitude usually?', ['Decreases', 'Increases', 'Stays the same', 'Doubles'], 'The energy is spread over a wider area.'],
    ['m', 'Why can you hear round a corner but not see?', ['Sound has longer waves', 'Sound travels faster', 'Sound is louder', 'Sound is transverse'], 'Longer waves diffract much more.'],
    ['m', 'Which diffracts most through a doorway?', ['Sound', 'Visible light', 'X-rays', 'Gamma rays'], 'Sound wavelengths are about a metre.']
  ]);

})(window.PFR.Bank.form(4));
