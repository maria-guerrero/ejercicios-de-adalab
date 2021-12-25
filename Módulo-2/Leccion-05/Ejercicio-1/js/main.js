'use strict';

// Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!

// Primero recogemos de HTML el elemento sobre el que queremos escuchar los eventos.
const pressButton = document.querySelector('.button');

const textElement = document.querySelector('.text');


// Registramos la función para que se pueda ejecutar una vez se lance el listener.
function funcButton() {
    textElement.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}

// Escribimos la función addEventListener que hará que se ejecute la función funcButton al presionar el botón.
pressButton.addEventListener('click', funcButton);