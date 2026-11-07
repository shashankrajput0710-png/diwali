/**
 * Main Controller for Happy Diwali Experience
 * Handles:
 * - Scene 1: Matchbox slide open -> Matchstick lift & strike -> Flame ignition -> Radial light reveal
 * - Scene 2 & 3: Radiant Happy Diwali hub & Diya animations
 * - 3 Main Hubs: Gifts (Bouquet & Garden, Sweets Box), Crackers Station, Greeting Card Maker
 */

class DiwaliApp {
  constructor() {
    this.state = {
      boxOpened: false,
      matchLit: false,
      sceneTransitioned: false,
      soundEnabled: false,
      sparklerCursor: false
    };

    this.initElements();
    this.bindEvents();
  }

  initElements() {
    // Opening Screen Elements
    this.openingScreen = document.getElementById('opening-screen');
    this.matchboxContainer = document.getElementById('matchbox-container');
    this.matchboxDrawer = document.getElementById('matchbox-drawer');
    this.matchstick = document.getElementById('matchstick');
    this.matchFlame = document.getElementById('match-flame');
    this.openingPrompt = document.getElementById('opening-prompt');
    this.radialGlow = document.getElementById('match-radial-glow');

    // Hub Elements
    this.mainHub = document.getElementById('main-hub');
    this.soundToggle = document.getElementById('sound-toggle');
    this.soundIcon = document.getElementById('sound-icon');
    this.sparklerToggle = document.getElementById('sparkler-toggle');
    this.sparklerWand = document.getElementById('sparkler-wand');

    // Section Views
    this.hamperView = document.getElementById('hamper-view');
    this.gardenView = document.getElementById('garden-view');
    this.sweetsView = document.getElementById('sweets-view');
    this.crackersView = document.getElementById('crackers-view');
    this.cardView = document.getElementById('card-view');
  }

