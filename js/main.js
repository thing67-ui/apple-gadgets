/* ============================================
   APPLE GADGETS — main.js
   ============================================ */

/* ---------- NAVBAR ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ---------- HAMBURGER ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

/* ---------- SCROLL REVEAL ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
  .forEach(el => revealObserver.observe(el));

/* ---------- CATEGORIES DATA ---------- */
const categories = [
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="8" width="60" height="84" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <rect x="28" y="18" width="44" height="56" rx="3" fill="rgba(0,212,255,0.08)"/>
      <circle cx="50" cy="82" r="4" fill="currentColor" opacity="0.6"/>
      <line x1="42" y1="13" x2="58" y2="13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    name: 'Mobile Phones', nameBn: 'মোবাইল ফোন', color: '#00D4FF', index: '01'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="72" height="46" rx="5" fill="none" stroke="currentColor" stroke-width="3"/>
      <rect x="18" y="28" width="56" height="30" rx="2" fill="rgba(0,212,255,0.06)"/>
      <rect x="30" y="68" width="32" height="5" rx="2" fill="currentColor" opacity="0.4"/>
      <rect x="20" y="73" width="52" height="4" rx="2" fill="currentColor" opacity="0.3"/>
    </svg>`,
    name: 'Laptops', nameBn: 'ল্যাপটপ', color: '#7B61FF', index: '02'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="12" width="70" height="76" rx="8" fill="none" stroke="currentColor" stroke-width="3"/>
      <rect x="24" y="22" width="52" height="56" rx="3" fill="rgba(0,212,255,0.06)"/>
      <circle cx="50" cy="85" r="3.5" fill="currentColor" opacity="0.5"/>
      <line x1="44" y1="17" x2="56" y2="17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    name: 'Tablets', nameBn: 'ট্যাবলেট', color: '#00D4FF', index: '03'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" stroke-width="3"/>
      <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.6"/>
      <line x1="50" y1="50" x2="50" y2="28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="50" y1="50" x2="62" y2="54" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <rect x="30" y="14" width="8" height="5" rx="2" fill="currentColor" opacity="0.5"/>
    </svg>`,
    name: 'Smart Watches', nameBn: 'স্মার্ট ওয়াচ', color: '#FF6B35', index: '04'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="28" ry="28" fill="none" stroke="currentColor" stroke-width="3"/>
      <ellipse cx="50" cy="50" rx="14" ry="14" fill="rgba(0,212,255,0.1)" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <rect x="20" y="46" width="8" height="8" rx="3" fill="currentColor" opacity="0.7"/>
      <rect x="72" y="46" width="8" height="8" rx="3" fill="currentColor" opacity="0.7"/>
      <path d="M28 50 Q20 30 14 28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M72 50 Q80 30 86 28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`,
    name: 'Headphones', nameBn: 'হেডফোন', color: '#7B61FF', index: '05'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="32" y="10" width="36" height="56" rx="18" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="66" x2="50" y2="82" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="36" y1="82" x2="64" y2="82" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="26" y1="44" x2="74" y2="44" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
      <circle cx="50" cy="38" r="3" fill="currentColor" opacity="0.5"/>
    </svg>`,
    name: 'AirPods', nameBn: 'এয়ারপড', color: '#00D4FF', index: '06'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="28" width="56" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="3"/>
      <circle cx="38" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="62" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="38" cy="50" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="62" cy="50" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="36" y1="28" x2="36" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="64" y1="28" x2="64" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    name: 'Speakers', nameBn: 'স্পিকার', color: '#FF6B35', index: '07'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="30" width="64" height="46" rx="6" fill="none" stroke="currentColor" stroke-width="3"/>
      <rect x="26" y="38" width="18" height="14" rx="3" fill="rgba(0,212,255,0.15)" stroke="currentColor" stroke-width="1.5"/>
      <rect x="52" y="38" width="8" height="8" rx="2" fill="currentColor" opacity="0.4"/>
      <rect x="64" y="38" width="8" height="8" rx="2" fill="currentColor" opacity="0.4"/>
      <rect x="52" y="52" width="8" height="5" rx="1.5" fill="currentColor" opacity="0.3"/>
      <rect x="64" y="52" width="8" height="5" rx="1.5" fill="currentColor" opacity="0.3"/>
      <line x1="38" y1="22" x2="38" y2="30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="62" y1="22" x2="62" y2="30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    name: 'Home Appliances', nameBn: 'হোম অ্যাপ্লায়েন্স', color: '#7B61FF', index: '08'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 90,32 90,68 50,90 10,68 10,32" fill="none" stroke="currentColor" stroke-width="3"/>
      <polygon points="50,26 74,40 74,60 50,74 26,60 26,40" fill="rgba(0,212,255,0.08)" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.4"/>
      <line x1="50" y1="10" x2="50" y2="26" stroke="currentColor" stroke-width="2"/>
      <line x1="90" y1="32" x2="74" y2="40" stroke="currentColor" stroke-width="2"/>
      <line x1="90" y1="68" x2="74" y2="60" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    name: 'Starlink', nameBn: 'স্টারলিংক', color: '#00D4FF', index: '09'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="38" y="10" width="24" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="3"/>
      <rect x="44" y="26" width="12" height="40" rx="3" fill="none" stroke="currentColor" stroke-width="3"/>
      <rect x="36" y="66" width="28" height="24" rx="5" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="74" x2="50" y2="82" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="44" y1="78" x2="56" y2="78" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    name: 'Adapters', nameBn: 'অ্যাডাপ্টার', color: '#FF6B35', index: '10'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <circle cx="74" cy="70" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <path d="M34 36 Q50 20 66 36 Q82 52 66 64" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="26" cy="30" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="74" cy="70" r="4" fill="currentColor" opacity="0.5"/>
    </svg>`,
    name: 'Cables', nameBn: 'ক্যাবল', color: '#7B61FF', index: '11'
  },
  {
    icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="54" r="30" fill="none" stroke="currentColor" stroke-width="3"/>
      <circle cx="50" cy="54" r="18" fill="rgba(0,212,255,0.08)" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <circle cx="50" cy="54" r="6" fill="currentColor" opacity="0.6"/>
      <path d="M50 14 L50 24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M42 16 L46 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <path d="M58 16 L54 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    </svg>`,
    name: 'Wireless Chargers', nameBn: 'ওয়্যারলেস চার্জার', color: '#00D4FF', index: '12'
  },
];

/* ---------- PRODUCTS DATA ---------- */
const products = [
  {
    name: 'iPhone 17',
    tag: 'APPLE', category: 'SMARTPHONE',
    price: '৳1,02,499', oldPrice: '৳1,20,000', discount: '৳17,501 OFF',
    badge: 'HOT DEAL', placeholder: '📱',
    specs: ['6.1" Super Retina XDR', 'A19 Bionic Chip', '48MP Camera System', '5G Connectivity', 'iOS 19'],
    desc: 'The latest iPhone with breakthrough A19 chip, stunning camera system, and all-day battery life.'
  },
  {
    name: 'MacBook Air M5 13"',
    tag: 'APPLE', category: 'LAPTOP',
    price: '৳1,33,000', oldPrice: '', discount: '',
    badge: 'NEW', placeholder: '💻',
    specs: ['M5 Chip 10-Core CPU', '16GB Unified Memory', '256GB SSD', '13.6" Liquid Retina', '18hr Battery'],
    desc: 'Supercharged by M5. Incredibly thin, fanless design with all-day battery and blazing performance.'
  },
  {
    name: 'Galaxy S26 Ultra 5G',
    tag: 'SAMSUNG', category: 'SMARTPHONE',
    price: '৳1,16,499', oldPrice: '৳1,19,500', discount: '৳3,001 OFF',
    badge: 'NEW', placeholder: '📱',
    specs: ['6.9" Dynamic AMOLED 2X', 'Snapdragon 8 Elite', '200MP Camera', 'S Pen Included', '5000mAh'],
    desc: 'The ultimate Galaxy experience with S Pen, 200MP camera, and titanium frame design.'
  },
  {
    name: 'iPad Air M4',
    tag: 'APPLE', category: 'TABLET',
    price: '৳75,500', oldPrice: '৳88,500', discount: '৳13,000 OFF',
    badge: 'DEAL', placeholder: '📟',
    specs: ['M4 Chip', '11" Liquid Retina', 'Apple Pencil Pro', 'WiFi 6E', 'USB-C Thunderbolt'],
    desc: 'Serious performance in a thin, light design. Perfect for creativity and productivity on the go.'
  },
  {
    name: 'iPhone 16 Pro Max',
    tag: 'APPLE', category: 'SMARTPHONE',
    price: '৳1,45,000', oldPrice: '৳1,65,000', discount: '৳20,000 OFF',
    badge: 'BEST DEAL', placeholder: '📱',
    specs: ['6.9" ProMotion Display', 'A18 Pro Chip', '48MP Fusion Camera', 'Titanium Design', '4K 120fps Video'],
    desc: 'Pro. Beyond. The most powerful iPhone ever with titanium design and advanced camera capabilities.'
  },
  {
    name: 'MacBook Pro M5 Pro 14"',
    tag: 'APPLE', category: 'LAPTOP',
    price: '৳2,77,000', oldPrice: '', discount: '',
    badge: 'PRO', placeholder: '💻',
    specs: ['M5 Pro 15-Core CPU', '24GB Unified Memory', '1TB SSD', 'Liquid Retina XDR', '22hr Battery'],
    desc: 'Supercharged for pros. The most powerful MacBook Pro ever with M5 Pro chip and stunning XDR display.'
  },
  {
    name: 'Xiaomi Pad 7',
    tag: 'XIAOMI', category: 'TABLET',
    price: '৳39,500', oldPrice: '৳42,000', discount: '৳2,500 OFF',
    badge: 'DEAL', placeholder: '📟',
    specs: ['11.2" 3.2K Display', 'Snapdragon 7+ Gen 3', '8GB RAM', '144Hz Refresh Rate', '8850mAh'],
    desc: 'Premium tablet experience with stunning 3.2K display and powerful Snapdragon processor.'
  },
  {
    name: 'CMF Watch Pro 2',
    tag: 'NOTHING', category: 'SMARTWATCH',
    price: '৳5,750', oldPrice: '৳7,500', discount: '৳1,750 OFF',
    badge: 'HOT', placeholder: '⌚',
    specs: ['1.32" AMOLED Display', 'BT Calling', '100+ Sports Modes', 'SpO2 & Heart Rate', '13-Day Battery'],
    desc: 'Premium smartwatch with AMOLED display, BT calling, and exceptional 13-day battery life.'
  },
];

/* ---------- OFFERS DATA ---------- */
const offers = [
  { tag: 'OFFER // 01', title: '36 Months EMI', desc: 'Get any product on easy monthly installments. Zero hidden charges. Available on all major banks.' },
  { tag: 'OFFER // 02', title: 'Exchange & Save', desc: 'Trade in your old device and get instant discount on your new purchase at any outlet.' },
  { tag: 'OFFER // 03', title: 'Fastest Delivery', desc: 'Order online and get same-day or next-day delivery anywhere in Dhaka city.' },
];

/* ============================================
   CINEMATIC CATEGORY SHOWCASE
   ============================================ */
let currentCat = 0;
let catAutoplay = null;
let isTransitioning = false;

function buildCategoryShowcase() {
  const wrapper = document.getElementById('categoriesGrid');
  if (!wrapper) return;

  wrapper.innerHTML = '';
  wrapper.className = 'cat-showcase';

  wrapper.innerHTML = `
    <!-- Background ambient glow -->
    <div class="cat-ambient" id="catAmbient"></div>

    <!-- Particle canvas -->
    <canvas class="cat-canvas" id="catCanvas"></canvas>

    <!-- HUD labels -->
    <div class="cat-hud-tl">CAT_SYS // BROWSE</div>
    <div class="cat-hud-tr" id="catCounter">01 / 12</div>
    <div class="cat-hud-bl" id="catIndexLabel">INDEX_01</div>
    <div class="cat-hud-br">AG // CATEGORIES</div>

    <!-- Main floating icon -->
    <div class="cat-hero" id="catHero">
      <div class="cat-orbit-ring ring-1"></div>
      <div class="cat-orbit-ring ring-2"></div>
      <div class="cat-orbit-ring ring-3"></div>
      <div class="cat-glow-orb" id="catGlowOrb"></div>
      <div class="cat-icon-wrap" id="catIconWrap">
        <div class="cat-svg-icon" id="catSvgIcon"></div>
      </div>
    </div>

    <!-- Category name -->
    <div class="cat-info" id="catInfo">
      <p class="cat-name-en" id="catNameEn"></p>
      <p class="cat-name-bn" id="catNameBn"></p>
    </div>

    <!-- Dot navigation -->
    <div class="cat-dots" id="catDots"></div>

    <!-- Arrow navigation -->
    <button class="cat-arrow cat-prev" id="catPrev" aria-label="Previous">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>
    <button class="cat-arrow cat-next" id="catNext" aria-label="Next">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>

    <!-- All categories mini strip -->
    <div class="cat-strip" id="catStrip"></div>
  `;

  // Build dot nav
  const dots = document.getElementById('catDots');
  categories.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'cat-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Category ${i + 1}`);
    dot.addEventListener('click', () => goToCategory(i));
    dots.appendChild(dot);
  });

  // Build mini strip
  const strip = document.getElementById('catStrip');
  categories.forEach((cat, i) => {
    const chip = document.createElement('button');
    chip.className = 'cat-chip' + (i === 0 ? ' active' : '');
    chip.innerHTML = `<span class="chip-icon">${cat.name.split(' ')[0]}</span>`;
    chip.setAttribute('title', cat.name);
    chip.addEventListener('click', () => goToCategory(i));
    strip.appendChild(chip);
  });

  // Arrow controls
  document.getElementById('catPrev').addEventListener('click', () => {
    goToCategory((currentCat - 1 + categories.length) % categories.length);
  });
  document.getElementById('catNext').addEventListener('click', () => {
    goToCategory((currentCat + 1) % categories.length);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const catSection = document.querySelector('.categories');
    const rect = catSection?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft')  goToCategory((currentCat - 1 + categories.length) % categories.length);
      if (e.key === 'ArrowRight') goToCategory((currentCat + 1) % categories.length);
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  wrapper.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
  wrapper.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToCategory((currentCat + 1) % categories.length);
      else          goToCategory((currentCat - 1 + categories.length) % categories.length);
    }
  });

  // Show first category
  showCategory(0, false);
  startAutoplay();
}

