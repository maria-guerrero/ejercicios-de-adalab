'use strict';

// EJERCICIO 1:

/* Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:

- Susana, 34 años, periodista

Luego muestra en la web una frase como esta, accediendo a los datos del objeto:

'Mi nombre es Susana, tengo 34 años y soy periodista'

Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:

Rocío, 25 años, actriz */

// _____________________________________________________________

// EJERCICIO 2:

/* Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.

Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado. */


const adalaber1 = {
    nombre: 'Susana',
    edad: 34,
    profesion: 'periodista',
    accion: run => `Y ${run}`
}

console.log(adalaber1.accion('estoy corriendo'));

const adalaber2 = {
    nombre: 'Rocío',
    edad: 25,
    profesion: 'actriz',
}

const namesElement = document.querySelector('.names');

const susana = `<p>Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} años y soy ${adalaber1.profesion}</p>`;

const rocio = `<p>Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.edad} años y soy ${adalaber2.profesion}</p>`;

namesElement.innerHTML = susana + rocio;