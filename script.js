const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message received! I will get back to you soon.');
  form.reset();
});