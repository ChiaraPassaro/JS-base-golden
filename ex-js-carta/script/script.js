// ecco il codice per "estrarre" un numero random tra 1 e 10:
// const numero = Math.floor(Math.random() * 10 + 1);


const h2 = document.getElementById('message');
const cardYou = document.getElementById('you');
const spanYou = document.querySelector('#you span')
const cardCPU = document.getElementById('cpu');
const spanCPU = document.querySelector('#cpu span')

const buttonPlay = document.getElementById('play-button');
const buttonReset = document.getElementById('reset-button');

buttonPlay.addEventListener('click',
  function () {
    const numberYou = Math.floor(Math.random() * 10 + 1);
    const numberCPU = Math.floor(Math.random() * 10 + 1);
    
    cardYou.classList.add('active');
    cardCPU.classList.add('active');
    
    // cardYou.innerHTML = '<span>' + numberYou + '</span>';
    // cardCPU.innerHTML = '<span>' + numberCPU + '</span>';
    spanYou.innerHTML = numberYou
    spanCPU.innerHTML = numberCPU
    console.log(spanYou)

    if (numberYou > numberCPU) {
      h2.innerHTML = 'Hai vinto';
      h2.style.color = 'pink';
    }
    else if (numberYou === numberCPU) {
      h2.innerHTML = 'Pareggio';  
      h2.style.color = 'yellow';
    } 
    else {
      h2.innerHTML = 'Hai perso';
      h2.style.color = 'black';
    }
  }
)

buttonReset.addEventListener('click',
  function () {
    h2.innerHTML = '';
    spanYou.innerHTML = '';
    spanCPU.innerHTML = '';
    cardYou.classList.remove('active');
    cardCPU.classList.remove('active');
  }
)