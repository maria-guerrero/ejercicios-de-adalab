'use strict';

/* Al pinchar en un elemento del listado del html tenemos que:

- Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
- Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.

    Nota: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().

    Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector(). */


// Obtenemos los elementos html que vamos a utilizar
const teacherIsra = document.querySelector('.teacher--isra');
const teacherBarlos = document.querySelector('.teacher--tuerto');
const teacherNasi = document.querySelector('.teacher--nasi');

// Creamos la función handler para modificar el estilo
function changeStyle(event) {
    const teacherElement = event.currentTarget
    teacherElement.classList.toggle('teacher--selected');

    const favoriteElement = document.querySelector('.favorite');
    favoriteElement.innerHTML = textChange(favorite.innerHTML);
}

// Creamos otra función handler, esta añadirá y eleminirá el texto según lo que contenga
function textChange(text) {
    if (text === 'Añadir') {
        text = 'Quitar';
    } else {
        text = 'Añadir';
    }
    return text;
}

// Escuchamos y gestionamos los eventos
teacherIsra.addEventListener('click', changeStyle);
teacherBarlos.addEventListener('click', changeStyle);
teacherNasi.addEventListener('click', changeStyle);