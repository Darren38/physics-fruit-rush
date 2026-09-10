/* =====================================================================
   PHYSICS FRUIT RUSH  --  QUESTIONS: MECHANICS
   KSSM Form 4 Physics, Chapters 1-3
   Topics 1-10: quantities, motion, forces, momentum, gravitation.
   Format is documented in data/question-bank.js  (first answer = correct)
   ===================================================================== */

(function (G) {
  'use strict';

  /* ---------- 1. PHYSICAL QUANTITIES ---------- */
  G('Physical Quantities', 'Physical Quantities', [
    ['e', 'SI unit of length?', ['metre', 'centimetre', 'kilometre', 'mile'], 'Length is a base quantity. SI unit = metre (m).'],
    ['e', 'SI unit of mass?', ['kilogram', 'gram', 'newton', 'tonne'], 'Mass is a base quantity. SI unit = kilogram (kg).'],
    ['e', 'SI unit of time?', ['second', 'minute', 'hour', 'hertz'], 'Time is a base quantity. SI unit = second (s).'],
    ['e', 'SI unit of temperature?', ['kelvin', 'degree Celsius', 'Fahrenheit', 'joule'], 'The SI base unit of temperature is the kelvin (K).'],
    ['e', 'SI unit of electric current?', ['ampere', 'volt', 'ohm', 'coulomb'], 'Current is a base quantity. SI unit = ampere (A).'],
    ['e', 'SI unit of force?', ['newton', 'joule', 'watt', 'pascal'], 'Force is derived: 1 N = 1 kg m s⁻².', {'joule': 'Joule is the unit of energy.', 'watt': 'Watt is the unit of power.', 'pascal': 'Pascal is the unit of pressure.'}],
    ['e', 'SI unit of energy?', ['joule', 'newton', 'watt', 'pascal'], 'Energy and work share the joule (J).', {'newton': 'Newton is the unit of force.', 'watt': 'Watt is energy per second, not energy.', 'pascal': 'Pascal is the unit of pressure.'}],
    ['e', 'SI unit of power?', ['watt', 'joule', 'newton', 'pascal'], 'Power = energy ÷ time, so 1 W = 1 J/s.', {'joule': 'Joule is energy; power is energy per second.', 'newton': 'Newton is the unit of force.'}],
    ['e', 'SI unit of pressure?', ['pascal', 'newton', 'joule', 'watt'], 'Pressure = force ÷ area, so 1 Pa = 1 N/m².', {'newton': 'Newton is force; pressure is force per unit area.', 'joule': 'Joule is the unit of energy.'}],
    ['e', 'Which is a BASE quantity?', ['Mass', 'Force', 'Density', 'Volume'], 'The base quantities include mass, length and time.', {'Force': 'Force is derived from F = ma.', 'Density': 'Density is mass divided by volume.', 'Volume': 'Volume is length cubed, so it is derived.'}],
    ['e', 'Which is a DERIVED quantity?', ['Density', 'Mass', 'Time', 'Length'], 'Density = mass ÷ volume, so it is derived.', {'Mass': 'Mass is one of the seven base quantities.', 'Time': 'Time is one of the seven base quantities.', 'Length': 'Length is one of the seven base quantities.'}],
    ['e', 'SI unit of amount of substance?', ['mole', 'gram', 'kilogram', 'litre'], 'Amount of substance is a base quantity: mole (mol).'],
    ['m', 'Unit SYMBOL for electric current?', ['A', 'I', 'C', 'V'], 'I is the quantity symbol; A is the unit symbol.', {'I': 'I is the symbol for the QUANTITY, not the unit.', 'C': 'C is the coulomb, the unit of charge.', 'V': 'V is the volt, the unit of voltage.'}],
    ['m', 'SI unit of density?', ['kg/m³', 'g/cm³', 'kg m', 'm³/kg'], 'Density = mass ÷ volume = kg per cubic metre.', {'g/cm³': 'Right idea, but this is not the SI unit.', 'm³/kg': 'That is volume per mass - the inverse.'}],
    ['m', 'Prefix for 10⁻³?', ['milli', 'micro', 'centi', 'kilo'], 'milli = 10⁻³, micro = 10⁻⁶, centi = 10⁻².', {'micro': 'micro means 10⁻⁶.', 'centi': 'centi means 10⁻².', 'kilo': 'kilo means 10³, a thousand times bigger.'}],
    ['m', 'The prefix "mega" means?', ['10⁶', '10³', '10⁹', '10⁻⁶'], 'mega = 10⁶, kilo = 10³, giga = 10⁹.'],
    ['e', 'Derived unit of volume?', ['m³', 'm²', 'm', 'kg/m³'], 'Volume = length × length × length = m³.'],
    ['m', 'Most precise tool for a small diameter?', ['Micrometer screw gauge', 'Vernier calipers', 'Metre rule', 'Measuring tape'], 'Micrometer reads 0.01 mm; vernier reads 0.01 cm.'],
    ['m', 'SI unit of luminous intensity?', ['candela', 'lumen', 'lux', 'watt'], 'Luminous intensity is a base quantity: candela (cd).'],
    ['h', 'Convert 5 km into metres.', ['5000 m', '500 m', '50 000 m', '0.005 m'], '1 km = 1000 m, so 5 km = 5000 m.', {'500 m': 'You multiplied by 100. There are 1000 m in a km.', '50 000 m': 'You multiplied by 10 000, ten times too many.'}],
    ['h', 'Convert 2.5 × 10⁻² m into cm.', ['2.5 cm', '25 cm', '0.25 cm', '250 cm'], '2.5 × 10⁻² m = 0.025 m = 2.5 cm.', {'25 cm': 'You moved the decimal point the wrong way.', '0.25 cm': 'That would be 2.5 × 10⁻³ m.'}],
    ['h', 'Convert 750 g into kg.', ['0.75 kg', '7.5 kg', '75 kg', '0.075 kg'], 'Divide by 1000: 750 g = 0.75 kg.', {'7.5 kg': 'You divided by 100 instead of 1000.', '75 kg': 'You divided by 10 instead of 1000.'}]
  ]);

  /* ---------- 2. SCALARS AND VECTORS ---------- */
  G('Physical Quantities', 'Scalars and Vectors', [
    ['e', 'Which is a VECTOR quantity?', ['Displacement', 'Distance', 'Speed', 'Mass'], 'Displacement has magnitude AND direction.', {'Distance': 'Distance has size only - displacement has direction.', 'Speed': 'Speed has size only - velocity has direction.', 'Mass': 'Mass has no direction.'}],
    ['e', 'Which is a SCALAR quantity?', ['Energy', 'Force', 'Velocity', 'Acceleration'], 'Energy has magnitude only.', {'Force': 'Force has a direction, so it is a vector.', 'Velocity': 'Velocity has a direction, so it is a vector.', 'Acceleration': 'Acceleration has a direction, so it is a vector.'}],
    ['e', 'A scalar quantity has only...', ['Magnitude', 'Direction', 'Magnitude & direction', 'Neither'], 'Scalars = size only. Vectors = size + direction.'],
    ['e', 'A vector has magnitude and...', ['Direction', 'Mass', 'Speed', 'Energy'], 'Direction is what makes a quantity a vector.'],
    ['e', 'Distance is a ... quantity.', ['Scalar', 'Vector', 'Both', 'Neither'], 'Distance has no direction, so it is a scalar.'],
    ['m', 'Which PAIR are both vectors?', ['Force & velocity', 'Mass & speed', 'Distance & time', 'Energy & power'], 'Force and velocity both need a direction.'],
    ['m', 'Which PAIR are both scalars?', ['Speed & mass', 'Velocity & force', 'Weight & momentum', 'Acceleration & force'], 'Speed and mass have magnitude only.'],
    ['m', 'Weight is a vector because it has...', ['Direction', 'Mass', 'Volume', 'Density'], 'Weight is a force, always directed downwards.'],
    ['e', 'Temperature is a ... quantity.', ['Scalar', 'Vector', 'Both', 'Neither'], 'Temperature has magnitude only.'],
    ['m', 'Which quantity can be negative to show direction?', ['Velocity', 'Speed', 'Distance', 'Mass'], 'A negative sign on a vector shows opposite direction.'],
    ['h', 'Two 3 N forces act in OPPOSITE directions. Resultant?', ['0 N', '6 N', '3 N', '9 N'], 'Equal opposite forces cancel: 3 − 3 = 0 N.', {'6 N': 'Opposite directions subtract, they do not add.', '3 N': 'Both forces act, so they cancel completely.'}],
    ['h', '4 N and 3 N act in the SAME direction. Resultant?', ['7 N', '1 N', '5 N', '12 N'], 'Same direction, so add: 4 + 3 = 7 N.'],
    ['h', '4 N east and 3 N north. Resultant magnitude?', ['5 N', '7 N', '1 N', '12 N'], 'Perpendicular: √(4² + 3²) = 5 N.', {'7 N': 'Perpendicular forces need Pythagoras, not addition.', '1 N': 'That is for opposite directions, not perpendicular.'}],
    ['h', '10 N east and 4 N west. Resultant?', ['6 N east', '14 N east', '6 N west', '40 N east'], 'Opposite directions subtract: 10 − 4 = 6 N east.']
  ]);

  /* ---------- 3. LINEAR MOTION ---------- */
  G('Linear Motion', 'Linear Motion', [
    ['e', 'SI unit of velocity?', ['m/s', 'm', 'm/s²', 's'], 'Velocity = displacement ÷ time = metres per second.', {'m/s²': 'm/s² is acceleration.', 'm': 'The metre measures distance.'}],
    ['e', 'SI unit of acceleration?', ['m/s²', 'm/s', 'm', 'N'], 'Acceleration = velocity change ÷ time = m/s².', {'m/s': 'm/s is velocity, not its rate of change.', 'N': 'The newton measures force.'}],
    ['e', 'Rate of change of velocity is called?', ['Acceleration', 'Speed', 'Displacement', 'Momentum'], 'a = (v − u) ÷ t.'],
    ['e', 'Speed formula?', ['distance ÷ time', 'time ÷ distance', 'distance × time', 'distance + time'], 'Speed = total distance ÷ total time.', {'time ÷ distance': 'That is upside down.', 'distance × time': 'Speed is a rate, so it must divide by time.'}],
    ['e', 'Velocity formula?', ['displacement ÷ time', 'time ÷ displacement', 'displacement × time', 'distance × time'], 'Velocity uses displacement, not distance.', {'time ÷ displacement': 'That is upside down.', 'distance × time': 'Velocity is a rate, so it must divide by time.'}],
    ['m', 'Gradient of a displacement-time graph gives?', ['Velocity', 'Acceleration', 'Distance', 'Time'], 'Rise ÷ run on an s-t graph is velocity.', {'Acceleration': 'Acceleration is the gradient of a VELOCITY-time graph.'}],
    ['m', 'Gradient of a velocity-time graph gives?', ['Acceleration', 'Displacement', 'Speed', 'Force'], 'Rise ÷ run on a v-t graph is acceleration.', {'Displacement': 'Displacement is the AREA under a velocity-time graph.'}],
    ['m', 'Area under a velocity-time graph gives?', ['Displacement', 'Acceleration', 'Speed', 'Force'], 'velocity × time = displacement.', {'Acceleration': 'Acceleration is the GRADIENT, not the area.'}],
    ['m', 'Horizontal line on a displacement-time graph means?', ['Object is at rest', 'Constant velocity', 'Constant acceleration', 'Decelerating'], 'Zero gradient means zero velocity.', {'Constant velocity': 'Constant velocity is a straight SLOPING line.'}],
    ['m', 'Horizontal line (v ≠ 0) on a velocity-time graph means?', ['Constant velocity', 'At rest', 'Uniform acceleration', 'Uniform deceleration'], 'Zero gradient means zero acceleration.'],
    ['m', 'Negative gradient on a velocity-time graph means?', ['Deceleration', 'Acceleration', 'Constant velocity', 'At rest'], 'The velocity is decreasing with time.'],
    ['m', 'Distance is always ... displacement.', ['≥ (greater or equal to)', '< (less than)', '= (equal to)', '½ of'], 'Distance is the whole path; displacement is direct.'],
    ['m', 'Ticker tape with evenly spaced dots shows?', ['Constant velocity', 'Acceleration', 'Deceleration', 'The object at rest'], 'Equal gaps in equal times = uniform velocity.'],
    ['m', 'A 50 Hz ticker timer makes one tick every?', ['0.02 s', '0.2 s', '50 s', '0.5 s'], 'T = 1 ÷ f = 1 ÷ 50 = 0.02 s.'],
    ['h', 'A car travels 100 m in 20 s. Average speed?', ['5 m/s', '20 m/s', '2000 m/s', '0.2 m/s'], 'v = 100 ÷ 20 = 5 m/s.'],
    ['h', 'From rest to 20 m/s in 5 s. Acceleration?', ['4 m/s²', '100 m/s²', '0.25 m/s²', '15 m/s²'], 'a = (20 − 0) ÷ 5 = 4 m/s².', {'100 m/s²': 'You multiplied instead of dividing.', '0.25 m/s²': 'You divided the wrong way round.'}],
    ['h', 'u = 5 m/s, a = 2 m/s², t = 3 s. Find v.', ['11 m/s', '10 m/s', '6 m/s', '30 m/s'], 'v = u + at = 5 + (2 × 3) = 11 m/s.', {'6 m/s': 'You forgot to add the initial velocity.', '30 m/s': 'You multiplied all three values together.'}],
    ['h', 'A runner does one 400 m lap back to the start. Displacement?', ['0 m', '400 m', '200 m', '800 m'], 'Start and finish are the same point.', {'400 m': 'That is the distance travelled, not the displacement.', '200 m': 'Displacement is measured start to finish.'}],
    ['h', 'u = 0, a = 2 m/s², t = 4 s. Distance travelled?', ['16 m', '8 m', '32 m', '4 m'], 's = ½at² = ½ × 2 × 16 = 16 m.', {'8 m': '8 m/s is the final velocity - use s = ½at².', '32 m': 'You left out the ½.'}],
    ['h', '30 m/s slows to 10 m/s in 4 s. Acceleration?', ['−5 m/s²', '5 m/s²', '−10 m/s²', '−2.5 m/s²'], 'a = (10 − 30) ÷ 4 = −5 m/s².', {'5 m/s²': 'Slowing down gives a NEGATIVE acceleration.'}],
    ['h', 'u = 2 m/s, v = 10 m/s, t = 4 s. Acceleration?', ['2 m/s²', '3 m/s²', '8 m/s²', '0.5 m/s²'], 'a = (10 − 2) ÷ 4 = 2 m/s².']
  ]);

  /* ---------- 4. FREE FALL MOTION ---------- */
  G('Linear Motion', 'Free Fall Motion', [
    ['e', 'Value of gravitational acceleration on Earth?', ['9.81 m/s²', '9.81 m/s', '0.98 m/s²', '98.1 m/s²'], 'g ≈ 9.81 m/s², often rounded to 10 m/s².', {'9.81 m/s': 'Those are the units of velocity, not acceleration.', '98.1 m/s²': 'That is ten times too large.'}],
    ['e', 'In free fall, the only force acting is?', ['Weight', 'Friction', 'Air resistance', 'Normal force'], 'Free fall means gravity alone acts on the object.', {'Air resistance': 'Free fall means air resistance is ignored.', 'Friction': 'There is nothing to rub against in free fall.'}],
    ['e', 'True free fall can only happen in?', ['A vacuum', 'Air', 'Water', 'Oil'], 'No air resistance is allowed in true free fall.'],
    ['m', 'A feather and a coin dropped in a vacuum will?', ['Land together', 'Feather lands first', 'Coin lands first', 'Neither will fall'], 'Free-fall acceleration does not depend on mass.'],
    ['m', 'During free fall, the acceleration is?', ['Constant', 'Increasing', 'Decreasing', 'Zero'], 'g is constant near the Earth surface.'],
    ['m', 'A falling object in free fall has velocity that?', ['Increases uniformly', 'Stays constant', 'Decreases', 'Is always zero'], 'Constant acceleration means uniform velocity gain.'],
    ['m', 'At the highest point of a ball thrown up, velocity is?', ['0 m/s', 'Maximum', 'Equal to g', '10 m/s'], 'It stops instantaneously before falling back.', {'Maximum': 'Velocity is momentarily ZERO at the very top.'}],
    ['m', 'At the highest point of a thrown ball, acceleration is?', ['9.81 m/s² downwards', 'Zero', '9.81 m/s² upwards', 'Maximum'], 'Gravity still acts, even when velocity is zero.', {'Zero': 'Gravity still pulls even when velocity is zero.'}],
    ['m', 'Weight formula?', ['W = mg', 'W = m ÷ g', 'W = g ÷ m', 'W = mgh'], 'Weight is the gravitational force on a mass.', {'W = mgh': 'mgh is gravitational potential energy.', 'W = m ÷ g': 'Weight is mass MULTIPLIED by g.'}],
    ['m', 'Your MASS on the Moon compared to Earth?', ['The same', 'Smaller', 'Larger', 'Zero'], 'Mass is the amount of matter; it never changes.', {'Smaller': 'Your WEIGHT is smaller. Mass never changes.'}],
    ['m', 'Your WEIGHT on the Moon compared to Earth?', ['Smaller', 'The same', 'Larger', 'Zero'], 'Moon gravity is weaker, so W = mg is smaller.', {'The same': 'Weight is mg, and the Moon has a weaker g.'}],
    ['h', 'Dropped from rest. Velocity after 2 s (g = 10 m/s²)?', ['20 m/s', '10 m/s', '5 m/s', '40 m/s'], 'v = u + gt = 0 + (10 × 2) = 20 m/s.'],
    ['h', 'Dropped from rest. Distance fallen in 3 s (g = 10)?', ['45 m', '30 m', '90 m', '15 m'], 'h = ½gt² = ½ × 10 × 9 = 45 m.'],
    ['h', 'Mass 2 kg, g = 10 m/s². Weight?', ['20 N', '0.2 N', '2 N', '5 N'], 'W = mg = 2 × 10 = 20 N.', {'2 N': 'You forgot to multiply by g.', '5 N': 'You divided instead of multiplying.'}],
    ['h', 'Object falls for 1 s from rest (g = 10). Distance?', ['5 m', '10 m', '20 m', '1 m'], 'h = ½ × 10 × 1² = 5 m.']
  ]);

  /* ---------- 5. INERTIA / NEWTON'S FIRST LAW ---------- */
  G('Forces & Inertia', 'Inertia and Newton I', [
    ['e', 'What is inertia?', ['Resists change in motion', 'A force that stops motion', 'Rate of change of velocity', 'Energy of a moving body'], 'Inertia opposes any change in a state of motion.', {'A force that stops motion': 'Inertia is not a force at all.', 'Rate of change of velocity': 'That is acceleration.'}],
    ['e', 'Inertia depends on?', ['Mass', 'Speed', 'Volume', 'Shape'], 'The larger the mass, the larger the inertia.', {'Speed': 'A parked lorry still has huge inertia.', 'Shape': 'Only mass matters.'}],
    ['e', 'Inertia is measured by which quantity?', ['Mass', 'Weight', 'Force', 'Velocity'], 'Mass is the measure of inertia.'],
    ['e', 'Which law explains inertia?', ['Newton’s First Law', 'Newton’s Second Law', 'Newton’s Third Law', 'Hooke’s Law'], 'The First Law is also called the law of inertia.', {'Newton’s Second Law': 'The Second Law is F = ma.', 'Newton’s Third Law': 'The Third Law is about action and reaction.'}],
    ['e', 'A larger mass means?', ['Larger inertia', 'Smaller inertia', 'The same inertia', 'No inertia'], 'Inertia increases with mass.'],
    ['e', 'A bus stops suddenly. Passengers lurch?', ['Forward', 'Backward', 'Sideways', 'Downwards'], 'The body keeps moving forward due to inertia.', {'Backward': 'Your body keeps moving FORWARD when the bus stops.'}],
    ['e', 'A bus starts suddenly. Passengers lurch?', ['Backward', 'Forward', 'Upwards', 'They do not move'], 'The body tends to stay at rest due to inertia.', {'Forward': 'Your body stays at rest, so you fall BACKWARD.'}],
    ['m', 'Why do we wear seat belts?', ['It stops you moving forward', 'To increase the car speed', 'To reduce the car mass', 'To increase road friction'], 'The belt provides the force that stops your inertia.'],
    ['m', 'Shaking sauce out of a bottle uses?', ['Inertia', 'Friction', 'Gravity only', 'Air pressure'], 'The sauce keeps moving when the bottle stops.'],
    ['m', 'Newton I: a body keeps its motion unless...', ['a resultant force acts', 'it has mass', 'friction exists', 'it accelerates'], 'Only a resultant (unbalanced) force changes motion.'],
    ['e', 'Which has the LARGEST inertia?', ['A loaded lorry', 'An empty lorry', 'A motorcycle', 'A bicycle'], 'Greatest mass means greatest inertia.'],
    ['m', 'Why do lorries have lower speed limits?', ['Large inertia to stop', 'They have small inertia', 'They have no brakes', 'They are lighter'], 'Big mass = big inertia = long braking distance.'],
    ['m', 'A book rests on a table because...', ['forces on it are balanced', 'no forces act on it', 'gravity is zero there', 'it has no inertia'], 'Weight down is balanced by the normal force up.'],
    ['m', 'A headrest in a car protects against?', ['Neck injury in a rear crash', 'Forward inertia', 'Loss of momentum', 'Air resistance'], 'It moves the head with the body, avoiding whiplash.']
  ]);

  /* ---------- 8. NEWTON'S SECOND LAW / FORCE ---------- */
  G('Forces & Inertia', 'Force and Newton II', [
    ['e', 'Newton’s Second Law formula?', ['F = ma', 'F = mv', 'F = m ÷ a', 'F = mgh'], 'Resultant force = mass × acceleration.', {'F = mv': 'mv is momentum.', 'F = mgh': 'mgh is potential energy.'}],
    ['e', 'Which quantity is measured in newtons?', ['Force', 'Mass', 'Energy', 'Power'], 'The newton is the SI unit of force.'],
    ['m', '1 N gives a 1 kg mass an acceleration of?', ['1 m/s²', '1 m/s', '10 m/s²', '9.81 m/s²'], 'That is the definition of the newton.'],
    ['m', 'With constant force, acceleration is ... to mass.', ['Inversely proportional', 'Directly proportional', 'Equal', 'Unrelated'], 'a = F ÷ m, so bigger mass means smaller a.'],
    ['m', 'With constant mass, acceleration is ... to resultant force.', ['Directly proportional', 'Inversely proportional', 'Equal', 'Unrelated'], 'a = F ÷ m, so bigger F means bigger a.'],
    ['m', 'A zero resultant force means the object is?', ['Rest or constant velocity', 'Accelerating', 'Decelerating', 'Moving in a circle'], 'No resultant force means no acceleration.'],
    ['e', 'Newton’s Third Law states?', ['Action = opposite reaction', 'F = ma', 'Momentum is conserved', 'Energy is conserved'], 'Forces always occur in equal, opposite pairs.'],
    ['m', 'Action and reaction forces act on?', ['Different objects', 'The same object', 'Nothing at all', 'The heavier object only'], 'That is why they never cancel each other out.'],
    ['e', 'Which is a CONTACT force?', ['Friction', 'Gravitational force', 'Magnetic force', 'Electrostatic force'], 'Friction needs surfaces touching each other.'],
    ['h', 'm = 2 kg, a = 3 m/s². Force?', ['6 N', '5 N', '1.5 N', '9 N'], 'F = ma = 2 × 3 = 6 N.', {'5 N': 'You added instead of multiplying.', '1.5 N': 'You divided instead of multiplying.'}],
    ['h', 'F = 20 N, m = 4 kg. Acceleration?', ['5 m/s²', '80 m/s²', '0.2 m/s²', '24 m/s²'], 'a = F ÷ m = 20 ÷ 4 = 5 m/s².', {'80 m/s²': 'You multiplied instead of dividing.', '0.2 m/s²': 'You divided the wrong way round.'}],
    ['h', 'F = 12 N, a = 3 m/s². Mass?', ['4 kg', '36 kg', '15 kg', '0.25 kg'], 'm = F ÷ a = 12 ÷ 3 = 4 kg.'],
    ['h', '5 kg pushed by 30 N against 10 N friction. Acceleration?', ['4 m/s²', '6 m/s²', '8 m/s²', '2 m/s²'], 'Resultant = 20 N, so a = 20 ÷ 5 = 4 m/s².', {'6 m/s²': 'You forgot to subtract the 10 N friction.', '8 m/s²': 'You added the friction instead of subtracting it.'}],
    ['h', 'Weight of a 5 kg mass (g = 10 m/s²)?', ['50 N', '5 N', '0.5 N', '500 N'], 'W = mg = 5 × 10 = 50 N.', {'5 N': 'You forgot to multiply by g.', '0.5 N': 'You divided by g instead of multiplying.'}],
    ['h', 'm = 0.5 kg, F = 4 N. Acceleration?', ['8 m/s²', '2 m/s²', '0.125 m/s²', '4.5 m/s²'], 'a = 4 ÷ 0.5 = 8 m/s².']
  ]);

  /* ---------- 6. MOMENTUM ---------- */
  G('Momentum & Impulse', 'Momentum', [
    ['e', 'Momentum formula?', ['p = mv', 'p = m ÷ v', 'p = ma', 'p = mgh'], 'Momentum = mass × velocity.', {'p = ma': 'ma is force.', 'p = mgh': 'mgh is potential energy.'}],
    ['e', 'SI unit of momentum?', ['kg m/s', 'N', 'J', 'W'], 'p = mv gives kg × m/s.', {'N': 'Newton is force.', 'J': 'Joule is energy.', 'W': 'Watt is power.'}],
    ['e', 'Momentum is a ... quantity.', ['Vector', 'Scalar', 'Both', 'Neither'], 'It follows the direction of the velocity.'],
    ['m', 'Conservation of momentum applies when?', ['No external force acts', 'Friction is large', 'The objects are at rest', 'Mass changes'], 'A closed system keeps its total momentum.'],
    ['m', 'In an ELASTIC collision, what is conserved?', ['Momentum & kinetic energy', 'Momentum only', 'Kinetic energy only', 'Neither'], 'Elastic collisions keep both quantities.'],
    ['m', 'In an INELASTIC collision, what is conserved?', ['Momentum only', 'Kinetic energy only', 'Both', 'Neither'], 'Some kinetic energy becomes heat and sound.'],
    ['e', 'Total momentum before a collision equals?', ['Total momentum after', 'Zero', 'Total kinetic energy', 'Half of the after value'], 'That is the principle of conservation of momentum.'],
    ['e', 'A rocket moves forward because gas is pushed?', ['Backwards', 'Forwards', 'Upwards', 'Sideways'], 'Equal and opposite momentum is given to the rocket.'],
    ['m', 'Greater momentum: 1000 kg at 10 m/s or 2000 kg at 5 m/s?', ['They are equal', 'The 1000 kg car', 'The 2000 kg lorry', 'Cannot be compared'], 'Both give p = 10 000 kg m/s.'],
    ['h', 'm = 2 kg, v = 4 m/s. Momentum?', ['8 kg m/s', '2 kg m/s', '6 kg m/s', '0.5 kg m/s'], 'p = mv = 2 × 4 = 8 kg m/s.', {'6 kg m/s': 'You added instead of multiplying.', '0.5 kg m/s': 'You divided instead of multiplying.'}],
    ['h', 'm = 0.5 kg, v = 10 m/s. Momentum?', ['5 kg m/s', '20 kg m/s', '10 kg m/s', '0.05 kg m/s'], 'p = 0.5 × 10 = 5 kg m/s.'],
    ['h', 'p = 12 kg m/s, m = 3 kg. Velocity?', ['4 m/s', '36 m/s', '9 m/s', '0.25 m/s'], 'v = p ÷ m = 12 ÷ 3 = 4 m/s.'],
    ['h', '2 kg at 3 m/s hits a still 1 kg and they stick. Speed?', ['2 m/s', '3 m/s', '1.5 m/s', '6 m/s'], 'p = 6 kg m/s shared by 3 kg gives 2 m/s.', {'3 m/s': 'Share the momentum over the TOTAL 3 kg.', '6 m/s': '6 kg m/s is the momentum, not the speed.'}],
    ['h', 'At rest, 2 kg flies right at 3 m/s. A 3 kg flies left at?', ['2 m/s', '3 m/s', '4.5 m/s', '1 m/s'], 'Momentum stays 0: 2 × 3 = 3 × v, so v = 2 m/s.'],
    ['h', 'm = 60 kg, v = 5 m/s. Momentum?', ['300 kg m/s', '65 kg m/s', '12 kg m/s', '30 kg m/s'], 'p = 60 × 5 = 300 kg m/s.']
  ]);

  /* ---------- 7. IMPULSE AND IMPULSIVE FORCE ---------- */
  G('Momentum & Impulse', 'Impulse and Impulsive Force', [
    ['e', 'Impulse is equal to the change in?', ['Momentum', 'Energy', 'Mass', 'Velocity'], 'Impulse = mv − mu = change in momentum.', {'Energy': 'Impulse changes momentum, not energy.', 'Velocity': 'Velocity change alone ignores the mass.'}],
    ['e', 'SI unit of impulse?', ['N s', 'N', 'J', 'kg'], 'Impulse = force × time, so N s (= kg m/s).', {'N': 'Impulse is force × TIME, so N s.', 'J': 'Joule is energy.'}],
    ['e', 'Impulse formula?', ['Impulse = F × t', 'Impulse = F ÷ t', 'Impulse = m × a', 'Impulse = ½mv²'], 'Force multiplied by the time it acts.'],
    ['m', 'Impulsive force formula?', ['F = (mv − mu) ÷ t', 'F = mv × t', 'F = m ÷ t', 'F = mgh'], 'Rate of change of momentum.'],
    ['m', 'A LONGER collision time gives?', ['A smaller impulsive force', 'A larger impulsive force', 'The same force', 'Zero force'], 'Same momentum change spread over more time.', {'A larger impulsive force': 'More time means LESS force for the same change.'}],
    ['e', 'Airbags reduce injury by?', ['Increasing collision time', 'Increasing the force', 'Reducing your mass', 'Increasing momentum'], 'More time means a smaller impulsive force.', {'Increasing the force': 'They REDUCE the force by extending the time.'}],
    ['m', 'Crumple zones work by?', ['Increasing impact time', 'Making the car stiffer', 'Increasing momentum', 'Reducing the car mass'], 'They deform, extending the collision time.'],
    ['m', 'Why do helmets have soft padding?', ['To increase impact time', 'To increase the force', 'To add momentum', 'To reduce your mass'], 'Padding lengthens the impact, cutting the force.'],
    ['m', 'A high jumper lands on a thick mattress to?', ['Increase time, reduce force', 'Increase the force', 'Increase momentum', 'Increase impulse'], 'A soft landing spreads the stop over more time.'],
    ['e', 'Impulsive force is LARGE when collision time is?', ['Short', 'Long', 'Zero', 'Constant'], 'F = change in momentum ÷ t, so small t gives big F.'],
    ['m', 'A karate expert breaks a board using?', ['Large force, short time', 'Small force, long time', 'Zero impulse', 'Constant velocity'], 'Very short contact time gives a huge force.'],
    ['e', 'Impulse is a ... quantity.', ['Vector', 'Scalar', 'Both', 'Neither'], 'It has the direction of the force applied.'],
    ['h', 'm = 2 kg, 0 to 5 m/s in 0.5 s. Impulsive force?', ['20 N', '10 N', '5 N', '2.5 N'], 'Change in p = 10 kg m/s; F = 10 ÷ 0.5 = 20 N.'],
    ['h', 'A 3 kg body changes from 4 m/s to 0. Impulse?', ['12 N s', '3 N s', '4 N s', '0 N s'], 'Impulse = mv − mu = 0 − 12 = 12 N s in size.'],
    ['h', 'F = 50 N acting for 0.2 s. Impulse?', ['10 N s', '250 N s', '0.004 N s', '50 N s'], 'Impulse = Ft = 50 × 0.2 = 10 N s.']
  ]);

  /* ---------- 9. NEWTON'S GRAVITATIONAL FORCE ---------- */
  G('Gravitation & Kepler', 'Gravitational Force', [
    ['e', 'Gravitational force between two masses is?', ['Always attractive', 'Always repulsive', 'Sometimes repulsive', 'Always zero'], 'Gravity only ever pulls objects together.'],
    ['e', 'Newton’s law of universal gravitation?', ['F = GMm ÷ r²', 'F = GMm ÷ r', 'F = Gm ÷ r²', 'F = GMmr²'], 'An inverse square law with distance r.'],
    ['m', 'If the distance DOUBLES, the force becomes?', ['One quarter', 'Half', 'Double', 'Four times'], 'Inverse square: 1 ÷ 2² = ¼.', {'Half': 'It is an inverse SQUARE law, so it is a quarter.'}],
    ['m', 'If the distance is HALVED, the force becomes?', ['Four times', 'Double', 'Half', 'One quarter'], 'Inverse square: 1 ÷ (½)² = 4.', {'Double': 'Inverse square: halving r makes it FOUR times.'}],
    ['m', 'If one mass doubles, the force becomes?', ['Double', 'Half', 'Four times', 'Unchanged'], 'F is directly proportional to each mass.'],
    ['e', 'What does G stand for?', ['Gravitational constant', 'Acceleration due to gravity', 'Gravitational field strength', 'Weight'], 'G = 6.67 × 10⁻¹¹ N m² kg⁻², the same everywhere.'],
    ['e', 'Unit of gravitational field strength?', ['N/kg', 'N kg', 'kg/N', 'N m'], 'g = F ÷ m, so newtons per kilogram.'],
    ['e', 'What keeps a satellite in orbit?', ['Gravitational force', 'Magnetic force', 'Friction', 'Air resistance'], 'Gravity supplies the centripetal force.'],
    ['m', 'Gravitational force is strongest when objects are?', ['Massive and close', 'Light and close', 'Massive and far', 'Light and far'], 'F increases with mass and decreases with distance.'],
    ['m', 'Centripetal force on a satellite is provided by?', ['Gravity', 'Friction', 'Tension', 'The normal force'], 'It constantly pulls the satellite towards Earth.'],
    ['h', 'Weight of 10 kg where g = 1.6 N/kg (Moon)?', ['16 N', '100 N', '6.25 N', '1.6 N'], 'W = mg = 10 × 1.6 = 16 N.'],
    ['h', 'Distance is tripled. Gravitational force becomes?', ['One ninth', 'One third', 'Three times', 'Nine times'], 'Inverse square: 1 ÷ 3² = 1/9.']
  ]);

  /* ---------- 10. KEPLER'S LAWS ---------- */
  G('Gravitation & Kepler', 'Kepler’s Laws', [
    ['e', 'Kepler I: planets orbit the Sun in?', ['Ellipses', 'Perfect circles', 'Straight lines', 'Spirals'], 'The orbit is an ellipse, not a circle.', {'Perfect circles': 'Orbits are ellipses; a circle is only a special case.'}],
    ['e', 'In Kepler I, the Sun sits at?', ['One focus of the ellipse', 'The exact centre', 'Outside the orbit', 'Both foci at once'], 'The Sun occupies one of the two foci.'],
    ['e', 'Kepler II is about?', ['Equal areas in equal times', 'T² ∝ r³', 'Elliptical orbits', 'F = GMm ÷ r²'], 'The line to the Sun sweeps equal areas.'],
    ['m', 'A planet moves FASTEST when it is?', ['Nearest the Sun', 'Farthest from the Sun', 'At constant speed', 'At the empty focus'], 'Equal areas in equal times demands this.', {'Farthest from the Sun': 'Equal areas means it speeds up when NEAR the Sun.'}],
    ['e', 'Kepler III formula?', ['T² ∝ r³', 'T ∝ r', 'T³ ∝ r²', 'T² ∝ r'], 'Period squared is proportional to radius cubed.'],
    ['m', 'A planet farther from the Sun has a period that is?', ['Longer', 'Shorter', 'The same', 'Zero'], 'T² ∝ r³, so bigger r means bigger T.'],
    ['e', 'The law of areas is Kepler’s?', ['Second Law', 'First Law', 'Third Law', 'Fourth Law'], 'Kepler II is the law of equal areas.'],
    ['e', 'Kepler’s laws describe?', ['Planetary motion', 'Wave motion', 'Heat transfer', 'Electric current'], 'They describe how planets orbit the Sun.'],
    ['m', 'Kepler III links the period to?', ['Orbital radius', 'Planet mass', 'Planet colour', 'Number of moons'], 'Only the orbital radius matters.'],
    ['h', 'Planet A: r = 1 AU, T = 1 yr. Planet B: r = 4 AU. T?', ['8 years', '4 years', '16 years', '2 years'], 'T² = r³, so T = √(4³) = 8 years.'],
    ['h', 'A planet has r = 9 times Earth’s. Its period?', ['27 years', '9 years', '81 years', '3 years'], 'T = √(9³) = √729 = 27 years.']
  ]);

})(window.PFR.Bank.G);
