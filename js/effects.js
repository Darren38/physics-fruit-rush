/* =====================================================================
   PHYSICS FRUIT RUSH v2  --  EFFECTS  (game feel)
   ---------------------------------------------------------------------
   Everything that exists purely to make a hit FEEL good: fruit halves,
   juice droplets, cut-line sparks, the bright slice flash, screen shake,
   colour flashes, floating score popups and the brief freeze-frame.

   New in v2. In v1 these systems were scattered through engine.js, which
   made the engine hard to read and the feedback hard to tune. They now sit
   in one place with one rule governing all of them:

       AN EFFECT MAY NEVER OBSCURE AN ANSWER LABEL.

   That is why the slice flash is short, juice is drawn BEHIND live fruit,
   shake is capped, and there is no full-screen particle confetti. The
   question and the four answers stay the loudest things on the screen.
   ===================================================================== */

(function (global) {
  'use strict';

  var CFG = global.PFR.CONFIG;
  var Fruits = global.PFR.Fruits;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  function Effects() {
    this.halves = [];
    this.particles = [];
    this.sparks = [];
    this.slices = [];      // the bright line left along a cut
    this.popups = [];
    this.rings = [];       // expanding impact ring
    this.shake = 0;
    this.flash = 0;
    this.flashColor = '204,255,214';
    this.hitStop = 0;      // seconds of freeze-frame still owed
    this.time = 0;
  }

  Effects.prototype.clear = function () {
    this.halves.length = 0;
    this.particles.length = 0;
    this.sparks.length = 0;
    this.slices.length = 0;
    this.popups.length = 0;
    this.rings.length = 0;
    this.shake = 0;
    this.flash = 0;
    this.hitStop = 0;
  };

  /* ---------------------------------------------------------------
     Spawning
     --------------------------------------------------------------- */

  /* Break a fruit into two halves, throw juice, and leave a cut line. */
  Effects.prototype.sliceFruit = function (f, angle, combo) {
    var J = CFG.juice;
    var def = Fruits.def(f.type);

    var nx = Math.cos(angle + Math.PI / 2);
    var ny = Math.sin(angle + Math.PI / 2);
    var kick = 235;

    for (var s = -1; s <= 1; s += 2) {
      this.halves.push({
        type: f.type, r: f.r,
        x: f.x + nx * s * f.r * 0.12,
        y: f.y + ny * s * f.r * 0.12,
        vx: f.vx * 0.5 + nx * s * kick + rand(-45, 45),
        vy: f.vy * 0.5 + ny * s * kick - 95,
        rot: f.rot,
        vrot: f.vrot + s * rand(1.6, 3.8),
        slice: angle, side: s,
        life: 1.5, maxLife: 1.5
      });
    }

    /* Juice sprays ALONG the cut, not in a symmetric ball - it reads as a
       cut rather than an explosion. */
    this.spray(f.x, f.y, f.r, angle, [def.flesh, def.skin[0], def.skin[1]], J.juiceCount, J.juiceSpeed);
    this.sparkLine(f.x, f.y, f.r, angle, J.sparkCount);
    this.sliceLine(f.x, f.y, f.r, angle, '#ffffff');
    this.ring(f.x, f.y, f.r * 0.9, 'rgba(255,255,255,0.55)');

    var lvl = Math.max(0, (combo || 1) - 1);
    this.shakeBy(Math.min(CFG.juice.shakeMax, J.shakeCorrect + lvl * J.shakeComboAdd));
    this.hitStop = Math.max(this.hitStop, J.hitStopCorrect);
  };

  /* A bomb is loud and unmistakable, but still brief. */
  Effects.prototype.explodeBomb = function (f) {
    var J = CFG.juice;
    this.spray(f.x, f.y, f.r, rand(0, Math.PI), ['#ff8a80', '#ffd54f', '#ffffff'], 30, 560);
    this.ring(f.x, f.y, f.r * 1.4, 'rgba(255,140,120,0.75)');
    this.ring(f.x, f.y, f.r * 0.7, 'rgba(255,220,150,0.6)');
    this.shakeBy(J.shakeBomb);
    this.hitStop = Math.max(this.hitStop, J.hitStopBomb);
    this.hitFlash('255,120,110', 0.9);
  };

  Effects.prototype.spray = function (x, y, r, angle, colors, count, speed) {
    if (this.particles.length > CFG.view.particleCap) return;
    var along = angle;
    for (var i = 0; i < count; i++) {
      /* biased along the blade, with a little spread either side */
      var a = along + rand(-0.9, 0.9) + (Math.random() < 0.5 ? 0 : Math.PI);
      var sp = rand(speed * 0.28, speed);
      this.particles.push({
        x: x + rand(-r * 0.2, r * 0.2),
        y: y + rand(-r * 0.2, r * 0.2),
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - rand(40, 130),
        size: rand(r * 0.055, r * 0.19),
        color: pick(colors),
        life: rand(0.35, 0.9), maxLife: 0.9
      });
    }
  };

  /* Fast white sparks that fly straight along the cut. Short-lived, so they
     punctuate the hit without lingering over the next answer. */
  Effects.prototype.sparkLine = function (x, y, r, angle, count) {
    for (var i = 0; i < count; i++) {
      var dir = (i % 2 === 0) ? angle : angle + Math.PI;
      var sp = rand(320, 720);
      this.sparks.push({
        x: x, y: y,
        vx: Math.cos(dir) * sp + rand(-40, 40),
        vy: Math.sin(dir) * sp + rand(-40, 40),
        len: rand(r * 0.18, r * 0.42),
        life: rand(0.10, 0.22), maxLife: 0.22
      });
    }
  };

  Effects.prototype.sliceLine = function (x, y, r, angle, color) {
    this.slices.push({
      x: x, y: y, angle: angle, len: r * 2.5, color: color,
      life: CFG.juice.sliceFlashLife, maxLife: CFG.juice.sliceFlashLife
    });
  };

  Effects.prototype.ring = function (x, y, r, color) {
    this.rings.push({ x: x, y: y, r: r, color: color, life: 0.36, maxLife: 0.36 });
  };

  Effects.prototype.popup = function (x, y, text, color, size, bold) {
    this.popups.push({
      x: x, y: y, text: text,
      color: color || '#ffffff',
      size: size || 26,
      vy: CFG.juice.popupRise,
      scale: 0,                 // punches up from nothing
      life: CFG.juice.popupLife, maxLife: CFG.juice.popupLife,
      bold: bold !== false
    });
  };

  Effects.prototype.shakeBy = function (amount) {
    this.shake = Math.min(CFG.juice.shakeMax, Math.max(this.shake, amount));
  };

  Effects.prototype.hitFlash = function (rgb, strength) {
    this.flash = Math.max(this.flash, strength || 0.7);
    this.flashColor = rgb || '204,255,214';
  };

  /* ---------------------------------------------------------------
     Update
     Returns the time actually consumed, so the caller can honour the
     freeze-frame: during hit-stop the world does not advance but the
     effects still animate at a fraction of speed.
     --------------------------------------------------------------- */
  Effects.prototype.consumeHitStop = function (dt) {
    if (this.hitStop <= 0) return dt;
    this.hitStop -= dt;
    if (this.hitStop <= 0) {
      var left = -this.hitStop;
      this.hitStop = 0;
      return left;           // partial frame once the freeze ends
    }
    return 0;                // world is frozen this frame
  };

  Effects.prototype.update = function (dt, worldW, worldH) {
    this.time += dt;
    var i;

    for (i = this.halves.length - 1; i >= 0; i--) {
      var h = this.halves[i];
      h.vy += 1180 * dt;
      h.x += h.vx * dt; h.y += h.vy * dt;
      h.rot += h.vrot * dt;
      h.life -= dt;
      if (h.life <= 0 || h.y - h.r > worldH + h.r * 2) this.halves.splice(i, 1);
    }

    for (i = this.particles.length - 1; i >= 0; i--) {
      var p = this.particles[i];
      p.vy += 940 * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) this.particles.splice(i, 1);
    }

    for (i = this.sparks.length - 1; i >= 0; i--) {
      var s = this.sparks[i];
      s.x += s.vx * dt; s.y += s.vy * dt;
      s.vx *= 0.90; s.vy *= 0.90;
      s.life -= dt;
      if (s.life <= 0) this.sparks.splice(i, 1);
    }

    for (i = this.slices.length - 1; i >= 0; i--) {
      this.slices[i].life -= dt;
      if (this.slices[i].life <= 0) this.slices.splice(i, 1);
    }

    for (i = this.rings.length - 1; i >= 0; i--) {
      this.rings[i].life -= dt;
      if (this.rings[i].life <= 0) this.rings.splice(i, 1);
    }

    for (i = this.popups.length - 1; i >= 0; i--) {
      var pu = this.popups[i];
      pu.y += pu.vy * dt;
      pu.vy *= 0.90;
      pu.scale += (1 - pu.scale) * Math.min(1, dt * 18);   // punch in
      pu.life -= dt;
      if (pu.life <= 0) this.popups.splice(i, 1);
    }

    if (this.shake > 0) this.shake = Math.max(0, this.shake - dt * CFG.juice.shakeDecay);
    if (this.flash > 0) this.flash = Math.max(0, this.flash - dt * CFG.juice.flashDecay);
  };

  /* ---------------------------------------------------------------
     Draw
     Split into "behind fruit" and "in front of fruit" so nothing ever
     covers an answer label.
     --------------------------------------------------------------- */
  Effects.prototype.applyShake = function (ctx) {
    if (this.shake <= 0) return;
    var m = this.shake * 10;
    ctx.translate(rand(-m, m), rand(-m, m));
  };

  Effects.prototype.drawBehind = function (ctx) {
    var i;

    for (i = 0; i < this.rings.length; i++) {
      var rg = this.rings[i];
      var t = 1 - rg.life / rg.maxLife;
      ctx.save();
      ctx.globalAlpha = (1 - t) * 0.8;
      ctx.strokeStyle = rg.color;
      ctx.lineWidth = Math.max(1, 6 * (1 - t));
      ctx.beginPath();
      ctx.arc(rg.x, rg.y, rg.r * (0.4 + t * 1.5), 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    for (i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    for (i = 0; i < this.halves.length; i++) {
      var h = this.halves[i];
      var a = clamp(h.life / h.maxLife, 0, 1);
      Fruits.drawHalf(ctx, h.x, h.y, h.r, h.rot, h.type, h.slice, h.side, a);
    }
  };

  Effects.prototype.drawFront = function (ctx) {
    var i;

    /* The cut flash: a bright tapered line exactly where the blade went. */
    for (i = 0; i < this.slices.length; i++) {
      var sl = this.slices[i];
      var t = sl.life / sl.maxLife;
      ctx.save();
      ctx.translate(sl.x, sl.y);
      ctx.rotate(sl.angle);
      ctx.globalAlpha = t * 0.9;
      var grad = ctx.createLinearGradient(-sl.len / 2, 0, sl.len / 2, 0);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(0.5, sl.color);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      var thick = Math.max(1, 7 * t);
      ctx.fillRect(-sl.len / 2, -thick / 2, sl.len, thick);
      ctx.restore();
    }

    for (i = 0; i < this.sparks.length; i++) {
      var s = this.sparks[i];
      var st = s.life / s.maxLife;
      var m = Math.sqrt(s.vx * s.vx + s.vy * s.vy) || 1;
      ctx.save();
      ctx.globalAlpha = st;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - (s.vx / m) * s.len, s.y - (s.vy / m) * s.len);
      ctx.stroke();
      ctx.restore();
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (i = 0; i < this.popups.length; i++) {
      var pu = this.popups[i];
      var pa = clamp(pu.life / pu.maxLife, 0, 1);
      ctx.save();
      ctx.globalAlpha = pa;
      ctx.translate(pu.x, pu.y);
      ctx.scale(pu.scale, pu.scale);
      ctx.font = (pu.bold ? '900 ' : '700 ') + pu.size + 'px "Segoe UI", Roboto, Arial, sans-serif';
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgba(4,8,18,0.85)';
      ctx.strokeText(pu.text, 0, 0);
      ctx.fillStyle = pu.color;
      ctx.fillText(pu.text, 0, 0);
      ctx.restore();
    }
  };

  Effects.prototype.drawFlash = function (ctx, W, H) {
    if (this.flash <= 0) return;
    ctx.fillStyle = 'rgba(' + this.flashColor + ',' + (this.flash * 0.18).toFixed(3) + ')';
    ctx.fillRect(0, 0, W, H);
  };

  global.PFR = global.PFR || {};
  global.PFR.Effects = Effects;
})(window);
