document.addEventListener('DOMContentLoaded', () => {
  const welcomeScreen = document.getElementById('welcome-screen');

  // Ejecuta la ocultación tras 3000 ms (3 segundos)
  setTimeout(() => {
    welcomeScreen.classList.add('hidden');
  }, 1500);
});