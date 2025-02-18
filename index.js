let isAnimating = false

document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.navbar-collapse a');
  var navBar = document.querySelector('.navbar-collapse');
  var inscripcionButton = document.querySelector('#navLink-Inscripciones')

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if(link === inscripcionButton){
        animateButton();
      }

      if (navBar.classList.contains('show')) {
        setTimeout(() => {
          new bootstrap.Collapse(navBar).toggle();
        }, 700);
      }
    });
  });
});

const animateButton = () => {
  if (isAnimating) {
    return
  }
  isAnimating = true;

  const imagen = document.querySelector('#inscripcionButton');

  // Agregar la clase que muestra el borde de color
  // imagen.classList.add('focus');

  // Agregar la animación
  imagen.classList.add('focus-anim');

  // Remover la clase después de la animación
  setTimeout(() => {
    // imagen.classList.remove('focus');
    imagen.classList.remove('focus-anim');
    isAnimating = false;
  }, 2000); // Duración de la animación en milisegundos
};