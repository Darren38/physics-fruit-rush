/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  FORM 1 QUESTIONS (2 of 2)
   Light and Optics · Earth
   Scheme of work weeks 20-25: addition and subtraction of light,
   dispersion, mirrors; structure of the Earth, geohazards, age of the
   Earth and its resources (KSSM Sains Tingkatan 1, Bab 8 and 9).
   Format is documented in data/question-bank.js (first answer = correct).
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- COLOURS OF LIGHT ---------- */
  G('Light and Optics', 'Colours of Light', [
    ['e', 'The three primary colours of light are red, green and?', ['Blue', 'Yellow', 'Purple', 'Orange'], 'Red, green and blue light can make every other colour.', {'Yellow': 'Yellow is a primary colour of PAINT, not of light.'}],
    ['e', 'Red light + green light gives?', ['Yellow', 'Blue', 'White', 'Brown'], 'Red and green light add together to make yellow.', {'Brown': 'Mixing PAINTS can give brown; mixing lights gives yellow.'}],
    ['e', 'Red, green and blue light together give?', ['White', 'Black', 'Brown', 'Grey'], 'All three primary colours add up to white light.'],
    ['e', 'An object that does not let light through is?', ['Opaque', 'Transparent', 'Translucent', 'Shiny'], 'Opaque objects block light and form shadows.'],
    ['m', 'Red light + blue light gives?', ['Magenta', 'Cyan', 'Yellow', 'Green'], 'Red and blue light add together to make magenta.'],
    ['m', 'Green light + blue light gives?', ['Cyan', 'Magenta', 'Yellow', 'Red'], 'Green and blue light add together to make cyan.'],
    ['m', 'A red shirt looks red because it?', ['Reflects red light', 'Absorbs red light', 'Makes red light', 'Bends red light'], 'It absorbs the other colours and reflects red.', {'Absorbs red light': 'It reflects red - that is the colour that reaches your eye.'}],
    ['m', 'A red filter lets through only?', ['Red light', 'Blue light', 'White light', 'Green light'], 'A filter passes its own colour and absorbs the rest.'],
    ['m', 'A TV screen makes all its colours from?', ['Red, green and blue', 'Red, yellow and blue', 'Black and white', 'Orange and purple'], 'Tiny red, green and blue dots add together.'],
    ['h', 'A red apple under pure blue light looks?', ['Black', 'Red', 'Blue', 'Purple'], 'There is no red light for it to reflect, so it looks black.'],
    ['h', 'White light through a red filter, then a blue filter, gives?', ['No light', 'Magenta light', 'White light', 'Red light'], 'The red filter passes only red; the blue filter blocks red.']
  ]);

  /* ---------- DISPERSION OF LIGHT ---------- */
  G('Light and Optics', 'Dispersion of Light', [
    ['e', 'Splitting white light into its colours is called?', ['Dispersion', 'Reflection', 'Absorption', 'Condensation'], 'A prism disperses white light into a spectrum.'],
    ['e', 'Which object splits white light into a spectrum?', ['A prism', 'A plane mirror', 'A sheet of paper', 'A metal spoon'], 'Each colour bends by a different amount in the glass.'],
    ['e', 'How many colours are usually named in the spectrum?', ['Seven', 'Three', 'Five', 'Ten'], 'Red, orange, yellow, green, blue, indigo and violet.'],
    ['e', 'A rainbow forms when sunlight passes through?', ['Raindrops', 'Clouds of dust', 'Tree leaves', 'Smoke'], 'Each raindrop acts like a tiny prism.'],
    ['m', 'Which colour bends the MOST in a prism?', ['Violet', 'Red', 'Green', 'Yellow'], 'Violet is bent the most and red the least.', {'Red': 'Red bends the LEAST - it sits at the top of the spectrum.'}],
    ['m', 'Which colour bends the LEAST in a prism?', ['Red', 'Violet', 'Blue', 'Indigo'], 'Red light is bent the least by a prism.'],
    ['m', 'The colours on the back of a CD come from light being?', ['Split into colours', 'Absorbed by the CD', 'Made by the CD', 'Turned into heat'], 'The fine tracks on a CD split white light.'],
    ['m', 'A diamond sparkles with colours because it?', ['Disperses light strongly', 'Glows in the dark', 'Absorbs all light', 'Is coloured inside'], 'It bends each colour by a different amount.'],
    ['m', 'The colour between green and indigo in the spectrum is?', ['Blue', 'Yellow', 'Orange', 'Violet'], 'The order is red, orange, yellow, green, blue, indigo, violet.'],
    ['m', 'The rainbow colours on a thin film of oil are due to?', ['Light splitting into colours', 'Oil being coloured', 'Water turning to gas', 'Heat from the oil'], 'A thin film splits white light into colours.']
  ]);

  /* ---------- MIRRORS ---------- */
  G('Light and Optics', 'Mirrors', [
    ['e', 'A mirror works by?', ['Reflecting light', 'Absorbing light', 'Making light', 'Splitting light'], 'Light bounces off the smooth, shiny surface.'],
    ['e', 'The image in a plane mirror is?', ['Upright and same size', 'Upside down', 'Much bigger', 'Much smaller'], 'A plane mirror gives an upright, same-size image.'],
    ['e', 'Words look reversed in a mirror. This is called?', ['Lateral inversion', 'Refraction', 'Dispersion', 'Diffraction'], 'Left and right appear swapped in a mirror.'],
    ['e', 'A mirror reflects well because its surface is?', ['Smooth and shiny', 'Rough and dark', 'Soft and dull', 'Wet and cold'], 'Smooth, shiny surfaces reflect light regularly.'],
    ['m', 'The angle of incidence equals the angle of?', ['Reflection', 'Refraction', 'Dispersion', 'Absorption'], 'This is the law of reflection: i = r.'],
    ['m', 'Why is AMBULANCE written backwards on the front of an ambulance?', ['So it reads right in mirrors', 'To look more modern', 'It is a spelling error', 'To save paint'], 'Drivers ahead see it the right way round in their mirrors.'],
    ['m', 'Which mirror gives a car driver a wide view?', ['Convex mirror', 'Concave mirror', 'Plane mirror', 'Broken mirror'], 'A convex mirror shows a wider field of view.'],
    ['m', 'A dentist uses which mirror to see a magnified tooth?', ['Concave mirror', 'Convex mirror', 'Plane mirror', 'Glass prism'], 'Close up, a concave mirror gives a magnified image.'],
    ['m', 'A periscope uses two mirrors to?', ['See over obstacles', 'Magnify stars', 'Split light', 'Store light'], 'The mirrors reflect light around a corner.'],
    ['h', 'A ray hits a mirror at 40° to the normal. Angle of reflection?', ['40°', '50°', '80°', '90°'], 'Angle of reflection = angle of incidence = 40°.', {'50°': '50° is from the surface; both angles use the normal.'}]
  ]);

  /* ---------- STRUCTURE OF THE EARTH ---------- */
  G('Earth', 'Structure of the Earth', [
    ['e', 'The outermost layer of the Earth is the?', ['Crust', 'Mantle', 'Outer core', 'Inner core'], 'The thin rocky crust is where we live.'],
    ['e', 'The layer between the crust and the core is the?', ['Mantle', 'Crust', 'Atmosphere', 'Ocean'], 'The mantle is hot rock that can slowly flow.'],
    ['e', 'The centre of the Earth is the?', ['Inner core', 'Mantle', 'Crust', 'Outer core'], 'The inner core is solid iron and nickel.'],
    ['m', 'Which layer of the Earth is liquid metal?', ['Outer core', 'Inner core', 'Crust', 'Upper mantle'], 'The outer core is molten iron and nickel.'],
    ['m', 'The Earth’s core is made mostly of?', ['Iron and nickel', 'Sand and clay', 'Water and ice', 'Gold and silver'], 'Dense metals sank to the centre long ago.'],
    ['m', 'Which layer of the Earth is the THINNEST?', ['Crust', 'Mantle', 'Outer core', 'Inner core'], 'The crust is only about 5 to 70 km thick.'],
    ['m', 'Deeper inside the Earth, the temperature?', ['Increases', 'Decreases', 'Stays the same', 'Drops to zero'], 'The core is thousands of degrees hot.'],
    ['m', 'Hot rock moving slowly in the mantle forms?', ['Convection currents', 'Ocean tides', 'Strong winds', 'Echoes'], 'Heated rock rises, cools and sinks in a slow cycle.'],
    ['m', 'The crust is broken into large pieces called?', ['Tectonic plates', 'Mountains', 'Magma pools', 'Ocean beds'], 'The plates move slowly over the mantle.'],
    ['h', 'Why is the core the densest layer?', ['Heavy metals sank there', 'It is the coldest', 'It is full of water', 'It has the most air'], 'Dense iron and nickel sank to the centre.']
  ]);

  /* ---------- GEOHAZARDS ---------- */
  G('Earth', 'Geohazards', [
    ['e', 'A sudden shaking of the ground is?', ['An earthquake', 'A tsunami', 'A landslide', 'A flood'], 'Rocks slip along a fault and send out waves.'],
    ['e', 'Giant sea waves caused by an undersea earthquake are?', ['Tsunamis', 'Tides', 'Monsoons', 'Ripples'], 'The sea floor moves and pushes up huge waves.'],
    ['e', 'Molten rock that erupts from a volcano is called?', ['Lava', 'Magma', 'Ash', 'Crust'], 'Magma is called lava once it reaches the surface.', {'Magma': 'Magma is molten rock that is still UNDERGROUND.'}],
    ['e', 'Soil and rock sliding down a slope after heavy rain is a?', ['Landslide', 'Tsunami', 'Earthquake', 'Eruption'], 'Rain makes the slope heavy and slippery.'],
    ['m', 'Most earthquakes happen near the edges of?', ['Tectonic plates', 'Rivers', 'Cities', 'Deserts'], 'Plates grind, pull apart or collide at their edges.'],
    ['m', 'An instrument that records earthquakes is a?', ['Seismograph', 'Barometer', 'Thermometer', 'Telescope'], 'It records the shaking as a wavy line.'],
    ['m', 'During an earthquake indoors, you should?', ['Drop, cover and hold on', 'Run outside at once', 'Stand by a window', 'Use the lift'], 'Protect your head under a sturdy table.'],
    ['m', 'A tsunami warning means you should move?', ['To higher ground', 'To the beach', 'Into a basement', 'Near the river'], 'Tsunami waves flood low coastal land.'],
    ['m', 'Which country lies on the Pacific Ring of Fire?', ['Indonesia', 'Egypt', 'Brazil', 'Saudi Arabia'], 'Many volcanoes and earthquakes circle the Pacific Ocean.'],
    ['h', 'Why is Sabah more at risk of earthquakes than Penang?', ['It is near plate boundaries', 'It has more rain', 'It has taller buildings', 'It has more rivers'], 'Sabah is near active plate edges; the 2015 Ranau earthquake shook Mount Kinabalu.']
  ]);

  /* ---------- AGE AND RESOURCES OF THE EARTH ---------- */
  G('Earth', 'Age and Resources of the Earth', [
    ['e', 'The remains of ancient living things preserved in rock are?', ['Fossils', 'Minerals', 'Crystals', 'Magma'], 'Fossils show what lived long ago.'],
    ['e', 'Petroleum and natural gas are examples of?', ['Fossil fuels', 'Renewable energy', 'Metals', 'Soil'], 'They formed from ancient plants and animals.'],
    ['e', 'Which is a mineral resource from the Earth?', ['Tin ore', 'Rain water', 'Sunlight', 'Wind'], 'Malaysia was once one of the world’s top tin producers.'],
    ['e', 'Coal is formed mainly from ancient?', ['Plants', 'Rocks', 'Metals', 'Ice'], 'Buried plant remains were squeezed into coal.'],
    ['m', 'The Earth is about how old?', ['4.6 billion years', '6000 years', '1 million years', '100 billion years'], 'Rocks and meteorites date the Earth to about 4.6 billion years.'],
    ['m', 'Deeper rock layers are usually?', ['Older', 'Younger', 'The same age', 'Softer'], 'New layers settle on top of older ones.'],
    ['m', 'Scientists find the age of old rocks using?', ['Radioactive dating', 'Their colour', 'Their weight', 'Their smell'], 'Radioactive elements decay at a steady rate.'],
    ['m', 'Fossil fuels are non-renewable because they?', ['Take millions of years', 'Are found underground', 'Are liquid', 'Burn too slowly'], 'We use them far faster than they can form.'],
    ['m', 'Burning fossil fuels releases the gas?', ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium'], 'Carbon dioxide traps heat and warms the planet.'],
    ['m', 'Why should we recycle metals like aluminium?', ['Ores are limited', 'Metals are heavy', 'Metals are too cheap', 'Metals rot quickly'], 'Metal ores are non-renewable resources.']
  ]);

})(window.PFR.Bank.form(1));
