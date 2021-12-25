'use strict';

/* Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.

Nota: La etiqueta input no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. Si para leer y modificar el contenido de una etiqueta con apertura y cierre utilizábamos innerHTML, en el caso de los inputs utilizaremos value. */

// Recogemos los elementos de HTML que queremos que se escuchen
const nameInput = document.querySelector('.name');
const pressButton = document.querySelector('.button');

// Creamos la función que se ejecutará cuando el usuario ejecute la acción
function messageConsole() {
    if (nameInput.value !== '') {
        //si el valor del input no está vacío
        console.log(`Hola, ${nameInput.value}`);
    } else {
        console.error('Error: input vacío');
    }
}

// Creamos la función con addEventListener que hará que se ejecute la función messageConsole

pressButton.addEventListener('click', messageConsole);