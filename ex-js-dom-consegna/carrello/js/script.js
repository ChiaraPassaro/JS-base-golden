//crea uno script che gestisca l'aggiunta e la rimozione del un prodotto dal carrello
//aggiungendo o rimuovendo un prodotto, aggiorna la quantità e il prezzo totale del singolo prodotto


//Bonus: Aggiungi una riga con il prezzo totale di tutti i prodotti nel carrello
const priceOrange = 1.50;
const priceBlueberries = 2.00;

//'#orange .add-item'
//'#blueberries .add-item'

const buttonAddItemOrange = document.querySelector('#orange .add-item');
const buttonAddItemBlueberries = document.querySelector('#blueberries .add-item');
const buttonRemoveItemOrange = document.querySelector('#orange .remove-item');
const buttonRemoveItemBlueberries = document.querySelector('#blueberries .remove-item');

const quantityOrange = document.querySelector('#orange .quantity');
const quantityBlueberries = document.querySelector('#blueberries .quantity');

const priceTotalOrange = document.querySelector('#orange .price-total');
const priceTotalBlueberries = document.querySelector('#blueberries .price-total');

let quantOrange = 1;
let quantBlueberries = 1;
quantityOrange.innerHTML = quantOrange;
priceTotalOrange.innerHTML = priceOrange;

quantityBlueberries.innerHTML = quantBlueberries;
priceTotalBlueberries.innerHTML = priceBlueberries;

buttonAddItemOrange.addEventListener('click',
  function () {
    // quantityOrange.innerHTML = quantityOrange.innerHTML + 1;
    // quantityOrange.innerHTML = parseFloat(quantityOrange.innerHTML) + 1;
    // quantityOrange.innerHTML += 1;
    quantOrange += 1
    quantityOrange.innerHTML = quantOrange;

    priceTotalOrange.innerHTML = quantOrange * priceOrange;
  }
)

buttonRemoveItemOrange.addEventListener('click',
  function () {
    quantOrange -= 1
    quantityOrange.innerHTML = quantOrange;

    priceTotalOrange.innerHTML = quantOrange * priceOrange;
  }
)

buttonAddItemBlueberries.addEventListener('click',
  function () {
    quantBlueberries += 1;
    quantityBlueberries.innerHTML = quantBlueberries;

    priceTotalBlueberries.innerHTML = quantBlueberries * priceBlueberries;
  }
)

buttonRemoveItemBlueberries.addEventListener('click',
  function () {
    quantBlueberries -= 1;
    quantityBlueberries.innerHTML = quantBlueberries;

    priceTotalBlueberries.innerHTML = quantBlueberries * priceBlueberries;
  }
)




const codiceFiscale = prompt("inserisci il tuo codice fiscale");


if (codiceFiscale.length === 16) {
    console.log("Codice fiscale valido");

}else {
    console.log("Codice fiscale non valido");
}

const number1 = prompt("inserisci il primo numero");
console.log(number1);
const number2 = prompt ("inserisci il secondo numero");
console.log(number2);

if (number2 != 0) {
  console.log(number1 / number2);
}else {
  console.log("non è possibile dividere per 0");
}