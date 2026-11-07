/**
 * Enchanted Garden of Lilies & The Royal Bouquet
 * Features hyper-detailed realistic SVG artwork, cute lore, and interactive inspection
 * for every single Lily variety included in the bouquet.
 */

const LILY_DATA = [
  {
    id: 'stargazer',
    name: 'Stargazer Lily',
    botanical: 'Lilium Orientalis "Stargazer"',
    tagline: 'The Drama Queen of the Garden ✨',
    colorName: 'Vibrant Magenta & Crimson Freckles',
    symbolism: 'Limitless Ambition, Passion & Prosperity',
    fragrance: 'Intensely sweet and intoxicating spicy-honey perfume',
    cuteFact: 'Unlike most lilies that nod downward, Stargazers face straight up towards the heavens—literally gazing at the stars!',
    accentColor: '#db2777',
    svg: `
      <svg viewBox="0 0 200 200" class="w-full h-full filter drop-shadow-lg">
        <!-- Stem -->
        <path d="M 100 130 Q 98 170 102 200" stroke="#16a34a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <!-- Leaves -->
        <path d="M 100 160 Q 60 150 40 165 Q 75 175 100 165" fill="#15803d"/>
        <path d="M 102 145 Q 140 135 160 150 Q 125 160 102 150" fill="#16a34a"/>
        <!-- Petals Base -->
        <g transform="translate(100, 100)">
          <!-- Petal 1: Top -->
          <path d="M 0 0 C -25 -40 -20 -85 0 -95 C 20 -85 25 -40 0 0" fill="url(#sg-grad)" stroke="#f472b6" stroke-width="1.5"/>
          <!-- Petal 2: Top Right -->
          <path d="M 0 0 C 15 -45 65 -70 85 -55 C 80 -30 40 -15 0 0" fill="url(#sg-grad)" stroke="#f472b6" stroke-width="1.5"/>
          <!-- Petal 3: Bottom Right -->
          <path d="M 0 0 C 35 -10 80 20 75 45 C 50 50 20 25 0 0" fill="url(#sg-grad)" stroke="#f472b6" stroke-width="1.5"/>
          <!-- Petal 4: Bottom -->
          <path d="M 0 0 C 20 35 15 80 0 90 C -15 80 -20 35 0 0" fill="url(#sg-grad)" stroke="#f472b6" stroke-width="1.5"/>
          <!-- Petal 5: Bottom Left -->
          <path d="M 0 0 C -20 25 -50 50 -75 45 C -80 20 -35 -10 0 0" fill="url(#sg-grad)" stroke="#f472b6" stroke-width="1.5"/>
          <!-- Petal 6: Top Left -->
          <path d="M 0 0 C -40 -15 -80 -30 -85 -55 C -65 -70 -15 -45 0 0" fill="url(#sg-grad)" stroke="#f472b6" stroke-width="1.5"/>
          
          <!-- Inner Star White Glow & Freckles -->
          <circle cx="0" cy="0" r="14" fill="#fdf2f8"/>
          <circle cx="0" cy="0" r="7" fill="#84cc16"/>
          <!-- Freckles -->
          <circle cx="0" cy="-25" r="1.5" fill="#881337"/>
          <circle cx="5" cy="-35" r="1.5" fill="#881337"/>
          <circle cx="-6" cy="-30" r="1.5" fill="#881337"/>
          <circle cx="20" cy="-15" r="1.5" fill="#881337"/>
          <circle cx="30" cy="-22" r="1.5" fill="#881337"/>
          <circle cx="-20" cy="-15" r="1.5" fill="#881337"/>
          <circle cx="-30" cy="-22" r="1.5" fill="#881337"/>
          <circle cx="20" cy="15" r="1.5" fill="#881337"/>
          <circle cx="-20" cy="15" r="1.5" fill="#881337"/>
          
          <!-- Stamens with brown pollen anthers -->
          <path d="M 0 0 Q -10 -25 -15 -45" stroke="#fef08a" stroke-width="2" fill="none"/>
          <ellipse cx="-15" cy="-47" rx="5" ry="2.5" fill="#78350f" transform="rotate(-30, -15, -47)"/>

          <path d="M 0 0 Q 10 -25 15 -45" stroke="#fef08a" stroke-width="2" fill="none"/>
          <ellipse cx="15" cy="-47" rx="5" ry="2.5" fill="#78350f" transform="rotate(30, 15, -47)"/>

          <path d="M 0 0 Q 25 -5 40 -10" stroke="#fef08a" stroke-width="2" fill="none"/>
          <ellipse cx="42" cy="-10" rx="5" ry="2.5" fill="#78350f" transform="rotate(60, 42, -10)"/>

          <path d="M 0 0 Q -25 -5 -40 -10" stroke="#fef08a" stroke-width="2" fill="none"/>
          <ellipse cx="-42" cy="-10" rx="5" ry="2.5" fill="#78350f" transform="rotate(-60, -42, -10)"/>

          <!-- Central Pistil -->
          <circle cx="0" cy="-10" r="3.5" fill="#15803d"/>
        </g>
        <defs>
          <radialGradient id="sg-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff1f2"/>
            <stop offset="35%" stop-color="#f43f5e"/>
            <stop offset="85%" stop-color="#be123c"/>
            <stop offset="100%" stop-color="#ffffff"/>
          </radialGradient>
        </defs>
      </svg>
    `
  },
  {
    id: 'casablanca',
    name: 'Casablanca White Lily',
    botanical: 'Lilium "Casa Blanca"',
    tagline: 'The Queen of Grace & Serenity 🕊️',
    colorName: 'Pristine Velvety Snow White',
    symbolism: 'Purity, Divine Blessings & Inner Peace',
    fragrance: 'Delicate, airy, and deeply calming floral aroma',
    cuteFact: 'Regarded globally as the grandest white lily in the world! Its petals glow gently under soft moonlight.',
    accentColor: '#f8fafc',
    svg: `
      <svg viewBox="0 0 200 200" class="w-full h-full filter drop-shadow-lg">
        <path d="M 100 130 Q 103 165 98 200" stroke="#16a34a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M 100 155 Q 140 145 165 160 Q 130 170 100 160" fill="#15803d"/>
        <g transform="translate(100, 100)">
          <!-- 6 Elegant White Petals -->
          <path d="M 0 0 C -25 -40 -20 -85 0 -95 C 20 -85 25 -40 0 0" fill="url(#cb-grad)" stroke="#e2e8f0" stroke-width="1.5"/>
          <path d="M 0 0 C 15 -45 65 -70 85 -55 C 80 -30 40 -15 0 0" fill="url(#cb-grad)" stroke="#e2e8f0" stroke-width="1.5"/>
          <path d="M 0 0 C 35 -10 80 20 75 45 C 50 50 20 25 0 0" fill="url(#cb-grad)" stroke="#e2e8f0" stroke-width="1.5"/>
          <path d="M 0 0 C 20 35 15 80 0 90 C -15 80 -20 35 0 0" fill="url(#cb-grad)" stroke="#e2e8f0" stroke-width="1.5"/>
          <path d="M 0 0 C -20 25 -50 50 -75 45 C -80 20 -35 -10 0 0" fill="url(#cb-grad)" stroke="#e2e8f0" stroke-width="1.5"/>
          <path d="M 0 0 C -40 -15 -80 -30 -85 -55 C -65 -70 -15 -45 0 0" fill="url(#cb-grad)" stroke="#e2e8f0" stroke-width="1.5"/>

          <!-- Lime green throat glow -->
          <circle cx="0" cy="0" r="12" fill="#84cc16" opacity="0.65"/>
          
          <!-- Golden Brown Anthers -->
          <path d="M 0 0 Q -12 -30 -18 -48" stroke="#84cc16" stroke-width="2" fill="none"/>
          <ellipse cx="-18" cy="-50" rx="5" ry="2.5" fill="#d97706" transform="rotate(-25, -18, -50)"/>

          <path d="M 0 0 Q 12 -30 18 -48" stroke="#84cc16" stroke-width="2" fill="none"/>
          <ellipse cx="18" cy="-50" rx="5" ry="2.5" fill="#d97706" transform="rotate(25, 18, -50)"/>

          <path d="M 0 0 Q 28 -8 45 -12" stroke="#84cc16" stroke-width="2" fill="none"/>
          <ellipse cx="47" cy="-12" rx="5" ry="2.5" fill="#d97706" transform="rotate(50, 47, -12)"/>

          <path d="M 0 0 Q -28 -8 -45 -12" stroke="#84cc16" stroke-width="2" fill="none"/>
          <ellipse cx="-47" cy="-12" rx="5" ry="2.5" fill="#d97706" transform="rotate(-50, -47, -12)"/>
        </g>
        <defs>
          <radialGradient id="cb-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f0fdf4"/>
            <stop offset="60%" stop-color="#f8fafc"/>
            <stop offset="100%" stop-color="#e2e8f0"/>
          </radialGradient>
        </defs>
      </svg>
    `
  },
  {
    id: 'tiger',
    name: 'Fiery Tiger Lily',
    botanical: 'Lilium lancifolium',
    tagline: 'Fierce, Bold & Full of Energy 🐅',
    colorName: 'Fiery Orange with Deep Chocolate Spots',
    symbolism: 'Confidence, Wealth & Fearless Joy',
    fragrance: 'Mild, crisp earthy freshness',
    cuteFact: 'Tiger lilies curve their petals back so far it looks like they are wearing a backwards festive party hat!',
    accentColor: '#f97316',
    svg: `
      <svg viewBox="0 0 200 200" class="w-full h-full filter drop-shadow-lg">
        <path d="M 100 120 Q 95 160 100 200" stroke="#16a34a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g transform="translate(100, 90)">
          <!-- Swept back reflexed petals -->
          <path d="M 0 0 C -30 -35 -40 -70 -25 -85 C -10 -75 -5 -40 0 0" fill="#ea580c" stroke="#c2410c" stroke-width="1.5"/>
          <path d="M 0 0 C 30 -35 40 -70 25 -85 C 10 -75 5 -40 0 0" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
          <path d="M 0 0 C 45 -15 75 -15 85 5 C 65 15 35 10 0 0" fill="#ea580c" stroke="#c2410c" stroke-width="1.5"/>
          <path d="M 0 0 C -45 -15 -75 -15 -85 5 C -65 15 -35 10 0 0" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
          <path d="M 0 0 C -25 35 -35 65 -15 75 C 0 60 10 35 0 0" fill="#fb923c" stroke="#c2410c" stroke-width="1.5"/>
          <path d="M 0 0 C 25 35 35 65 15 75 C 0 60 -10 35 0 0" fill="#ea580c" stroke="#c2410c" stroke-width="1.5"/>

          <!-- Dark Freckles -->
          <circle cx="5" cy="-25" r="2" fill="#451a03"/>
          <circle cx="-10" cy="-35" r="2" fill="#451a03"/>
          <circle cx="15" cy="-45" r="1.5" fill="#451a03"/>
          <circle cx="-5" cy="-15" r="2" fill="#451a03"/>
          <circle cx="25" cy="5" r="2" fill="#451a03"/>
          <circle cx="-25" cy="5" r="2" fill="#451a03"/>
          <circle cx="10" cy="25" r="1.5" fill="#451a03"/>

          <!-- Prominent hanging curved stamens -->
          <path d="M 0 0 Q -20 30 -25 55" stroke="#fef08a" stroke-width="2.5" fill="none"/>
          <ellipse cx="-25" cy="58" rx="6" ry="3" fill="#78350f"/>
          
          <path d="M 0 0 Q 0 35 0 60" stroke="#fef08a" stroke-width="2.5" fill="none"/>
          <ellipse cx="0" cy="63" rx="6" ry="3" fill="#78350f"/>

          <path d="M 0 0 Q 20 30 25 55" stroke="#fef08a" stroke-width="2.5" fill="none"/>
          <ellipse cx="25" cy="58" rx="6" ry="3" fill="#78350f"/>
        </g>
      </svg>
    `
  },
  {
    id: 'asiatic-gold',
    name: 'Golden Asiatic Lily',
    botanical: 'Lilium Asiaticum "Pollyanna"',
    tagline: 'Liquid Sunshine & Good Vibes ☀️',
    colorName: 'Radiant Sunbeam Golden Yellow',
    symbolism: 'Joy, Warmth, New Beginnings & Good Fortune',
    fragrance: 'Unscented & pollen-friendly—pure radiant beauty!',
    cuteFact: 'Asiatic lilies are the earliest bloomers of summer. They are celebrated as nature\'s little golden lightbulbs!',
    accentColor: '#eab308',
    svg: `
      <svg viewBox="0 0 200 200" class="w-full h-full filter drop-shadow-lg">
        <path d="M 100 130 Q 102 165 98 200" stroke="#16a34a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g transform="translate(100, 100)">
          <!-- 6 Symmetrical Golden Petals -->
          <path d="M 0 0 C -20 -35 -20 -80 0 -90 C 20 -80 20 -35 0 0" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
          <path d="M 0 0 C 15 -40 60 -65 80 -50 C 75 -25 35 -15 0 0" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
          <path d="M 0 0 C 35 -10 75 15 70 40 C 45 45 20 20 0 0" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
          <path d="M 0 0 C 20 35 15 75 0 85 C -15 75 -20 35 0 0" fill="#eab308" stroke="#ca8a04" stroke-width="1.5"/>
          <path d="M 0 0 C -20 20 -45 45 -70 40 C -75 15 -35 -10 0 0" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
          <path d="M 0 0 C -35 -15 -75 -25 -80 -50 C -60 -65 -15 -40 0 0" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>

          <!-- Warm Orange Center Glow -->
          <circle cx="0" cy="0" r="16" fill="#f97316" opacity="0.6"/>

          <!-- Stamens -->
          <path d="M 0 0 Q -10 -20 -15 -40" stroke="#fef08a" stroke-width="2" fill="none"/>
          <ellipse cx="-15" cy="-42" rx="5" ry="2.5" fill="#9a3412" transform="rotate(-30, -15, -42)"/>

          <path d="M 0 0 Q 10 -20 15 -40" stroke="#fef08a" stroke-width="2" fill="none"/>
          <ellipse cx="15" cy="-42" rx="5" ry="2.5" fill="#9a3412" transform="rotate(30, 15, -42)"/>

          <path d="M 0 0 Q 25 -5 38 -10" stroke="#fef08a" stroke-width="2" fill="none"/>
          <ellipse cx="40" cy="-10" rx="5" ry="2.5" fill="#9a3412" transform="rotate(60, 40, -10)"/>

          <path d="M 0 0 Q -25 -5 -38 -10" stroke="#fef08a" stroke-width="2" fill="none"/>
          <ellipse cx="-40" cy="-10" rx="5" ry="2.5" fill="#9a3412" transform="rotate(-60, -40, -10)"/>
        </g>
      </svg>
    `
  },
  {
    id: 'pink-trumpet',
    name: 'Pink Perfection Trumpet Lily',
    botanical: 'Lilium "Pink Perfection"',
    tagline: 'A Romantic Warm Hug 🌸',
    colorName: 'Blush Pastel Rose & Soft Lilac',
    symbolism: 'Gentle Affection, Elegance & Harmony',
    fragrance: 'Warm vanilla and sweet clover breeze',
    cuteFact: 'The trumpet shape acts like an acoustic megaphone, letting night bees hear the flower\'s gentle hum!',
    accentColor: '#ec4899',
    svg: `
      <svg viewBox="0 0 200 200" class="w-full h-full filter drop-shadow-lg">
        <path d="M 100 135 Q 98 168 102 200" stroke="#16a34a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g transform="translate(100, 100)">
          <!-- Trumpet Flare Petals -->
          <path d="M 0 0 C -30 -30 -40 -60 -20 -85 C 0 -75 10 -40 0 0" fill="#f472b6" stroke="#db2777" stroke-width="1.5"/>
          <path d="M 0 0 C 0 -40 10 -75 25 -85 C 40 -65 30 -30 0 0" fill="#f472b6" stroke="#db2777" stroke-width="1.5"/>
          <path d="M 0 0 C 35 -15 70 -15 80 5 C 60 25 35 15 0 0" fill="#f9a8d4" stroke="#db2777" stroke-width="1.5"/>
          <path d="M 0 0 C 20 30 20 65 0 80 C -15 65 -15 30 0 0" fill="#f472b6" stroke="#db2777" stroke-width="1.5"/>
          <path d="M 0 0 C -35 15 -60 25 -80 5 C -70 -15 -35 -15 0 0" fill="#f9a8d4" stroke="#db2777" stroke-width="1.5"/>
          
          <!-- Soft Golden throat -->
          <circle cx="0" cy="0" r="14" fill="#fef08a" opacity="0.8"/>

          <!-- Anthers -->
          <path d="M 0 0 Q -10 -25 -15 -50" stroke="#84cc16" stroke-width="2" fill="none"/>
          <ellipse cx="-15" cy="-52" rx="5" ry="2.5" fill="#b45309"/>

          <path d="M 0 0 Q 10 -25 15 -50" stroke="#84cc16" stroke-width="2" fill="none"/>
          <ellipse cx="15" cy="-52" rx="5" ry="2.5" fill="#b45309"/>
        </g>
      </svg>
    `
  },
  {
    id: 'calla-peace',
    name: 'Calla / Peace Lily',
    botanical: 'Zantedeschia aethiopica',
    tagline: 'Modern, Sleek & Sculptural 🌿',
    colorName: 'Creamy Ivory with Golden Spadix Spire',
    symbolism: 'Rebirth, Tranquility & Timeless Grace',
    fragrance: 'Delicate citrus-vanilla undertone',
    cuteFact: 'The white "petal" is actually a special leaf called a spathe that wraps around the golden flower spike like a cozy coat!',
    accentColor: '#10b981',
    svg: `
      <svg viewBox="0 0 200 200" class="w-full h-full filter drop-shadow-lg">
        <path d="M 100 120 Q 98 160 100 200" stroke="#16a34a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <!-- Broad Leaf -->
        <path d="M 100 150 Q 50 140 30 180 Q 70 190 100 160" fill="#15803d"/>
        <g transform="translate(100, 85)">
          <!-- Creamy curved spathe -->
          <path d="M -15 45 C -45 10 -40 -35 0 -65 C 40 -35 45 10 15 45 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <path d="M 0 -65 Q 15 -75 25 -65 Q 0 -50 -15 45" fill="#f8fafc" opacity="0.9"/>
          
          <!-- Golden Spadix Spike -->
          <path d="M 0 15 L 0 -45" stroke="#eab308" stroke-width="8" stroke-linecap="round"/>
          <path d="M 0 15 L 0 -45" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
        </g>
      </svg>
    `
  }
];

