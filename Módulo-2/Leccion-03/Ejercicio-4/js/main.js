'use strict';

/* Hacer un conversor de edad de perro a humano. Las reglas son las siguientes:
    -El primer año de un perro equivale a 15 años de humano.
    -El segundo año de un perro equivale a nueve años de humano.
    - A partir del tercero, cada año de perro equivale a 5 años de  humano. */

const dogAge = 0;
let humanAge;

const dogElement = document.querySelector('.dog');
const humanElement = document.querySelector('.human');

dogElement.innerHTML = dogAge;
humanElement.innerHTML = humanAge;

if (dogAge === 0) {
    humanAge = 'Acaba de nacer';
} else if (dogAge === 1){
    humanAge = 15;
} else if (dogAge === 2) {
    humanAge = 15 + 9;
} else if (dogAge > 2) {
    humanAge = 15 + 9 + (dogAge - 2) * 5;
} else if (dogAge < 0) {
    humanAge = 'Todavía no ha nacido';
}