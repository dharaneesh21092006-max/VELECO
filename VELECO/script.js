// ===== Loader =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('is-done'), 1300);
});

// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Header scroll state + back-to-top =====
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
  toTop.classList.toggle('is-visible', window.scrollY > 600);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile nav =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const closeNav = () => {
  nav.classList.remove('is-open');
  burger.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
};
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

// ===== Active link on scroll =====
const links = [...document.querySelectorAll('.nav__link')];
const sections = links
  .map(l => document.querySelector(l.getAttribute('href')))
  .filter(Boolean);

const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = '#' + e.target.id;
      links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// ===== Reveal on scroll =====
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-in');
      reveal.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-reveal]').forEach(el => reveal.observe(el));

// ===== Hero parallax (subtle) =====
const heroVideo = document.querySelector('.hero__video');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    heroVideo.style.transform = `translateY(${window.scrollY * 0.18}px) scale(1.05)`;
  }
}, { passive: true });

// ===== Contact form =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  note.hidden = false;
  form.reset();
  setTimeout(() => { note.hidden = true; }, 4000);
});
