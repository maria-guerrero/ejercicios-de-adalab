'use strict';

    /*  - Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'.
    - Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'.
    - Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'.

Cambia la clase en HTML y comprueba que el código de JavaScript funciona. */

const containerElement = document.querySelector('.container');
const titleElement = document.querySelector('.title');
const paragraphElement = document.querySelector('.paragraph');

if (containerElement.classList.contains('warning')) {
    titleElement.innerHTML = 'AVISO';
    paragraphElement.innerHTML = 'Tenga cuidado';
} else if (containerElement.classList.contains('error')) {
    titleElement.innerHTML = 'ERROR';
    paragraphElement.innerHTML = 'Ha surgido un error';
} else if (containerElement.classList.contains('success')) {
    titleElement.innerHTML = 'CORRECTO';
    paragraphElement.innerHTML = 'Los datos son correctos';
}