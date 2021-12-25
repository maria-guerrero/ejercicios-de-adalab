'use strict';

// TICKET CON IVA.
/* Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.*/

function ticketElement(a) {
    const sinIva  = 'Precio sin IVA: ' + a;
    const conIva = 'Precio con IVA: ' + (a * 0.21);
    const total = 'Precio total: ' + (a + (a * 0.21));
    return `Precio sin ${sinIva}, precio con ${conIva}, precio ${total}`;
}

const finalResult = ticketElement(10);

// para que se vea en la consola el resultado:
console.log(finalResult);