/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  FORM 2 QUESTIONS (1 of 2)
   Forces · Electricity and Magnetism
   Scheme of work weeks 27-32: forces as push and pull, moment of a
   force, levers; electricity, series and parallel circuits,
   magnetism and electromagnets (KSSM Sains Tingkatan 2, Bab 7 and 8).
   Format is documented in data/question-bank.js (first answer = correct).
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- PUSH AND PULL ---------- */
  G('Forces', 'Push and Pull', [
    ['e', 'A force is a push or a?', ['Pull', 'Heat', 'Sound', 'Colour'], 'Every force is either a push or a pull.'],
    ['e', 'Opening a drawer is an example of a?', ['Pull', 'Push', 'Spin', 'Bounce'], 'You pull the drawer towards you.'],
    ['e', 'Kicking a football is an example of a?', ['Push', 'Pull', 'Lift', 'Squeeze'], 'Your foot pushes the ball away from you.'],
    ['e', 'The SI unit of force is the?', ['newton', 'kilogram', 'joule', 'metre'], 'Force is measured in newtons (N).', {'kilogram': 'The kilogram measures mass, not force.'}],
    ['e', 'Which instrument measures force?', ['Spring balance', 'Ruler', 'Stopwatch', 'Thermometer'], 'The spring stretches more for a bigger force.'],
    ['m', 'A force can change an object’s speed, direction or?', ['Shape', 'Colour', 'Smell', 'Age'], 'Squeezing a sponge changes its shape.'],
    ['m', 'The force that slows down a sliding book is?', ['Friction', 'Magnetism', 'Buoyancy', 'Electricity'], 'Friction acts against motion between two surfaces.'],
    ['m', 'The force that pulls objects towards the Earth is?', ['Gravity', 'Friction', 'Magnetism', 'Air resistance'], 'Gravity gives every object its weight.'],
    ['m', 'Two EQUAL forces pull a rope in opposite directions. The rope?', ['Does not move', 'Moves left', 'Moves right', 'Breaks at once'], 'Balanced forces cancel, so the motion does not change.'],
    ['h', 'Forces of 8 N and 5 N push a box in opposite directions. Resultant?', ['3 N', '13 N', '40 N', '8 N'], 'Opposite forces subtract: 8 − 5 = 3 N.', {'13 N': 'Opposite forces SUBTRACT; they do not add.'}]
  ]);

  /* ---------- MOMENT OF A FORCE ---------- */
  G('Forces', 'Moment of a Force', [
    ['e', 'The turning effect of a force is called its?', ['Moment', 'Weight', 'Pressure', 'Density'], 'A moment makes an object turn about a pivot.'],
    ['e', 'The point an object turns about is the?', ['Pivot', 'Load', 'Effort', 'Edge'], 'The pivot is also called the fulcrum.'],
    ['e', 'Turning a tap on uses a?', ['Moment', 'Pressure', 'Reflection', 'Vibration'], 'Your hand turns the tap about its centre.'],
    ['m', 'Moment = force × ?', ['Distance from pivot', 'Mass', 'Time', 'Area'], 'Moment = force × perpendicular distance from the pivot.'],
    ['m', 'The SI unit of moment is?', ['N m', 'N', 'kg m', 'J/s'], 'Newtons times metres gives newton metres (N m).', {'N': 'The newton measures force; a moment also needs distance.'}],
    ['m', 'Why is a door handle placed far from the hinge?', ['More turning for less force', 'It looks better', 'The door is lighter', 'To stop the door'], 'A larger distance gives a larger moment for the same force.'],
    ['m', 'A spanner with a LONGER handle makes turning a nut?', ['Easier', 'Harder', 'Impossible', 'No different'], 'A longer distance gives a bigger moment for the same force.'],
    ['m', 'A see-saw balances when the moments on each side are?', ['Equal', 'Zero', 'Doubled', 'Upwards'], 'Clockwise moment = anticlockwise moment.'],
    ['h', 'A 10 N force acts 0.5 m from a pivot. Moment?', ['5 N m', '20 N m', '10.5 N m', '0.05 N m'], 'Moment = 10 × 0.5 = 5 N m.', {'20 N m': 'You divided - a moment is force TIMES distance.'}],
    ['h', 'A 20 N child sits 2 m from a see-saw pivot. What force at 1 m balances it?', ['40 N', '10 N', '20 N', '22 N'], '20 × 2 = F × 1, so F = 40 N.', {'10 N': 'The nearer force must be BIGGER to balance.'}]
  ]);

  /* ---------- LEVERS ---------- */
  G('Forces', 'Levers', [
    ['e', 'A lever is a simple machine that turns about a?', ['Fulcrum', 'Wheel', 'Spring', 'Rope'], 'Every lever has a fulcrum, an effort and a load.'],
    ['e', 'Simple machines make work easier by reducing the?', ['Effort needed', 'Load', 'Distance moved', 'Time taken'], 'A small effort can move a large load.'],
    ['m', 'In a see-saw, the fulcrum is?', ['In the middle', 'At one end', 'Under the load', 'Not needed'], 'A see-saw is a first class lever.'],
    ['m', 'In a wheelbarrow, the load is between the fulcrum and the?', ['Effort', 'Wheel', 'Ground', 'Handle bar'], 'The load in the middle makes it a second class lever.'],
    ['m', 'A fishing rod is which class of lever?', ['Third class', 'First class', 'Second class', 'Not a lever'], 'The effort is between the fulcrum and the load.'],
    ['m', 'Which is a FIRST class lever?', ['Scissors', 'Wheelbarrow', 'Fishing rod', 'Tweezers'], 'The fulcrum sits between the effort and the load.'],
    ['m', 'Tweezers are which class of lever?', ['Third class', 'First class', 'Second class', 'Not a lever'], 'Your fingers push between the pivot and the load.'],
    ['m', 'A pulley is used to?', ['Lift loads more easily', 'Heat water', 'Store electricity', 'Measure mass'], 'A pulley changes the direction of the effort.'],
    ['h', 'Mechanical advantage = load ÷ ?', ['Effort', 'Distance', 'Time', 'Speed'], 'MA = load ÷ effort; a bigger MA means less effort.'],
    ['h', 'A 600 N load is lifted with a 200 N effort. Mechanical advantage?', ['3', '400', '800', '0.33'], 'MA = load ÷ effort = 600 ÷ 200 = 3.']
  ]);

  /* ---------- ELECTRICITY ---------- */
  G('Electricity and Magnetism', 'Electricity', [
    ['e', 'The flow of electric charge is called?', ['Current', 'Voltage', 'Resistance', 'Power'], 'Electric current is the flow of charge.'],
    ['e', 'The SI unit of current is the?', ['ampere', 'volt', 'ohm', 'watt'], 'Current is measured in amperes (A).', {'volt': 'The volt measures voltage, not current.'}],
    ['e', 'Which instrument measures current?', ['Ammeter', 'Voltmeter', 'Thermometer', 'Barometer'], 'An ammeter is connected in series.', {'Voltmeter': 'A voltmeter measures voltage.'}],
    ['e', 'The SI unit of voltage is the?', ['volt', 'ampere', 'ohm', 'joule'], 'Voltage is measured in volts (V).'],
    ['e', 'Which material is a good conductor of electricity?', ['Copper', 'Rubber', 'Plastic', 'Glass'], 'Metals like copper let current flow easily.', {'Rubber': 'Rubber is an insulator - it blocks current.'}],
    ['m', 'Wires are coated in plastic because plastic is an?', ['Insulator', 'Conductor', 'Magnet', 'Electrode'], 'The plastic stops current reaching your hand.'],
    ['m', 'A bulb lights up only when the circuit is?', ['Complete', 'Broken', 'Open', 'Empty'], 'Current needs a complete loop to flow.'],
    ['m', 'The SI unit of resistance is the?', ['ohm', 'volt', 'ampere', 'newton'], 'Resistance is measured in ohms (Ω).'],
    ['m', 'Which part pushes current around a circuit?', ['Cell (battery)', 'Bulb', 'Switch', 'Wire'], 'The cell provides the voltage that drives the current.'],
    ['h', 'V = 6 V, I = 2 A. Resistance?', ['3 Ω', '12 Ω', '8 Ω', '4 Ω'], 'R = V ÷ I = 6 ÷ 2 = 3 Ω.', {'12 Ω': 'You multiplied - resistance is V DIVIDED by I.'}]
  ]);

  /* ---------- SERIES AND PARALLEL CIRCUITS ---------- */
  G('Electricity and Magnetism', 'Series and Parallel Circuits', [
    ['e', 'In a series circuit, the components are joined in?', ['One single loop', 'Separate branches', 'A star shape', 'No loop'], 'Current has only one path in a series circuit.'],
    ['e', 'In a parallel circuit, the components are on?', ['Separate branches', 'One single loop', 'One wire only', 'No wire'], 'Each branch gives the current its own path.'],
    ['m', 'In a series circuit, if one bulb breaks, the others?', ['Go out', 'Get brighter', 'Stay on', 'Flash'], 'The single path is broken, so the current stops.', {'Stay on': 'That happens in PARALLEL, where each bulb has its own path.'}],
    ['m', 'In a parallel circuit, if one bulb breaks, the others?', ['Stay on', 'Go out', 'Get dimmer', 'Explode'], 'The other branches still form complete loops.'],
    ['m', 'Houses are wired in parallel so that?', ['Each device works alone', 'Wires are shorter', 'Bills are cheaper', 'Lights are dimmer'], 'Each appliance gets the full voltage and its own switch.'],
    ['m', 'Adding more bulbs in SERIES makes each bulb?', ['Dimmer', 'Brighter', 'The same', 'Hotter'], 'The same voltage is shared among more bulbs.'],
    ['m', 'Two identical bulbs in parallel, compared with one alone, are?', ['Equally bright', 'Dimmer', 'Twice as bright', 'Switched off'], 'Each branch gets the full voltage of the cell.'],
    ['m', 'In a series circuit, the current is?', ['The same everywhere', 'Bigger near the cell', 'Zero in the bulbs', 'Different in each bulb'], 'There is only one path, so the same current flows.'],
    ['h', 'Two 3 Ω resistors in series. Total resistance?', ['6 Ω', '1.5 Ω', '9 Ω', '3 Ω'], 'In series, R = R₁ + R₂ = 3 + 3 = 6 Ω.', {'1.5 Ω': '1.5 Ω is the answer for PARALLEL.'}],
    ['h', 'Two 4 Ω resistors in parallel. Total resistance?', ['2 Ω', '8 Ω', '4 Ω', '16 Ω'], 'Two equal resistors in parallel give half: 4 ÷ 2 = 2 Ω.']
  ]);

  /* ---------- MAGNETISM AND ELECTROMAGNETS ---------- */
  G('Electricity and Magnetism', 'Electromagnets', [
    ['e', 'A magnet has a north pole and a?', ['South pole', 'East pole', 'West pole', 'Centre pole'], 'Every magnet has two poles, north and south.'],
    ['e', 'Like poles of two magnets will?', ['Repel', 'Attract', 'Melt', 'Stick together'], 'North repels north; south repels south.', {'Attract': 'UNLIKE poles attract; like poles repel.'}],
    ['e', 'Which material is attracted by a magnet?', ['Iron', 'Copper', 'Plastic', 'Wood'], 'Iron, steel, nickel and cobalt are magnetic.', {'Copper': 'Copper is a metal, but it is not magnetic.'}],
    ['e', 'An electromagnet is made by passing current through a?', ['Coil of wire', 'Glass rod', 'Rubber band', 'Plastic tube'], 'The current in the coil makes a magnetic field.'],
    ['e', 'Which device uses an electromagnet?', ['Electric bell', 'Candle', 'Mirror', 'Ruler'], 'The electromagnet pulls the hammer onto the bell.'],
    ['m', 'A soft-iron core inside the coil makes the electromagnet?', ['Stronger', 'Weaker', 'Lighter', 'Switch off'], 'Iron concentrates the magnetic field.'],
    ['m', 'Which makes an electromagnet STRONGER?', ['More turns of wire', 'Less current', 'A plastic core', 'Fewer turns of wire'], 'More turns and more current give a stronger field.'],
    ['m', 'Switching off the current makes an electromagnet?', ['Lose its magnetism', 'Stronger', 'Hotter', 'Heavier'], 'An electromagnet works only while current flows.'],
    ['m', 'Scrapyard cranes use electromagnets because they?', ['Can be switched off', 'Are very light', 'Never need power', 'Attract all metals'], 'The crane drops the scrap by switching the current off.', {'Attract all metals': 'Only magnetic metals such as iron and steel are attracted.'}],
    ['m', 'A compass needle points towards the Earth’s?', ['North', 'East', 'West', 'Centre'], 'The Earth acts like a giant magnet.']
  ]);

})(window.PFR.Bank.form(2));
