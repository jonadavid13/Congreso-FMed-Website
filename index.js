let isAnimating = false

document.getElementById('navLink-Inscripciones').addEventListener('click', function() {
    if(isAnimating){
        return
    }
    isAnimating = true;

    const imagen = document.querySelector('#inscripcion');

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
});