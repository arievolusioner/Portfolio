/* ══════════════════════════════════════
   PORTFOLIO — script.js
   ══════════════════════════════════════ */

// ── Timeline: muncul saat di-scroll ke area tersebut
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 120);
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => timelineObserver.observe(item));


// ── Fade-in saat scroll: project cards & about grid
const fadeElements = document.querySelectorAll('.project-card, .about-grid');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});


// ── Nav mengecil saat scroll ke bawah
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.padding = '14px 60px';
  } else {
    nav.style.padding = '20px 60px';
  }
});


// ── Form submit handler
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');

  btn.textContent = 'Sent! ✓';
  btn.style.background = '#4a5740';

  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}