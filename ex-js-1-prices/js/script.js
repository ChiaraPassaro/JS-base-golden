//free-price
const baseNumberUsers = 10;
const baseGb = 2;
const basePrice = 0;
const value = "$/mo";


const stringBasePrice = basePrice + value;
document.getElementById("free-price").innerHTML = stringBasePrice;

const usersIncludedString = 'users included';
const gbIncludedString = 'GB of storage';

//alert ("Ciao");

const stringGbCompleted = baseGb + " " + gbIncludedString;
console.log(stringGbCompleted);

document.getElementById("free-gb").innerHTML = stringGbCompleted;

const stringUsersCompleted = baseNumberUsers + " " + usersIncludedString;
console.log(stringUsersCompleted);

document.getElementById("free-users").innerHTML = stringUsersCompleted;

//pro-price
let proNumberUsers = baseNumberUsers * 2;
proNumberUsers = 20;
console.log(proNumberUsers);
const proPrice = 15;
let proGb = baseGb * 5;
proGb = 10;
console.log(proGb);

const stringProPrice = proPrice + value;
document.getElementById("pro-price").innerHTML = stringProPrice;

const stringProUsersCompleted = proNumberUsers + " " + usersIncludedString;
console.log(stringProUsersCompleted);
document.getElementById("pro-users").innerHTML = stringProUsersCompleted;

const stringProGbCompleted = proGb + " " + gbIncludedString;
console.log(stringProGbCompleted);
document.getElementById("pro-gb").innerHTML = stringProGbCompleted;




//Tenuto conto che
//il piano free ha costo 0, 
//users 10
//gb 2

//inserisci questi dati negli elementi del dom con l'id giusto.

//Il piano Pro
//costa 15$, ha il ha il doppio degli utenti e cinque volte in piu di GB 

//inserisci questi dati negli elementi del dom con l'id giusto.

//Il piano Enterprise
//Costa il doppio del pro, ha il triplo degli utenti e otto volte in piu di GB
//Calcola il numero di utenti e di GB, poi stampali in pagina

//inserisci questi dati negli elementi del dom con l'id giusto.