function showCategory(index, animate = true) {
  if (isTransitioning && animate) return;
  isTransitioning = animate;

  const cat        = categories[index];
  const iconWrap   = document.getElementById('catIconWrap');
  const svgIcon    = document.getElementById('catSvgIcon');
  const nameEn     = document.getElementById('catNameEn');
  const nameBn     = document.getElementById('catNameBn');
  const counter    = document.getElementById('catCounter');
  const indexLabel = document.getElementById('catIndexLabel');
  const ambient    = document.getElementById('catAmbient');
  const glowOrb    = document.getElementById('catGlowOrb');

  // Fire particles on transition
  if (animate) fireParticles(cat.color);

  // Animate out
  if (animate) {
    iconWrap.classList.add('exit');
    document.getElementById('catInfo').classList.add('exit');
  }

  setTimeout(() => {
    // Update content
    svgIcon.innerHTML  = cat.icon;
    svgIcon.style.color = cat.color;
    nameEn.textContent  = cat.name;
    nameBn.textContent  = cat.nameBn;
    counter.textContent = `${cat.index} / 12`;
    indexLabel.textContent = `INDEX_${cat.index}`;

    // Update ambient color
    ambient.style.background = `radial-gradient(circle at 50% 50%, ${cat.color}18 0%, transparent 65%)`;
    glowOrb.style.background = `radial-gradient(circle, ${cat.color}30 0%, transparent 70%)`;

    // Update dots
    document.querySelectorAll('.cat-dot').forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });

    // Update chips
    document.querySelectorAll('.cat-chip').forEach((c, i) => {
      c.classList.toggle('active', i === index);
    });

    // Animate in
    if (animate) {
      iconWrap.classList.remove('exit');
      iconWrap.classList.add('enter');
      document.getElementById('catInfo').classList.remove('exit');
      document.getElementById('catInfo').classList.add('enter');
      setTimeout(() => {
        iconWrap.classList.remove('enter');
        document.getElementById('catInfo').classList.remove('enter');
        isTransitioning = false;
      }, 600);
    }
  }, animate ? 300 : 0);
}

