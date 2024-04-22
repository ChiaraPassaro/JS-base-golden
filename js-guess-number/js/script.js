// 1. Genera due numeri random e stampa in pagina il maggiore

const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

if (randomNumber > randomNumber2) {
  console.log(randomNumber);
}
else if (randomNumber === randomNumber2) {
  console.log(randomNumber, randomNumber2, 'sono uguali');
}
else {
  console.log(randomNumber2);
}

// 4. Genera un numero casuale tra 1 e 100 e stampa se è pari o dispari.

const randomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min;

if (randomNumber % 2 === 0) {
  console.log('Numero pari', randomNumber);
} else {
  console.log('Numero dispari', randomNumber);
}

//genera un numero causale
//chiedi all'utente di inserire un numero
//se ha indovinato il numero stampa "Hai vinto"
//se ha inserito un numero più grande di 1 o più piccolo di 1 "ci sei andato vicino"
//oppure "Hai Perso"

const randomNumber4 = Math.floor(Math.random() * (max - min + 1)) + min;
const numberUser = prompt('Inserisci un numero');

if (randomNumber4 == numberUser) {
  console.log('Hai vinto');
}
else if (numberUser == randomNumber + 1 || numberUser == randomNumber - 1) {
  console.log('Ci sei andato vicino');
}
else {
  console.log('Ritenta sarai fortunato');
}