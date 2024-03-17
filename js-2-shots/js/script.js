// // 6. Chiedi all'utente di inserire due numeri e stampa la differenza (il risultato deve essere  positivo).

// const number1 = prompt('Inserisci un numero');
// const number2 = prompt('Inserisci un secondo numero');

// const diff = number1 - number2;
// const absoluteDiff = Math.abs(diff);
// console.log(absoluteDiff);


// // 4. Conta quanti caratteri ha una parola chiesta all'utente.
// const word = prompt('Inserisci una parola');
// console.log('questa parola e lunga ' + word.length);






// 1. Chiedi all'utente nome e cognome, stampa nella pagina il nome completo.

// 2. Chiedi all'utente nome e anno di nascita,
// poi genera un indirizzo email
// aggiungendo al nome l'anno di nascita e @mail.com
// Esempio: chiara1980 @mail.com

// 3. Chiedi all'utente quanti biglietti del cinema vuole acquistare Stampa il costo totale.


// 5. Chiedi all'utente di inserire una parola, poi chiedi un numero da 0 a 4 e stampa la lettera corrispondente alla posizione indicata dall'utente.




//DOM e Eventi
// 1. Modifica lo stile e aggiungi una classe con JS
// const p = document.querySelector('p');
// p.style.fontSize = '10rem';
// p.style.color = 'red';
// p.classList.add('paragraph');
// p.classList.remove('paragraph');

// 2. Aggiungi un elemento nel DOM

// const container = document.querySelector('.container');
// container.innerHTML += '<p>Lorem ipsum</p>';
// container.innerHTML += '<button>Invia</button>';

// 3. Modifica il testo di un elemento in base al valore di un input quando un pulsante viene cliccato.

// 4. Cambia colore di sfondo: Cambia il colore di sfondo della pagina quando l'utente clicca su un bottone.
// const button = document.getElementById('invia');
// button.addEventListener('click',
//   function () {
//     const body = document.querySelector('body');
//     console.log(body);

//     body.style.backgroundColor = 'blue';
//   }
// // )


// // 5. Nascondi e mostra un elemento: Aggiungi un bottone che quando cliccato nasconde un paragrafo e un altro bottone che lo mostra.

// const button = document.getElementById('invia');
// const buttonNascondi = document.getElementById('nascondi');
// const p = document.querySelector('p.hidden');

// button.addEventListener('click',
//   function () {
//     p.classList.remove('hidden');
//   }
// )

// buttonNascondi.addEventListener('click',
//   function () {
//     p.classList.add('hidden');
//   }
// )



// // 6. Copia il testo: Inserisci un campo di input e un bottone; quando l'utente clicca il bottone, copia il testo inserito in un paragrafo.
// const input = document.getElementById('word');
// const buttonSubmit = document.getElementById('submit-word');

// buttonSubmit.addEventListener('click',
//   function () {
//     const valueInput = input.value;
//     console.log(valueInput);
//   }
// )


// 7. Cambia il titolo della pagina: Aggiungi un campo di input e un bottone; quando l'utente inserisce un testo e clicca il bottone, cambia il titolo della pagina con il testo inserito.

const h1 = document.querySelector('h1');
const input = document.getElementById('new-title');
const button = document.getElementById('submit-title');

button.addEventListener('click',
  function () {
    const valueInput = input.value; //string
    h1.innerHTML = valueInput;
  }
)


// 8. Animazione semplice: Aggiungi un elemento nel DOM che si muove da sinistra a destra quando l'utente clicca su un bottone.
