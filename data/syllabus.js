/* =====================================================================
   PHYSICS FRUIT RUSH v5  --  SYLLABUS
   ---------------------------------------------------------------------
   New in v5. The declared curriculum: for every Form, its topic groups
   (the chips on the setup screen) and the fine topics inside each group
   (what mastery is tracked on).

   This is the SOURCE OF TRUTH the validator checks the question bank
   against. A question whose topic is not listed here for its own Form -
   a typo, or a Form 3 question filed under Form 1 - is reported, never
   silently shown to the wrong class.

   Forms 1-3 follow the school's 2026 Form 1-3 scheme of work (the
   physics-facing units of KSSM Science: Sains Tingkatan 1-3). Form 4 is
   KSSM Fizik Tingkatan 4, unchanged from Version 4. Names are canonical
   English ids; their Bahasa Melayu display names live with each Form's
   translation file. Order here is the order students see.
   ===================================================================== */

(function (global) {
  'use strict';

  var SYLLABUS = {

    1: [
      { group: 'Scientific Investigation', topics: ['Physics in Daily Life', 'Density'] },
      { group: 'Matter', topics: ['States of Matter', 'Pressure', 'Thermal Expansion'] },
      { group: 'Light and Optics', topics: ['Colours of Light', 'Dispersion of Light', 'Mirrors'] },
      { group: 'Earth', topics: ['Structure of the Earth', 'Geohazards', 'Age and Resources of the Earth'] }
    ],

    2: [
      { group: 'Forces', topics: ['Push and Pull', 'Moment of a Force', 'Levers'] },
      { group: 'Electricity and Magnetism', topics: ['Electricity', 'Series and Parallel Circuits', 'Electromagnets'] },
      { group: 'Heat', topics: ['Heat and Temperature', 'Heat Transfer'] },
      { group: 'Sound Waves', topics: ['Sound Waves', 'Uses of Sound'] },
      { group: 'Space', topics: ['Stars and Galaxies', 'Solar System', 'Space Technology'] }
    ],

    3: [
      { group: 'Electricity and Magnetism', topics: ['Renewable Energy', 'Magnetic Fields'] },
      { group: 'Energy and Power', topics: ['Forms of Energy', 'Work and Power', 'Conservation of Energy'] },
      { group: 'Radioactivity', topics: ['Atoms and Isotopes', 'Radiation and Its Uses'] },
      { group: 'Space Weather', topics: ['Activities of the Sun', 'Planets and Orbits'] },
      { group: 'Space Exploration', topics: ['Phases of the Moon', 'Satellites'] }
    ],

    4: [
      { group: 'Physical Quantities', topics: ['Physical Quantities', 'Scalars and Vectors'] },
      { group: 'Linear Motion', topics: ['Linear Motion', 'Free Fall Motion'] },
      { group: 'Forces & Inertia', topics: ['Inertia and Newton I', 'Force and Newton II'] },
      { group: 'Momentum & Impulse', topics: ['Momentum', 'Impulse and Impulsive Force'] },
      { group: 'Gravitation & Kepler', topics: ['Gravitational Force', 'Kepler’s Laws'] },
      { group: 'Heat', topics: ['Specific Heat Capacity', 'Temperature and Thermometers', 'Specific Latent Heat'] },
      { group: 'Gas Laws', topics: ['Gas Laws'] },
      { group: 'Waves', topics: ['Waves', 'Reflection of Waves', 'Damping and Resonance', 'Interference of Waves', 'Diffraction of Waves'] },
      { group: 'Light', topics: ['Reflection of Light', 'Total Internal Reflection', 'Refraction of Light'] },
      { group: 'EM Spectrum', topics: ['Electromagnetic Spectrum'] },
      { group: 'Lenses', topics: ['Concave Lens', 'Convex Lens'] },
      { group: 'Optical Instruments', topics: ['Magnifying Glass', 'Microscope', 'Telescope'] }
    ]
  };

  function forms() {
    var out = [];
    for (var k in SYLLABUS) if (Object.prototype.hasOwnProperty.call(SYLLABUS, k)) out.push(parseInt(k, 10));
    return out.sort();
  }

  function groups(form) {
    return (SYLLABUS[form] || []).map(function (u) { return u.group; });
  }

  function topics(form) {
    var out = [];
    (SYLLABUS[form] || []).forEach(function (u) { out = out.concat(u.topics); });
    return out;
  }

  /* The group a fine topic belongs to, within ONE Form. */
  function groupOf(form, topic) {
    var units = SYLLABUS[form] || [];
    for (var i = 0; i < units.length; i++) {
      if (units[i].topics.indexOf(topic) !== -1) return units[i].group;
    }
    return null;
  }

  global.PFR = global.PFR || {};
  global.PFR.Syllabus = {
    data: SYLLABUS, forms: forms, groups: groups, topics: topics, groupOf: groupOf
  };
})(window);
