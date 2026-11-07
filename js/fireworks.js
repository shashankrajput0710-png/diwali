/**
 * High-performance Canvas Particle Physics for:
 * 1. Matchstick Strike Sparks
 * 2. Zamin Chakri (Whirling Ground Spinner)
 * 3. Golden Anar (Flowerpot Spark Fountain)
 * 4. Sky Rockets & Starbursts
 * 5. Phuljhadi (Handheld Sparkler)
 * 6. Interactive Click-to-Burst anywhere on screen
 */

class FireworksCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.rockets = [];
    this.specialEffects = [];
    this.isActive = true;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  /**
   * Sparks emitted specifically when match strikes the friction strip
   */
  spawnMatchSparks(x, y, count = 25) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 5;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
        vy: Math.sin(angle) * speed - Math.random() * 3,
        color: Math.random() > 0.3 ? '#f59e0b' : '#fef08a',
        size: 1.5 + Math.random() * 2,
        alpha: 1,
        decay: 0.03 + Math.random() * 0.04,
        gravity: 0.15
      });
    }
  }

  /**
   * Launch a sky rocket from (x, y) to target (targetX, targetY)
   */
  launchRocket(startX, startY, targetX, targetY, color = null) {
    const festiveColors = ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#ef4444', '#38bdf8', '#fbbf24'];
    const chosenColor = color || festiveColors[Math.floor(Math.random() * festiveColors.length)];

    if (window.festiveAudio) {
      window.festiveAudio.playRocketLaunch();
    }

    this.rockets.push({
      x: startX,
      y: startY,
      targetX: targetX,
      targetY: targetY,
      color: chosenColor,
      speed: 12 + Math.random() * 4,
      trail: []
    });
  }

  /**
   * Burst of particles at target location
   */
  createExplosion(x, y, color, count = 60) {
    if (window.festiveAudio) {
      window.festiveAudio.playFireworkBurst();
    }

    const festivePalette = ['#f59e0b', '#fbbf24', '#f43f5e', '#a855f7', '#38bdf8', '#34d399', '#ffffff'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 6.5;
      const pColor = color || festivePalette[Math.floor(Math.random() * festivePalette.length)];

      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: pColor,
        size: 2 + Math.random() * 2.5,
        alpha: 1,
        decay: 0.012 + Math.random() * 0.016,
        gravity: 0.05
      });
    }
  }

  /**
   * Golden Anar (Flowerpot Fountain of sparks)
   */
  startAnar(x = this.width / 2, y = this.height - 80, durationMs = 3000) {
    if (window.festiveAudio) {
      window.festiveAudio.playFireworkBurst();
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      if (Date.now() - startTime > durationMs) {
        clearInterval(interval);
        return;
      }

      // Shoot upward fountain sparks
      for (let i = 0; i < 8; i++) {
        const spreadAngle = -Math.PI / 2 + (Math.random() - 0.5) * 0.55;
        const speed = 7 + Math.random() * 11;
        this.particles.push({
          x: x + (Math.random() - 0.5) * 16,
          y: y,
          vx: Math.cos(spreadAngle) * speed,
          vy: Math.sin(spreadAngle) * speed,
          color: Math.random() > 0.4 ? '#fef08a' : (Math.random() > 0.5 ? '#f59e0b' : '#ffedd5'),
          size: 1.8 + Math.random() * 2,
          alpha: 1,
          decay: 0.025 + Math.random() * 0.03,
          gravity: 0.22
        });
      }
    }, 40);
  }

  /**
   * Zamin Chakri (Whirling Ground Spinner)
   */
  startChakri(centerX = this.width / 2, centerY = this.height / 2 + 50, durationMs = 3500) {
    if (window.festiveAudio) {
      window.festiveAudio.playFireworkBurst();
    }

    let angle = 0;
    const startTime = Date.now();
    const interval = setInterval(() => {
      if (Date.now() - startTime > durationMs) {
        clearInterval(interval);
        return;
      }

      angle += 0.45;
      for (let arm = 0; arm < 3; arm++) {
        const currentAngle = angle + (arm * (Math.PI * 2 / 3));
        const speed = 4 + Math.random() * 5;
        this.particles.push({
          x: centerX + Math.cos(currentAngle) * 20,
          y: centerY + Math.sin(currentAngle) * 20,
          vx: Math.cos(currentAngle) * speed,
          vy: Math.sin(currentAngle) * speed,
          color: arm === 0 ? '#38bdf8' : (arm === 1 ? '#fbbf24' : '#ec4899'),
          size: 2 + Math.random() * 2,
          alpha: 1,
          decay: 0.03,
          gravity: 0.02
        });
      }
    }, 35);
  }

  /**
   * Phuljhadi (Handheld Sparkler crackle)
   */
  startSparkler(x = this.width / 2, y = this.height / 2, count = 15) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 4.5;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: Math.random() > 0.3 ? '#ffffff' : '#fbbf24',
        size: 1.5 + Math.random() * 1.5,
        alpha: 1,
        decay: 0.04 + Math.random() * 0.04,
        gravity: 0.08
      });
    }
  }

  /**
   * Continuous Grand Finale Show
   */
  triggerGrandShow(durationSec = 5) {
    const end = Date.now() + durationSec * 1000;
    const showInterval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(showInterval);
        return;
      }
      const x = Math.random() * this.width;
      const targetY = 80 + Math.random() * (this.height * 0.45);
      this.launchRocket(x, this.height, x + (Math.random() - 0.5) * 150, targetY);
    }, 280);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Semi-transparent clear creates motion trails
    this.ctx.fillStyle = 'rgba(8, 6, 22, 0.22)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Update & draw ascending rockets
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      const dx = r.targetX - r.x;
      const dy = r.targetY - r.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 15 || r.y <= r.targetY) {
        this.createExplosion(r.targetX, r.targetY, r.color);
        this.rockets.splice(i, 1);
        continue;
      }

      const vx = (dx / dist) * r.speed;
      const vy = (dy / dist) * r.speed;

      r.x += vx;
      r.y += vy;

      // Rocket flame trail
      this.ctx.beginPath();
      this.ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
      this.ctx.fillStyle = '#fef08a';
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = '#f59e0b';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    // Update & draw explosion / sparkler particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.restore();
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.fireworks = new FireworksCanvas('fireworks-canvas');
});
