'use strict';

/* Prepara una variable cuyo valor será un número. Escribe las condiciones para el siguiente ejercicio y utilizando la variable haz pruebas para ver que estas se cumplen. */

const varElement = 7;
const paragraph = document.querySelector('.paragraph');

if (varElement === 0) {
    paragraph.innerHTML = 'El número es 0';
  } else if (varElement < 0) {
    paragraph.innerHTML = 'El número es negativo';
  } else if (varElement + 2 > 13 && varElement <= 20) {
    paragraph.innerHTML = 'El número más 2 es mayor que 13 pero menor o igual que 20';
  } else if (varElement > 20 && varElement < 50) {
    paragraph.innerHTML = 'El número es mayor que 20 pero menor que 50';
  } else {
    paragraph.innerHTML = 'el número no es 123123125';
  }