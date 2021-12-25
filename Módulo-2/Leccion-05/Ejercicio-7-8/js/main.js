'use strict';

// EJERCICIO 7

/* Vamos a preparar un botón y una clase de CSS. La clase tiene que cambiar alguno de los estilos del botón (por ejemplo el color de fondo), pero no se la vamos a poner inicialmente. Cada vez que la usuaria pulse el botón hay que:

- añadir la clase si no la tiene

- quitarle la clase si la tiene

    Nota: para facilitar añadir y quitar clases de CSS, os recomendamos usar classList.toggle */

//_____________________________________________________________________________________________

// EJERCICIO 8

/* Partiendo del ejercicio anterior vamos a añadir un nuevo botón a nuestra página. Tenemos que ponerle un listener y a reutilizar el handler que ya teníamos. Es decir, los dos botones deben tener el mismo handler.

Cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado. */


// Recogemos el elemento html
const buttonElement = document.querySelector('.js_buttonElement');
const buttonElementTwo = document.querySelector('.js_buttonElementTwo');

// Creamos la función que se ejecutará cuando la usuaria haga click
/* function changeColor(event) {
     buttonElement.classList.toggle('js_buttonOrangeRed');
 } */


function changeColor(event) {
    const coloredButton = event.currentTarget;

    coloredButton.classList.toggle('js_buttonElementSelected');
}

// Creamos el evento
buttonElement.addEventListener('click', changeColor);
buttonElementTwo.addEventListener('click', changeColor);