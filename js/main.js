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
  { icon: '📱', name: 'Mobile Phones',     nameBn: 'মোবাইল ফোন' },
  { icon: '💻', name: 'Laptops',           nameBn: 'ল্যাপটপ' },
  { icon: '📟', name: 'Tablets',           nameBn: 'ট্যাবলেট' },
  { icon: '⌚', name: 'Smart Watches',     nameBn: 'স্মার্ট ওয়াচ' },
  { icon: '🎧', name: 'Headphones',        nameBn: 'হেডফোন' },
  { icon: '🎵', name: 'AirPods',           nameBn: 'এয়ারপড' },
  { icon: '🔊', name: 'Speakers',          nameBn: 'স্পিকার' },
  { icon: '🏠', name: 'Home Appliances',   nameBn: 'হোম অ্যাপ্লায়েন্স' },
  { icon: '🛰️', name: 'Starlink',          nameBn: 'স্টারলিংক' },
  { icon: '🔌', name: 'Adapters',          nameBn: 'অ্যাডাপ্টার' },
  { icon: '🔗', name: 'Cables',            nameBn: 'ক্যাবল' },
  { icon: '⚡', name: 'Wireless Chargers', nameBn: 'ওয়্যারলেস চার্জার' },
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
  {
    tag: 'OFFER // 01',
    title: '36 Months EMI',
    desc: 'Get any product on easy monthly installments. Zero hidden charges. Available on all major banks.'
  },
  {
    tag: 'OFFER // 02',
    title: 'Exchange & Save',
    desc: 'Trade in your old device and get instant discount on your new purchase at any outlet.'
  },
  {
    tag: 'OFFER // 03',
    title: 'Fastest Delivery',
    desc: 'Order online and get same-day or next-day delivery anywhere in Dhaka city.'
  },
];

/* ---------- RENDER CATEGORIES ---------- */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  categories.forEach((cat, i) => {
    const delay = (i % 6) + 1;
    const card  = document.createElement('div');
    card.className = `category-card reveal delay-${delay}`;
    card.innerHTML = `
      <div class="hud-corner tl"></div>
      <div class="hud-corner tr"></div>
      <div class="hud-corner bl"></div>
      <div class="hud-corner br"></div>
      <span class="category-icon">${cat.icon}</span>
      <p class="category-name">${cat.name}</p>
      <p class="category-name-bn">${cat.nameBn}</p>
    `;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ---------- RENDER PRODUCTS (FLOATING PANELS) ---------- */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  products.forEach((product, i) => {
    const floatDelay    = (i * 0.4).toFixed(1);
    const floatDuration = (3 + (i % 3) * 0.8).toFixed(1);
    const entranceDelay = (i * 0.12).toFixed(2);

    const panel = document.createElement('div');
    panel.className = 'product-panel';
    panel.style.cssText = `
      animation:
        productEntrance 0.8s cubic-bezier(0.34,1.56,0.64,1) ${entranceDelay}s both,
        floatPanel ${floatDuration}s ease-in-out ${floatDelay}s infinite;
    `;
    panel.setAttribute('data-index', i);

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

    panel.querySelector('.panel-btn').addEventListener('click', () => openModal(i));
    panel.addEventListener('click', () => openModal(i));

    grid.appendChild(panel);
  });
}

/* ---------- PRODUCT MODAL ---------- */
function createModal() {
  const modal = document.createElement('div');
  modal.id = 'productModal';
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-panel">
      <button class="modal-close">✕</button>
      <div class="modal-hud-tl">PRODUCT_INFO</div>
      <div class="modal-hud-tr" id="modalTag"></div>
      <div class="modal-corner tl"></div>
      <div class="modal-corner tr"></div>
      <div class="modal-corner bl"></div>
      <div class="modal-corner br"></div>
      <div class="modal-icon-wrap">
        <div class="modal-orb"></div>
        <span class="modal-icon" id="modalIcon"></span>
      </div>
      <div class="modal-content">
        <p class="modal-eyebrow" id="modalCategory"></p>
        <h2 class="modal-title" id="modalName"></h2>
        <div class="modal-price-row">
          <span class="modal-price" id="modalPrice"></span>
          <span class="modal-old" id="modalOld"></span>
          <span class="modal-disc" id="modalDiscount"></span>
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
  const p     = products[index];
  const modal = document.getElementById('productModal');

  document.getElementById('modalIcon').textContent     = p.placeholder;
  document.getElementById('modalTag').textContent      = p.tag + ' // ' + p.category;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalName').textContent     = p.name;
  document.getElementById('modalPrice').textContent    = p.price;
  document.getElementById('modalOld').textContent      = p.oldPrice || '';
  document.getElementById('modalDiscount').textContent = p.discount || '';
  document.getElementById('modalDesc').textContent     = p.desc;

  const specsEl = document.getElementById('modalSpecs');
  specsEl.innerHTML = p.specs.map(s =>
    `<div class="modal-spec-item"><span class="spec-dot">◆</span>${s}</div>`
  ).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
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

/* ---------- ADD REVEAL CLASSES ---------- */
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
  renderCategories();
  renderProducts();
  renderOffers();
  addRevealClasses();
  createModal();
});