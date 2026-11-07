/**
 * Procedural Web Audio Engine for Happy Diwali Experience
 * Synthesizes realistic matchbox sliding, match striking, flame whoosh,
 * temple bells, fireworks, and soft festive ambient drone without external assets.
 */

class FestiveAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientPlaying = false;
    this.ambientGain = null;
    this.ambientNodes = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.init();
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAmbient();
    } else {
      this.playDiyaBell();
      this.startAmbient();
    }
    return !this.isMuted;
  }

  /**
   * Sound 1: Matchbox sliding open
   */
  playBoxSlide() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx.currentTime;
    
    // Cardboard friction noise
    const bufferSize = this.ctx.sampleRate * 0.35;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin(i / (bufferSize / 15));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, t);
    filter.frequency.linearRampToValueAtTime(300, t + 0.3);
    filter.Q.value = 3.0;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.12, t + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
  }

  /**
   * Sound 2: Matchstick strike friction scrape (chhhhk!) + sudden whoosh ignition
   */
  playMatchStrike() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx.currentTime;

    // A. Friction scrape noise
    const scrapeDur = 0.22;
    const bufferSize = Math.floor(this.ctx.sampleRate * scrapeDur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.8;
    }

    const scrape = this.ctx.createBufferSource();
    scrape.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, t);
    filter.frequency.exponentialRampToValueAtTime(3200, t + scrapeDur);
    filter.Q.value = 2.5;

    const scrapeGain = this.ctx.createGain();
    scrapeGain.gain.setValueAtTime(0.2, t);
    scrapeGain.gain.exponentialRampToValueAtTime(0.01, t + scrapeDur);

    scrape.connect(filter);
    filter.connect(scrapeGain);
    scrapeGain.connect(this.ctx.destination);
    scrape.start(t);

    // B. Ignition puff / whoosh right as match lights up
    setTimeout(() => {
      if (this.isMuted || !this.ctx) return;
      const tIgnite = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, tIgnite);
      osc.frequency.exponentialRampToValueAtTime(90, tIgnite + 0.4);

      oscGain.gain.setValueAtTime(0.25, tIgnite);
      oscGain.gain.exponentialRampToValueAtTime(0.001, tIgnite + 0.45);

      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(tIgnite);
      osc.stop(tIgnite + 0.5);
    }, 180);
  }

  /**
   * Sound 3: Auspicious Temple Bell Chime (Diyas & Sacred moments)
   */
  playDiyaBell() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx.currentTime;
    const freqs = [587.33, 1174.66, 1760.0, 2349.32]; // D5 harmonic bell spectrum
    const amps = [0.35, 0.22, 0.12, 0.05];

    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(amps[i], t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.5 + i * 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 3.0);
    });
  }

  /**
   * Sound 4: Firework Launch (Whoosh upwards)
   */
  playRocketLaunch() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(950, t + 0.55);

    gain.gain.setValueAtTime(0.02, t);
    gain.gain.linearRampToValueAtTime(0.18, t + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.65);
  }

  /**
   * Sound 5: Firework Burst (Thud + Sparkle Pop)
   */
  playFireworkBurst() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx.currentTime;

    // Bass boom
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.4);

    oscGain.gain.setValueAtTime(0.4, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.5);

    // High crackle/pop
    const count = 3 + Math.floor(Math.random() * 4);
    for (let c = 0; c < count; c++) {
      setTimeout(() => {
        if (this.isMuted || !this.ctx) return;
        const now = this.ctx.currentTime;
        const pOsc = this.ctx.createOscillator();
        const pGain = this.ctx.createGain();
        pOsc.type = 'square';
        pOsc.frequency.setValueAtTime(600 + Math.random() * 800, now);
        pGain.gain.setValueAtTime(0.08, now);
        pGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        pOsc.connect(pGain);
        pGain.connect(this.ctx.destination);
        pOsc.start(now);
        pOsc.stop(now + 0.09);
      }, 100 + c * 60);
    }
  }

  /**
   * Sound 6: Sweet Box Treat & Flower Chime
   */
  playSweetChime() {
    if (this.isMuted) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        if (this.isMuted || !this.ctx) return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.14, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.75);
      }, idx * 75);
    });
  }

  /**
   * Soft Auspicious Indian Drone (Tanpura Sa-Pa Chord)
   */
  startAmbient() {
    if (this.ambientPlaying || !this.ctx) return;
    this.ambientPlaying = true;
    const t = this.ctx.currentTime;

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.001, t);
    this.ambientGain.gain.linearRampToValueAtTime(0.05, t + 2.5);

    const droneFreqs = [130.81, 196.0, 261.63, 392.0]; // Sa, Pa, Sa', Pa'
    droneFreqs.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      // Gentle slow modulation
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.25;
      lfoGain.gain.value = 1.0;
      lfo.connect(osc.frequency);
      lfo.start(t);

      osc.connect(this.ambientGain);
      osc.start(t);
      this.ambientNodes.push(osc, lfo);
    });

    this.ambientGain.connect(this.ctx.destination);
  }

  stopAmbient() {
    if (!this.ambientPlaying) return;
    if (this.ambientGain && this.ctx) {
      const t = this.ctx.currentTime;
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, t + 0.8);
      setTimeout(() => {
        this.ambientNodes.forEach(node => {
          try { node.stop(); } catch (e) {}
        });
        this.ambientNodes = [];
        this.ambientPlaying = false;
      }, 900);
    } else {
      this.ambientPlaying = false;
    }
  }
}

window.festiveAudio = new FestiveAudioEngine();
