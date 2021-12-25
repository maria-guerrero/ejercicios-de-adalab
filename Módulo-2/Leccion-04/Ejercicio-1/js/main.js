// Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().

'use strict';

function multi(a, b) {
    return a * b;
}
multi (6, 7)

/* añadiendo el resultado a una constante/variable */

function multi(a, b) {
    const result = a * b;
    return result;
}

const multiResult = multi(6, 7);

console.log(multiResult);
