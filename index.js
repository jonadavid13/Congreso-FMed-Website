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

// document.addEventListener("DOMContentLoaded", () => {
//   const modalFest = new bootstrap.Modal(document.getElementById("modalFest"));

//   const modalImage = getElementById("modalImage");
  
//   modalImage.onload(() => {
//     modalFest.show();
//   })
// })

document.addEventListener("DOMContentLoaded", () => {
  const modalImage = document.getElementById("modalImage");
  const modalFest = document.getElementById("modalFest");
  const modalSpinner = document.getElementById("modalSpinner")

  modalImage.src = "/assets/img/FLYER MED FEST 2025.png";

  const myModal = new bootstrap.Modal(modalFest);
  myModal.show();

  // Evento que se dispara cuando la imagen ha terminado de cargar
  modalImage.onload = () => {

    // Hacer visible la imagen dentro del modal
    modalImage.style.visibility = "visible";
    modalSpinner.classList.add("d-none")
  };
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