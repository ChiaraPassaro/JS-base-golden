//Crea uno script che premendo sul bottone hamburger, mostra il menu mobile, e premendo su una X chiude il menu mobile
//alert("ciao");

const button = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const btn = document.getElementById("close");

button.addEventListener("click",
function () {
  menu.classList.remove("menu");
}

)

btn.addEventListener("click",
function () {
  menu.classList.add("menu");
}

)

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