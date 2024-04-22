//prima parte
//se seleziono la checkbox su id orange si visualizza div.orange
//se seleziono la checkbox su id apple si visualizza div.apple
//se seleziono la checkbox su id blueberries si visualizza div.blueberries 
//per avviare l'animazione devo cliccare sul bottone select
//se clicco sul bottone reset si resetta tutto
//se clicco sul bottone selectAll si selezionano tutte le checkbox

const checkboxOrange = document.getElementById('orange');
const checkboxApple = document.getElementById('apple');
const checkboxBlueberries = document.getElementById('blueberries');

const selectButton = document.getElementById('select-button');
const resetButton = document.getElementById('reset-button');
const selectAllButton = document.getElementById('select-all-button');

const divOrange = document.querySelector('.orange');
const divApple = document.querySelector('.apple');
const divBlueberries = document.querySelector('.blueberries');

const message = document.querySelector('.message');

selectButton.addEventListener('click',
  function () {
    message.innerHTML = '';

    if (checkboxOrange.checked === true) {
      divOrange.classList.remove('hidden');
    } else {
      divOrange.classList.add('hidden');
    }

    if (checkboxBlueberries.checked === true) {
      divBlueberries.classList.remove('hidden');
    } else {
      divBlueberries.classList.add('hidden');
    }

    if (checkboxApple.checked === true) {
      divApple.classList.remove('hidden');
    } else {
      divApple.classList.add('hidden');
    }

    if (checkboxApple.checked === true && checkboxOrange.checked === true) {
      message.innerHTML = 'Hai vinto un Blueberries';
    }

    if (checkboxBlueberries.checked === true && checkboxApple.checked === false && checkboxOrange.checked === false) {
      message.innerHTML = 'Acquista un altro prodotto';
    }
    //  if (checkboxApple.checked === false) { // !checkboxApple.checked
    //    divApple.classList.add('hidden');
    // } else {
    //   divApple.classList.remove('hidden');
    // }
  }
)

resetButton.addEventListener('click',
  function () {
    message.innerHTML = '';
    checkboxApple.checked = false;
    checkboxBlueberries.checked = false;
    checkboxOrange.checked = false;
    divApple.classList.add('hidden');
    divBlueberries.classList.add('hidden');
    divOrange.classList.add('hidden');
  }
)

selectAllButton.addEventListener('click',
  function () {
    checkboxApple.checked = true;
    checkboxBlueberries.checked = true;
    checkboxOrange.checked = true;
})

//seconda parte
//se seleziono orange e apple vinco un blueberries
// se seleziono solo blueberries faccio comparire un messaggio in cui proponiamo all'utente di selezionare un altro prodotto

// se clicco su buy controllo che il quantitativo sia di almeno 1 e non più di 10 per ogni prodotto selezionato.

