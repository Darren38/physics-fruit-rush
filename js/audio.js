/* =====================================================================
   PHYSICS FRUIT RUSH  --  AUDIO
   ---------------------------------------------------------------------
   Every sound is synthesised with the Web Audio API. There are no audio
   files, so the game stays a single self-contained folder that works
   offline and loads instantly.

   Audio is never required: if the browser blocks or lacks Web Audio,
   every call here becomes a silent no-op and the game plays normally.
   ===================================================================== */

(function (global) {
  'use strict';

  var ctx = null;
  var master = null;
  var enabled = true;
  var broken = false;

  function ensure() {
    if (broken || ctx) return ctx;
    try {
      var AC = global.AudioContext || global.webkitAudioContext;
      if (!AC) { broken = true; return null; }
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);
    } catch (e) {
      broken = true;
      ctx = null;
    }
    return ctx;
  }

  /* Browsers suspend audio until a user gesture. Call this from the
     first click / touch / keypress. */
  function unlock() {
    var c = ensure();
    if (c && c.state === 'suspended') { try { c.resume(); } catch (e) {} }
  }

  function now() { return ctx ? ctx.currentTime : 0; }

  /* A single shaped oscillator note. */
  function tone(opts) {
    if (!enabled) return;
    var c = ensure();
    if (!c) return;
    try {
      var t0 = now() + (opts.delay || 0);
      var osc = c.createOscillator();
      var gain = c.createGain();
      osc.type = opts.type || 'sine';
      osc.frequency.setValueAtTime(opts.from, t0);
      if (opts.to && opts.to !== opts.from) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.to), t0 + opts.dur);
      }
      var peak = (opts.gain === undefined ? 0.22 : opts.gain);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(peak, t0 + Math.min(0.02, opts.dur * 0.3));
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + opts.dur);
      osc.connect(gain);
      gain.connect(master);
      osc.start(t0);
      osc.stop(t0 + opts.dur + 0.03);
    } catch (e) { /* never let audio break gameplay */ }
  }

  /* One second of white noise, generated once and shared by every burst.

     This used to build a fresh AudioBuffer on every slice. At 48 kHz that is
     ~19 KB per sound, and the buffers were never released - a long classroom
     session leaked about 18.5 KB per question, which a soak test caught as
     ~10 MB of heap growth per 500 questions. */
  var noiseBuffer = null;

  function getNoiseBuffer(c) {
    if (noiseBuffer && noiseBuffer.sampleRate === c.sampleRate) return noiseBuffer;
    var frames = Math.max(1, Math.floor(c.sampleRate));
    noiseBuffer = c.createBuffer(1, frames, c.sampleRate);
    var data = noiseBuffer.getChannelData(0);
    for (var i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
    return noiseBuffer;
  }

  /* Filtered noise burst - used for the blade whoosh and the splat. The
     fade is done by the gain envelope below rather than baked into samples,
     which is what lets a single buffer serve every burst. */
  function noise(opts) {
    if (!enabled) return;
    var c = ensure();
    if (!c) return;
    try {
      var dur = opts.dur || 0.12;
      var buf = getNoiseBuffer(c);
      var offset = Math.random() * Math.max(0, buf.duration - dur);
      var src = c.createBufferSource();
      src.buffer = buf;
      var filt = c.createBiquadFilter();
      filt.type = opts.filter || 'bandpass';
      var t0 = now() + (opts.delay || 0);
      filt.frequency.setValueAtTime(opts.from || 1200, t0);
      filt.frequency.exponentialRampToValueAtTime(Math.max(60, opts.to || 400), t0 + dur);
      filt.Q.value = opts.q || 1.2;
      var gain = c.createGain();
      gain.gain.setValueAtTime(opts.gain === undefined ? 0.24 : opts.gain, t0);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      src.connect(filt); filt.connect(gain); gain.connect(master);
      src.start(t0, offset, dur);
      src.stop(t0 + dur + 0.02);
    } catch (e) {}
  }

  /* A small chord helper: stacking a third and a fifth makes a correct
     answer sound like an achievement rather than a beep. */
  function chord(root, dur, gain, delay, type) {
    tone({ type: type || 'triangle', from: root, to: root, dur: dur, gain: gain, delay: delay });
    tone({ type: 'sine', from: root * 1.26, to: root * 1.26, dur: dur, gain: gain * 0.7, delay: delay });
    tone({ type: 'sine', from: root * 1.50, to: root * 1.50, dur: dur, gain: gain * 0.55, delay: delay });
  }

  var SFX = {
    /* Blade passing through the air - short, airy, never fatiguing even
       when a student swipes dozens of times a minute. */
    swipe: function () {
      noise({ dur: 0.11, from: 3200, to: 700, q: 1.1, gain: 0.10 });
    },

    /* Correct answer. The root climbs a semitone per streak level and the
       chord thickens at higher streaks, so the reward audibly grows
       without ever changing into a different, louder sound. */
    correct: function (comboLevel) {
      var step = Math.min(comboLevel || 0, 10);
      var root = 523.25 * Math.pow(1.0595, step);
      noise({ dur: 0.09, from: 3400, to: 800, gain: 0.13 });
      tone({ type: 'triangle', from: root, to: root, dur: 0.10, gain: 0.20 });
      tone({ type: 'triangle', from: root * 1.26, to: root * 1.26, dur: 0.12, gain: 0.17, delay: 0.06 });
      tone({ type: 'sine', from: root * 1.5, to: root * 1.5, dur: 0.16, gain: 0.15, delay: 0.12 });
      if (step >= 4) tone({ type: 'sine', from: root * 2, to: root * 2, dur: 0.18, gain: 0.10, delay: 0.16 });
    },

    /* Wrong answer: a short, low, clearly negative buzz. Deliberately not
       harsh - being wrong is part of learning. */
    wrong: function () {
      tone({ type: 'sawtooth', from: 190, to: 95, dur: 0.24, gain: 0.15 });
      tone({ type: 'square', from: 126, to: 72, dur: 0.20, gain: 0.08, delay: 0.02 });
    },

    /* Ran out of time - a softer descending sigh, distinct from "wrong". */
    miss: function () {
      tone({ type: 'sine', from: 440, to: 175, dur: 0.36, gain: 0.13 });
      tone({ type: 'sine', from: 330, to: 140, dur: 0.30, gain: 0.07, delay: 0.05 });
    },

    /* Streak milestone. */
    combo: function (level) {
      var base = 660 + Math.min(level, 12) * 34;
      chord(base, 0.16, 0.10, 0);
      tone({ type: 'square', from: base * 1.5, to: base * 2, dur: 0.18, gain: 0.08, delay: 0.07 });
    },

    /* Sliced a bomb. */
    bomb: function () {
      noise({ dur: 0.42, from: 900, to: 55, filter: 'lowpass', q: 0.6, gain: 0.30 });
      tone({ type: 'sawtooth', from: 95, to: 38, dur: 0.36, gain: 0.16 });
    },

    /* Lost a life. */
    life: function () {
      tone({ type: 'triangle', from: 320, to: 145, dur: 0.30, gain: 0.15 });
    },

    /* Round starting - a short rising figure under the countdown. */
    start: function () {
      var notes = [392, 523.25, 659.25];
      for (var i = 0; i < notes.length; i++) {
        tone({ type: 'triangle', from: notes[i], to: notes[i], dur: 0.16, gain: 0.13, delay: i * 0.10 });
      }
    },

    /* Session finished. */
    gameOver: function () {
      var notes = [523.25, 440, 349.23, 261.63];
      for (var i = 0; i < notes.length; i++) {
        tone({ type: 'triangle', from: notes[i], to: notes[i], dur: 0.30, gain: 0.15, delay: i * 0.16 });
      }
    },

    /* Session finished well. */
    fanfare: function () {
      chord(523.25, 0.26, 0.15, 0);
      chord(659.25, 0.26, 0.15, 0.13);
      chord(783.99, 0.36, 0.16, 0.26);
    },

    /* Progress wiped - a soft descending "cleared" figure. Reassuring
       rather than alarming: the student chose this. */
    reset: function () {
      tone({ type: 'sine', from: 660, to: 660, dur: 0.12, gain: 0.11 });
      tone({ type: 'sine', from: 495, to: 495, dur: 0.14, gain: 0.10, delay: 0.09 });
      tone({ type: 'triangle', from: 330, to: 330, dur: 0.22, gain: 0.10, delay: 0.19 });
    },

    /* UI click - quiet enough to press repeatedly. */
    click: function () {
      tone({ type: 'sine', from: 720, to: 940, dur: 0.05, gain: 0.08 });
    },

    /* Clock running low. */
    tick: function () {
      tone({ type: 'sine', from: 900, to: 900, dur: 0.05, gain: 0.09 });
    }
  };

  var Audio = {
    unlock: unlock,
    isEnabled: function () { return enabled; },
    setEnabled: function (v) {
      enabled = !!v;
      if (enabled) unlock();
      return enabled;
    },
    toggle: function () { return Audio.setEnabled(!enabled); },
    play: function (name, arg) {
      if (!enabled) return;
      var fn = SFX[name];
      if (fn) fn(arg);
    }
  };

  global.PFR = global.PFR || {};
  global.PFR.Audio = Audio;
})(window);