  bindEvents() {
    // 1. Matchbox Interaction
    if (this.matchboxContainer) {
      this.matchboxContainer.addEventListener('click', (e) => this.handleMatchboxClick(e));
    }

    // 2. Sound Toggle
    if (this.soundToggle) {
      this.soundToggle.addEventListener('click', () => {
        const active = window.festiveAudio.toggleMute();
        this.soundIcon.className = active ? 'fa-solid fa-volume-high text-lg' : 'fa-solid fa-volume-xmark text-lg text-amber-500/50';
      });
    }

    // 3. Sparkler Cursor Wand Toggle
    if (this.sparklerToggle) {
      this.sparklerToggle.addEventListener('click', () => {
        this.state.sparklerCursor = !this.state.sparklerCursor;
        this.sparklerToggle.classList.toggle('bg-amber-500', this.state.sparklerCursor);
        this.sparklerToggle.classList.toggle('text-black', this.state.sparklerCursor);
      });
    }

    // Sparkler Wand mouse tracker
    window.addEventListener('mousemove', (e) => {
      if (this.state.sparklerCursor && window.fireworks) {
        window.fireworks.startSparkler(e.clientX, e.clientY, 3);
      }
    });

    // Screen click to burst fireworks (when in hub or cracker view)
    window.addEventListener('click', (e) => {
      // Don't burst if clicking buttons or interactive forms
      if (e.target.closest('button, input, textarea, select, .lily-card, .sweet-item, #matchbox-container')) {
        return;
      }
      if (this.state.sceneTransitioned && window.fireworks) {
        window.fireworks.launchRocket(e.clientX, window.innerHeight, e.clientX, e.clientY);
      }
    });

    // 4. Hub Menu Cards
    document.querySelectorAll('[data-open-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        const viewId = btn.getAttribute('data-open-view');
        this.openView(viewId);
      });
    });

    // Back to Hub Buttons
    document.querySelectorAll('.back-to-hub-btn').forEach(btn => {
      btn.addEventListener('click', () => this.showHub());
    });

    // Back to Hamper Button
    const backToHamper = document.getElementById('back-to-hamper-btn');
    if (backToHamper) {
      backToHamper.addEventListener('click', () => this.openView('hamper-view'));
    }

    // Initialize Lily Garden Grid
    if (window.lilyGarden) {
      window.lilyGarden.renderGardenGrid('lily-garden-grid');
      const closeLilyBtn = document.getElementById('close-lily-modal');
      if (closeLilyBtn) {
        closeLilyBtn.addEventListener('click', () => window.lilyGarden.closeLilyModal());
      }
    }

    // Initialize Sweets Interaction
    this.bindSweetsEvents();

    // Initialize Fireworks Station
    this.bindCrackersEvents();

    // Initialize Greeting Card Maker
    this.bindCardMakerEvents();
  }

  /**
   * Scene 1: Matchbox Opening & Lighting Flow
   */
  handleMatchboxClick(e) {
    if (!this.state.boxOpened) {
      // Step 1: Slide open the matchbox
      this.state.boxOpened = true;
      if (window.festiveAudio) window.festiveAudio.playBoxSlide();

      this.matchboxDrawer.classList.add('matchbox-opened');
      this.openingPrompt.innerHTML = `<span class="text-amber-300 font-bold animate-pulse">✨ Now click the matchstick to strike & ignite the flame! ✨</span>`;
      return;
    }

    if (this.state.boxOpened && !this.state.matchLit) {
      // Step 2: Lift and strike the matchstick
      this.state.matchLit = true;
      this.openingPrompt.innerText = 'Striking match...';

      // Animate matchstick lifting and striking
      this.matchstick.classList.add('matchstick-striking');

      // Sound and sparks at strike moment
      setTimeout(() => {
        if (window.festiveAudio) window.festiveAudio.playMatchStrike();
        const rect = this.matchboxContainer.getBoundingClientRect();
        if (window.fireworks) {
          window.fireworks.spawnMatchSparks(rect.right - 20, rect.top + 40, 35);
        }
      }, 350);

      // Flame burst
      setTimeout(() => {
        this.matchFlame.classList.remove('hidden');
        this.matchFlame.classList.add('animate-flame-grow');
        this.openingPrompt.innerHTML = `<span class="text-amber-300 text-lg font-serifHeading">Tamaso Ma Jyotirgamaya — Bringing Light Out Of Darkness!</span>`;

        // Step 3: Radial light expansion
        this.radialGlow.classList.add('radiant-expand');
      }, 700);

      // Transition to Main Hub
      setTimeout(() => {
        this.revealMainHub();
      }, 2000);
    }
  }

  revealMainHub() {
    this.state.sceneTransitioned = true;
    this.openingScreen.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      this.openingScreen.classList.add('hidden');
    }, 1000);

    // Show Main Hub with glorious entrance
    this.mainHub.classList.remove('hidden');
    setTimeout(() => {
      this.mainHub.classList.remove('opacity-0');
      this.mainHub.classList.add('opacity-100');
    }, 50);

    // Auspicious temple chime & festive drone
    if (window.festiveAudio) {
      window.festiveAudio.playDiyaBell();
      window.festiveAudio.startAmbient();
    }

    // Launch celebratory welcome fireworks burst
    if (window.fireworks) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setTimeout(() => window.fireworks.launchRocket(w * 0.25, h, w * 0.25, h * 0.35, '#f59e0b'), 400);
      setTimeout(() => window.fireworks.launchRocket(w * 0.75, h, w * 0.75, h * 0.35, '#ec4899'), 700);
      setTimeout(() => window.fireworks.launchRocket(w * 0.50, h, w * 0.50, h * 0.25, '#fbbf24'), 1000);
    }
  }

  /**
   * Navigation between Views
   */
  openView(viewId) {
    if (window.festiveAudio) window.festiveAudio.playSweetChime();

    // Hide all views & main hub
    this.mainHub.classList.add('hidden');
    [this.hamperView, this.gardenView, this.sweetsView, this.crackersView, this.cardView].forEach(v => {
      if (v) v.classList.add('hidden');
    });

    const target = document.getElementById(viewId);
    if (target) {
      target.classList.remove('hidden');
      target.classList.add('animate-fade-in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  showHub() {
    if (window.festiveAudio) window.festiveAudio.playDiyaBell();

    [this.hamperView, this.gardenView, this.sweetsView, this.crackersView, this.cardView].forEach(v => {
      if (v) v.classList.add('hidden');
    });

    this.mainHub.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Sweet Box & Confectionery Tray Events
   */
  bindSweetsEvents() {
    const sweetItems = document.querySelectorAll('.sweet-item');
    const toast = document.getElementById('sweet-toast');
    const toastName = document.getElementById('toast-sweet-name');
    const toastDesc = document.getElementById('toast-sweet-desc');

    sweetItems.forEach(item => {
      item.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        const desc = item.getAttribute('data-desc');

        if (window.festiveAudio) window.festiveAudio.playSweetChime();

        if (toast && toastName && toastDesc) {
          toastName.innerText = `✨ Tasted: ${name}! ✨`;
          toastDesc.innerText = desc;
          toast.classList.remove('hidden');
          toast.classList.add('animate-bounce-subtle');
        }

        // Particle sparkle on click
        const rect = item.getBoundingClientRect();
        if (window.fireworks) {
          window.fireworks.startSparkler(rect.left + rect.width / 2, rect.top + rect.height / 2, 18);
        }
      });
    });
  }

  /**
   * Virtual Firecrackers Station
   */
  bindCrackersEvents() {
    // 1. Zamin Chakri
    const chakriBtn = document.getElementById('btn-chakri');
    if (chakriBtn) {
      chakriBtn.addEventListener('click', () => {
        if (window.fireworks) window.fireworks.startChakri();
      });
    }

    // 2. Golden Anar
    const anarBtn = document.getElementById('btn-anar');
    if (anarBtn) {
      anarBtn.addEventListener('click', () => {
        if (window.fireworks) window.fireworks.startAnar();
      });
    }

    // 3. Sky Rocket
    const rocketBtn = document.getElementById('btn-rocket');
    if (rocketBtn) {
      rocketBtn.addEventListener('click', () => {
        if (window.fireworks) {
          const w = window.innerWidth;
          const h = window.innerHeight;
          window.fireworks.launchRocket(w / 2, h, w / 2 + (Math.random() - 0.5) * 300, h * 0.3);
        }
      });
    }

    // 4. Phuljhadi
    const sparklerBtn = document.getElementById('btn-sparkler');
    if (sparklerBtn) {
      sparklerBtn.addEventListener('click', () => {
        if (window.fireworks) {
          window.fireworks.startSparkler(window.innerWidth / 2, window.innerHeight / 2, 40);
        }
      });
    }

    // Continuous Grand Finale
    const finaleBtn = document.getElementById('btn-grand-finale');
    if (finaleBtn) {
      finaleBtn.addEventListener('click', () => {
        if (window.fireworks) window.fireworks.triggerGrandShow(7);
      });
    }
  }

  /**
   * Greeting Card Maker & Exporter
   */
  bindCardMakerEvents() {
    const senderInput = document.getElementById('card-sender');
    const recipientInput = document.getElementById('card-recipient');
    const messageInput = document.getElementById('card-message');
    const presetSelect = document.getElementById('card-presets');

    const previewSender = document.getElementById('preview-sender');
    const previewRecipient = document.getElementById('preview-recipient');
    const previewMessage = document.getElementById('preview-message');
    const cardElement = document.getElementById('greeting-card-element');

    const updatePreview = () => {
      if (previewSender) previewSender.innerText = senderInput.value || 'Your Name';
      if (previewRecipient) previewRecipient.innerText = recipientInput.value || 'Dear Friends & Family';
      if (previewMessage) previewMessage.innerText = messageInput.value || '';
    };

    if (senderInput) senderInput.addEventListener('input', updatePreview);
    if (recipientInput) recipientInput.addEventListener('input', updatePreview);
    if (messageInput) messageInput.addEventListener('input', updatePreview);

    if (presetSelect) {
      presetSelect.addEventListener('change', () => {
        if (messageInput) {
          messageInput.value = presetSelect.value;
          updatePreview();
        }
      });
    }

    // Theme Switcher
    document.querySelectorAll('.card-theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        cardElement.className = `w-full max-w-lg aspect-[4/3] rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between border-4 shadow-2xl transition-all duration-500 overflow-hidden text-center card-theme-${theme}`;
      });
    });

    // Copy Text
    const copyBtn = document.getElementById('btn-copy-card');
    const copyNotice = document.getElementById('copy-card-notice');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = `🪔 Happy Diwali! 🪔\nTo: ${recipientInput.value}\n\n"${messageInput.value}"\n\nWith warm wishes from,\n${senderInput.value}`;
        navigator.clipboard.writeText(text).then(() => {
          if (copyNotice) {
            copyNotice.classList.remove('hidden');
            setTimeout(() => copyNotice.classList.add('hidden'), 2500);
          }
        });
      });
    }

    // Download Image
    const downloadBtn = document.getElementById('btn-download-card');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => this.exportCardToImage());
    }
  }

  exportCardToImage() {
    const canvas = document.getElementById('card-export-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // Background gradient
    const grad = ctx.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, w / 1.5);
    grad.addColorStop(0, '#2e1302');
    grad.addColorStop(0.7, '#150600');
    grad.addColorStop(1, '#080301');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Ornate Golden Border
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 12;
    ctx.strokeRect(30, 30, w - 60, h - 60);

    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.strokeRect(45, 45, w - 90, h - 90);

    // Decorative corner flourishes
    ctx.font = '36px serif';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText('❖', 60, 85);
    ctx.fillText('❖', w - 85, 85);
    ctx.fillText('❖', 60, h - 65);
    ctx.fillText('❖', w - 85, h - 65);

    // Sanskrit Header
    ctx.textAlign = 'center';
    ctx.font = 'bold 28px "Cinzel Decorative", Georgia, serif';
    ctx.fillStyle = '#fde047';
    ctx.fillText('॥ शुभ दीपावली ॥', w / 2, 130);

    // Recipient
    const recipient = document.getElementById('card-recipient').value || 'Dear Friends & Family';
    ctx.font = '34px "Cinzel Decorative", Georgia, serif';
    ctx.fillStyle = '#fef3c7';
    ctx.fillText(recipient, w / 2, 190);

    // Diya Icon
    ctx.font = '72px serif';
    ctx.fillText('🪔', w / 2, 290);

    // Grand Heading
    ctx.font = 'bold 58px "Cinzel Decorative", Georgia, serif';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('HAPPY DIWALI', w / 2, 370);

    // Message
    const msg = document.getElementById('card-message').value || '';
    ctx.font = 'italic 26px "Outfit", sans-serif';
    ctx.fillStyle = '#ffedd5';
    this.wrapText(ctx, `"${msg}"`, w / 2, 450, w - 240, 42);

    // Footer
    const sender = document.getElementById('card-sender').value || 'Your Name';
    ctx.font = '24px "Outfit", sans-serif';
    ctx.fillStyle = '#fcd34d';
    ctx.fillText('With warmest blessings & love from,', w / 2, h - 140);

    ctx.font = 'bold 36px "Cinzel Decorative", Georgia, serif';
    ctx.fillStyle = '#fef08a';
    ctx.fillText(sender, w / 2, h - 90);

    // Download trigger
    const link = document.createElement('a');
    link.download = `Happy-Diwali-Wish-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.diwaliApp = new DiwaliApp();
});
