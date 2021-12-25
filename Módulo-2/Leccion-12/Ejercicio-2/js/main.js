'use strict';

/* Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.

- Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
- Haz lo mismo para París y Nueva York

    Nota: Usa imágenes que encuentres por Internet. */

const selectEl = document.querySelector('.js_selectEl');
const madridEl = document.querySelector('.js_madrid');
const nuevaYorkEl = document.querySelector('.js_nuevaYork');
const parisEl = document.querySelector('.js_paris');

function selectOption(){
    if(selectEl.value === 'madrid') {
        nuevaYorkEl.src = './images/madrid.jpg';
        parisEl.src = './images/madrid.jpg';
        madridEl.src = './images/madrid.jpg';

    } else if(selectEl.value === 'nuevaYork') {
        madridEl.src = "./images/nueva-york.jpg";
        parisEl.src = "./images/nueva-york.jpg";
        nuevaYorkEl.src = "./images/nueva-york.jpg";

    } else if(selectEl.value === 'paris') {
        madridEl.src = "./images/paris.jpg";
        nuevaYorkEl.src = "./images/paris.jpg";
        parisEl.src = "./images/paris.jpg";
    }
}

selectEl.addEventListener('click', selectOption);