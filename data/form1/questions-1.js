/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  FORM 1 QUESTIONS (1 of 2)
   Scientific Investigation · Matter
   Scheme of work weeks 14-19: What is Physics, Density (float / sink),
   States of Matter, Pressure basics, Thermal expansion.
   Format is documented in data/question-bank.js (first answer = correct).
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- PHYSICS IN DAILY LIFE ---------- */
  G('Scientific Investigation', 'Physics in Daily Life', [
    ['e', 'Physics is mainly the study of matter and?', ['Energy', 'Living cells', 'Chemical recipes', 'Plant growth'], 'Physics explains how matter and energy behave.', {'Living cells': 'Living cells are studied in Biology.'}],
    ['e', 'A ball rolling down a slope is an example of?', ['Motion', 'Melting', 'Evaporation', 'Digestion'], 'Motion is a change of position over time.'],
    ['e', 'Which instrument measures time?', ['Stopwatch', 'Ruler', 'Thermometer', 'Beam balance'], 'A stopwatch measures time in seconds.', {'Thermometer': 'A thermometer measures temperature.'}],
    ['e', 'Which instrument measures temperature?', ['Thermometer', 'Stopwatch', 'Ammeter', 'Measuring tape'], 'A thermometer measures how hot or cold something is.', {'Ammeter': 'An ammeter measures electric current.'}],
    ['e', 'The SI unit of length is the?', ['metre', 'centimetre', 'inch', 'foot'], 'Length is measured in metres (m).'],
    ['e', 'The SI unit of mass is the?', ['kilogram', 'gram', 'newton', 'litre'], 'Mass is measured in kilograms (kg).', {'newton': 'The newton is the unit of force, not mass.'}],
    ['m', 'Which is a FORCE in daily life?', ['A push on a door', 'The colour of paint', 'The smell of food', 'The shape of a cup'], 'A force is a push or a pull.'],
    ['m', 'A fan changes electrical energy mainly into?', ['Kinetic energy', 'Chemical energy', 'Nuclear energy', 'Light energy'], 'The spinning blades have kinetic energy.'],
    ['m', 'In an investigation, the factor you change on purpose is the?', ['Manipulated variable', 'Responding variable', 'Constant variable', 'Conclusion'], 'You change the manipulated variable yourself.', {'Responding variable': 'The responding variable is what you measure.'}],
    ['m', 'A statement to be tested in an experiment is a?', ['Hypothesis', 'Conclusion', 'Result', 'Diagram'], 'A hypothesis is a prediction that can be tested.'],
    ['h', 'Convert 2.5 m into centimetres.', ['250 cm', '25 cm', '2500 cm', '0.25 cm'], '1 m = 100 cm, so 2.5 × 100 = 250 cm.', {'25 cm': 'You multiplied by 10. There are 100 cm in 1 m.'}],
    ['h', 'Convert 1500 g into kilograms.', ['1.5 kg', '15 kg', '150 kg', '0.15 kg'], '1000 g = 1 kg, so 1500 ÷ 1000 = 1.5 kg.']
  ]);

  /* ---------- DENSITY (FLOAT OR SINK) ---------- */
  G('Scientific Investigation', 'Density', [
    ['e', 'Density is mass divided by?', ['Volume', 'Weight', 'Area', 'Time'], 'Density = mass ÷ volume.'],
    ['e', 'The SI unit of density is?', ['kg/m³', 'kg', 'm³', 'N/m²'], 'Mass in kg divided by volume in m³.', {'N/m²': 'N/m² is the unit of pressure.'}],
    ['e', 'An object LESS dense than water will?', ['Float', 'Sink', 'Dissolve', 'Melt'], 'Less dense objects float on denser liquids.', {'Sink': 'Only objects DENSER than water sink.'}],
    ['e', 'An object MORE dense than water will?', ['Sink', 'Float', 'Evaporate', 'Expand'], 'Denser objects sink in less dense liquids.'],
    ['m', 'Why does cooking oil float on water?', ['Oil is less dense', 'Oil is heavier', 'Oil is hotter', 'Oil has more mass'], 'The less dense liquid always rests on top.', {'Oil is heavier': 'Floating depends on density, not on weight.'}],
    ['m', 'Why does a big steel ship float?', ['Air inside lowers density', 'Steel is less dense', 'Water is sticky', 'It has no weight'], 'The whole ship, air included, is less dense than water.', {'Steel is less dense': 'Solid steel sinks - the air inside is what helps.'}],
    ['m', 'A cork and a stone of equal size. Which is denser?', ['The stone', 'The cork', 'Both the same', 'Neither'], 'Same volume, but the stone has more mass.'],
    ['m', 'The density of pure water is about?', ['1 g/cm³', '10 g/cm³', '0.1 g/cm³', '100 g/cm³'], 'Water has a density of 1 g/cm³, or 1000 kg/m³.'],
    ['m', 'Ice floats on water because ice is?', ['Less dense than water', 'Colder than water', 'Heavier than water', 'Full of salt'], 'Water expands as it freezes, so ice is less dense.'],
    ['h', 'Mass 200 g, volume 100 cm³. Density?', ['2 g/cm³', '0.5 g/cm³', '20 000 g/cm³', '300 g/cm³'], 'ρ = m ÷ V = 200 ÷ 100 = 2 g/cm³.', {'0.5 g/cm³': 'You divided volume by mass - it is mass ÷ volume.'}],
    ['h', 'Density 8 g/cm³, volume 5 cm³. Mass?', ['40 g', '1.6 g', '13 g', '0.6 g'], 'm = ρ × V = 8 × 5 = 40 g.']
  ]);

  /* ---------- STATES OF MATTER ---------- */
  G('Matter', 'States of Matter', [
    ['e', 'Which state has a fixed shape and a fixed volume?', ['Solid', 'Liquid', 'Gas', 'Vapour'], 'Solid particles are packed tightly and only vibrate.', {'Liquid': 'A liquid takes the shape of its container.'}],
    ['e', 'Which state takes the shape of its container but keeps its volume?', ['Liquid', 'Solid', 'Gas', 'Crystal'], 'Liquid particles can slide past each other.'],
    ['e', 'Which state spreads out to fill any container?', ['Gas', 'Liquid', 'Solid', 'Ice'], 'Gas particles move fast and spread out.'],
    ['e', 'A solid changing into a liquid is called?', ['Melting', 'Freezing', 'Boiling', 'Condensation'], 'Heat lets the particles break free and flow.', {'Freezing': 'Freezing is a liquid changing into a solid.'}],
    ['e', 'Water vapour on a cold mirror turns into droplets. This is?', ['Condensation', 'Evaporation', 'Melting', 'Sublimation'], 'Cooled gas particles come together as a liquid.', {'Evaporation': 'Evaporation is a liquid turning INTO a gas.'}],
    ['m', 'In which state do the particles move FASTEST?', ['Gas', 'Liquid', 'Solid', 'Same in all'], 'Gas particles have the most kinetic energy.'],
    ['m', 'In which state are the particles closest together?', ['Solid', 'Liquid', 'Gas', 'Steam'], 'Solid particles are packed in a fixed pattern.'],
    ['m', 'When a solid is heated, its particles?', ['Vibrate faster', 'Stop moving', 'Get bigger', 'Disappear'], 'Heat gives the particles more kinetic energy.', {'Get bigger': 'Particles do not grow - they move faster.'}],
    ['m', 'Why can a gas be squashed easily?', ['Big gaps between particles', 'Its particles are soft', 'It has no mass', 'It has no particles'], 'Gas particles are far apart, so they can be pushed closer.'],
    ['m', 'Wet clothes dry in the sun. This is?', ['Evaporation', 'Condensation', 'Freezing', 'Melting'], 'Water particles escape from the surface as vapour.'],
    ['m', 'Ice cream melting in a bowl is gaining?', ['Heat', 'Mass', 'Particles', 'Coldness'], 'Melting needs heat energy from the surroundings.', {'Coldness': 'Coldness does not flow - heat flows in.'}]
  ]);

  /* ---------- PRESSURE ---------- */
  G('Matter', 'Pressure', [
    ['e', 'Pressure is force divided by?', ['Area', 'Mass', 'Volume', 'Time'], 'Pressure = force ÷ area.'],
    ['e', 'The SI unit of pressure is the?', ['pascal', 'newton', 'joule', 'metre'], '1 pascal (Pa) = 1 N/m².', {'newton': 'The newton is force; pressure is force per area.'}],
    ['e', 'Snowshoes stop you sinking because they?', ['Spread force over more area', 'Make you lighter', 'Melt the snow', 'Increase the pressure'], 'A larger area means a smaller pressure on the snow.'],
    ['e', 'A sharp knife cuts well because its edge has a very small?', ['Area', 'Mass', 'Weight', 'Length'], 'A small area gives a large pressure.'],
    ['m', 'The SAME force on a smaller area gives?', ['Higher pressure', 'Lower pressure', 'The same pressure', 'Zero pressure'], 'P = F ÷ A, so a smaller A means a bigger P.', {'Lower pressure': 'Dividing by a SMALLER area gives a BIGGER pressure.'}],
    ['m', 'Why do tractors have wide tyres?', ['To lower pressure on soil', 'To go faster', 'To be heavier', 'To look bigger'], 'Wide tyres spread the weight so they do not sink.'],
    ['m', 'Why does a nail have a sharp point?', ['High pressure at the tip', 'Less mass to carry', 'Low pressure at the tip', 'To bend easily'], 'A tiny area turns a small force into a big pressure.'],
    ['m', 'Air pressure is caused by?', ['Air particles hitting things', 'Heat from the Sun', 'Wind only', 'Clouds pressing down'], 'Moving air particles push on every surface they hit.'],
    ['h', 'Force 20 N on an area of 4 m². Pressure?', ['5 Pa', '80 Pa', '24 Pa', '0.2 Pa'], 'P = F ÷ A = 20 ÷ 4 = 5 Pa.', {'80 Pa': 'You multiplied - pressure is force DIVIDED by area.'}],
    ['h', 'Pressure 50 Pa on an area of 2 m². Force?', ['100 N', '25 N', '52 N', '48 N'], 'F = P × A = 50 × 2 = 100 N.']
  ]);

  /* ---------- THERMAL EXPANSION ---------- */
  G('Matter', 'Thermal Expansion', [
    ['e', 'When most solids are heated, they?', ['Expand', 'Contract', 'Lose mass', 'Change colour'], 'Heated particles vibrate more and need more space.', {'Contract': 'Solids contract when COOLED, not heated.'}],
    ['e', 'When a gas is cooled, it?', ['Contracts', 'Expands', 'Gains mass', 'Becomes heavier'], 'Slower particles take up less space.'],
    ['e', 'Gaps are left between railway tracks to allow for?', ['Expansion', 'Rain', 'Rusting', 'Wind'], 'On hot days the rails expand into the gaps.'],
    ['e', 'Bridges have expansion joints so that they?', ['Do not crack in the heat', 'Look nicer', 'Are cheaper', 'Hold more cars'], 'The joint gives the bridge room to expand.'],
    ['m', 'A liquid-in-glass thermometer works because the liquid?', ['Expands when heated', 'Changes colour', 'Evaporates', 'Gets heavier'], 'The liquid rises up the tube as it expands.'],
    ['m', 'A tight metal lid on a glass jar is easier to open after?', ['Holding it under hot water', 'Putting it in a freezer', 'Shaking the jar', 'Tapping it with ice'], 'The metal lid expands more than the glass jar.'],
    ['m', 'Which expands the MOST for the same heating?', ['Gas', 'Liquid', 'Solid', 'All the same'], 'Gas particles are far apart and move freely.'],
    ['m', 'Why do power cables sag on hot days?', ['They expand and get longer', 'They get heavier', 'Birds sit on them', 'They melt'], 'Heated metal expands, so the cable gets longer.'],
    ['m', 'During expansion, the particles themselves?', ['Stay the same size', 'Get bigger', 'Get smaller', 'Disappear'], 'Particles move further apart; they do not grow.', {'Get bigger': 'The particles do not grow - the gaps between them do.'}],
    ['m', 'A dented table-tennis ball in hot water pops back because?', ['The air inside expands', 'The water pushes in', 'The ball melts', 'The ball gets heavier'], 'Heated air expands and pushes the dent out.']
  ]);

})(window.PFR.Bank.form(1));
