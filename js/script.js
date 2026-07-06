//MENU HAMBURGUESA //

const botonMenu = document.querySelector('.fa-bars')
const menu = document.querySelector('.menu-hide')
botonMenu.addEventListener('click', () => {
    menu.classList.toggle('activo')
});

// GALERIA VER MAS //

const botonContenedor = document.querySelector('.contenedor-galeria');
const botonGaleria = document.querySelector('#vermasgaleria');

botonContenedor.addEventListener('click', (e) => {
    if (botonContenedor.classList.contains('limitada')) {
        botonContenedor.classList.remove('limitada');
        botonGaleria.textContent = 'Ver menos';
    } else {
        botonContenedor.classList.add('limitada');
        botonGaleria.textContent = 'Ver más';
    }
});


//FORMULARIO//

const form = document.querySelector('#fcontacto');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const movil = document.querySelector('#movil');
const errorNombre = document.querySelector('#error-nombre');
const erroremail = document.querySelector('#error-email');
const errormovil = document.querySelector('#error-movil');
const mensajeExito = document.querySelector('#mensaje-exito');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const movilValor = movil.value.trim();

    let error = false;

    if (nombreValor === '') {
        nombre.classList.add('error');
        errorNombre.classList.add('visible');
        error = true;
    }

    if (emailValor === '') {
        email.classList.add('error');
        erroremail.classList.add('visible');
        error = true;
    }

    if (movilValor === '') {
        movil.classList.add('error');
        errormovil.classList.add('visible');
        error = true;
    }

    if (!error) {
        mensajeExito.classList.add('visible');
        form.reset();
    }
});








// if (email === '') {
//     document.querySelector('#erroremail').textContent = "Debe rellenar E-mail"
//     error = true;
// }
// else
//     if (error) return;