class LilyGardenManager {
  constructor() {
    this.lilies = LILY_DATA;
    this.selectedLily = null;
  }

  renderGardenGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = this.lilies.map(lily => `
      <div class="lily-card bg-slate-900/80 border border-amber-500/20 hover:border-amber-400 rounded-3xl p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)] backdrop-blur-md group" data-lily-id="${lily.id}">
        <!-- Flower Visual -->
        <div class="w-36 h-36 relative mb-3 group-hover:scale-110 transition-transform duration-500">
          ${lily.svg}
        </div>
        <span class="text-[11px] font-semibold text-amber-400/80 uppercase tracking-widest">${lily.tagline}</span>
        <h3 class="text-xl font-bold font-serifHeading text-amber-100 mt-1">${lily.name}</h3>
        <p class="text-xs text-amber-200/60 italic mb-3">${lily.botanical}</p>
        <div class="mt-auto flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/30 group-hover:bg-amber-400 group-hover:text-black transition-colors">
          <span>Inspect Bloom</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </div>
      </div>
    `).join('');

    // Attach click events
    container.querySelectorAll('.lily-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-lily-id');
        this.openLilyModal(id);
      });
    });
  }

  openLilyModal(lilyId) {
    const lily = this.lilies.find(l => l.id === lilyId);
    if (!lily) return;

    if (window.festiveAudio) {
      window.festiveAudio.playSweetChime();
    }

    const modal = document.getElementById('lily-detail-modal');
    if (!modal) return;

    document.getElementById('modal-lily-svg').innerHTML = lily.svg;
    document.getElementById('modal-lily-tagline').innerText = lily.tagline;
    document.getElementById('modal-lily-name').innerText = lily.name;
    document.getElementById('modal-lily-botanical').innerText = lily.botanical;
    document.getElementById('modal-lily-symbolism').innerText = lily.symbolism;
    document.getElementById('modal-lily-fragrance').innerText = lily.fragrance;
    document.getElementById('modal-lily-fact').innerText = lily.cuteFact;

    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.querySelector('.modal-box').classList.remove('scale-95');
    }, 20);
  }

  closeLilyModal() {
    const modal = document.getElementById('lily-detail-modal');
    if (!modal) return;

    modal.classList.add('opacity-0');
    modal.querySelector('.modal-box').classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
}

window.lilyGarden = new LilyGardenManager();
