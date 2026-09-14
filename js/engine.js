/* =====================================================================
   PHYSICS FRUIT RUSH v4  --  PLAYFIELD ENGINE
   ---------------------------------------------------------------------
   Owns the canvas: fruit flight, slicing, the blade trail and the
   background. It knows nothing about scoring, lives or questions - it
   just launches labelled fruit and reports what got sliced.

   All the "feel" systems (halves, juice, sparks, shake, popups,
   freeze-frame) now live in effects.js. The engine holds one Effects
   instance and asks it to draw behind and in front of the fruit.

   FLIGHT MODEL  (unchanged from v1 - it works)
   Every fruit is launched from just below the bottom edge on a proper
   ballistic arc. Instead of picking a random speed and hoping, gravity is
   DERIVED from the two things that actually matter:

       airtime T  (how long the player is allowed to think)
       apex   A   (how high up the screen the fruit should peak)

           g  = 8A / T^2         v0 = gT / 2

   That guarantees a fruit is never launched off the top of the screen and
   never leaves before the reaction window is over. Speed presets change T,
   so "faster" always means "less thinking time" - never "unreadable".
   ===================================================================== */

(function (global) {
  'use strict';

  var CFG = global.PFR.CONFIG;
  var Fruits = global.PFR.Fruits;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  /* =================================================================
     ENGINE
     ================================================================= */
  function Engine(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.W = 0; this.H = 0; this.dpr = 1;
    this.radius = 60;

    this.fruits = [];       // live, sliceable
    this.trail = [];
    this.fx = new global.PFR.Effects();

    this.time = 0;
    this.combo = 0;         // set by the game layer; drives the fruit aura
    this.bgGlyphs = [];

    this.resize();
  }

  /* ---------------------------------------------------------------
     Sizing
     --------------------------------------------------------------- */
  Engine.prototype.resize = function () {
    var oldW = this.W, oldH = this.H;
    var rect = this.canvas.getBoundingClientRect();
    var w = Math.max(240, Math.round(rect.width));
    var h = Math.max(200, Math.round(rect.height));
    var dpr = Math.min(global.devicePixelRatio || 1, CFG.view.dprCap);

    this.W = w; this.H = h; this.dpr = dpr;
    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.radius = clamp(
      Math.min(w * CFG.view.radiusMinFrac, h * CFG.view.radiusMaxFrac),
      CFG.view.radiusMin, CFG.view.radiusMax
    );

    /* Anything already in flight is carried across to the new box.
       Without this, rotating a tablet mid-question left answers outside
       the new width - unreachable, and an automatic miss. */
    if (oldW > 0 && oldH > 0 && (oldW !== w || oldH !== h)) {
      this.rescale(w / oldW, h / oldH);
    }

    this.buildBackground();
  };

  /* Scaling position, velocity AND gravity by the same factor leaves every
     fruit's airtime unchanged, so a resize never shortens or lengthens the
     thinking time the player was promised. */
  Engine.prototype.rescale = function (sx, sy) {
    var i, f, fx = this.fx;

    for (i = 0; i < this.fruits.length; i++) {
      f = this.fruits[i];
      f.x *= sx; f.y *= sy;
      f.vx *= sx; f.vy *= sy; f.g *= sy;
      f.r *= sx;
      if (f.labelW) f.labelW *= sx;   // bombs carry no label
      f.xMin *= sx; f.xMax *= sx;

      var pad = f.r * 0.6;
      var lo = clamp(f.xMin, pad, Math.max(pad, this.W - pad));
      var hi = clamp(f.xMax, pad, Math.max(pad, this.W - pad));
      if (hi < lo) { lo = hi = clamp((lo + hi) / 2, pad, Math.max(pad, this.W - pad)); }
      f.xMin = lo; f.xMax = hi;
      f.x = clamp(f.x, lo, hi);
    }

    for (i = 0; i < fx.halves.length; i++) {
      fx.halves[i].x *= sx; fx.halves[i].y *= sy;
      fx.halves[i].vx *= sx; fx.halves[i].vy *= sy; fx.halves[i].r *= sx;
    }
    for (i = 0; i < fx.particles.length; i++) { fx.particles[i].x *= sx; fx.particles[i].y *= sy; }
    for (i = 0; i < fx.sparks.length; i++) { fx.sparks[i].x *= sx; fx.sparks[i].y *= sy; }
    for (i = 0; i < fx.popups.length; i++) { fx.popups[i].x *= sx; fx.popups[i].y *= sy; }
    for (i = 0; i < fx.slices.length; i++) { fx.slices[i].x *= sx; fx.slices[i].y *= sy; }
    for (i = 0; i < fx.rings.length; i++) { fx.rings[i].x *= sx; fx.rings[i].y *= sy; }
    this.trail.length = 0;   // stale coordinates in the old frame
  };

  Engine.prototype.buildBackground = function () {
    var syms = ['F = ma', 'p = mv', 'v = fλ', 'Q = mcθ', 'PV = k', 'a = Δv/t',
      'W = mg', 'n = sin i / sin r', '1/f = 1/u + 1/v', 'T² ∝ r³', 'Q = ml',
      'E = hf', 'Δp = Ft', 'g = 9.81', 's = ut + ½at²'];
    this.bgGlyphs = [];
    var count = this.W < 700 ? 8 : 14;
    for (var i = 0; i < count; i++) {
      this.bgGlyphs.push({
        text: syms[i % syms.length],
        x: Math.random() * this.W,
        y: Math.random() * this.H,
        vy: rand(-9, -3),
        vx: rand(-4, 4),
        size: rand(13, 26),
        alpha: rand(0.05, 0.12),
        rot: rand(-0.25, 0.25)
      });
    }
  };

  /* ---------------------------------------------------------------
     Spawning a wave of answers
     opts = { answers:[{key, label}], correctKey, window, preset, bombs }

     v4: each answer carries a language-neutral `key` (its index in the
     question) as well as the `label` drawn on the plate. Correctness is
     decided by key, so two BM answers that happened to share wording
     could never both count as right.
     --------------------------------------------------------------- */
  Engine.prototype.spawnWave = function (opts) {
    this.fruits.length = 0;

    var answers = (opts.answers || []).slice();

    /* v5: the last line of defence for custom speed. Whatever reaches the
       engine, the physics only ever sees finite values inside the same
       bounds the game uses. A NaN here would put every fruit at NaN and
       leave the question impossible to answer without any error. */
    var win = Number(opts.window);
    win = (isFinite(win) && win > 0) ? clamp(win, CFG.minWindow, CFG.maxWindow) : CFG.minWindow;
    var p = opts.preset || CFG.speeds.normal, N = CFG.speeds.normal;
    var preset = {
      drift: isFinite(p.drift) ? clamp(p.drift, 0, 120) : N.drift,
      spin: isFinite(p.spin) ? clamp(p.spin, 0, 3) : N.spin
    };
    var n = answers.length;
    var W = this.W, H = this.H;

    /* Lanes keep fruit from stacking on top of each other. On a narrow
       phone the preferred radius would make four fruits wider than the
       screen, so the radius is capped by the lane it has to live in. */
    var lane0 = (W - this.radius * 2.10) / n;
    var r = Math.min(this.radius, Math.max(CFG.view.radiusMin * 0.7, lane0 * 0.47));
    var margin = r * 1.05;
    var usable = Math.max(r * 0.6, W - margin * 2);
    var lane = usable / n;
    var jitter = clamp(lane - r * 2, 0, lane * 0.22);

    /* Long answers get a wider plate than the fruit, but never wider than
       their lane - that is what stops labels overlapping. */
    var labelW = Math.min(r * 1.95, lane * 0.94);

    /* Each fruit drifts INSIDE its own lane and bounces off the lane edge.
       Without this, a 6 second window at 34 px/s lets two fruits drift
       200 px and cover each other's answer text. */
    var halfPlate = labelW / 2 + 4;

    var laneOrder = [];
    for (var i = 0; i < n; i++) laneOrder.push(i);
    shuffle(laneOrder);

    var typePool = shuffle(Fruits.types.slice());
    var stagger = CFG.flight.launchStagger;

    for (var k = 0; k < n; k++) {
      var isCorrect = (answers[k].key === opts.correctKey);
      /* Same airtime distribution for every answer - see config.flight. */
      var T = win * rand(CFG.flight.airtimeMin, CFG.flight.airtimeMax);
      var apex = H * rand(CFG.flight.apexMin, CFG.flight.apexMax);
      var g = (8 * apex) / (T * T);
      var v0 = (g * T) / 2;

      var laneIndex = laneOrder[k];
      var laneL = margin + lane * laneIndex;
      var laneR = laneL + lane;
      var xMin = laneL + halfPlate;
      var xMax = laneR - halfPlate;
      var roomy = xMax > xMin;
      var x = margin + lane * (laneIndex + 0.5) + rand(-jitter, jitter) / 2;
      if (roomy) x = clamp(x, xMin, xMax);
      else { x = (laneL + laneR) / 2; xMin = xMax = x; }

      this.fruits.push({
        kind: 'answer',
        answer: answers[k].label,    // the text drawn on the plate
        key: answers[k].key,         // which answer this is, in any language
        correct: isCorrect,
        type: typePool[k % typePool.length],
        r: r, labelW: labelW,
        xMin: xMin, xMax: xMax, x: x,
        y: H + r * 0.95,
        vx: roomy ? rand(-preset.drift, preset.drift) : 0,
        vy: -v0,
        g: g,
        rot: rand(0, Math.PI * 2),
        vrot: rand(-1.1, 1.1) * preset.spin,
        delay: (k / Math.max(1, n - 1)) * stagger * (n > 1 ? 1 : 0),
        age: 0, alive: true, sliced: false, frozen: false,
        highlight: 'none', alpha: 1, sweeping: false, pulse: 0,
        pop: 0                       // spawn scale-in
      });
    }

    /* Bombs join slightly later so the answers are readable first, and
       spread across the width so they never stack. */
    var nb = opts.bombs || 0;
    for (var b = 0; b < nb; b++) {
      var bandW = W / Math.max(1, nb);
      var Tb = win * rand(0.72, 0.92);
      var apexB = H * rand(0.46, 0.66);
      var gb = (8 * apexB) / (Tb * Tb);
      this.fruits.push({
        kind: 'bomb',
        answer: null, key: null, correct: false, type: 'bomb',
        r: r * 0.80,
        xMin: r * 0.75, xMax: W - r * 0.75,
        x: clamp(bandW * (b + 0.5) + rand(-bandW * 0.3, bandW * 0.3), r, W - r),
        y: H + r,
        vx: rand(-preset.drift * 1.2, preset.drift * 1.2),
        vy: -(gb * Tb) / 2,
        g: gb,
        rot: rand(0, Math.PI * 2),
        vrot: rand(-1.6, 1.6) * preset.spin,
        delay: CFG.flight.bombDelay + rand(0, 0.5),
        age: 0, alive: true, sliced: false, frozen: false,
        highlight: 'none', alpha: 1, sweeping: false, pulse: 0, pop: 0
      });
    }
  };

  /* Freeze and highlight the correct fruit so a wrong answer still teaches. */
  Engine.prototype.markCorrect = function (key) {
    for (var i = 0; i < this.fruits.length; i++) {
      var f = this.fruits[i];
      if (f.kind === 'answer' && f.key === key && f.alive && !f.sliced) {
        f.frozen = true;
        f.highlight = 'correct';
        f.vx = 0; f.vy = 0; f.g = 0;
        f.vrot *= 0.25;
        return true;
      }
    }
    return false;
  };

  Engine.prototype.sweepAll = function () {
    for (var i = 0; i < this.fruits.length; i++) this.fruits[i].sweeping = true;
  };

  Engine.prototype.clearAll = function () {
    this.fruits.length = 0;
    this.trail.length = 0;
    this.fx.clear();
    this.combo = 0;
  };

  /* ---------------------------------------------------------------
     Update.  Returns the seconds the WORLD actually advanced, which is 0
     while a freeze-frame is holding it. The caller feeds that same value
     to the game clock so the question timer does not tick during hit-stop.
     --------------------------------------------------------------- */
  Engine.prototype.update = function (dt) {
    /* Effects always animate, even during hit-stop, so the slice still
       reads while the world is held. */
    this.fx.update(dt, this.W, this.H);

    var worldDt = this.fx.consumeHitStop(dt);
    this.time += dt;

    /* Background drifts on real time - freezing it looks like a stall. */
    for (var i = 0; i < this.bgGlyphs.length; i++) {
      var gl = this.bgGlyphs[i];
      gl.y += gl.vy * dt; gl.x += gl.vx * dt;
      if (gl.y < -40) { gl.y = this.H + 40; gl.x = Math.random() * this.W; }
      if (gl.x < -140) gl.x = this.W + 100;
      if (gl.x > this.W + 140) gl.x = -100;
    }

    /* Blade trail ages on real time too. */
    var cutoff = this.time - CFG.juice.trailLife;
    while (this.trail.length && this.trail[0].t < cutoff) this.trail.shift();

    if (worldDt <= 0) return 0;

    for (i = this.fruits.length - 1; i >= 0; i--) {
      var f = this.fruits[i];
      f.age += worldDt;
      if (f.age < f.delay) continue;

      if (f.pop < 1) f.pop = Math.min(1, f.pop + worldDt * 7);

      if (f.sweeping) {
        f.alpha -= worldDt / CFG.flight.sweepTime;
        if (f.alpha <= 0) { this.fruits.splice(i, 1); continue; }
      }

      if (f.frozen) {
        f.pulse += worldDt;
        f.rot += f.vrot * worldDt * 0.4;
        continue;
      }

      f.vy += f.g * worldDt;
      f.x += f.vx * worldDt;
      f.y += f.vy * worldDt;
      f.rot += f.vrot * worldDt;

      /* Soft walls. Answer fruit bounce inside their own lane so two
         labels can never end up on top of each other. */
      if (f.x < f.xMin) { f.x = f.xMin; f.vx = Math.abs(f.vx); }
      if (f.x > f.xMax) { f.x = f.xMax; f.vx = -Math.abs(f.vx); }

      if (f.y - f.r > this.H + f.r * 1.2 && f.vy > 0) this.fruits.splice(i, 1);
    }
    return worldDt;
  };

  /* ---------------------------------------------------------------
     Slicing
     --------------------------------------------------------------- */
  function segCircle(x1, y1, x2, y2, cx, cy, r) {
    var dx = x2 - x1, dy = y2 - y1;
    var len2 = dx * dx + dy * dy;
    var t = len2 > 0 ? (((cx - x1) * dx + (cy - y1) * dy) / len2) : 0;
    t = clamp(t, 0, 1);
    var px = x1 + dx * t, py = y1 + dy * t;
    var ddx = cx - px, ddy = cy - py;
    return (ddx * ddx + ddy * ddy) <= r * r;
  }

  Engine.prototype.addTrailPoint = function (x, y) {
    this.trail.push({ x: x, y: y, t: this.time });
    if (this.trail.length > CFG.juice.trailMax) this.trail.shift();
  };

  Engine.prototype.sliceSegment = function (x1, y1, x2, y2) {
    var angle = Math.atan2(y2 - y1, x2 - x1);
    return this._hit(function (f) {
      return segCircle(x1, y1, x2, y2, f.x, f.y, f.r * CFG.input.hitPad);
    }, angle, { x: x1, y: y1 });
  };

  /* A tap counts too: classroom touch screens and accessibility. */
  Engine.prototype.sliceTap = function (x, y) {
    var angle = rand(-0.6, 0.6);
    return this._hit(function (f) {
      var dx = f.x - x, dy = f.y - y;
      var rr = f.r * CFG.input.tapPad;
      return dx * dx + dy * dy <= rr * rr;
    }, angle, { x: x, y: y });
  };

  /* Keyboard players slice by index (keys 1-4, left to right). */
  Engine.prototype.sliceIndex = function (index) {
    var live = [];
    for (var i = 0; i < this.fruits.length; i++) {
      var f = this.fruits[i];
      if (f.kind === 'answer' && f.alive && !f.sliced && !f.sweeping) live.push(f);
    }
    live.sort(function (a, b) { return a.x - b.x; });
    if (index < 0 || index >= live.length) return [];
    var target = live[index];
    return this._hit(function (f) { return f === target; }, rand(-0.5, 0.5),
      { x: target.x, y: target.y });
  };

  /* `origin` is where the blade entered - the start of the swipe, or the
     tap point. It decides which answer a swipe committed to.

     A long swipe across the whole screen used to cut all four answers at
     once: the question then resolved on whichever one happened to sit last
     in the array, and the correct fruit was destroyed so it could not be
     revealed afterwards. Only the answer the blade reaches FIRST now
     counts. Bombs are hazards rather than choices, so every bomb on the
     blade still goes off. */
  Engine.prototype._hit = function (test, angle, origin) {
    var candidates = [];
    var i, f;

    for (i = this.fruits.length - 1; i >= 0; i--) {
      f = this.fruits[i];
      if (!f.alive || f.sliced || f.sweeping) continue;
      if (f.age < f.delay) continue;
      if (!test(f)) continue;
      candidates.push({ f: f, i: i });
    }
    if (!candidates.length) return [];

    var keep = [];
    var firstAnswer = null, bestDist = Infinity;
    for (var c = 0; c < candidates.length; c++) {
      f = candidates[c].f;
      if (f.kind !== 'answer') { keep.push(candidates[c]); continue; }
      var d = 0;
      if (origin) {
        var dx = f.x - origin.x, dy = f.y - origin.y;
        d = dx * dx + dy * dy;
      }
      if (d < bestDist) { bestDist = d; firstAnswer = candidates[c]; }
    }
    if (firstAnswer) keep.push(firstAnswer);

    /* Splice from the highest index down so earlier indices stay valid. */
    keep.sort(function (a, b) { return b.i - a.i; });

    var hits = [];
    for (var k = 0; k < keep.length; k++) {
      f = keep[k].f;
      f.sliced = true;
      f.alive = false;
      this.fruits.splice(keep[k].i, 1);
      if (f.kind === 'bomb') this.fx.explodeBomb(f);
      else this.fx.sliceFruit(f, angle, this.combo + 1);
      hits.push(f);
    }
    return hits;
  };

  /* Convenience wrappers so the game layer never reaches into fx. */
  Engine.prototype.popup = function (x, y, text, color, size) {
    this.fx.popup(clamp(x, 70, this.W - 70), y, text, color, size);
  };
  Engine.prototype.hitFlash = function (rgb, strength) { this.fx.hitFlash(rgb, strength); };
  Engine.prototype.correctStillFlying = function () {
    for (var i = 0; i < this.fruits.length; i++) {
      var f = this.fruits[i];
      if (f.correct && f.alive && !f.sliced && !f.sweeping) return true;
    }
    return false;
  };

  /* ---------------------------------------------------------------
     Render
     --------------------------------------------------------------- */
  Engine.prototype.render = function () {
    var ctx = this.ctx;
    var W = this.W, H = this.H;
    var i;

    ctx.save();
    this.fx.applyShake(ctx);

    /* --- background --- */
    var grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0a1024');
    grad.addColorStop(0.55, '#0d1733');
    grad.addColorStop(1, '#12082a');
    ctx.fillStyle = grad;
    ctx.fillRect(-60, -60, W + 120, H + 120);

    var glow = ctx.createRadialGradient(W * 0.5, H * 1.05, H * 0.08, W * 0.5, H * 1.05, H * 0.95);
    glow.addColorStop(0, 'rgba(80,140,255,0.16)');
    glow.addColorStop(1, 'rgba(80,140,255,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (i = 0; i < this.bgGlyphs.length; i++) {
      var gl = this.bgGlyphs[i];
      ctx.save();
      ctx.translate(gl.x, gl.y);
      ctx.rotate(gl.rot);
      ctx.globalAlpha = gl.alpha;
      ctx.fillStyle = '#9fd0ff';
      ctx.font = '600 ' + gl.size.toFixed(0) + 'px "Segoe UI", Roboto, Arial, sans-serif';
      ctx.fillText(gl.text, 0, 0);
      ctx.restore();
    }
    ctx.restore();

    /* --- debris and juice, behind everything playable --- */
    this.fx.drawBehind(ctx);

    /* --- bombs first, so a bomb can never cover an answer label --- */
    for (i = 0; i < this.fruits.length; i++) {
      var bf = this.fruits[i];
      if (bf.kind !== 'bomb' || bf.age < bf.delay) continue;
      Fruits.drawBomb(ctx, bf.x, bf.y, bf.r, bf.rot, this.time, bf.alpha);
    }

    /* --- answer fruit --- */
    var aura = this.comboAura();
    for (i = 0; i < this.fruits.length; i++) {
      var f = this.fruits[i];
      if (f.kind === 'bomb' || f.age < f.delay) continue;

      var scale = 0.72 + 0.28 * easeOutBack(f.pop);
      if (f.frozen) scale *= 1 + Math.sin(f.pulse * 8) * 0.045;

      ctx.save();
      if (scale !== 1) {
        ctx.translate(f.x, f.y);
        ctx.scale(scale, scale);
        ctx.translate(-f.x, -f.y);
      }
      /* The streak glow is an OUTER halo only. Drawn as a filled disc it
         sat under the fruit and greyed out its colour; as a ring that
         fades outward it reads as heat without touching legibility. */
      if (aura && !f.sweeping) {
        ctx.save();
        ctx.globalAlpha = f.alpha;
        var far = f.r * 1.42;
        var halo = ctx.createRadialGradient(f.x, f.y, f.r * 0.9, f.x, f.y, far);
        halo.addColorStop(0, rgba(aura.color, aura.alpha));
        halo.addColorStop(0.5, rgba(aura.color, aura.alpha * 0.45));
        halo.addColorStop(1, rgba(aura.color, 0));
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(f.x, f.y, far, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      Fruits.drawWhole(ctx, f.x, f.y, f.r, f.rot, f.type, f.alpha);
      Fruits.drawLabel(ctx, f.x, f.y, f.r, f.answer, {
        alpha: f.alpha, highlight: f.highlight, maxWidth: f.labelW
      });
      ctx.restore();
    }

    this.drawTrail(ctx);
    this.fx.drawFront(ctx);

    ctx.restore();
    this.fx.drawFlash(ctx, W, H);
  };

  /* '#ffd166' + alpha -> 'rgba(255,209,102,a)'  */
  function rgba(hex, a) {
    var h = hex.charAt(0) === '#' ? hex.slice(1) : hex;
    var n = parseInt(h, 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a.toFixed(3) + ')';
  }

  function easeOutBack(t) {
    if (t >= 1) return 1;
    var c = 1.9;
    var p = t - 1;
    return 1 + (c + 1) * p * p * p + c * p * p;
  }

  /* A soft coloured halo behind every fruit once the streak is running.
     Deliberately low alpha - it must never fight the answer text. */
  Engine.prototype.comboAura = function () {
    if (this.combo < CFG.juice.auraFrom) return null;
    var tier = null;
    for (var i = 0; i < CFG.comboTiers.length; i++) {
      if (this.combo >= CFG.comboTiers[i].at) tier = CFG.comboTiers[i];
    }
    if (!tier) return null;
    var pulse = 0.5 + 0.5 * Math.sin(this.time * 5);
    /* Kept low on purpose. On a phone the fruit sit close together, and a
       strong halo on each one merges into a wash that fights the labels. */
    return { color: tier.color, alpha: 0.17 + 0.10 * pulse };
  };

  /* Blade trail: a tapered glow that follows the swipe, brightest and
     thickest at the leading edge. */
  Engine.prototype.drawTrail = function (ctx) {
    var n = this.trail.length;
    if (n < 2) return;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (var pass = 0; pass < 2; pass++) {
      for (var i = 1; i < n; i++) {
        var a = i / n;
        var p0 = this.trail[i - 1], p1 = this.trail[i];
        if (pass === 0) {
          ctx.globalAlpha = a * a * 0.5;
          ctx.strokeStyle = 'rgba(140,215,255,1)';
          ctx.lineWidth = 3 + a * 18;
        } else {
          ctx.globalAlpha = a * 0.95;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1 + a * 5;
        }
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }
    }
    ctx.restore();
  };

  global.PFR = global.PFR || {};
  global.PFR.Engine = Engine;
  global.PFR.util = { rand: rand, pick: pick, clamp: clamp, shuffle: shuffle };
})(window);
