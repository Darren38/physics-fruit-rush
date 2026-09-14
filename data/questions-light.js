/* =====================================================================
   PHYSICS FRUIT RUSH  --  QUESTIONS: LIGHT AND OPTICS
   KSSM Form 4 Physics, Chapter 5 (light) and Chapter 6 (instruments)
   Topics 20-28.
   Format is documented in data/question-bank.js  (first answer = correct)
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- 20. REFLECTION OF LIGHT ---------- */
  G('Light', 'Reflection of Light', [
    ['e', 'The angle of incidence is measured from?', ['The normal', 'The surface', 'The mirror edge', 'The reflected ray'], 'Always measure optical angles from the normal.', {'The surface': 'Optical angles are ALWAYS measured from the normal.'}],
    ['e', 'Law of reflection: angle i equals?', ['Angle r', 'Twice angle r', '90° − r', 'Zero'], 'Incident and reflected angles are equal.'],
    ['m', 'An image in a plane mirror is?', ['Virtual, upright, same size', 'Real and inverted', 'Virtual and magnified', 'Real and same size'], 'It cannot be caught on a screen.', {'Real and inverted': 'A mirror image cannot be caught on a screen, so it is virtual.'}],
    ['m', 'Image distance in a plane mirror equals?', ['The object distance', 'Twice the object distance', 'Half the object distance', 'Zero'], 'The image sits as far behind as the object is in front.'],
    ['m', 'Text looks reversed in a mirror. This is called?', ['Lateral inversion', 'Vertical inversion', 'Diffraction', 'Refraction'], 'Left and right appear swapped.'],
    ['m', 'A periscope is built from?', ['Two plane mirrors', 'One plane mirror', 'A concave lens', 'A convex mirror'], 'Two mirrors at 45° shift the line of sight.'],
    ['m', 'Convex mirrors are used as blind-spot mirrors because they give?', ['A wider field of view', 'A magnified image', 'A real image', 'An inverted image'], 'They diverge light from a wide area.'],
    ['m', 'Concave mirrors are used in?', ['Torch reflectors', 'Rear-view mirrors', 'Shop security mirrors', 'Periscopes'], 'They gather light into a parallel beam.'],
    ['m', 'A rough surface causes?', ['Diffuse reflection', 'Regular reflection', 'Refraction', 'Total internal reflection'], 'Rays scatter in many directions.', {'Regular reflection': 'Regular reflection needs a smooth surface.'}],
    ['h', 'A ray hits a mirror at 30° to the SURFACE. Angle of reflection?', ['60°', '30°', '90°', '120°'], 'From the normal: 90 − 30 = 60°, so r = 60°.', {'30°': 'That is from the surface. From the normal it is 90 − 30 = 60°.'}],
    ['h', 'A ray strikes a mirror along the normal. Angle of reflection?', ['0°', '45°', '90°', '180°'], 'It reflects straight back along the same path.']
  ]);

  /* ---------- 21. TOTAL INTERNAL REFLECTION ---------- */
  G('Light', 'Total Internal Reflection', [
    ['e', 'TIR happens when the angle of incidence is?', ['Greater than critical angle', 'Less than critical angle', 'Exactly 0°', 'Exactly 90°'], 'Beyond the critical angle no light escapes.', {'Less than critical angle': 'Below the critical angle the light refracts out instead.'}],
    ['e', 'Optical fibres work using?', ['Total internal reflection', 'Refraction only', 'Diffraction', 'Interference'], 'Light bounces along inside the core.'],
    ['m', 'TIR needs light to travel from?', ['Denser to less dense', 'Less dense to denser', 'Air into glass', 'Vacuum into glass'], 'For example, glass to air or water to air.', {'Less dense to denser': 'TIR only happens going DENSER to less dense.', 'Air into glass': 'That is less dense to denser - the wrong way.'}],
    ['m', 'At exactly the critical angle, the refracted ray travels at?', ['90° to the normal', '0° to the normal', '45° to the normal', 'The same angle as i'], 'It grazes along the boundary surface.'],
    ['m', 'Formula for the critical angle?', ['sin c = 1 ÷ n', 'sin c = n', 'tan c = n', 'cos c = 1 ÷ n'], 'A larger n gives a smaller critical angle.', {'sin c = n': 'It is sin c = 1 ÷ n, so a big n gives a small c.'}],
    ['m', 'A mirage is caused by?', ['TIR in layers of hot air', 'Diffraction', 'Interference', 'A mirror on the road'], 'Hot air near the road is optically less dense.'],
    ['m', 'Which device uses TIR?', ['A prism periscope', 'A convex lens', 'A plane mirror', 'A concave mirror'], '45° prisms turn light by 90° with no silvering.'],
    ['m', 'A HIGHER refractive index gives a critical angle that is?', ['Smaller', 'Larger', 'Unchanged', 'Zero'], 'sin c = 1 ÷ n, so bigger n means smaller c.', {'Larger': 'sin c = 1 ÷ n, so a bigger n gives a SMALLER angle.'}],
    ['m', 'Why does a diamond sparkle?', ['A small critical angle', 'It is very dense', 'It diffracts light', 'It is coloured'], 'n ≈ 2.42, so c ≈ 24° and light is trapped.'],
    ['e', 'Endoscopes used by doctors rely on?', ['Total internal reflection', 'Diffraction', 'Interference', 'Damping'], 'Optical fibres carry light and images inside.'],
    ['h', 'n = 1.5. Critical angle ≈?', ['42°', '30°', '48°', '60°'], 'sin c = 1 ÷ 1.5 = 0.667, so c ≈ 41.8°.', {'30°': '30° is the critical angle for n = 2.0.'}],
    ['h', 'n = 2.0. Critical angle ≈?', ['30°', '45°', '60°', '15°'], 'sin c = 0.5, so c = 30°.']
  ]);

  /* ---------- 22. REFRACTION OF LIGHT ---------- */
  G('Light', 'Refraction of Light', [
    ['e', 'Refraction is caused by a change in the ... of light.', ['Speed', 'Colour', 'Frequency', 'Amplitude'], 'Light slows in a denser medium and bends.', {'Frequency': 'Frequency never changes; the SPEED does.', 'Colour': 'Colour is unchanged - the speed changes.'}],
    ['e', 'Light travels fastest in?', ['A vacuum', 'Water', 'Glass', 'Diamond'], 'c = 3 × 10⁸ m/s is the maximum speed.', {'Water': 'Light is slowest in the densest medium.', 'Diamond': 'Diamond has the highest n, so light is slowest there.'}],
    ['m', 'Light going from air into glass bends?', ['Towards the normal', 'Away from the normal', 'Along the normal', 'Straight back'], 'Entering a denser medium bends light towards N.', {'Away from the normal': 'Entering a DENSER medium bends light TOWARDS the normal.'}],
    ['m', 'Light leaving glass into air bends?', ['Away from the normal', 'Towards the normal', 'Not at all', 'By exactly 90°'], 'It speeds up, so it bends away from N.', {'Towards the normal': 'Leaving into a LESS dense medium bends it AWAY.'}],
    ['m', 'Snell’s law for refractive index?', ['n = sin i ÷ sin r', 'n = sin r ÷ sin i', 'n = i ÷ r', 'n = r ÷ i'], 'Ratio of the sines, going from air into the medium.', {'n = sin r ÷ sin i': 'That is upside down.', 'n = i ÷ r': 'Use the SINES of the angles, not the angles.'}],
    ['e', 'During refraction, the frequency?', ['Stays the same', 'Increases', 'Decreases', 'Doubles'], 'Frequency is fixed by the source.', {'Increases': 'Frequency is set by the source and never changes.', 'Decreases': 'Frequency is set by the source and never changes.'}],
    ['m', 'During refraction, the wavelength?', ['Changes', 'Stays the same', 'Becomes zero', 'Always doubles'], 'v changes and f is fixed, so λ must change.'],
    ['e', 'Refractive index of air is about?', ['1.0', '1.33', '1.5', '2.42'], 'Air is almost the same as a vacuum.'],
    ['e', 'Refractive index of water is about?', ['1.33', '1.0', '1.5', '2.42'], 'Glass is about 1.5 and diamond about 2.42.'],
    ['e', 'A swimming pool looks shallower because of?', ['Refraction', 'Reflection', 'Diffraction', 'Interference'], 'Rays bend as they leave the water.'],
    ['m', 'n = real depth ÷ ?', ['Apparent depth', 'Object distance', 'Image height', 'Focal length'], 'This is the real and apparent depth method.'],
    ['m', 'n = c ÷ v means light inside the medium is?', ['Slower than in a vacuum', 'Faster than in a vacuum', 'The same speed', 'Completely stopped'], 'n > 1 always, so v < c.', {'Faster than in a vacuum': 'n is always greater than 1, so v must be less than c.'}],
    ['h', 'sin i = 0.6 and sin r = 0.4. Refractive index?', ['1.5', '0.67', '2.4', '1.0'], 'n = 0.6 ÷ 0.4 = 1.5.'],
    ['h', 'Real depth 8 cm, n = 1.33. Apparent depth ≈?', ['6 cm', '10.6 cm', '4 cm', '8 cm'], 'Apparent = 8 ÷ 1.33 ≈ 6 cm.'],
    ['h', 'Light speed in a medium with n = 1.5 (c = 3 × 10⁸)?', ['2 × 10⁸ m/s', '4.5 × 10⁸ m/s', '1.5 × 10⁸ m/s', '3 × 10⁸ m/s'], 'v = c ÷ n = 3 × 10⁸ ÷ 1.5.']
  ]);

  /* ---------- 23. ELECTROMAGNETIC SPECTRUM ---------- */
  G('EM Spectrum', 'Electromagnetic Spectrum', [
    ['e', 'Which has the LONGEST wavelength?', ['Radio waves', 'Gamma rays', 'X-rays', 'Ultraviolet'], 'Radio sits at the long-wavelength end.', {'Gamma rays': 'Gamma rays have the SHORTEST wavelength.', 'X-rays': 'X-rays are near the short-wavelength end.'}],
    ['e', 'Which has the HIGHEST frequency?', ['Gamma rays', 'Radio waves', 'Microwaves', 'Infrared'], 'Gamma rays are the most energetic.', {'Radio waves': 'Radio waves have the LOWEST frequency.', 'Infrared': 'Infrared sits below visible light.'}],
    ['e', 'Speed of all EM waves in a vacuum?', ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '340 m/s', '3 × 10¹⁰ m/s'], 'All EM waves travel at c in a vacuum.', {'340 m/s': '340 m/s is the speed of SOUND in air.'}],
    ['e', 'Which EM wave can the human eye detect?', ['Visible light', 'Infrared', 'Ultraviolet', 'X-rays'], 'Only about 400-700 nm is visible.'],
    ['e', 'All electromagnetic waves are?', ['Transverse', 'Longitudinal', 'Mechanical', 'Sound waves'], 'Electric and magnetic fields vibrate across.', {'Longitudinal': 'EM waves vibrate ACROSS the direction of travel.', 'Mechanical': 'EM waves need no medium at all.'}],
    ['e', 'Which is used in TV remote controls?', ['Infrared', 'Ultraviolet', 'X-rays', 'Gamma rays'], 'A short-range infrared LED sends the signal.'],
    ['e', 'Which is used for satellite communication?', ['Microwaves', 'Gamma rays', 'X-rays', 'Ultraviolet'], 'Microwaves pass easily through the atmosphere.'],
    ['e', 'Which EM wave causes sunburn?', ['Ultraviolet', 'Infrared', 'Radio waves', 'Microwaves'], 'UV damages skin cells.', {'Infrared': 'Infrared is felt as heat; UV damages skin.'}],
    ['e', 'Which is used to image broken bones?', ['X-rays', 'Radio waves', 'Infrared', 'Microwaves'], 'Bone absorbs X-rays more than soft tissue.'],
    ['e', 'Which is used to sterilise equipment and treat cancer?', ['Gamma rays', 'Radio waves', 'Infrared', 'Visible light'], 'Gamma radiation kills cells and bacteria.'],
    ['m', 'Which lies between microwaves and visible light?', ['Infrared', 'Ultraviolet', 'X-rays', 'Radio waves'], 'Order: radio, micro, IR, visible, UV, X, gamma.'],
    ['m', 'Which lies between visible light and X-rays?', ['Ultraviolet', 'Infrared', 'Microwaves', 'Gamma rays'], 'UV sits just past the violet end.'],
    ['m', 'As frequency increases, photon energy?', ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'], 'Higher frequency means more energetic waves.', {'Decreases': 'Higher frequency means MORE energy per photon.'}],
    ['e', 'Infrared radiation is used in?', ['Thermal imaging', 'Bone scans', 'Radio broadcasts', 'Food sterilising'], 'Warm objects emit infrared.'],
    ['e', 'Which EM wave is used to cook food in a microwave oven?', ['Microwaves', 'X-rays', 'Gamma rays', 'Radio waves'], 'Microwaves resonate with water molecules in food.', {'X-rays': 'X-rays pass through food without heating it.'}],
    ['e', 'Which EM wave is used for radio and TV broadcasting?', ['Radio waves', 'Infrared', 'Ultraviolet', 'Gamma rays'], 'Radio waves travel far and diffract around obstacles.', {'Infrared': 'Infrared is short range, used for remote controls.'}],
    ['m', 'Which EM wave is used to detect forged banknotes?', ['Ultraviolet', 'Infrared', 'Radio waves', 'Microwaves'], 'UV makes the security ink fluoresce.', {'Infrared': 'Infrared shows heat, not fluorescent security marks.'}],
    ['m', 'All EM waves carry which two fields?', ['Electric and magnetic', 'Electric and gravity', 'Magnetic and sound', 'Heat and light'], 'The two fields vibrate at right angles to each other.', {'Heat and light': 'Heat and light are two EM waves, not the fields.'}],
    ['m', 'Which EM wave has a wavelength of about 1 cm?', ['Microwaves', 'Gamma rays', 'Visible light', 'Ultraviolet'], 'Microwaves run from about 1 mm to 30 cm.', {'Visible light': 'Visible light is about 5 × 10⁻⁷ m, far smaller.'}],
    ['h', 'An X-ray has f = 3 × 10¹⁸ Hz. Wavelength?', ['1 × 10⁻¹⁰ m', '1 × 10⁻⁸ m', '9 × 10²⁶ m', '1 × 10¹⁰ m'], 'λ = c ÷ f = 3 × 10⁸ ÷ 3 × 10¹⁸.', {'9 × 10²⁶ m': 'You multiplied c by f instead of dividing.'}],
    ['h', 'A radio wave has λ = 3 m. Frequency? (c = 3 × 10⁸)', ['1 × 10⁸ Hz', '9 × 10⁸ Hz', '1 × 10⁶ Hz', '3 × 10⁸ Hz'], 'f = c ÷ λ = 3 × 10⁸ ÷ 3.'],
    ['h', 'An EM wave has f = 6 × 10¹⁴ Hz. Wavelength?', ['5 × 10⁻⁷ m', '2 × 10⁶ m', '1.8 × 10²³ m', '5 × 10⁷ m'], 'λ = c ÷ f = 3 × 10⁸ ÷ 6 × 10¹⁴.']
  ]);

  /* ---------- 24. CONCAVE LENS ---------- */
  G('Lenses', 'Concave Lens', [
    ['e', 'A concave lens is also called a?', ['Diverging lens', 'Converging lens', 'Plane lens', 'Convex lens'], 'It spreads parallel rays outwards.', {'Converging lens': 'Converging describes a CONVEX lens.'}],
    ['e', 'A concave lens is ... at the centre.', ['Thinner', 'Thicker', 'The same thickness', 'Completely flat'], 'Thin middle, thick edges.', {'Thicker': 'Thick in the middle describes a CONVEX lens.'}],
    ['m', 'The image from a concave lens is always?', ['Virtual, upright, diminished', 'Real and inverted', 'Real and magnified', 'Virtual and magnified'], 'True for any real object position.', {'Real and inverted': 'A concave lens can never form a real image.'}],
    ['m', 'Parallel rays through a concave lens appear to come from?', ['The principal focus', 'The optical centre', 'Infinity', 'The object itself'], 'They diverge from the virtual focal point.'],
    ['e', 'The focal length of a concave lens is taken as?', ['Negative', 'Positive', 'Zero', 'Infinite'], 'A sign convention marking a virtual focus.'],
    ['e', 'Concave lenses correct which eye defect?', ['Short-sightedness', 'Long-sightedness', 'Astigmatism', 'Colour blindness'], 'They move the image back onto the retina.', {'Long-sightedness': 'Long sight is corrected with a CONVEX lens.'}],
    ['m', 'Can a concave lens form a real image of a real object?', ['No, never', 'Yes, always', 'Only at 2F', 'Only at F'], 'Diverging rays can never meet on a screen.'],
    ['m', 'Concave lenses are used in?', ['Door peepholes', 'Magnifying glasses', 'Projectors', 'Simple cameras'], 'They give a wide, diminished view.']
  ]);

  /* ---------- 25. CONVEX LENS ---------- */
  G('Lenses', 'Convex Lens', [
    ['e', 'A convex lens is also called a?', ['Converging lens', 'Diverging lens', 'Plane lens', 'Concave lens'], 'It brings parallel rays to a focus.', {'Diverging lens': 'Diverging describes a CONCAVE lens.'}],
    ['e', 'A convex lens is ... at the centre.', ['Thicker', 'Thinner', 'Flat', 'Hollow'], 'Thick middle, thin edges.', {'Thinner': 'Thin in the middle describes a CONCAVE lens.'}],
    ['e', 'Parallel rays through a convex lens meet at?', ['The principal focus', 'The optical centre', 'Infinity', '2F'], 'That point is one focal length away.'],
    ['e', 'Distance from optical centre to principal focus?', ['Focal length', 'Radius of curvature', 'Object distance', 'Image distance'], 'Symbol f, measured along the principal axis.'],
    ['m', 'Object BEYOND 2F. The image is?', ['Real, inverted, diminished', 'Real, inverted, magnified', 'Virtual and upright', 'The same size'], 'This is the camera arrangement.', {'Real, inverted, magnified': 'Beyond 2F the image is DIMINISHED.'}],
    ['m', 'Object AT 2F. The image is?', ['Real, inverted, same size', 'Real and magnified', 'Virtual and upright', 'At infinity'], 'The image also forms at 2F on the other side.'],
    ['m', 'Object BETWEEN F and 2F. The image is?', ['Real, inverted, magnified', 'Real and diminished', 'Virtual and upright', 'Formed at F'], 'This is the projector arrangement.'],
    ['m', 'Object AT F. The image forms?', ['At infinity', 'At 2F', 'At F', 'Just behind the lens'], 'The emerging rays are parallel.'],
    ['m', 'Object BETWEEN F and the lens. The image is?', ['Virtual, upright, magnified', 'Real and inverted', 'Real and diminished', 'At infinity'], 'This is the magnifying glass arrangement.', {'Real and inverted': 'Inside F the image is virtual and upright.'}],
    ['e', 'The lens formula?', ['1/f = 1/u + 1/v', 'f = u + v', '1/f = 1/u − 1/v', 'f = uv'], 'Using the real-is-positive convention.', {'1/f = 1/u − 1/v': 'The real-is-positive convention uses a PLUS.', 'f = u + v': 'Focal length is not a simple sum.'}],
    ['e', 'Linear magnification formula?', ['m = v ÷ u', 'm = u ÷ v', 'm = uv', 'm = v − u'], 'Also equal to image height ÷ object height.', {'m = u ÷ v': 'That is upside down.'}],
    ['e', 'Convex lenses correct which eye defect?', ['Long-sightedness', 'Short-sightedness', 'Astigmatism', 'Cataracts'], 'They bring the image forward onto the retina.', {'Short-sightedness': 'Short sight is corrected with a CONCAVE lens.'}],
    ['h', 'u = 30 cm, v = 60 cm. Magnification?', ['2', '0.5', '90', '30'], 'm = v ÷ u = 60 ÷ 30 = 2.'],
    ['h', 'f = 10 cm, u = 20 cm. Image distance v?', ['20 cm', '10 cm', '30 cm', '6.7 cm'], '1/v = 1/10 − 1/20 = 1/20, so v = 20 cm.'],
    ['h', 'f = 5 cm, u = 10 cm. Magnification?', ['1', '2', '0.5', '5'], 'v = 10 cm, so m = 10 ÷ 10 = 1.']
  ]);

  /* ---------- 26. MAGNIFYING GLASS ---------- */
  G('Optical Instruments', 'Magnifying Glass', [
    ['e', 'A magnifying glass uses which lens?', ['Convex', 'Concave', 'Plane', 'Cylindrical'], 'A single short-focus converging lens.'],
    ['m', 'The object must be placed?', ['Between F and the lens', 'At 2F', 'Beyond 2F', 'Exactly at F'], 'Only then is the image virtual and magnified.', {'Beyond 2F': 'Beyond 2F gives a small REAL image, not a magnifier.'}],
    ['m', 'The image from a magnifying glass is?', ['Virtual, upright, magnified', 'Real and inverted', 'Virtual and diminished', 'Real and magnified'], 'You see it on the same side as the object.'],
    ['m', 'For higher magnification, use a lens with?', ['A shorter focal length', 'A longer focal length', 'A larger diameter', 'Thinner glass'], 'Power increases as f decreases.', {'A longer focal length': 'A SHORTER focal length magnifies more.'}],
    ['e', 'A magnification of 5× means the image is?', ['5 times taller', '5 times smaller', 'Exactly 5 cm tall', '5 metres away'], 'Magnification is a simple ratio of heights.'],
    ['m', 'Where should the eye be placed?', ['Close to the lens', 'Far from the lens', 'At the object', 'Behind the object'], 'This gives the widest field of view.']
  ]);

  /* ---------- 27. MICROSCOPE ---------- */
  G('Optical Instruments', 'Microscope', [
    ['e', 'A compound microscope uses how many convex lenses?', ['Two', 'One', 'Three', 'None'], 'An objective lens and an eyepiece.'],
    ['e', 'The lens nearest the object is called the?', ['Objective lens', 'Eyepiece', 'Condenser', 'Mirror'], 'It forms the first real image.'],
    ['m', 'The objective focal length compared with the eyepiece?', ['Shorter', 'Longer', 'Equal', 'Zero'], 'fo < fe in a compound microscope.', {'Longer': 'In a microscope the objective is SHORTER. A telescope is the opposite.'}],
    ['m', 'The image formed by the objective lens is?', ['Real, inverted, magnified', 'Virtual and upright', 'Real and diminished', 'Formed at infinity'], 'The eyepiece then magnifies this image.'],
    ['e', 'The eyepiece of a microscope acts as a?', ['Magnifying glass', 'Plane mirror', 'Concave lens', 'Prism'], 'It views the first image from inside its focus.'],
    ['m', 'The final image in a compound microscope is?', ['Virtual, inverted, magnified', 'Real and upright', 'Virtual and diminished', 'Real and inverted'], 'Inverted compared with the original object.'],
    ['m', 'The object is placed where relative to the objective?', ['Just beyond its focal point', 'At the eyepiece focus', 'At infinity', 'Between the two lenses'], 'Between fo and 2fo gives a magnified real image.'],
    ['h', 'Objective m = 5, eyepiece m = 10. Total magnification?', ['50', '15', '2', '0.5'], 'Total m = 5 × 10 = 50.'],
    ['h', 'Objective m = 4, total m = 40. Eyepiece magnification?', ['10', '36', '160', '4'], 'me = 40 ÷ 4 = 10.']
  ]);

  /* ---------- 28. TELESCOPE ---------- */
  G('Optical Instruments', 'Telescope', [
    ['e', 'An astronomical telescope uses?', ['Two convex lenses', 'Two concave lenses', 'Only one lens', 'A convex and a concave'], 'A long-focus objective and a short-focus eyepiece.'],
    ['e', 'The objective lens of a telescope has a ... focal length.', ['Long', 'Short', 'Zero', 'Negative'], 'fo > fe, the opposite of a microscope.', {'Short': 'A telescope objective is LONG. A microscope objective is short.'}],
    ['e', 'Magnification formula for a telescope?', ['m = fo ÷ fe', 'm = fe ÷ fo', 'm = fo × fe', 'm = fo + fe'], 'Ratio of the two focal lengths.', {'m = fe ÷ fo': 'That is upside down.', 'm = fo × fe': 'It is a ratio, not a product.'}],
    ['e', 'Length of a telescope in normal adjustment?', ['fo + fe', 'fo − fe', 'fo × fe', 'fo ÷ fe'], 'The two focal points coincide inside the tube.', {'fo − fe': 'The two focal points coincide, so the lengths ADD.'}],
    ['m', 'The final image in an astronomical telescope is?', ['Virtual and inverted', 'Real and upright', 'Virtual and upright', 'Real and inverted'], 'This is why it is not used for land viewing.'],
    ['m', 'A larger objective diameter gives?', ['A brighter image', 'Higher magnification', 'A smaller image', 'A shorter telescope'], 'More light is collected from the object.', {'Higher magnification': 'Diameter controls BRIGHTNESS; focal lengths set magnification.'}],
    ['e', 'In a telescope, the object is effectively at?', ['Infinity', 'The focal point', 'Between F and 2F', 'At 2F'], 'Stars are so far away that rays arrive parallel.'],
    ['h', 'fo = 100 cm, fe = 5 cm. Magnification?', ['20', '500', '105', '0.05'], 'm = 100 ÷ 5 = 20.'],
    ['h', 'fo = 90 cm, fe = 6 cm. Length in normal adjustment?', ['96 cm', '84 cm', '15 cm', '540 cm'], 'Length = fo + fe = 90 + 6 = 96 cm.']
  ]);

})(window.PFR.Bank.form(4));
