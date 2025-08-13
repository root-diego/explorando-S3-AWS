// Validação de formulário de contato
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    e.preventDefault();
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    e.preventDefault();
    alert('Por favor, insira um email válido.');
  }
});

// Efeito de scroll reveal para seções
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
