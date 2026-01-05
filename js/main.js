
// Smooth scroll for navigation buttons
function setupSmoothScroll() {
  const buttons = document.querySelectorAll('[data-target]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (!target) return;
      const el = document.querySelector(target);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Mobile nav toggle
function setupNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupSmoothScroll();
  setupNavToggle();
});
