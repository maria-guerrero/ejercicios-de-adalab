'use strict';

/* Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:

- Nombre
- Apellidos
- Teléfono

Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente. */

const inputText = document.querySelectorAll('.inputText');
const option = document.querySelector('.option');

function rellenarInput() {
    if(option.value === 'maca') {
        inputText[0].value = data[0].name;
        inputText[1].value = data[0].surname;
        inputText[2].value = data[0].telephone;

    } else if (option.value === 'vic') {
        inputText[0].value = data[1].name;
        inputText[1].value = data[1].surname;
        inputText[2].value = data[1].telephone;

    } else if (option.value === 'maria') {
        inputText[0].value = data[2].name;
        inputText[1].value = data[2].surname;
        inputText[2].value = data[2].telephone;
    }
}

option.addEventListener('click', rellenarInput);


const data = 
[
    {
    name: 'Maca',
    surname: 'Peña',
    telephone: '678943212'
    },

    {
    name: 'Vic',
    surname: 'Blanc',
    telephone: '678943210'
    },

    {
    name: 'María',
    surname: 'Guerrero',
    telephone: '678943214'
    }
]