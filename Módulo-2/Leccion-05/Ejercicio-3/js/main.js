'use strict';

/* Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum. */


// Primero recogemos de HTML el elemento sobre el que queremos escuchar los eventos.
const textElement = document.querySelector('.text');


// Registramos la función para que se pueda ejecutar una vez se lance el listener.
function changeText() {
    textElement.innerHTML = 'Veniam distinctio maxime non aspernatur laboriosam est perspiciatis laudantium. Quidem, veniam quos exercitationem officia natus porro repudiandae, labore nobis numquam perspiciatis non nisi inventore. Delectus nesciunt, fugit assumenda facere voluptas dicta perspiciatis quaerat non voluptates maiores earum quae praesentium quas nostrum.';
}

// Escribimos la función addEventListener que hará que se ejecute la función funcButton al presionar el botón.

textElement.addEventListener('mouseover', changeText);
