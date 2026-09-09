// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Register form (placeholder submit — wire to a real backend/service later)
const registerForm = document.getElementById('register-form');
const formNote = document.getElementById('form-note');

if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "You're on the frequency — check your inbox to confirm.";
    registerForm.reset();
  });
}

// Contact form (placeholder submit — wire to a real backend/service later)
const contactForm = document.getElementById('contact-form');
const contactNote = document.getElementById('contact-note');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactNote.textContent = "Message sent — MacsFM will get back to you soon.";
    contactForm.reset();
  });
}

// Copy referral code (register page)
document.addEventListener('click', (e) => {
  const codeBox = document.querySelector('.referral-code');
  if (codeBox && e.target === codeBox) {
    navigator.clipboard?.writeText('120187');
  }
});
