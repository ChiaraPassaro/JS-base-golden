//Crea uno script che premendo sul bottone hamburger, mostra il menu mobile, e premendo su una X chiude il menu mobile

const menu = document.getElementById('menu');
const buttonOpen = document.getElementById('hamburger');
const buttonClose = document.getElementById('close');

buttonOpen.addEventListener('click',
  function () {
    menu.classList.add('active');
  }
)

buttonClose.addEventListener('click',
  function () {
    menu.classList.remove('active');
  }
)