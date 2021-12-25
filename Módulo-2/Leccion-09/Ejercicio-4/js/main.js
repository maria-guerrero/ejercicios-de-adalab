'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

const main = document.querySelector('.js_main');

  main.innerHTML = '';
  for (const data of tasks) {
    console.log(data);
    if (data.completed) {
        main.innerHTML += `<li class="completed liStyle"><input class="js_input" checked type="checkbox">${data.name}</li>`;
    } else {
        main.innerHTML += `<li class="liStyle"><input class="js_input" type="checkbox">${data.name}</li>`;
    }
}

const forEl = document.querySelectorAll('.js_input');

    for (const forEachEl of forEl) {
        forEachEl.addEventListener('click', handler);
    }

    function handler (event) {
        event.currentTarget.parentNode.classList.toggle('completed');     
        console.log(event.currentTarget);
    }


    