/* ============================================
   APPLE GADGETS — animations.js
   Cinematic effects: cursor, tilt, particles
   ============================================ */

/* ---------- CUSTOM CURSOR GLOW ---------- */
function initCursorGlow() {
  // Only on desktop
  if (window.innerWidth < 768) return;

  const cursor = document.createElement('div');
  cursor.id = 'cursorGlow';
  cursor.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
}

/* ---------- HERO TYPEWRITER ---------- */
function initTypewriter() {
  const eyebrow = document.querySelector('.hero-eyebrow');
  if (!eyebrow) return;

  const text    = eyebrow.textContent;
  eyebrow.textContent = '';
  eyebrow.style.borderRight = '2px solid var(--accent-cyan)';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      eyebrow.textContent += text[i];
      i++;
      setTimeout(type, 60);
    } else {
      // Blink then remove cursor
      setTimeout(() => {
        eyebrow.style.borderRight = 'none';
      }, 1500);
    }
  };

  // Start after hero animation
  setTimeout(type, 800);
}

/* ---------- 3D TILT ON PRODUCT CARDS ---------- */
function initCardTilt() {
  function applyTilt(card) {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const centerX = rect.width  / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) *  8;

      card.style.transform =
        `translateY(-6px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease';
    });
  }

  // Apply to existing and future cards
  function observeCards() {
    document.querySelectorAll('.product-card, .category-card').forEach(applyTilt);
  }

  // Run now and after DOM loads
  observeCards();

  // Also watch for dynamically added cards
  const observer = new MutationObserver(observeCards);
  const grids = document.querySelectorAll('.products-grid, .categories-grid');
  grids.forEach(grid => {
    observer.observe(grid, { childList: true });
  });
}

/* ---------- PAGE LOAD PARTICLES ---------- */
function initLoadParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'loadCanvas';
  canvas.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 10000;
    pointer-events: none;
    background: transparent;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const count = 60;

  for (let i = 0; i < count; i++) {
    particles.push({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 2 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 1.5 + 0.5,
      dx:    (Math.random() - 0.5) * 1.5,
      dy:    -(Math.random() * 1.5 + 0.5),
    });
  }

  let frame = 0;
  const maxFrames = 90; // ~1.5s at 60fps

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha * (1 - frame / maxFrames)})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      p.alpha -= 0.008;
    });

    frame++;
    if (frame < maxFrames) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }

  draw();
}

/* ---------- LIVE HUD COORDINATES ---------- */
function initHudCoords() {
  const hudTR = document.querySelector('.hero-hud-tr');
  if (!hudTR) return;

  // Show live time
  function updateTime() {
    const now  = new Date();
    const h    = String(now.getHours()).padStart(2, '0');
    const m    = String(now.getMinutes()).padStart(2, '0');
    const s    = String(now.getSeconds()).padStart(2, '0');
    hudTR.textContent = `DHK // BD // ${h}:${m}:${s}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* ---------- NAVBAR ACTIVE LINK ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
        });
        const active = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (active) active.style.color = 'var(--accent-cyan)';
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ---------- PRODUCT PLACEHOLDER STYLE ---------- */
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
      transition: transform 0.5s cubic-bezier(0.4,0,0.2,1),
                  opacity 0.3s ease;
    }
    .product-card:hover .product-placeholder {
      transform: scale(1.12);
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

/* ---------- SMOOTH SECTION TRANSITIONS ---------- */
function initSectionGlows() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg,
        transparent,
        rgba(0,212,255,0.2),
        transparent
      );
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
  styleProductPlaceholders();
  initSectionGlows();

  // Card tilt runs after products render
  setTimeout(initCardTilt, 500);
});