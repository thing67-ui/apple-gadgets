/* ============================================
   APPLE GADGETS — main.js
   Navigation, scroll effects, dynamic content
   ============================================ */

/* ---------- NAVBAR SCROLL EFFECT ---------- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---------- HAMBURGER MENU ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

/* ---------- SCROLL REVEAL ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

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
    tag: 'APPLE // SMARTPHONE',
    price: '৳1,02,499',
    oldPrice: '৳1,20,000',
    discount: '৳17,501 OFF',
    badge: 'HOT DEAL',
    image: 'images/products/iphone17.png',
    placeholder: '📱'
  },
  {
    name: 'MacBook Air M5 13"',
    tag: 'APPLE // LAPTOP',
    price: '৳1,33,000',
    oldPrice: '',
    discount: '',
    badge: 'NEW',
    image: 'images/products/macbook-air-m5.png',
    placeholder: '💻'
  },
  {
    name: 'Galaxy S26 Ultra 5G',
    tag: 'SAMSUNG // SMARTPHONE',
    price: '৳1,16,499',
    oldPrice: '৳1,19,500',
    discount: '৳3,001 OFF',
    badge: 'NEW',
    image: 'images/products/galaxy-s26-ultra.png',
    placeholder: '📱'
  },
  {
    name: 'iPad Air M4',
    tag: 'APPLE // TABLET',
    price: '৳75,500',
    oldPrice: '৳88,500',
    discount: '৳13,000 OFF',
    badge: 'DEAL',
    image: 'images/products/ipad-air-m4.png',
    placeholder: '📟'
  },
  {
    name: 'iPhone 16 Pro Max',
    tag: 'APPLE // SMARTPHONE',
    price: '৳1,45,000',
    oldPrice: '৳1,65,000',
    discount: '৳20,000 OFF',
    badge: 'BEST DEAL',
    image: 'images/products/iphone16promax.png',
    placeholder: '📱'
  },
  {
    name: 'MacBook Pro M5 Pro 14"',
    tag: 'APPLE // LAPTOP',
    price: '৳2,77,000',
    oldPrice: '',
    discount: '',
    badge: 'PRO',
    image: 'images/products/macbook-pro-m5.png',
    placeholder: '💻'
  },
  {
    name: 'Xiaomi Pad 7',
    tag: 'XIAOMI // TABLET',
    price: '৳39,500',
    oldPrice: '৳42,000',
    discount: '৳2,500 OFF',
    badge: 'DEAL',
    image: 'images/products/xiaomi-pad7.png',
    placeholder: '📟'
  },
  {
    name: 'CMF Watch Pro 2',
    tag: 'NOTHING // SMARTWATCH',
    price: '৳5,750',
    oldPrice: '৳7,500',
    discount: '৳1,750 OFF',
    badge: 'HOT',
    image: 'images/products/cmf-watch-pro2.png',
    placeholder: '⌚'
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
    const card = document.createElement('div');
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

  // Observe newly added elements
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ---------- RENDER PRODUCTS ---------- */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  products.forEach((product, i) => {
    const delay = (i % 4) + 1;
    const card = document.createElement('div');
    card.className = `product-card reveal delay-${delay}`;
    card.innerHTML = `
      <div class="hud-corner tl"></div>
      <div class="hud-corner tr"></div>
      <div class="hud-corner bl"></div>
      <div class="hud-corner br"></div>
      ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      <div class="product-image-wrap">
        <div class="product-placeholder">${product.placeholder}</div>
      </div>
      <div class="product-info">
        <p class="product-tag">${product.tag}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price-wrap">
          <span class="product-price">${product.price}</span>
          ${product.oldPrice ? `<span class="product-price-old">${product.oldPrice}</span>` : ''}
          ${product.discount ? `<span class="product-discount">${product.discount}</span>` : ''}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ---------- RENDER OFFERS ---------- */
function renderOffers() {
  const grid = document.getElementById('offersGrid');
  if (!grid) return;

  offers.forEach((offer, i) => {
    const delay = i + 1;
    const card = document.createElement('div');
    card.className = `offer-card reveal delay-${delay}`;
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

/* ---------- ADD REVEAL CLASSES TO SECTIONS ---------- */
function addRevealClasses() {
  // Section headers
  document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('reveal');
  });

  // About section
  const aboutContent = document.querySelector('.about-content');
  const aboutVisual  = document.querySelector('.about-visual');
  if (aboutContent) aboutContent.classList.add('reveal-left');
  if (aboutVisual)  aboutVisual.classList.add('reveal-right');

  // Contact cards
  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.classList.add(`delay-${i + 1}`);
  });

  // Footer
  const footer = document.querySelector('.footer-top');
  if (footer) footer.classList.add('reveal');

  // Re-observe all
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => revealObserver.observe(el));
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts();
  renderOffers();
  addRevealClasses();
});