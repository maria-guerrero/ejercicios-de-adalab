'use strict';

/* Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML. */

const numbers = [1, 2, 3];

// Creamos un elemento nuevo, un <li>
const liItem = document.createElement('li');

// Ahora creamos algo de contenido
const newContent = document.createTextNode(numbers);

// Y se lo añadimos a nuestro <li>
liItem.appendChild(newContent);

// Añadimos los elementos que hemos creado
const items = document.querySelector('.js_ul');

items.appendChild(liItem);

