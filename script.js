// menu mobile
const nav = document.querySelector('nav');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => nav.classList.toggle('open'));

// smooth scroll
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior:'smooth' });
    if (nav.classList.contains('open')) nav.classList.remove('open');
  });
});

// formulário -> WhatsApp
const form = document.getElementById('booking-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name    = encodeURIComponent(document.getElementById('name').value);
  const phone   = encodeURIComponent(document.getElementById('phone').value);
  const service = encodeURIComponent(document.getElementById('service').value);
  const notes   = encodeURIComponent(document.getElementById('notes').value);
  const msg = `Olá Dalila!%0ANome: ${name}%0AWhatsApp: ${phone}%0AServiço: ${service}%0AObservações: ${notes}`;
  window.open(`https://wa.me/5541995225273?text=${msg}`, '_blank');
  form.reset();
});
