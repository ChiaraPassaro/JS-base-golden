// const input = document.getElementById('quantity');
// const button = document.getElementById('button');

// button.addEventListener('click',
//   function () {
//     const inputValue = input.value;

//     //se inputValue non e un numero inserisco un messaggio di errore

//     if (isNaN(inputValue)) {
//       alert('hai inserito un non numero');
//     }

//     if (isNaN(inputValue) === false) {
//       const count = inputValue * 20;
//       console.log(count);
//     }
//   }
// )


let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomNumber);

// 0-38
//  data la temperatura esterna, raccomanda prodotti differenti:
// "Cappotti e sciarpe" se inferiore a 10°C, "Maglie a manica lunga" tra 10°C e 20°C, e "T-shirt e shorts" se superiore a 20°C.