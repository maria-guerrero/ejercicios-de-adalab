'use strict';

const myName = 'María';
const paragraph = document.querySelector('.paragraph');

if (myName === 'María'){
    paragraph.innerHTML = `Bienvenida, ${myName}`;
} else {
    paragraph.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado.';
}