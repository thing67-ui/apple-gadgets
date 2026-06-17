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
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2"/>
    </svg>`,
    name: 'Mobile Phones', nameBn: 'মোবাইল ফোন', color: '#00D4FF', index: '01'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>`,
    name: 'Laptops', nameBn: 'ল্যাপটপ', color: '#7B61FF', index: '02'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2"/>
    </svg>`,
    name: 'Tablets', nameBn: 'ট্যাবলেট', color: '#00D4FF', index: '03'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="7"/>
      <polyline points="12 9 12 12 13.5 13.5"/>
      <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/>
    </svg>`,
    name: 'Smart Watches', nameBn: 'স্মার্ট ওয়াচ', color: '#FF6B35', index: '04'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
    </svg>`,
    name: 'Headphones', nameBn: 'হেডফোন', color: '#7B61FF', index: '05'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>`,
    name: 'AirPods', nameBn: 'এয়ারপড', color: '#00D4FF', index: '06'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <circle cx="12" cy="14" r="4"/>
      <line x1="12" y1="6" x2="12.01" y2="6" stroke-width="2"/>
    </svg>`,
    name: 'Speakers', nameBn: 'স্পিকার', color: '#FF6B35', index: '07'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>`,
    name: 'Home Appliances', nameBn: 'হোম অ্যাপ্লায়েন্স', color: '#7B61FF', index: '08'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`,
    name: 'Starlink', nameBn: 'স্টারলিংক', color: '#00D4FF', index: '09'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <line x1="12" y1="10" x2="12" y2="16"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
    </svg>`,
    name: 'Adapters', nameBn: 'অ্যাডাপ্টার', color: '#FF6B35', index: '10'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>`,
    name: 'Cables', nameBn: 'ক্যাবল', color: '#7B61FF', index: '11'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <line x1="12" y1="20" x2="12.01" y2="20" stroke-width="2"/>
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
    <div class="cat-ambient" id="catAmbient"></div>
    <canvas class="cat-canvas" id="catCanvas"></canvas>
    <div class="cat-hud-tl">CAT_SYS // BROWSE</div>
    <div class="cat-hud-tr" id="catCounter">01 / 12</div>
    <div class="cat-hud-bl" id="catIndexLabel">INDEX_01</div>
    <div class="cat-hud-br">AG // CATEGORIES</div>
    <div class="cat-hero" id="catHero">
      <div class="cat-orbit-ring ring-1"></div>
      <div class="cat-orbit-ring ring-2"></div>
      <div class="cat-orbit-ring ring-3"></div>
      <div class="cat-glow-orb" id="catGlowOrb"></div>
      <div class="cat-icon-wrap" id="catIconWrap">
        <div class="cat-svg-icon" id="catSvgIcon"></div>
      </div>
    </div>
    <div class="cat-info" id="catInfo">
      <p class="cat-name-en" id="catNameEn"></p>
      <p class="cat-name-bn" id="catNameBn"></p>
    </div>
    <div class="cat-dots" id="catDots"></div>
    <button class="cat-arrow cat-prev" id="catPrev" aria-label="Previous">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="cat-arrow cat-next" id="catNext" aria-label="Next">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
    <div class="cat-strip" id="catStrip"></div>
  `;

  const dots = document.getElementById('catDots');
  categories.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'cat-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToCategory(i));
    dots.appendChild(dot);
  });

  const strip = document.getElementById('catStrip');
  categories.forEach((cat, i) => {
    const chip = document.createElement('button');
    chip.className = 'cat-chip' + (i === 0 ? ' active' : '');
    chip.textContent = cat.name.split(' ')[0];
    chip.addEventListener('click', () => goToCategory(i));
    strip.appendChild(chip);
  });

  document.getElementById('catPrev').addEventListener('click', () => {
    goToCategory((currentCat - 1 + categories.length) % categories.length);
  });
  document.getElementById('catNext').addEventListener('click', () => {
    goToCategory((currentCat + 1) % categories.length);
  });

  document.addEventListener('keydown', (e) => {
    const rect = document.querySelector('.categories')?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft')  goToCategory((currentCat - 1 + categories.length) % categories.length);
      if (e.key === 'ArrowRight') goToCategory((currentCat + 1) % categories.length);
    }
  });

  let touchStartX = 0;
  wrapper.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
  wrapper.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToCategory((currentCat + 1) % categories.length);
      else          goToCategory((currentCat - 1 + categories.length) % categories.length);
    }
  });

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

  if (animate) fireParticles(cat.color);

  if (animate) {
    iconWrap.classList.add('exit');
    document.getElementById('catInfo').classList.add('exit');
  }

  setTimeout(() => {
    svgIcon.innerHTML   = cat.icon;
    svgIcon.style.color = cat.color;
    nameEn.textContent  = cat.name;
    nameBn.textContent  = cat.nameBn;
    counter.textContent = `${cat.index} / 12`;
    indexLabel.textContent = `INDEX_${cat.index}`;
    ambient.style.background  = `radial-gradient(circle at 50% 50%, ${cat.color}18 0%, transparent 65%)`;
    glowOrb.style.background  = `radial-gradient(circle, ${cat.color}30 0%, transparent 70%)`;

    document.querySelectorAll('.cat-dot').forEach((d, i) => d.classList.toggle('active', i === index));
    document.querySelectorAll('.cat-chip').forEach((c, i) => c.classList.toggle('active', i === index));

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

function fireParticles(color) {
  const canvas = document.getElementById('catCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const cx = canvas.width / 2;
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