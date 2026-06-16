/* ============================================
   APPLE GADGETS — animations.js
   ADVANCED CINEMATIC EDITION
   ============================================ */

/* ---------- CUSTOM CURSOR GLOW ---------- */
function initCursorGlow() {
  if (window.innerWidth < 768) return;

  const cursor = document.createElement('div');
  cursor.id = 'cursorGlow';
  cursor.style.cssText = `
    position: fixed;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(cursor);

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  // Smooth cursor follow
  function animateCursor() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
  document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
}

/* ---------- HERO TYPEWRITER ---------- */
function initTypewriter() {
  const eyebrow = document.querySelector('.hero-eyebrow');
  if (!eyebrow) return;

  const text = eyebrow.textContent;
  eyebrow.textContent = '';
  eyebrow.style.borderRight = '2px solid var(--accent-cyan)';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      eyebrow.textContent += text[i];
      i++;
      setTimeout(type, 60);
    } else {
      setTimeout(() => { eyebrow.style.borderRight = 'none'; }, 1500);
    }
  };
  setTimeout(type, 800);
}

/* ---------- 3D TILT ON CARDS ---------- */
function initCardTilt() {
  function applyTilt(card) {
    card.addEventListener('mousemove', (e) => {
      const rect    = card.getBoundingClientRect();
      const x       = e.clientX - rect.left;
      const y       = e.clientY - rect.top;
      const cx      = rect.width  / 2;
      const cy      = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -10;
      const rotateY = ((x - cx) / cx) *  10;
      card.style.transform =
        `translateY(-6px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
      card.style.transform  = '';
    });
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease';
    });
  }

  function applyToAll() {
    document.querySelectorAll('.product-card, .category-card, .contact-card')
      .forEach(applyTilt);
  }

  applyToAll();
  const observer = new MutationObserver(applyToAll);
  document.querySelectorAll('.products-grid, .categories-grid')
    .forEach(g => observer.observe(g, { childList: true }));
}

/* ---------- PAGE LOAD PARTICLES ---------- */
function initLoadParticles() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed; inset: 0;
    z-index: 10000; pointer-events: none;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 80 }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 2.5 + 0.5,
    alpha: Math.random() * 0.8 + 0.2,
    dx:    (Math.random() - 0.5) * 2,
    dy:    -(Math.random() * 2 + 0.5),
  }));

  let frame = 0;
  const max = 100;

  (function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${p.alpha * (1 - frame / max)})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy; p.alpha -= 0.006;
    });
    if (++frame < max) requestAnimationFrame(draw);
    else canvas.remove();
  })();
}

/* ---------- MAGNETIC BUTTONS ---------- */
function initMagneticButtons() {
  if (window.innerWidth < 768) return;

  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
    });
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'transform 0.15s ease';
    });
  });
}

/* ---------- SPOTLIGHT ON PRODUCT CARDS ---------- */
function initSpotlight() {
  function addSpotlight(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.setProperty('--spotlight-x', `${x}%`);
      card.style.setProperty('--spotlight-y', `${y}%`);
      card.classList.add('spotlight-active');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('spotlight-active');
    });
  }

  // Inject spotlight CSS
  const style = document.createElement('style');
  style.textContent = `
    .product-card { --spotlight-x: 50%; --spotlight-y: 50%; }
    .product-card.spotlight-active::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle 180px at var(--spotlight-x) var(--spotlight-y),
        rgba(0,212,255,0.08),
        transparent 70%
      );
      border-radius: var(--radius-lg);
      pointer-events: none;
      z-index: 1;
    }
  `;
  document.head.appendChild(style);

  function applyToAll() {
    document.querySelectorAll('.product-card').forEach(addSpotlight);
  }
  applyToAll();
  const observer = new MutationObserver(applyToAll);
  const grid = document.getElementById('productsGrid');
  if (grid) observer.observe(grid, { childList: true });
}

