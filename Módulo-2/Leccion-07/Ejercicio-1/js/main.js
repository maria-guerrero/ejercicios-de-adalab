'use strict';
/* 

CÓMO TRABAJAR ORDENADAMENTE EN JS
    1. Ponemos todas las variables globales. Los datos de toda la página. 
    2. Ponemos todas las funciones, que van a ir detrás de las variables globales.
    3. Al final va el código global, que es el que se ejecuta cuando se carga la página. Aquí entran los addEventListener.

*/



// Nos traemos el elemento html
const updateBtn = document.querySelector('.js_button');
const faceSelected = document.querySelector('.js_selected_face');
const faceTitle = document.querySelector('.js_face');
const backgroundElement = document.querySelector('.js_page');

// Definimos la función

function getRandom(max){
    return Math.ceil(Math.random() * max);
}

function renderFace() {
    // Coger el value de la usuaria, comparar ese value, y luego si es happy pintar :), y si es sad, pintar :(
        const userValue = faceSelected.value;
        console.dir(userValue);

        // Comparar ese value
        if(userValue === 'happy'){
            faceTitle.innerHTML = ':)';

        } else if (userValue === 'sad'){
            faceTitle.innerHTML = ':('
        }
}

function changeBackground() {
    // Generamos número aleatorio y comprobar si es par. Si es par ponemos el fondo amarillo, si es impar, ponemos el fondo naranja.
    const randomNum = getRandom(100);

    if (randomNum % 2 === 0) { // Si lo divido entre 0 y el resto es 0, es par. Así que poner el fondo amarillo
        backgroundElement.classList.remove('correctOrange');
        backgroundElement.classList.add('.correctYellow');
    } else {
        backgroundElement.classList.add('.correctYellow');
        backgroundElement.classList.add('.correctOrange');
    }

}

function handleClickUpdate(event) { // Esta es la función jefa, y la 1ª que hemos creado
    event.preventDefault(); /* con esto le decimos al navegador que cuando hagamos click en el Update evite hacer las cosas por defecto. No envía información a ningún sitio. Siempre debe estar en la primera línea */
    renderFace();
    changeBackground();
}

// Escribimos el código sobre el que queremos que se aplique el evento
updateBtn.addEventListener('click', handleClickUpdate);


/* 

function getRandom(){
    return Math.ceil(Math.random() * max);
} 
FUNCIÓN IMPORTANTE PARA GENERAR NÚMEROS ALEATORIOS
*/ 