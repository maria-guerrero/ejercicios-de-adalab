'use strict';

/* Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:

    const inception = 'Inception';
    const theButterFlyEffect = 'The butterfly effect';
    const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
    const blueVelvet = 'Blue velvet';
    const split = 'Split'; 
    
Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.*/

// Obtenemos los elementos html que necesitamos
const buttonElement = document.querySelector('.js_buttonElement');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// Creamos la función handler
function buttonList() {
    const listElement = document.querySelector('.js_listElement');

    if (!listElement.innerHTML) { // si la lista está vacía en el html
        const movie1 = `<li class="item1">${inception}</li>`
        const movie2 = `<li class="item2">${theButterFlyEffect}</li>`
        const movie3 = `<li class="item3">${eternalSunshineOfTheSM}</li>`
        const movie4 = `<li class="item4">${blueVelvet}</li>`
        const movie5 = `<li class="item5">${split}</li>`

        listElement.innerHTML = movie1 + movie2 + movie3 + movie4 + movie5;

        // Creamos constantes para proceder luego a que, al hacer click en la película, se pinte en consola
        const itemOne = document.querySelector('.item1');
        const itemTwo = document.querySelector('.item2');
        const itemThree = document.querySelector('.item3');
        const itemFour = document.querySelector('.item4');
        const itemFive = document.querySelector('.item5');

        // Creamos otra función dentro de la misma, para enseñarle a la página lo que tiene que hacer al hacer click en las películas
        function pressMovie(event) {
            console.log(event.currentTarget.innerHTML)

       // Creamos el evento listener para las películas
       itemOne.addEventListener('click', pressMovie);
       itemTwo.addEventListener('click', pressMovie);
       itemThree.addEventListener('click', pressMovie);
       itemFour.addEventListener('click', pressMovie);
       itemFive.addEventListener('click', pressMovie);
       }

    } else {
        // borrar elementos de la lista
        listElement.innerHTML = '';
    }
}

// Escuchamos el evento
buttonElement.addEventListener('click', buttonList);

