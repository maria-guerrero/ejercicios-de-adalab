'use strict';

// avatar por defecto
const default_avatar = 'http://placehold.it/300x300';

// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

/* 1. Hagamos la lógica para añadir la imagen userAvatar a img (HTML) */

const image = document.querySelector('.user__avatar');
image.src = userAvatar;

/* 2. Cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. Así no se vería ninguna imagen en la página. */

userAvatar = '';
image.src = userAvatar;

/* 3. Mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
    - si tenemos el avatar del usuario se muestre este,
    - si no tenemos datos del avatar del usuario, se muestre el avatar por defecto */

image.src = userAvatar || default_avatar;
