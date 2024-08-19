// Mostrar el botón solo cuando el usuario se desplaza hacia abajo
window.onscroll = function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Desplazarse hacia arriba cuando se hace clic en el botón
document.getElementById('scrollToTopBtn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
  });
});


// intro

document.getElementById('enter-site-btn').addEventListener('click', function () {
  // Desplazarse hacia arriba
  window.scrollTo({ top: 0, behavior: 'auto' });



  const overlay = document.getElementById('intro-overlay');
  overlay.classList.add('hidden');

  // Esperar hasta que la transición termine para remover el overlay del DOM
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 1000); // El tiempo debe coincidir con el tiempo de la transición en CSS
});