/* ---------- GLITCH TEXT ON HERO TITLE ---------- */
function initGlitchEffect() {
  const title = document.querySelector('.hero-title-accent');
  if (!title) return;

  const style = document.createElement('style');
  style.textContent = `
    .hero-title-accent {
      position: relative;
      display: inline-block;
    }
    .hero-title-accent::before,
    .hero-title-accent::after {
      content: attr(data-text);
      position: absolute;
      top: 0; left: 0;
      color: var(--accent-cyan);
      clip-path: inset(0 0 0 0);
    }
    .hero-title-accent::before {
      animation: glitchTop 4s infinite linear;
      color: #ff00ff;
      opacity: 0.6;
    }
    .hero-title-accent::after {
      animation: glitchBot 4s infinite linear;
      color: #00ffff;
      opacity: 0.6;
    }
    @keyframes glitchTop {
      0%,90%,100% { clip-path: inset(0 0 95% 0); transform: translate(0); opacity: 0; }
      92%          { clip-path: inset(0 0 60% 0); transform: translate(-3px, -2px); opacity: 0.7; }
      94%          { clip-path: inset(30% 0 40% 0); transform: translate(3px, 1px); opacity: 0.7; }
      96%          { clip-path: inset(60% 0 10% 0); transform: translate(-2px, 2px); opacity: 0.7; }
      98%          { clip-path: inset(0 0 95% 0); transform: translate(0); opacity: 0; }
    }
    @keyframes glitchBot {
      0%,88%,100% { clip-path: inset(95% 0 0 0); transform: translate(0); opacity: 0; }
      90%          { clip-path: inset(60% 0 0 0); transform: translate(3px, 2px); opacity: 0.7; }
      92%          { clip-path: inset(40% 0 30% 0); transform: translate(-3px, -1px); opacity: 0.7; }
      95%          { clip-path: inset(10% 0 60% 0); transform: translate(2px, -2px); opacity: 0.7; }
      97%          { clip-path: inset(95% 0 0 0); transform: translate(0); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  title.setAttribute('data-text', title.textContent);
}

/* ---------- RADAR SCAN ON HUD BOX ---------- */
function initRadarScan() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes radarSpin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    .about-hud-box {
      overflow: hidden;
    }
    .about-hud-box .radar-sweep {
      position: absolute;
      top: 50%; left: 50%;
      width: 200%;
      height: 200%;
      margin-top: -100%;
      margin-left: -100%;
      background: conic-gradient(
        from 0deg,
        transparent 0deg,
        rgba(0,212,255,0.06) 30deg,
        transparent 60deg
      );
      animation: radarSpin 4s linear infinite;
      pointer-events: none;
      border-radius: 50%;
    }
  `;
  document.head.appendChild(style);

  const hudBox = document.querySelector('.about-hud-box');
  if (hudBox) {
    const sweep = document.createElement('div');
    sweep.className = 'radar-sweep';
    hudBox.appendChild(sweep);
  }
}

/* ---------- SCROLL PROGRESS BAR ---------- */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    height: 2px;
    width: 0%;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-violet));
    z-index: 99999;
    transition: width 0.1s ease;
    box-shadow: 0 0 8px rgba(0,212,255,0.6);
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const total    = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / total) * 100;
    bar.style.width = progress + '%';
  });
}

/* ---------- SECTION ENTRANCE COUNTER ---------- */
function initCounterAnimation() {
  const stats = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const raw = el.textContent.replace(/[^\d]/g, '');
      if (!raw) return;

      const target  = parseInt(raw);
      const suffix  = el.textContent.replace(/[\d]/g, '');
      const duration = 1500;
      const start    = performance.now();

      function update(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  stats.forEach(s => observer.observe(s));
}

/* ---------- LIVE HUD CLOCK ---------- */
function initHudCoords() {
  const hudTR = document.querySelector('.hero-hud-tr');
  if (!hudTR) return;
  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    hudTR.textContent = `DHK // BD // ${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- ACTIVE NAV LINK ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--accent-cyan)';
      }
    });
  }, { threshold: 0.4 }).observe
  && sections.forEach(s =>
    new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.style.color = '');
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.style.color = 'var(--accent-cyan)';
        }
      });
    }, { threshold: 0.4 }).observe(s)
  );
}

/* ---------- PRODUCT PLACEHOLDER STYLES ---------- */
function styleProductPlaceholders() {
  const style = document.createElement('style');
  style.textContent = `
    .product-placeholder {
      font-size: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 200px;
      opacity: 0.6;
      transition: transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
    }
    .product-card:hover .product-placeholder {
      transform: scale(1.12) translateY(-4px);
      opacity: 0.9;
    }
    .category-name-bn {
      font-size: 0.7rem;
      color: var(--text-muted);
      margin-top: 4px;
      font-family: var(--font-body);
    }
  `;
  document.head.appendChild(style);
}

/* ---------- FLOWING BORDER ON CARDS ---------- */
function initFlowingBorders() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes borderFlow {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .offer-card:hover {
      border-color: transparent !important;
      background-clip: padding-box;
    }
    .offer-card::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: var(--radius-lg);
      background: linear-gradient(
        270deg,
        var(--accent-cyan),
        var(--accent-violet),
        var(--accent-ember),
        var(--accent-cyan)
      );
      background-size: 400% 400%;
      animation: borderFlow 3s ease infinite;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
      pointer-events: none;
    }
    .offer-card:hover::before {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
}

/* ---------- SECTION DIVIDER GLOWS ---------- */
function initSectionGlows() {
  document.querySelectorAll('section').forEach(section => {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute; bottom: -1px;
      left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent);
      pointer-events: none;
    `;
    section.style.position = 'relative';
    section.appendChild(glow);
  });
}

/* ---------- INIT ALL ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initLoadParticles();
  initCursorGlow();
  initTypewriter();
  initHudCoords();
  initActiveNav();
  initScrollProgress();
  initGlitchEffect();
  initRadarScan();
  initFlowingBorders();
  initSectionGlows();
  styleProductPlaceholders();
  initCounterAnimation();

  setTimeout(() => {
    initCardTilt();
    initMagneticButtons();
    initSpotlight();
  }, 600);
});