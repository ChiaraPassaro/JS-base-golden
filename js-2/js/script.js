// // const times = "20" * 10;
// // console.log(times);
// // console.log(times / 10);


// // const yourName = prompt('insert your name');
// // // console.log(yourName);
// // const lastName = prompt('insert your lastname');
// // // console.log(lastName);

// // const h2 = document.getElementById('user-name');
// // // console.log(h2);
// // const fullName = yourName + ' ' + lastName;
// // h2.innerHTML = fullName;

// // const yourName = prompt('Insert your name');
// // const year = prompt('Insert your birthday year');
// // const mail = '@mail.com';
// // const fullEmail = yourName + year + mail;
// // const h2 = document.getElementById('user-name');
// // h2.innerHTML = fullEmail;

// // const numberTicket = prompt('How many tickets?');
// // console.log(numberTicket);
// // const price = 10;
// // const totalPrice = numberTicket * price;
// // console.log(totalPrice);

// const paragraph = document.querySelector('.paragraph');
// console.log(paragraph);

// const li = document.querySelector('.list-item:nth-child(2)');
// console.log(li);

// const h2 = document.querySelector('#user-name');
// console.log(h2);

// const p = document.querySelector('p');
// console.log(p);

// // p.innerText = '<strong>Pippo</strong>';
// // p.innerHTML = '<strong>Pippo</strong>';
// const valueP = p.innerHTML;
// console.log(valueP);
// p.innerHTML = valueP + '<strong>Pippo</strong>';

// p.innerHTML += '<strong>Pippo</strong>';

// let number = 10;
// number += 2;
// console.log(number)

// h2.innerHTML = 'Ciao';
// h2.style.color = 'blue';
// h2.style.backgroundColor = 'pink';

// paragraph.classList.add('big');

// const div = document.querySelector('.hidden');
// div.classList.remove('hidden');

// const input = document.getElementById('input-name');
// const inputValue = input.value;
// console.log(inputValue);

const button = document.getElementById('submit');
const input = document.getElementById('input-name');

button.addEventListener('click',
  function () {
    //quello che scrivo qui avviene quando l'utente clicca
    // console.log('click');
    const inputValue = input.value;
    console.log(inputValue);
  }
)