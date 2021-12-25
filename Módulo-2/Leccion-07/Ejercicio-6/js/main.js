'use strict';

/* Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra. */

const info = {
    nombre: '';
    apellido: '';
};
function handlerInput(event) {
    console.log(event.currentTarget.value);
    const inputId = event.currentTarget.id;
    info[inputId] = event.currentTarget.value
    console.log(info);
}


const btn = document.querySelector('.btn-js');
const info = []

function handleClick(event) {
    event.preventDefault();
    const nombre = document.querySelector(#nombre).value;
    infoArray.push(nombre);
    const apelido = document.querySelector(#apellido).value;
    infoArray.push(apellido);

        for (const element of infoArray) {
            console.log(element);
        }

    console.log(infoArray);
}

btn.addEventListener('click', handleClick);