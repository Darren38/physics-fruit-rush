/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  FORM 3 QUESTIONS (2 of 2)
   Radioactivity · Space Weather · Space Exploration
   Scheme of work weeks 7-12: atom and nucleus, isotopes, discovery and
   uses of radioactivity; activities of the Sun, planets and orbits;
   phases of the Moon, satellite technology (KSSM Sains Tingkatan 3,
   Bab 8-10).
   Format is documented in data/question-bank.js (first answer = correct).
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- ATOMS AND ISOTOPES ---------- */
  G('Radioactivity', 'Atoms and Isotopes', [
    ['e', 'The centre of an atom is called the?', ['Nucleus', 'Electron', 'Shell', 'Orbit'], 'The nucleus holds the protons and neutrons.'],
    ['e', 'Which particle has a NEGATIVE charge?', ['Electron', 'Proton', 'Neutron', 'Nucleus'], 'Electrons move around the nucleus and carry negative charge.', {'Proton': 'Protons are POSITIVE.'}],
    ['e', 'Which particle has NO charge?', ['Neutron', 'Proton', 'Electron', 'Ion'], 'Neutrons are neutral.'],
    ['e', 'Protons and neutrons are found in the?', ['Nucleus', 'Electron shells', 'Empty space', 'Outer orbit'], 'Almost all the mass of an atom is in the nucleus.'],
    ['m', 'Isotopes have the same number of protons but different numbers of?', ['Neutrons', 'Electrons', 'Protons', 'Nuclei'], 'Carbon-12 and carbon-14 differ only in their neutrons.'],
    ['m', 'The proton number of an atom is the number of?', ['Protons', 'Neutrons', 'Electrons and neutrons', 'Nucleons'], 'The proton number identifies the element.'],
    ['m', 'An unstable isotope that gives out radiation is a?', ['Radioisotope', 'Stable isotope', 'Molecule', 'Metal'], 'Radioisotopes decay and emit radiation.'],
    ['m', 'Carbon-14 is used by archaeologists to?', ['Find the age of remains', 'Make fuels', 'Kill germs', 'Make magnets'], 'Its steady decay dates material that was once alive.'],
    ['h', 'An atom has 6 protons and 8 neutrons. Its nucleon number?', ['14', '6', '8', '2'], 'Nucleon number = protons + neutrons = 6 + 8 = 14.', {'6': '6 is the proton number, not the nucleon number.'}],
    ['h', 'A neutral atom has 11 protons. How many electrons?', ['11', '22', '0', '12'], 'In a neutral atom, the number of electrons equals the protons.']
  ]);

  /* ---------- RADIATION AND ITS USES ---------- */
  G('Radioactivity', 'Radiation and Its Uses', [
    ['e', 'Radiation that can knock electrons out of atoms is called?', ['Ionising radiation', 'Sound waves', 'Visible light', 'Radio waves'], 'It creates ions, which can damage living cells.'],
    ['e', 'Radiation always around us from natural sources is?', ['Background radiation', 'Nuclear fusion', 'Solar power', 'Static electricity'], 'It comes from rocks, soil, space and even food.'],
    ['e', 'Who discovered the radioactive elements polonium and radium?', ['Marie Curie', 'Isaac Newton', 'Albert Einstein', 'Galileo Galilei'], 'She won two Nobel Prizes for her work.'],
    ['e', 'Which symbol warns of radioactive materials?', ['A trefoil (three blades)', 'A skull and crossbones', 'A red cross', 'A lightning bolt'], 'The yellow and black trefoil marks a radiation hazard.'],
    ['m', 'Smoke detectors contain a small source of?', ['Alpha radiation', 'Infrared only', 'Radio waves', 'Ultraviolet'], 'Smoke blocks the alpha particles and sets off the alarm.'],
    ['m', 'Hospitals use gamma rays to?', ['Kill cancer cells', 'Measure temperature', 'Warm patients', 'Test hearing'], 'Focused gamma rays destroy tumour cells.'],
    ['m', 'Which radiation is the MOST penetrating?', ['Gamma', 'Alpha', 'Beta', 'Infrared'], 'Gamma rays need thick lead or concrete to stop them.', {'Alpha': 'Alpha is stopped by a sheet of PAPER.'}],
    ['m', 'Alpha radiation can be stopped by?', ['A sheet of paper', 'Nothing at all', 'Only thick lead', 'Only concrete'], 'Alpha particles are large and slow.'],
    ['m', 'Workers with radioactive sources wear a badge to?', ['Measure their dose', 'Show their name', 'Stop all radiation', 'Keep warm'], 'The badge records how much radiation they received.'],
    ['m', 'Food can be exposed to gamma rays to?', ['Kill bacteria', 'Make it radioactive', 'Add vitamins', 'Change its colour'], 'Irradiation kills germs without making the food radioactive.', {'Make it radioactive': 'Irradiated food does NOT become radioactive.'}]
  ]);

  /* ---------- ACTIVITIES OF THE SUN ---------- */
  G('Space Weather', 'Activities of the Sun', [
    ['e', 'A stream of charged particles flowing out from the Sun is the?', ['Solar wind', 'Sea breeze', 'Monsoon', 'Jet stream'], 'The solar wind blows out through the whole Solar System.'],
    ['e', 'A sudden, bright burst of energy on the Sun is a?', ['Solar flare', 'Sunspot', 'Eclipse', 'Comet'], 'A flare releases huge energy in minutes.'],
    ['e', 'Dark, cooler patches on the Sun’s surface are?', ['Sunspots', 'Craters', 'Oceans', 'Clouds'], 'Strong magnetic fields there block some of the heat.'],
    ['m', 'A huge cloud of plasma blasted from the Sun is a?', ['Coronal mass ejection', 'Solar eclipse', 'Meteor shower', 'Lunar phase'], 'A CME can reach the Earth in one to three days.'],
    ['m', 'The colourful lights near the poles caused by solar particles are?', ['Auroras', 'Rainbows', 'Lightning', 'Mirages'], 'Solar particles make gases in the upper atmosphere glow.'],
    ['m', 'Strong solar storms can damage?', ['Satellites and power grids', 'Rain clouds', 'Ocean tides', 'Mountains'], 'Charged particles set up currents and upset electronics.'],
    ['m', 'Space weather describes conditions caused mainly by the?', ['Sun', 'Moon', 'Clouds', 'Oceans'], 'Solar activity drives the space weather around the Earth.'],
    ['m', 'The Sun’s activity rises and falls in a cycle of about?', ['11 years', '1 year', '100 years', '1 month'], 'The number of sunspots peaks roughly every 11 years.'],
    ['m', 'Which layer of the Sun do we see as its surface?', ['Photosphere', 'Core', 'Radiative zone', 'Solar wind'], 'The photosphere gives out most of the visible light.'],
    ['h', 'Why can solar storms disrupt GPS and radio signals?', ['They disturb the ionosphere', 'They block all sunlight', 'They cool the Earth', 'They create rain'], 'Charged particles change the upper atmosphere that signals pass through.']
  ]);

  /* ---------- PLANETS AND ORBITS ---------- */
  G('Space Weather', 'Planets and Orbits', [
    ['e', 'The path a planet takes around the Sun is its?', ['Orbit', 'Axis', 'Shadow', 'Crater'], 'Gravity holds each planet in its orbit.'],
    ['e', 'The time the Earth takes to orbit the Sun once is?', ['About 365 days', 'About 24 hours', 'About 30 days', 'About 7 days'], 'One orbit of the Sun is one year.', {'About 24 hours': '24 hours is one SPIN - a day, not a year.'}],
    ['e', 'The force that keeps the planets in orbit is?', ['Gravity', 'Magnetism', 'Friction', 'Wind'], 'The Sun’s gravity pulls on every planet.'],
    ['m', 'Planets further from the Sun take ... to orbit it.', ['Longer', 'Shorter', 'The same time', 'No time'], 'They travel further and move more slowly.'],
    ['m', 'The orbits of the planets are shaped like slightly?', ['Stretched circles (ellipses)', 'Perfect squares', 'Straight lines', 'Zigzags'], 'Planetary orbits are ellipses that are close to circles.'],
    ['m', 'Which planet takes the LONGEST to orbit the Sun?', ['Neptune', 'Mercury', 'Earth', 'Mars'], 'Neptune is the planet furthest from the Sun.'],
    ['m', 'A natural object that orbits a planet is a?', ['Moon', 'Star', 'Comet', 'Galaxy'], 'The Moon is the Earth’s natural satellite.'],
    ['m', 'Inner planets such as Earth and Mars are mainly made of?', ['Rock', 'Gas', 'Ice only', 'Metal only'], 'The inner planets are small and rocky; the outer ones are gas giants.'],
    ['m', 'The Earth’s tilted axis causes?', ['The seasons', 'Day and night', 'The tides', 'Eclipses'], 'The tilt changes how directly sunlight hits each place.', {'Day and night': 'Day and night come from the Earth’s SPIN.'}],
    ['h', 'A planet orbits the Sun in 2 years. Compared with Earth, it is?', ['Further from the Sun', 'Closer to the Sun', 'At the same distance', 'Inside the Sun'], 'A longer orbit time means a larger orbit.']
  ]);

  /* ---------- PHASES OF THE MOON ---------- */
  G('Space Exploration', 'Phases of the Moon', [
    ['e', 'The Moon shines because it?', ['Reflects sunlight', 'Makes its own light', 'Is on fire', 'Reflects city lights'], 'The Moon has no light of its own.', {'Makes its own light': 'The Moon is not a star - it only reflects sunlight.'}],
    ['e', 'When the whole lit face of the Moon is seen, it is a?', ['Full moon', 'New moon', 'Crescent moon', 'Half moon'], 'The Sun lights the whole side of the Moon that faces us.'],
    ['e', 'When the Moon cannot be seen at all, it is a?', ['New moon', 'Full moon', 'Gibbous moon', 'Half moon'], 'Its lit side faces away from the Earth.'],
    ['e', 'A thin curved sliver of the Moon is a?', ['Crescent', 'Full moon', 'Gibbous', 'New moon'], 'Only a small part of the lit side faces us.'],
    ['m', 'A complete cycle of Moon phases takes about?', ['29.5 days', '7 days', '365 days', '24 hours'], 'A lunar month is about 29.5 days - the basis of the Hijri calendar.'],
    ['m', 'When the lit part of the Moon grows each night, it is?', ['Waxing', 'Waning', 'Eclipsing', 'Setting'], 'Waxing means the visible part is getting bigger.'],
    ['m', 'When the lit part of the Moon shrinks each night, it is?', ['Waning', 'Waxing', 'Rising', 'Orbiting'], 'Waning means the visible part is getting smaller.'],
    ['m', 'We always see the same side of the Moon because it?', ['Spins once per orbit', 'Does not spin', 'Is flat', 'Is very close'], 'It turns once on its axis for each orbit of the Earth.', {'Does not spin': 'It DOES spin - exactly once per orbit.'}],
    ['m', 'The phases of the Moon are caused by?', ['Its position around Earth', 'Earth’s shadow on it', 'Clouds covering it', 'Its changing size'], 'We see different amounts of its sunlit half as it orbits.', {'Earth’s shadow on it': 'The Earth’s shadow causes an ECLIPSE, not the phases.'}],
    ['h', 'Why is the sky black on the Moon even in the daytime?', ['There is no atmosphere', 'The Sun is dimmer there', 'It is always night', 'The ground is dark'], 'With no air to scatter sunlight, the sky stays black.']
  ]);

  /* ---------- SATELLITES ---------- */
  G('Space Exploration', 'Satellites', [
    ['e', 'An artificial object placed in orbit around the Earth is a?', ['Satellite', 'Meteor', 'Comet', 'Planet'], 'Satellites are launched on rockets into orbit.'],
    ['e', 'Satellites help us with?', ['Weather, TV and navigation', 'Growing rice faster', 'Making rain', 'Stopping earthquakes'], 'Satellites observe the Earth, relay signals and give our position.'],
    ['e', 'GPS in a phone uses signals from?', ['Satellites', 'Radio towers only', 'The Moon', 'Street lights'], 'Several satellites work out your exact position.'],
    ['m', 'A satellite that stays above the same place on Earth is?', ['Geostationary', 'Polar', 'Falling', 'Lunar'], 'It orbits once every 24 hours, matching the Earth’s spin.'],
    ['m', 'Malaysia’s own communication satellites are called?', ['MEASAT', 'Hubble', 'Voyager', 'Apollo'], 'MEASAT satellites carry TV and internet signals for Malaysia.'],
    ['m', 'Satellites stay in orbit because of?', ['Gravity and their speed', 'Engines always firing', 'Magnets on Earth', 'Air holding them up'], 'They move fast enough to keep falling around the Earth.'],
    ['m', 'Satellites that watch forests and floods are used for?', ['Remote sensing', 'Mining gold', 'Launching rockets', 'Making maps of Mars'], 'They photograph the Earth to monitor changes.'],
    ['m', 'Old satellites and rocket parts left in orbit are called?', ['Space debris', 'Stardust', 'Meteorites', 'Comets'], 'Space debris can crash into working satellites.'],
    ['m', 'The International Space Station is a?', ['Crewed satellite', 'Planet', 'Star', 'Moon'], 'Astronauts live and work on it as it orbits the Earth.'],
    ['h', 'Why are rockets launched from near the equator when possible?', ['Earth’s spin adds speed', 'Gravity is stronger there', 'The sky is clearer there', 'It is warmer there'], 'The Earth spins fastest at the equator, giving rockets a boost.', {'Gravity is stronger there': 'Gravity is slightly WEAKER at the equator, if anything.'}]
  ]);

})(window.PFR.Bank.form(3));
