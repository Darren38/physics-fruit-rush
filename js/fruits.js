/* =====================================================================
   PHYSICS FRUIT RUSH  --  FRUIT ARTWORK
   ---------------------------------------------------------------------
   All fruit is drawn procedurally on the canvas. Nothing is copied from
   any existing game - these are original shapes built from arcs and
   beziers, with a deliberately Malaysian fruit bowl (mango, starfruit,
   rambutan, dragonfruit) alongside the classics.

   The one rule that matters for the classroom: THE FRUIT ROTATES, THE
   ANSWER LABEL DOES NOT. Spinning text is unreadable, so the label is
   drawn upright on a high-contrast plate after the body is rotated.
   ===================================================================== */

(function (global) {
  'use strict';

  /* ---------------------------------------------------------------
     Fruit definitions. `flesh` is the colour of the cut face that
     shows when the fruit is sliced in half.
     --------------------------------------------------------------- */
  var TYPES = {
    apple:       { skin: ['#ff6b6b', '#c62828'], flesh: '#fff3d6', seed: '#6d4c41' },
    orange:      { skin: ['#ffb74d', '#ef6c00'], flesh: '#ffd08a', seed: '#e65100' },
    watermelon:  { skin: ['#66bb6a', '#1b5e20'], flesh: '#ff5d73', seed: '#2e2e2e' },
    banana:      { skin: ['#ffe066', '#f9a825'], flesh: '#fff6c9', seed: '#8d6e63' },
    pineapple:   { skin: ['#ffd54f', '#e08c1a'], flesh: '#ffe9a3', seed: '#8d6e63' },
    kiwi:        { skin: ['#c8a48c', '#7a5341'], flesh: '#9ccc65', seed: '#2e2e2e' },
    strawberry:  { skin: ['#ff5c7a', '#c2185b'], flesh: '#ffd0dc', seed: '#ffe082' },
    mango:       { skin: ['#ffd24a', '#e2571e'], flesh: '#ffc046', seed: '#c77800' },
    starfruit:   { skin: ['#f3e05a', '#c0a800'], flesh: '#f7f0a0', seed: '#8a7a00' },
    rambutan:    { skin: ['#ff5252', '#b71c1c'], flesh: '#f7f3e8', seed: '#5d4037' },
    dragonfruit: { skin: ['#ff5fa2', '#a3115f'], flesh: '#fdf6f8', seed: '#212121' }
  };

  var TYPE_LIST = Object.keys(TYPES);

  /* ---------------------------------------------------------------
     Shape helpers
     --------------------------------------------------------------- */

  function skinFill(ctx, r, def) {
    var g = ctx.createRadialGradient(-r * 0.32, -r * 0.36, r * 0.12, 0, 0, r * 1.12);
    g.addColorStop(0, def.skin[0]);
    g.addColorStop(1, def.skin[1]);
    return g;
  }

  function gloss(ctx, r) {
    ctx.beginPath();
    ctx.ellipse(-r * 0.34, -r * 0.40, r * 0.26, r * 0.16, -0.6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fill();
  }

  function outline(ctx, r) {
    ctx.lineWidth = Math.max(1.5, r * 0.055);
    ctx.strokeStyle = 'rgba(10,14,26,0.45)';
    ctx.stroke();
  }

  function leaf(ctx, r, dx, dy, angle, scale) {
    ctx.save();
    ctx.translate(dx, dy);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.ellipse(r * 0.28 * scale, 0, r * 0.30 * scale, r * 0.13 * scale, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#4caf50';
    ctx.fill();
    ctx.strokeStyle = 'rgba(20,60,20,0.5)';
    ctx.lineWidth = Math.max(1, r * 0.03);
    ctx.stroke();
    ctx.restore();
  }

  function stalk(ctx, r) {
    ctx.beginPath();
    ctx.lineWidth = Math.max(2, r * 0.09);
    ctx.strokeStyle = '#6d4c41';
    ctx.lineCap = 'round';
    ctx.moveTo(0, -r * 0.82);
    ctx.quadraticCurveTo(r * 0.06, -r * 1.06, r * 0.18, -r * 1.14);
    ctx.stroke();
  }

  /* ---------------------------------------------------------------
     Individual fruit bodies. Each draws centred on (0,0) with the
     given radius r, in the fruit's own rotated frame.
     --------------------------------------------------------------- */
  var BODY = {

    apple: function (ctx, r, def) {
      ctx.beginPath();
      ctx.moveTo(0, -r * 0.72);
      ctx.bezierCurveTo(-r * 0.42, -r * 1.06, -r * 1.06, -r * 0.62, -r * 1.00, r * 0.06);
      ctx.bezierCurveTo(-r * 0.95, r * 0.80, -r * 0.36, r * 1.04, 0, r * 0.86);
      ctx.bezierCurveTo(r * 0.36, r * 1.04, r * 0.95, r * 0.80, r * 1.00, r * 0.06);
      ctx.bezierCurveTo(r * 1.06, -r * 0.62, r * 0.42, -r * 1.06, 0, -r * 0.72);
      ctx.closePath();
      ctx.fillStyle = skinFill(ctx, r, def);
      ctx.fill();
      outline(ctx, r);
      stalk(ctx, r);
      leaf(ctx, r, r * 0.10, -r * 0.92, -0.5, 1);
      gloss(ctx, r);
    },

    orange: function (ctx, r, def) {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = skinFill(ctx, r, def);
      ctx.fill();
      outline(ctx, r);
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = '#7f3d00';
      for (var i = 0; i < 14; i++) {
        var a = (i / 14) * Math.PI * 2 + 0.4;
        var d = r * (0.30 + (i % 3) * 0.20);
        ctx.beginPath();
        ctx.arc(Math.cos(a) * d, Math.sin(a) * d, r * 0.05, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.beginPath();
      ctx.arc(0, -r * 0.86, r * 0.11, 0, Math.PI * 2);
      ctx.fillStyle = '#7d5a1f';
      ctx.fill();
      gloss(ctx, r);
    },

    watermelon: function (ctx, r, def) {
      ctx.beginPath();
      ctx.ellipse(0, 0, r, r * 0.94, 0, 0, Math.PI * 2);
      ctx.fillStyle = skinFill(ctx, r, def);
      ctx.fill();
      outline(ctx, r);
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, 0, r, r * 0.94, 0, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = 'rgba(20,70,20,0.75)';
      ctx.lineWidth = r * 0.16;
      for (var i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(i * r * 0.42, -r);
        ctx.quadraticCurveTo(i * r * 0.42 + r * 0.16, 0, i * r * 0.42, r);
        ctx.stroke();
      }
      ctx.restore();
      gloss(ctx, r);
    },

    banana: function (ctx, r, def) {
      ctx.beginPath();
      ctx.moveTo(-r * 0.88, -r * 0.62);
      ctx.quadraticCurveTo(0, r * 1.36, r * 0.88, -r * 0.62);
      ctx.quadraticCurveTo(r * 0.80, -r * 0.44, r * 0.58, -r * 0.30);
      ctx.quadraticCurveTo(0, r * 0.30, -r * 0.58, -r * 0.30);
      ctx.quadraticCurveTo(-r * 0.80, -r * 0.44, -r * 0.88, -r * 0.62);
      ctx.closePath();
      var g = ctx.createLinearGradient(0, -r * 0.6, 0, r * 0.5);
      g.addColorStop(0, def.skin[0]);
      g.addColorStop(1, def.skin[1]);
      ctx.fillStyle = g;
      ctx.fill();
      outline(ctx, r);
      ctx.beginPath();
      ctx.arc(-r * 0.88, -r * 0.62, r * 0.11, 0, Math.PI * 2);
      ctx.fillStyle = '#6d4c41';
      ctx.fill();
    },

    pineapple: function (ctx, r, def) {
      ctx.save();
      ctx.strokeStyle = '#43a047';
      ctx.lineWidth = Math.max(2, r * 0.11);
      ctx.lineCap = 'round';
      for (var k = -2; k <= 2; k++) {
        ctx.beginPath();
        ctx.moveTo(k * r * 0.10, -r * 0.72);
        ctx.lineTo(k * r * 0.30, -r * 1.24);
        ctx.stroke();
      }
      ctx.restore();
      ctx.beginPath();
      ctx.ellipse(0, r * 0.06, r * 0.80, r * 0.98, 0, 0, Math.PI * 2);
      ctx.fillStyle = skinFill(ctx, r, def);
      ctx.fill();
      outline(ctx, r);
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, r * 0.06, r * 0.80, r * 0.98, 0, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = 'rgba(140,90,10,0.55)';
      ctx.lineWidth = Math.max(1, r * 0.045);
      for (var i = -4; i <= 4; i++) {
        ctx.beginPath(); ctx.moveTo(-r + i * r * 0.34, -r); ctx.lineTo(r + i * r * 0.34, r); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-r + i * r * 0.34, r); ctx.lineTo(r + i * r * 0.34, -r); ctx.stroke();
      }
      ctx.restore();
      gloss(ctx, r);
    },

    kiwi: function (ctx, r, def) {
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 0.98, r * 0.80, 0, 0, Math.PI * 2);
      ctx.fillStyle = skinFill(ctx, r, def);
      ctx.fill();
      outline(ctx, r);
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 0.98, r * 0.80, 0, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = 'rgba(255,255,255,0.22)';
      ctx.lineWidth = Math.max(1, r * 0.03);
      for (var i = 0; i < 26; i++) {
        var a = (i / 26) * Math.PI * 2;
        var d = r * (0.35 + (i % 4) * 0.16);
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * d, Math.sin(a) * d * 0.8);
        ctx.lineTo(Math.cos(a) * (d + r * 0.12), Math.sin(a) * (d + r * 0.12) * 0.8);
        ctx.stroke();
      }
      ctx.restore();
    },

    strawberry: function (ctx, r, def) {
      ctx.beginPath();
      ctx.moveTo(0, r * 1.02);
      ctx.bezierCurveTo(-r * 0.86, r * 0.34, -r * 0.94, -r * 0.62, -r * 0.16, -r * 0.76);
      ctx.bezierCurveTo(r * 0.10, -r * 0.80, r * 0.94, -r * 0.62, r * 0.86, r * 0.34);
      ctx.bezierCurveTo(r * 0.60, r * 0.70, r * 0.30, r * 0.90, 0, r * 1.02);
      ctx.closePath();
      ctx.fillStyle = skinFill(ctx, r, def);
      ctx.fill();
      outline(ctx, r);
      ctx.fillStyle = def.seed;
      for (var i = 0; i < 12; i++) {
        var a = (i / 12) * Math.PI * 2;
        var d = r * (0.30 + (i % 3) * 0.18);
        ctx.save();
        ctx.translate(Math.cos(a) * d, Math.sin(a) * d * 0.9 + r * 0.06);
        ctx.rotate(a);
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 0.06, r * 0.035, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      leaf(ctx, r, -r * 0.06, -r * 0.72, -2.5, 0.9);
      leaf(ctx, r, r * 0.06, -r * 0.72, -0.7, 0.9);
      leaf(ctx, r, 0, -r * 0.78, -1.6, 0.8);
      gloss(ctx, r);
    },

    mango: function (ctx, r, def) {
      ctx.save();
      ctx.rotate(-0.35);
      ctx.beginPath();
      ctx.moveTo(-r * 0.86, -r * 0.10);
      ctx.bezierCurveTo(-r * 0.80, -r * 0.92, r * 0.44, -r * 1.00, r * 0.86, -r * 0.28);
      ctx.bezierCurveTo(r * 1.12, r * 0.30, r * 0.30, r * 0.98, -r * 0.24, r * 0.78);
      ctx.bezierCurveTo(-r * 0.66, r * 0.62, -r * 0.90, r * 0.36, -r * 0.86, -r * 0.10);
      ctx.closePath();
      var g = ctx.createLinearGradient(-r * 0.6, -r * 0.6, r * 0.7, r * 0.7);
      g.addColorStop(0, def.skin[0]);
      g.addColorStop(1, def.skin[1]);
      ctx.fillStyle = g;
      ctx.fill();
      outline(ctx, r);
      ctx.restore();
      gloss(ctx, r);
    },

    starfruit: function (ctx, r, def) {
      ctx.beginPath();
      for (var i = 0; i < 10; i++) {
        var a = (i / 10) * Math.PI * 2 - Math.PI / 2;
        var rad = (i % 2 === 0) ? r : r * 0.44;
        var px = Math.cos(a) * rad, py = Math.sin(a) * rad;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = skinFill(ctx, r, def);
      ctx.fill();
      outline(ctx, r);
      gloss(ctx, r);
    },

    rambutan: function (ctx, r, def) {
      ctx.save();
      ctx.strokeStyle = '#2e7d32';
      ctx.lineWidth = Math.max(1.5, r * 0.055);
      ctx.lineCap = 'round';
      for (var i = 0; i < 18; i++) {
        var a = (i / 18) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * r * 0.72, Math.sin(a) * r * 0.72);
        ctx.quadraticCurveTo(
          Math.cos(a + 0.3) * r * 1.02, Math.sin(a + 0.3) * r * 1.02,
          Math.cos(a + 0.5) * r * 1.14, Math.sin(a + 0.5) * r * 1.14
        );
        ctx.stroke();
      }
      ctx.restore();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.74, 0, Math.PI * 2);
      ctx.fillStyle = skinFill(ctx, r * 0.74, def);
      ctx.fill();
      outline(ctx, r * 0.74);
      gloss(ctx, r * 0.8);
    },

    dragonfruit: function (ctx, r, def) {
      ctx.save();
      ctx.fillStyle = '#7cb342';
      for (var i = 0; i < 8; i++) {
        var a = (i / 8) * Math.PI * 2 + 0.2;
        ctx.save();
        ctx.rotate(a);
        ctx.beginPath();
        ctx.moveTo(0, -r * 0.60);
        ctx.quadraticCurveTo(r * 0.30, -r * 0.98, r * 0.06, -r * 1.20);
        ctx.quadraticCurveTo(-r * 0.16, -r * 0.94, 0, -r * 0.60);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 0.84, r * 0.94, 0, 0, Math.PI * 2);
      ctx.fillStyle = skinFill(ctx, r, def);
      ctx.fill();
      outline(ctx, r * 0.9);
      gloss(ctx, r * 0.85);
    }
  };

  /* Draw the whole, unsliced fruit body. */
  function body(ctx, r, type) {
    var def = TYPES[type] || TYPES.apple;
    (BODY[type] || BODY.apple)(ctx, r, def);
  }

  /* ---------------------------------------------------------------
     Public drawing calls
     --------------------------------------------------------------- */

  function drawWhole(ctx, x, y, r, rot, type, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.translate(x, y);
    ctx.shadowColor = 'rgba(0,0,0,0.45)';
    ctx.shadowBlur = r * 0.35;
    ctx.shadowOffsetY = r * 0.10;
    ctx.rotate(rot);
    body(ctx, r, type);
    ctx.restore();
  }

  /* One half of a sliced fruit. `side` is +1 or -1 relative to the
     cutting line, which runs at `sliceAngle`. */
  function drawHalf(ctx, x, y, r, rot, type, sliceAngle, side, alpha) {
    var def = TYPES[type] || TYPES.apple;
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.translate(x, y);
    ctx.rotate(sliceAngle);

    ctx.save();
    ctx.beginPath();
    if (side > 0) ctx.rect(-r * 2, 0, r * 4, r * 2.4);
    else ctx.rect(-r * 2, -r * 2.4, r * 4, r * 2.4);
    ctx.clip();
    ctx.rotate(rot - sliceAngle);
    body(ctx, r, type);
    ctx.restore();

    /* Wet cut face */
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 0.90, r * 0.30, 0,
      side > 0 ? 0 : Math.PI, side > 0 ? Math.PI : Math.PI * 2);
    ctx.fillStyle = def.flesh;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.18)';
    ctx.lineWidth = Math.max(1, r * 0.035);
    ctx.stroke();
    ctx.restore();
  }

  /* The bomb: a hazard that appears at Fast and Insane. Deliberately
     NOT fruit-coloured and marked with a cross, so it never reads as a
     possible answer and never relies on colour alone. */
  function drawBomb(ctx, x, y, r, rot, t, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.translate(x, y);
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur = r * 0.4;
    ctx.rotate(rot);

    var g = ctx.createRadialGradient(-r * 0.3, -r * 0.35, r * 0.1, 0, 0, r);
    g.addColorStop(0, '#5a6472');
    g.addColorStop(1, '#161b26');
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.86, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.lineWidth = Math.max(2, r * 0.07);
    ctx.strokeStyle = '#ff5252';
    ctx.stroke();

    /* fuse */
    ctx.beginPath();
    ctx.lineWidth = Math.max(2, r * 0.08);
    ctx.strokeStyle = '#8d6e63';
    ctx.lineCap = 'round';
    ctx.moveTo(r * 0.34, -r * 0.74);
    ctx.quadraticCurveTo(r * 0.70, -r * 1.02, r * 0.56, -r * 1.24);
    ctx.stroke();
    var flick = 0.7 + Math.sin(t * 22) * 0.3;
    ctx.beginPath();
    ctx.arc(r * 0.56, -r * 1.26, r * 0.16 * flick, 0, Math.PI * 2);
    ctx.fillStyle = '#ffb300';
    ctx.fill();

    ctx.restore();

    /* Upright warning cross so the hazard is readable while spinning */
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.translate(x, y);
    ctx.strokeStyle = '#ff8a80';
    ctx.lineWidth = Math.max(3, r * 0.14);
    ctx.lineCap = 'round';
    var s = r * 0.30;
    ctx.beginPath();
    ctx.moveTo(-s, -s); ctx.lineTo(s, s);
    ctx.moveTo(s, -s); ctx.lineTo(-s, s);
    ctx.stroke();
    ctx.restore();
  }

  /* ---------------------------------------------------------------
     Answer labels
     Wrapped, auto-shrunk, drawn upright on a dark plate so the text
     stays readable against every fruit colour and while moving.
     --------------------------------------------------------------- */

  var LETTER = /[A-Za-z]/;
  var VOWEL = /[AEIOUaeiou]/;

  /* Where a line may break: at every space, and after a hyphen that sits
     between two letters - "Kedua-|duanya", "Short-|sightedness". A hyphen
     beside a digit or a symbol is notation and is left alone. Each piece
     records whether a space followed it, so an unbroken line rejoins
     exactly as written. */
  function pieces(text) {
    var out = [];
    var words = String(text).split(' ');
    for (var i = 0; i < words.length; i++) {
      var w = words[i], start = 0;
      for (var j = 1; j < w.length - 1; j++) {
        if (w.charAt(j) === '-' && LETTER.test(w.charAt(j - 1)) && LETTER.test(w.charAt(j + 1))) {
          out.push({ t: w.slice(start, j + 1), sp: false });
          start = j + 1;
        }
      }
      out.push({ t: w.slice(start), sp: true });
    }
    return out;
  }

  function wrapToLines(ctx, text, maxWidth, maxLines) {
    var P = pieces(text);
    var lines = [];
    var line = '', joinSp = false;
    for (var i = 0; i < P.length; i++) {
      var probe = line ? line + (joinSp ? ' ' : '') + P[i].t : P[i].t;
      if (ctx.measureText(probe).width <= maxWidth || !line) {
        line = probe;
      } else {
        lines.push(line);
        line = P[i].t;
        if (lines.length === maxLines) return null;   // does not fit
      }
      joinSp = P[i].sp;
    }
    if (line) lines.push(line);
    if (lines.length > maxLines) return null;
    for (var k = 0; k < lines.length; k++) {
      if (ctx.measureText(lines[k]).width > maxWidth) return null;
    }
    return lines;
  }

  var PAD_X = 0.45;   // horizontal padding, as a fraction of the font size

  /* Greedy wrap that is allowed to break INSIDE a word. Used only as the
     last resort, and it is what makes an over-wide plate impossible: every
     line it returns fits the budget, so the plate can grow taller but never
     wider than the lane it lives in. */
  /* Letter pairs that are one sound and must not be split: me|ngu, pe|nyu,
     not men|gu. Covers Malay (ng ny sy kh gh) and common English ones. */
  var DIGRAPH = { ng: 1, ny: 1, sy: 1, kh: 1, gh: 1, ch: 1, sh: 1, th: 1, ph: 1, wh: 1, ck: 1 };

  /* Is w[0..i) | w[i..] a syllable-like place to break? Before a consonant
     that opens a syllable (pe|cu|tan, place|ment, rang|kan), or before a
     digraph that does (me|nyah). Malay syllabifies very regularly, so this
     is close to how a BM textbook would hyphenate; for English it is an
     acceptable last resort. */
  function goodBreak(w, i) {
    var a = w.charAt(i - 1), b = w.charAt(i), c = w.charAt(i + 1), d = w.charAt(i + 2);
    if (!LETTER.test(a) || !LETTER.test(b) || VOWEL.test(b)) return false;
    var ab = (a + b).toLowerCase(), bc = (b + c).toLowerCase();
    if (DIGRAPH[ab]) return false;                        // inside ng / ny ...
    if (VOWEL.test(c)) return true;                       // before C + vowel
    return !!DIGRAPH[bc] && VOWEL.test(d);                // before a digraph + vowel
  }

  /* Where to break a word too wide for its line. Prefers a syllable
     boundary and keeps at least three letters on each side, falling back
     step by step so that SOMETHING always fits. Between two letters the
     break gets a hyphen, as in print; inside a number or a formula it does
     not, because "1/u -" would read as a minus sign. */
  function forcedCut(ctx, w, maxWidth) {
    function shown(cut) {
      var head = w.slice(0, cut);
      var hyph = LETTER.test(w.charAt(cut - 1)) && LETTER.test(w.charAt(cut));
      return hyph ? head + '-' : head;
    }
    function fits(cut) { return ctx.measureText(shown(cut)).width <= maxWidth; }

    var minSide = w.length >= 6 ? 3 : 1;
    var longest = -1, cut;
    for (cut = w.length - minSide; cut >= minSide; cut--) {
      if (fits(cut)) { longest = cut; break; }
    }
    if (longest > 0) {
      /* A syllable break a little earlier beats a raw break at the edge. */
      for (cut = longest; cut >= Math.max(minSide, longest - 3); cut--) {
        if (goodBreak(w, cut)) return { cut: cut, head: shown(cut) };
      }
      return { cut: longest, head: shown(longest) };
    }
    for (cut = w.length - 1; cut >= 1; cut--) {
      if (fits(cut)) return { cut: cut, head: shown(cut) };
    }
    return { cut: 1, head: w.charAt(0) };
  }

  function greedyWrap(ctx, text, maxWidth) {
    var P = pieces(text);
    var lines = [], line = '', joinSp = false, split = false;
    for (var i = 0; i < P.length; i++) {
      var w = P[i].t;

      while (ctx.measureText(w).width > maxWidth && w.length > 1) {
        var c = forcedCut(ctx, w, maxWidth);
        if (line) { lines.push(line); line = ''; }
        lines.push(c.head);
        w = w.slice(c.cut);
        split = true;
      }

      var probe = line ? line + (joinSp ? ' ' : '') + w : w;
      if (!line || ctx.measureText(probe).width <= maxWidth) line = probe;
      else { lines.push(line); line = w; }
      joinSp = P[i].sp;
    }
    if (line) lines.push(line);
    lines.split = split;
    return lines;
  }

  /* Greedy wrapping fills each line to the brim, which leaves ugly orphans:
     "0.004 N s" came out as "0.004 N" / "s". Squeezing the width down as far
     as it will go WITHOUT needing an extra line gives a balanced break
     ("0.004" / "N s") instead. Never widens, so it cannot cause overflow. */
  function balance(ctx, text, budget, lines) {
    if (lines.length < 2) return lines;
    var lo = 0, hi = budget, best = lines;
    for (var step = 0; step < 12; step++) {
      var mid = (lo + hi) / 2;
      var tryLines = wrapToLines(ctx, text, mid, lines.length);
      if (tryLines && tryLines.length <= lines.length) { best = tryLines; hi = mid; }
      else lo = mid;
    }
    return best;
  }

  /* `plateWidth` is the width of the whole label plate, padding included.
     Sizing only the text would let a two-character pad push the plate past
     its lane and cover the neighbouring answer, so the padding is part of
     the budget at every candidate size.

     The old version gave up after `maxLines` and returned the text as ONE
     unwrapped line, which is how "Sound has a longer wavelength" ended up
     on a plate half again wider than its lane, sitting on top of the fruit
     next door. The fallback now wraps instead of overflowing. */
  function fitLabel(ctx, text, plateWidth, maxLines, startSize, minSize) {
    var size = startSize;
    while (size >= minSize) {
      var budget = plateWidth - 2 * (size * PAD_X);
      if (budget > size * 0.9) {
        ctx.font = '800 ' + size.toFixed(1) + 'px ' + LABEL_FONT;
        var lines = wrapToLines(ctx, text, budget, maxLines);
        if (lines) return { lines: balance(ctx, text, budget, lines), size: size };
      }
      size -= 1;
    }
    ctx.font = '800 ' + minSize.toFixed(1) + 'px ' + LABEL_FONT;
    var last = Math.max(minSize, plateWidth - 2 * (minSize * PAD_X));
    var forced = greedyWrap(ctx, text, last);
    return { lines: forced, size: minSize, split: !!forced.split };
  }

  var LABEL_FONT = '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

  function roundRect(ctx, x, y, w, h, rad) {
    var rr = Math.min(rad, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  /* opts: { alpha, highlight: 'none'|'correct'|'wrong' } */
  /* Fitting a label is a small search - several font sizes, a wrap at
     each, then a balancing pass - and v3 ran it for every fruit on every
     frame. Its inputs cannot change while a fruit is in the air, so v4
     remembers the result. Longer Bahasa Melayu labels made that worth
     doing; English labels get cheaper too. */
  var LAYOUTS = {}, LAYOUT_COUNT = 0;

  function labelLayout(ctx, text, maxWidth, r) {
    var k = text + '\u0001' + maxWidth.toFixed(1) + '\u0001' + r.toFixed(1);
    if (Object.prototype.hasOwnProperty.call(LAYOUTS, k)) return LAYOUTS[k];
    var fit = fitLabel(ctx, text, maxWidth, 3, Math.max(11, r * 0.40), Math.max(9, r * 0.20));
    ctx.font = '800 ' + fit.size.toFixed(1) + 'px ' + LABEL_FONT;
    var textW = 0;
    for (var i = 0; i < fit.lines.length; i++) {
      textW = Math.max(textW, ctx.measureText(fit.lines[i]).width);
    }
    var res = {
      lines: fit.lines, size: fit.size, textW: textW,
      plateW: textW + 2 * fit.size * PAD_X,
      split: !!fit.split            // true only if a word had to be broken
    };
    if (LAYOUT_COUNT > 500) { LAYOUTS = {}; LAYOUT_COUNT = 0; }
    LAYOUTS[k] = res;
    LAYOUT_COUNT++;
    return res;
  }

  function drawLabel(ctx, x, y, r, text, opts) {
    opts = opts || {};
    var maxWidth = opts.maxWidth || r * 1.95;
    var fit = labelLayout(ctx, text, maxWidth, r);
    var lineH = fit.size * 1.10;
    var padX = fit.size * PAD_X;
    var padY = fit.size * 0.26;

    var textW = fit.textW;
    var boxW = textW + padX * 2;
    var boxH = lineH * fit.lines.length + padY * 2;

    ctx.save();
    ctx.globalAlpha = opts.alpha === undefined ? 1 : opts.alpha;
    ctx.translate(x, y);

    var border = 'rgba(255,255,255,0.42)';
    var bg = 'rgba(8,12,22,0.86)';
    if (opts.highlight === 'correct') { border = '#7bff9b'; bg = 'rgba(6,52,24,0.92)'; }
    else if (opts.highlight === 'wrong') { border = '#ff8a80'; bg = 'rgba(60,8,14,0.92)'; }

    ctx.shadowColor = 'rgba(0,0,0,0.55)';
    ctx.shadowBlur = 10;
    roundRect(ctx, -boxW / 2, -boxH / 2, boxW, boxH, fit.size * 0.5);
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.lineWidth = Math.max(1.5, fit.size * 0.10);
    ctx.strokeStyle = border;
    ctx.stroke();

    /* Set explicitly: with a cached layout nothing else has set the label
       font this frame, and a score popup may have left a different one. */
    ctx.font = '800 ' + fit.size.toFixed(1) + 'px ' + LABEL_FONT;
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    var startY = -((fit.lines.length - 1) * lineH) / 2;
    for (var j = 0; j < fit.lines.length; j++) {
      ctx.fillText(fit.lines[j], 0, startY + j * lineH);
    }
    ctx.restore();
  }

  global.PFR = global.PFR || {};
  global.PFR.Fruits = {
    types: TYPE_LIST,
    def: function (t) { return TYPES[t] || TYPES.apple; },
    drawWhole: drawWhole,
    drawHalf: drawHalf,
    drawBomb: drawBomb,
    drawLabel: drawLabel,
    labelLayout: labelLayout,
    PAD_X: PAD_X
  };
})(window);
