const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀' : '☾';
});

document.querySelectorAll('.quiz-options button').forEach(button => {
  button.addEventListener('click', () => {
    const feedback = document.getElementById('quizFeedback');
    document.querySelectorAll('.quiz-options button').forEach(b => b.classList.remove('correct', 'incorrect'));
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
      feedback.textContent = '¡Correcto! Los datos observados ayudan a elaborar conclusiones responsables.';
      feedback.style.color = '#23814c';
    } else {
      button.classList.add('incorrect');
      feedback.textContent = 'Inténtalo de nuevo: primero observa, registra y analiza la información.';
      feedback.style.color = '#b35b35';
    }
  });
});

