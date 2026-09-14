/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  FORM 3 QUESTIONS (1 of 2)
   Electricity and Magnetism · Energy and Power
   Scheme of work weeks 1-5: electrical energy from renewable sources,
   magnetic field lines; energy stores, work, conservation of energy
   and energy transfer (KSSM Sains Tingkatan 3, Bab 6 and 7).
   Format is documented in data/question-bank.js (first answer = correct).
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- RENEWABLE ENERGY ---------- */
  G('Electricity and Magnetism', 'Renewable Energy', [
    ['e', 'Which is a RENEWABLE energy source?', ['Solar', 'Coal', 'Natural gas', 'Petroleum'], 'Sunlight will not run out on any human timescale.', {'Natural gas': 'Natural gas is a fossil fuel - it will run out.'}],
    ['e', 'Solar panels change sunlight into?', ['Electrical energy', 'Chemical energy', 'Sound energy', 'Nuclear energy'], 'Solar cells turn light directly into electricity.'],
    ['e', 'A wind turbine uses the energy of moving air, which is?', ['Kinetic energy', 'Chemical energy', 'Nuclear energy', 'Elastic energy'], 'The moving air turns the blades and a generator.'],
    ['e', 'A hydroelectric dam uses the energy of?', ['Falling water', 'Burning wood', 'Hot rocks', 'Ocean salt'], 'Water from high up turns turbines as it falls.'],
    ['m', 'Which is a DISADVANTAGE of solar power?', ['No power at night', 'It pollutes the air', 'It will run out', 'It is radioactive'], 'Panels need sunlight, so output drops at night and on cloudy days.'],
    ['m', 'Which is a disadvantage of wind power?', ['Wind is not always blowing', 'It releases carbon dioxide', 'The fuel runs out', 'It needs coal'], 'Turbines only turn when the wind blows.'],
    ['m', 'Malaysia’s largest hydroelectric dam is in?', ['Sarawak (Bakun)', 'Melaka', 'Perlis', 'Penang'], 'The Bakun dam on the Balui River can produce 2400 MW.'],
    ['m', 'Renewable energy sources are better for the environment because they?', ['Produce little pollution', 'Are always cheaper', 'Never need machines', 'Work only in the day'], 'They burn no fuel, so they release little carbon dioxide.'],
    ['m', 'Energy from heat deep inside the Earth is?', ['Geothermal energy', 'Tidal energy', 'Solar energy', 'Wind energy'], 'Hot rocks heat water into steam to drive turbines.'],
    ['h', 'Why do we still use fossil fuels alongside renewables?', ['They supply steady power', 'They are renewable', 'They are pollution-free', 'They never run out'], 'Power stations can burn fuel on demand, day or night.']
  ]);

  /* ---------- MAGNETIC FIELDS ---------- */
  G('Electricity and Magnetism', 'Magnetic Fields', [
    ['e', 'The region around a magnet where it exerts a force is its?', ['Magnetic field', 'Electric current', 'Heat zone', 'Pole'], 'Magnetic materials feel a force anywhere in the field.'],
    ['e', 'Outside a magnet, field lines go from?', ['North pole to south pole', 'South pole to north pole', 'Side to side', 'The centre outwards'], 'Outside a magnet, field lines point from N to S.', {'South pole to north pole': 'Outside the magnet, the lines leave the NORTH pole.'}],
    ['e', 'Where is a bar magnet’s field STRONGEST?', ['At the poles', 'In the middle', 'Far away', 'Everywhere equally'], 'The field lines are closest together at the poles.'],
    ['e', 'Which can show the shape of a magnetic field?', ['Iron filings', 'Salt crystals', 'Sand', 'Sugar'], 'Iron filings line up along the field lines.'],
    ['m', 'Field lines drawn CLOSER together mean the field is?', ['Stronger', 'Weaker', 'Reversed', 'Zero'], 'The closeness of the lines shows the strength of the field.'],
    ['m', 'Magnetic field lines never?', ['Cross each other', 'Curve', 'Leave a pole', 'Enter a pole'], 'The field has one direction at each point, so lines never cross.'],
    ['m', 'A compass placed near a magnet points?', ['Along the field lines', 'Always to the east', 'Straight up', 'Randomly'], 'The compass needle lines up with the field.'],
    ['m', 'Between two facing north poles, the field lines?', ['Push apart', 'Join up', 'Disappear', 'Form a circle'], 'Like poles repel, so the lines bend away from each other.'],
    ['m', 'The Earth’s magnetic field protects us from?', ['Solar wind particles', 'Moonlight', 'Rain', 'Meteor showers'], 'It deflects the solar wind away from the Earth.'],
    ['h', 'A wire carrying current has a magnetic field shaped like?', ['Circles around the wire', 'Straight lines', 'A single point', 'No shape'], 'The field forms rings around a current-carrying wire.']
  ]);

  /* ---------- FORMS OF ENERGY (ENERGY STORES) ---------- */
  G('Energy and Power', 'Forms of Energy', [
    ['e', 'The energy of a moving object is?', ['Kinetic energy', 'Potential energy', 'Chemical energy', 'Nuclear energy'], 'Anything that moves has kinetic energy.'],
    ['e', 'Energy stored in food and batteries is?', ['Chemical energy', 'Kinetic energy', 'Sound energy', 'Light energy'], 'Chemical reactions release this stored energy.'],
    ['e', 'A stretched rubber band stores?', ['Elastic energy', 'Chemical energy', 'Sound energy', 'Thermal energy'], 'Stretching or squashing stores elastic (strain) energy.'],
    ['e', 'A book on a high shelf has?', ['Potential energy', 'Kinetic energy', 'Sound energy', 'Electrical energy'], 'Its height above the ground gives it gravitational potential energy.'],
    ['e', 'The SI unit of energy is the?', ['joule', 'watt', 'newton', 'volt'], 'All forms of energy are measured in joules (J).', {'watt': 'The watt measures power - energy per second.'}],
    ['m', 'Energy stored in the nucleus of an atom is?', ['Nuclear energy', 'Chemical energy', 'Kinetic energy', 'Elastic energy'], 'Nuclear power stations release this energy.'],
    ['m', 'The energy of an object due to its moving particles is?', ['Thermal energy', 'Elastic energy', 'Nuclear energy', 'Sound energy'], 'Faster particles mean more thermal (internal) energy.'],
    ['m', 'A charged balloon stuck to a wall stores?', ['Electrostatic energy', 'Nuclear energy', 'Kinetic energy', 'Sound energy'], 'Separated electric charges store electrostatic energy.'],
    ['m', 'A student running on the track mainly has?', ['Kinetic energy', 'Elastic energy', 'Nuclear energy', 'Light energy'], 'A moving mass has kinetic energy.'],
    ['h', 'Which object has the MOST gravitational potential energy?', ['A 2 kg box on a 5 m shelf', 'A 2 kg box on a 1 m shelf', 'A 1 kg box on a 1 m shelf', 'A 2 kg box on the floor'], 'GPE = mgh: the biggest mass × height wins.']
  ]);

  /* ---------- WORK AND POWER ---------- */
  G('Energy and Power', 'Work and Power', [
    ['e', 'Work is done when a force moves an object through a?', ['Distance', 'Colour', 'Temperature', 'Volume'], 'Work = force × distance moved in the direction of the force.'],
    ['e', 'The SI unit of work is the?', ['joule', 'watt', 'newton', 'pascal'], 'Work is energy transferred, so it is measured in joules.'],
    ['e', 'Power is the rate of doing?', ['Work', 'Mass', 'Force', 'Distance'], 'Power = work done ÷ time taken.'],
    ['e', 'The SI unit of power is the?', ['watt', 'joule', 'newton', 'volt'], '1 watt = 1 joule per second.', {'joule': 'The joule measures energy; power is joules PER SECOND.'}],
    ['m', 'Pushing hard on a wall that does not move does?', ['No work', 'A lot of work', 'Some power', 'Negative work'], 'Without movement there is no distance, so work = 0.'],
    ['m', 'Work done is equal to the energy?', ['Transferred', 'Destroyed', 'Created', 'Lost forever'], 'Doing work transfers energy from one store to another.'],
    ['m', 'Two students of equal mass climb the same stairs. The FASTER one has more?', ['Power', 'Mass', 'Work done', 'Height'], 'Same work in less time means more power.', {'Work done': 'Equal mass and height means EQUAL work - only the time differs.'}],
    ['h', 'A 50 N force pushes a box 4 m. Work done?', ['200 J', '12.5 J', '54 J', '46 J'], 'W = F × s = 50 × 4 = 200 J.', {'12.5 J': 'You divided - work is force TIMES distance.'}],
    ['h', 'A motor does 600 J of work in 3 s. Power?', ['200 W', '1800 W', '603 W', '0.005 W'], 'P = W ÷ t = 600 ÷ 3 = 200 W.', {'1800 W': 'You multiplied - power is work DIVIDED by time.'}],
    ['h', 'A 60 kg student climbs 5 m. Work against gravity? (g = 10)', ['3000 J', '300 J', '65 J', '12 J'], 'W = mgh = 60 × 10 × 5 = 3000 J.']
  ]);

  /* ---------- CONSERVATION OF ENERGY ---------- */
  G('Energy and Power', 'Conservation of Energy', [
    ['e', 'The principle of conservation of energy says energy cannot be?', ['Created or destroyed', 'Stored', 'Transferred', 'Measured'], 'Energy only changes from one form to another.'],
    ['e', 'A torch changes chemical energy into light and?', ['Heat', 'Mass', 'Magnetism', 'Pressure'], 'Some energy is always given out as heat.'],
    ['e', 'A falling ball changes potential energy into?', ['Kinetic energy', 'Chemical energy', 'Nuclear energy', 'Elastic energy'], 'It speeds up as it loses height.'],
    ['m', 'At the top of a roller coaster, the car has the MOST?', ['Potential energy', 'Kinetic energy', 'Sound energy', 'Speed'], 'The height is greatest at the top, so GPE is highest.'],
    ['m', 'When a kettle boils water, electrical energy becomes mainly?', ['Thermal energy', 'Light energy', 'Kinetic energy', 'Nuclear energy'], 'The heating element warms the water.'],
    ['m', 'Energy that is not useful, such as heat from a phone charger, is?', ['Wasted energy', 'Destroyed energy', 'Created energy', 'Stored energy'], 'It spreads into the surroundings and is hard to use again.', {'Destroyed energy': 'Energy is never destroyed - it spreads out as heat.'}],
    ['m', 'A bouncing ball goes lower each bounce because energy is?', ['Lost as heat and sound', 'Destroyed each bounce', 'Turned into mass', 'Stored in the air'], 'Each bounce transfers some energy to heat and sound.', {'Destroyed each bounce': 'Energy is NEVER destroyed - it goes to heat and sound.'}],
    ['m', 'In a hydroelectric station, the potential energy of water becomes?', ['Electrical energy', 'Chemical energy', 'Nuclear energy', 'Light energy'], 'Falling water turns turbines that drive generators.'],
    ['h', 'A device takes in 100 J and gives out 60 J of useful energy. Efficiency?', ['60%', '40%', '160%', '100%'], 'Efficiency = useful ÷ total × 100% = 60 ÷ 100 × 100% = 60%.'],
    ['h', 'A falling ball loses 40 J of potential energy. Kinetic energy gained?', ['40 J', '20 J', '80 J', '0 J'], 'With no air resistance, all 40 J of lost potential energy becomes kinetic.']
  ]);

})(window.PFR.Bank.form(3));
