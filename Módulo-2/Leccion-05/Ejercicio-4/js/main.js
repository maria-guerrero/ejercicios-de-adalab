'use strict';

/* Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:

- Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.

- Preparar classes para cambiar el color de fondo del div.

- Escuchar el evento scroll sobre la ventana window.

- Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.

    Nota: window.scrollY nos devuelve la posición del scroll vertical. */


// Añadir los elementos de HTML con los que vamos a trabajar.
const addColor = document.querySelector('.js_fondo');

// Creamos la función.
function scrollColor() {
    if (window.scrollY < 250) {
        addColor.classList.add('fondo1');
        addColor.classList.remove('fondo2');
    } else {
        addColor.classList.add('fondo2');
        addColor.classList.remove('fondo1');
    }
}


// Event
window.addEventListener('scroll', scrollColor);