function goToCategory(index) {
  currentCat = index;
  showCategory(index, true);
  resetAutoplay();
}

function startAutoplay() {
  catAutoplay = setInterval(() => {
    currentCat = (currentCat + 1) % categories.length;
    showCategory(currentCat, true);
  }, 3500);
}

function resetAutoplay() {
  clearInterval(catAutoplay);
  startAutoplay();
}

/* ---------- PARTICLE BURST ---------- */
function fireParticles(color) {
  const canvas = document.getElementById('catCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const cx = canvas.width  / 2;
  const cy = canvas.height / 2;
  const particles = Array.from({ length: 40 }, () => ({
    x: cx, y: cy,
    r: Math.random() * 3 + 1,
    alpha: 1,
    speed: Math.random() * 4 + 2,
    angle: Math.random() * Math.PI * 2,
    decay: Math.random() * 0.02 + 0.015,
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.alpha -= p.decay;
      p.speed *= 0.97;
      if (p.alpha <= 0) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
      ctx.fill();
    });
    if (++frame < 60) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

/* ---------- RENDER PRODUCTS ---------- */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  products.forEach((product, i) => {
    const floatDelay    = (i * 0.4).toFixed(1);
    const floatDuration = (3 + (i % 3) * 0.8).toFixed(1);
    const entranceDelay = (i * 0.12).toFixed(2);
    const panel = document.createElement('div');
    panel.className = 'product-panel';
    panel.style.cssText = `animation: productEntrance 0.8s cubic-bezier(0.34,1.56,0.64,1) ${entranceDelay}s both, floatPanel ${floatDuration}s ease-in-out ${floatDelay}s infinite;`;
    panel.innerHTML = `
      <div class="panel-glow"></div>
      <div class="panel-badge">${product.badge}</div>
      <div class="panel-icon-wrap">
        <div class="panel-orb"></div>
        <span class="panel-icon">${product.placeholder}</span>
        <div class="panel-ring"></div>
      </div>
      <div class="panel-info">
        <p class="panel-tag">${product.tag} <span class="panel-cat">// ${product.category}</span></p>
        <h3 class="panel-name">${product.name}</h3>
        <div class="panel-price-row">
          <span class="panel-price">${product.price}</span>
          ${product.discount ? `<span class="panel-discount">${product.discount}</span>` : ''}
        </div>
        ${product.oldPrice ? `<span class="panel-old-price">${product.oldPrice}</span>` : ''}
      </div>
      <button class="panel-btn">View Details →</button>
      <div class="panel-corner tl"></div>
      <div class="panel-corner tr"></div>
      <div class="panel-corner bl"></div>
      <div class="panel-corner br"></div>
    `;
    panel.querySelector('.panel-btn').addEventListener('click', (e) => { e.stopPropagation(); openModal(i); });
    panel.addEventListener('click', () => openModal(i));
    grid.appendChild(panel);
  });
}

/* ---------- MODAL ---------- */
function createModal() {
  const modal = document.createElement('div');
  modal.id = 'productModal';
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-panel">
      <button class="modal-close">✕</button>
      <div class="modal-hud-tl">PRODUCT_INFO</div>
      <div class="modal-hud-tr" id="modalTag"></div>
      <div class="modal-corner tl"></div><div class="modal-corner tr"></div>
      <div class="modal-corner bl"></div><div class="modal-corner br"></div>
      <div class="modal-icon-wrap">
        <div class="modal-orb"></div>
        <span class="modal-icon" id="modalIcon"></span>
      </div>
      <div class="modal-content">
        <p class="modal-eyebrow" id="modalCategory"></p>
        <h2 class="modal-title" id="modalName"></h2>
        <div class="modal-price-row">
          <span class="modal-price" id="modalPrice"></span>
          <span class="modal-old"   id="modalOld"></span>
          <span class="modal-disc"  id="modalDiscount"></span>
        </div>
        <p class="modal-desc" id="modalDesc"></p>
        <div class="modal-specs" id="modalSpecs"></div>
        <div class="modal-actions">
          <a href="tel:09678148148" class="btn-primary">📞 Call to Order</a>
          <a href="https://www.facebook.com/applegadgetsbangladesh/" target="_blank" class="btn-secondary">Message on Facebook</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(index) {
  const p = products[index];
  const modal = document.getElementById('productModal');
  document.getElementById('modalIcon').textContent     = p.placeholder;
  document.getElementById('modalTag').textContent      = p.tag + ' // ' + p.category;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalName').textContent     = p.name;
  document.getElementById('modalPrice').textContent    = p.price;
  document.getElementById('modalOld').textContent      = p.oldPrice || '';
  document.getElementById('modalDiscount').textContent = p.discount || '';
  document.getElementById('modalDesc').textContent     = p.desc;
  document.getElementById('modalSpecs').innerHTML      = p.specs.map(s =>
    `<div class="modal-spec-item"><span class="spec-dot">◆</span>${s}</div>`
  ).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- RENDER OFFERS ---------- */
function renderOffers() {
  const grid = document.getElementById('offersGrid');
  if (!grid) return;
  offers.forEach((offer, i) => {
    const card = document.createElement('div');
    card.className = `offer-card reveal delay-${i + 1}`;
    card.innerHTML = `
      <p class="offer-tag">${offer.tag}</p>
      <h3 class="offer-title">${offer.title}</h3>
      <p class="offer-desc">${offer.desc}</p>
      <div class="offer-glow"></div>
    `;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ---------- REVEAL CLASSES ---------- */
function addRevealClasses() {
  document.querySelectorAll('.section-header').forEach(el => el.classList.add('reveal'));
  const aboutContent = document.querySelector('.about-content');
  const aboutVisual  = document.querySelector('.about-visual');
  if (aboutContent) aboutContent.classList.add('reveal-left');
  if (aboutVisual)  aboutVisual.classList.add('reveal-right');
  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.classList.add('reveal', `delay-${i + 1}`);
  });
  const footer = document.querySelector('.footer-top');
  if (footer) footer.classList.add('reveal');
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => revealObserver.observe(el));
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  buildCategoryShowcase();
  renderProducts();
  renderOffers();
  addRevealClasses();
  createModal();
});