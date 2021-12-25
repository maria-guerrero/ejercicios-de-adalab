'use strict';

/* Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.

Nota: el objetivo es hacerlo utilizando event.currentTarget. */

// Recogemos los elementos html que nos hacen falta
const inputElement = document.querySelector('.input');
const textElement = document.querySelector('.text');

// Creamos una función. En textElement, escribimos el valor introducido en inputElement
function writingElement(event) {
    textElement.innerHTML = event.curretTarget.value;
}

// Escuchamos y gestionamos el evento
inputElement.addEventListener('keyup', writingElement);