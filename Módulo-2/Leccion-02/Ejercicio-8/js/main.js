'use strict';



const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';


const listElement = document.querySelector('.js-list');
listElement.innerHTML = 
`<li><img src='${firstDogName}' alt='${firstDogName}></img></li>`;

`<li><img src='${secondDogName}' alt='${firstDogName}'></img></li>`;

`<li><img src='${thirdDogName}''${firstDogName}'></img></li>`;
