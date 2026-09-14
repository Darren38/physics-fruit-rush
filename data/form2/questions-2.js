/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  FORM 2 QUESTIONS (2 of 2)
   Heat · Sound Waves · Space
   Scheme of work weeks 33-39: introduction to heat, conduction,
   convection and radiation; sound waves and their uses; stars and
   galaxies, the Solar System, space technology (KSSM Sains Tingkatan 2,
   Bab 9-13).
   Format is documented in data/question-bank.js (first answer = correct).
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- HEAT AND TEMPERATURE ---------- */
  G('Heat', 'Heat and Temperature', [
    ['e', 'Heat is a form of?', ['Energy', 'Force', 'Matter', 'Pressure'], 'Heat is energy that flows because of a temperature difference.'],
    ['e', 'Temperature tells us how?', ['Hot or cold something is', 'Heavy something is', 'Big something is', 'Fast something moves'], 'Temperature is the degree of hotness, in °C or K.'],
    ['e', 'The SI unit of heat energy is the?', ['joule', 'degree Celsius', 'kelvin', 'watt'], 'Heat is energy, so it is measured in joules (J).', {'degree Celsius': 'Degrees Celsius measure temperature, not heat.'}],
    ['e', 'The SI unit of temperature is the?', ['kelvin', 'joule', 'newton', 'watt'], 'Temperature is measured in kelvin (K) or °C.'],
    ['e', 'A thermometer measures?', ['Temperature', 'Heat energy', 'Mass', 'Pressure'], 'A thermometer shows how hot something is.', {'Heat energy': 'A thermometer shows temperature, not the amount of heat.'}],
    ['e', 'Heat always flows from a?', ['Hotter to a colder object', 'Colder to a hotter object', 'Bigger to a smaller object', 'Heavier to a lighter object'], 'Heat flows until both reach the same temperature.'],
    ['m', 'Two objects at the SAME temperature are in?', ['Thermal equilibrium', 'Motion', 'Expansion', 'Radiation'], 'No net heat flows between them.'],
    ['m', 'A hot drink left on a table will?', ['Cool to room temperature', 'Stay hot forever', 'Get hotter', 'Freeze'], 'Heat flows out until it matches its surroundings.'],
    ['m', 'Heating a substance makes its particles?', ['Move faster', 'Move slower', 'Stop moving', 'Get smaller'], 'More heat means more kinetic energy.'],
    ['h', 'A big pot of warm water or a cup of boiling water: more heat energy?', ['The big pot', 'The cup', 'Both equal', 'Neither'], 'Heat energy depends on mass too, not only on temperature.', {'The cup': 'The cup is hotter, but the pot holds far more energy.'}]
  ]);

  /* ---------- CONDUCTION, CONVECTION AND RADIATION ---------- */
  G('Heat', 'Heat Transfer', [
    ['e', 'Heat transfer through a solid is called?', ['Conduction', 'Convection', 'Radiation', 'Evaporation'], 'Vibrating particles pass heat along the solid.'],
    ['e', 'Heat transfer by moving liquids or gases is?', ['Convection', 'Conduction', 'Radiation', 'Reflection'], 'Warm fluid rises and cool fluid sinks.'],
    ['e', 'Heat from the Sun reaches the Earth by?', ['Radiation', 'Conduction', 'Convection', 'Evaporation'], 'Radiation needs no medium - it crosses empty space.', {'Convection': 'Space has no air, so convection cannot happen there.'}],
    ['e', 'Which is the BEST conductor of heat?', ['Metal spoon', 'Wooden spoon', 'Plastic spoon', 'Rubber spoon'], 'Metals conduct heat well.'],
    ['m', 'Why do pots have wooden or plastic handles?', ['They are poor conductors', 'They are heavy', 'They look nice', 'They melt easily'], 'Insulating handles stay cool enough to hold.'],
    ['m', 'A sea breeze during the day is caused by?', ['Convection', 'Conduction', 'Reflection', 'Magnetism'], 'Warm air over the land rises; cooler sea air moves in.'],
    ['m', 'Which surface is the BEST absorber of radiation?', ['Dull black', 'Shiny white', 'Shiny silver', 'Smooth white'], 'Dark, dull surfaces absorb and give out radiation well.'],
    ['m', 'Why are houses in hot countries often painted white?', ['White reflects heat', 'White absorbs heat', 'White is cheaper', 'White conducts heat'], 'Light, shiny colours reflect radiation.', {'White absorbs heat': 'White REFLECTS heat; black absorbs it.'}],
    ['m', 'Where is a room heater best placed?', ['Low down', 'Near the ceiling', 'Outside the room', 'Inside a cupboard'], 'Warm air rises and spreads through the room by convection.'],
    ['m', 'A vacuum flask keeps drinks hot by reducing?', ['All heat transfer', 'Only radiation', 'Only light', 'Its own weight'], 'The vacuum stops conduction and convection; the silvering stops radiation.'],
    ['h', 'Why does a metal chair feel colder than a wooden chair in the same room?', ['Metal conducts heat faster', 'Metal is colder', 'Wood makes heat', 'Metal has no heat'], 'Both are at room temperature; metal draws heat from your skin faster.', {'Metal is colder': 'Both are at the SAME temperature - metal just conducts better.'}]
  ]);

  /* ---------- SOUND WAVES ---------- */
  G('Sound Waves', 'Sound Waves', [
    ['e', 'Sound is produced by?', ['Vibrating objects', 'Light rays', 'Magnets', 'Heat'], 'A vibrating object makes the air vibrate.'],
    ['e', 'Sound cannot travel through?', ['A vacuum', 'Air', 'Water', 'Steel'], 'Sound needs particles to pass the vibration on.', {'Steel': 'Sound travels FASTER in steel than in air.'}],
    ['e', 'Sound travels FASTEST through?', ['Solids', 'Liquids', 'Gases', 'A vacuum'], 'The particles in solids are closest together.'],
    ['e', 'Sound waves are?', ['Longitudinal', 'Transverse', 'Electromagnetic', 'Invisible light'], 'Air particles vibrate along the direction of travel.'],
    ['m', 'The loudness of a sound depends on its?', ['Amplitude', 'Frequency', 'Colour', 'Speed'], 'A bigger amplitude gives a louder sound.', {'Frequency': 'Frequency sets the PITCH, not the loudness.'}],
    ['m', 'The pitch of a sound depends on its?', ['Frequency', 'Amplitude', 'Loudness', 'Speed'], 'A higher frequency gives a higher pitch.'],
    ['m', 'The unit of frequency is the?', ['hertz', 'decibel', 'metre', 'second'], '1 Hz = one vibration per second.', {'decibel': 'The decibel measures loudness.'}],
    ['m', 'An echo is a sound that has been?', ['Reflected', 'Absorbed', 'Refracted', 'Made louder'], 'Sound bounces off a hard surface and returns.'],
    ['m', 'Humans can hear frequencies from about?', ['20 Hz to 20 000 Hz', '0 Hz to 20 Hz', '1 Hz to 100 Hz', '1 MHz to 5 MHz'], 'Sound above 20 000 Hz is ultrasound.'],
    ['h', 'You see lightning, then hear thunder 3 s later. Why the delay?', ['Light travels faster', 'Sound travels faster', 'Thunder is made later', 'The eye is faster'], 'Light arrives almost at once; sound covers about 340 m each second.', {'Sound travels faster': 'Light is about a million times faster than sound.'}]
  ]);

  /* ---------- USES OF SOUND ---------- */
  G('Sound Waves', 'Uses of Sound', [
    ['e', 'Sound above 20 000 Hz is called?', ['Ultrasound', 'Infrasound', 'Echo', 'Noise'], 'It is too high-pitched for humans to hear.'],
    ['e', 'Bats find their prey using?', ['Echolocation', 'Magnetism', 'Infrared', 'Smell only'], 'They listen for echoes of their own high-pitched calls.'],
    ['e', 'Doctors use ultrasound to see?', ['A baby in the womb', 'Broken bones clearly', 'Stars at night', 'Radio stations'], 'Ultrasound echoes build up an image safely.', {'Broken bones clearly': 'Broken bones are seen with X-rays.'}],
    ['e', 'Ships measure the depth of the sea using?', ['Sonar', 'Radar', 'A compass', 'A thermometer'], 'Sonar times the echo from the sea bed.', {'Radar': 'Radar uses radio waves, not sound.'}],
    ['m', 'Dolphins use echolocation to?', ['Find food and objects', 'Keep warm', 'Breathe underwater', 'See colours'], 'Returning echoes tell them where things are.'],
    ['m', 'Ultrasound is used to clean?', ['Jewellery and lenses', 'Muddy roads', 'Clothes by hand', 'Car tyres'], 'The vibrations shake dirt off delicate objects.'],
    ['m', 'Soft furnishings in a cinema are used to?', ['Absorb sound', 'Reflect sound', 'Make echoes', 'Amplify sound'], 'Soft, rough materials reduce echoes.'],
    ['m', 'Why do people wear ear protectors near loud machines?', ['To protect hearing', 'To hear better', 'To keep warm', 'To look safe'], 'Very loud sounds can damage the ear.'],
    ['m', 'Infrasound is sound BELOW about?', ['20 Hz', '200 Hz', '2000 Hz', '20 000 Hz'], 'Elephants can communicate using infrasound.'],
    ['h', 'Sonar echo returns after 2 s. Sound travels at 1500 m/s in water. Depth?', ['1500 m', '3000 m', '750 m', '6000 m'], 'Depth = (1500 × 2) ÷ 2 = 1500 m, because the sound goes there and back.', {'3000 m': 'The sound goes down AND back up, so halve the distance.'}]
  ]);

  /* ---------- STARS AND GALAXIES ---------- */
  G('Space', 'Stars and Galaxies', [
    ['e', 'The Sun is a?', ['Star', 'Planet', 'Moon', 'Comet'], 'The Sun is the nearest star to the Earth.'],
    ['e', 'Our galaxy is called the?', ['Milky Way', 'Andromeda', 'Solar System', 'Orion'], 'The Milky Way contains billions of stars.', {'Solar System': 'The Solar System is the Sun and its planets - a tiny part.'}],
    ['e', 'A cloud of gas and dust where stars are born is a?', ['Nebula', 'Comet', 'Black hole', 'Planet'], 'Gravity pulls the gas together into new stars.'],
    ['e', 'The Milky Way galaxy has the shape of a?', ['Spiral', 'Cube', 'Straight line', 'Triangle'], 'We see it edge-on as a band of stars across the sky.'],
    ['m', 'Stars produce light and heat by?', ['Nuclear fusion', 'Burning coal', 'Reflecting light', 'Electricity'], 'Hydrogen nuclei fuse into helium, releasing energy.'],
    ['m', 'The colour of a star tells us its?', ['Surface temperature', 'Exact age', 'Distance', 'Mass only'], 'Blue stars are the hottest; red stars are cooler.'],
    ['m', 'Which star is the HOTTEST?', ['A blue star', 'A red star', 'An orange star', 'A yellow star'], 'Blue stars have the hottest surfaces.'],
    ['m', 'A group of stars forming a pattern in the sky is a?', ['Constellation', 'Galaxy', 'Nebula', 'Orbit'], 'Examples include Orion and the Southern Cross.'],
    ['m', 'A very massive star may end its life as a?', ['Black hole', 'Planet', 'Comet', 'Moon'], 'Its core collapses so strongly that not even light escapes.'],
    ['m', 'A light-year is a unit of?', ['Distance', 'Time', 'Speed', 'Brightness'], 'It is the distance light travels in one year.', {'Time': 'Despite the name, a light-year measures DISTANCE.'}]
  ]);

  /* ---------- SOLAR SYSTEM ---------- */
  G('Space', 'Solar System', [
    ['e', 'The planet closest to the Sun is?', ['Mercury', 'Venus', 'Earth', 'Mars'], 'Mercury is the smallest and innermost planet.'],
    ['e', 'The largest planet in the Solar System is?', ['Jupiter', 'Saturn', 'Earth', 'Neptune'], 'Jupiter is more than 11 times wider than the Earth.'],
    ['e', 'Which planet is known as the Red Planet?', ['Mars', 'Venus', 'Jupiter', 'Mercury'], 'Iron oxide dust gives Mars its red colour.'],
    ['e', 'How many planets orbit the Sun?', ['Eight', 'Nine', 'Seven', 'Ten'], 'Pluto was reclassified as a dwarf planet in 2006.'],
    ['m', 'The planets move around the Sun in paths called?', ['Orbits', 'Axes', 'Galaxies', 'Craters'], 'Gravity keeps each planet in its orbit.'],
    ['m', 'The HOTTEST planet is?', ['Venus', 'Mercury', 'Mars', 'Earth'], 'Its thick carbon dioxide atmosphere traps heat.', {'Mercury': 'Mercury is closer, but Venus traps far more heat.'}],
    ['m', 'Which planet has the most famous rings?', ['Saturn', 'Mars', 'Mercury', 'Venus'], 'Its rings are made of ice and rock.'],
    ['m', 'Day and night happen because the Earth is?', ['Spinning on its axis', 'Orbiting the Sun', 'Orbiting the Moon', 'Moving closer to the Sun'], 'One spin takes about 24 hours.', {'Orbiting the Sun': 'One orbit of the Sun takes a YEAR, not a day.'}],
    ['m', 'Most asteroids are found between Mars and?', ['Jupiter', 'Earth', 'Venus', 'Saturn'], 'This region is called the asteroid belt.'],
    ['m', 'A comet has a glowing tail when it is?', ['Close to the Sun', 'Far from the Sun', 'Behind a planet', 'Inside a moon'], 'The Sun heats its ice, which streams away as a tail.']
  ]);

  /* ---------- SPACE TECHNOLOGY ---------- */
  G('Space', 'Space Technology', [
    ['e', 'A vehicle that carries astronauts or satellites into space is a?', ['Rocket', 'Submarine', 'Train', 'Glider'], 'Rockets push hot gases down in order to move up.'],
    ['e', 'An uncrewed spacecraft sent to explore other planets is a?', ['Space probe', 'Space station', 'Hot-air balloon', 'Telescope'], 'Probes such as Voyager send data back to Earth.'],
    ['e', 'Which instrument helps us see distant stars?', ['Telescope', 'Microscope', 'Periscope', 'Stethoscope'], 'A telescope collects and focuses light from far away.'],
    ['m', 'A rocket moves forward because hot gas is pushed?', ['Backwards', 'Forwards', 'Sideways', 'Into the fuel'], 'Pushing gas one way pushes the rocket the other way.'],
    ['m', 'Astronauts float in a space station because they are?', ['In free fall around Earth', 'Too far for gravity', 'Lighter than air', 'Held by magnets'], 'Gravity still acts; they fall around the Earth with the station.', {'Too far for gravity': 'Gravity is still about 90% as strong up there.'}],
    ['m', 'The first person to walk on the Moon was?', ['Neil Armstrong', 'Yuri Gagarin', 'Isaac Newton', 'Galileo Galilei'], 'He stepped onto the Moon in 1969.', {'Yuri Gagarin': 'Gagarin was the first person in SPACE, in 1961.'}],
    ['m', 'The first Malaysian astronaut, who flew in 2007, was?', ['Sheikh Muszaphar Shukor', 'Neil Armstrong', 'Yuri Gagarin', 'Buzz Aldrin'], 'He flew to the International Space Station in 2007.'],
    ['m', 'Space telescopes are placed above the atmosphere to?', ['Get clearer images', 'Be closer to stars', 'Stay warm', 'Save fuel'], 'The atmosphere blurs and blocks some of the light.', {'Be closer to stars': 'The distance saved is tiny - the gain is clear, unblurred light.'}],
    ['m', 'Which space technology gives us weather forecasts?', ['Weather satellites', 'Space probes to Mars', 'Moon rovers', 'Telescopes'], 'Satellites photograph clouds and storms from orbit.'],
    ['h', 'Rockets must reach a very high speed to?', ['Escape Earth’s gravity', 'Avoid clouds', 'Stay cool', 'Save oxygen'], 'Too slow, and gravity pulls them back down.']
  ]);

})(window.PFR.Bank.form(2));
