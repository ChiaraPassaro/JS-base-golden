//alert("ciao")
const baseNumberUsers = 10;
const baseGb = 2;
const basePrice = 0;
const value = "$/mo";

//Tenuto conto che 
//il piano free ha costo 0, 
//users 10
//gb 2

//inserisci questi dati negli elementi del dom con l'id giusto.
const usersIncludedString = 'users included';
const gbIncludedString = 'GB of storage';

const stringbasePrice = basePrice + value;
document.getElementById("free-price").innerHTML = stringbasePrice;

const stringUserCompleted = baseNumberUsers + " " + usersIncludedString;
console.log(stringUserCompleted);
document.getElementById("free-users").innerHTML = stringUserCompleted 

const stringGbCompleted = baseGb + " " + gbIncludedString;
console.log(stringGbCompleted);
document.getElementById("free-gb").innerHTML = stringGbCompleted;



//Il piano Pro
//costa 15$, ha il ha il doppio degli utenti e cinque volte in piu di GB 
//inserisci questi dati negli elementi del dom con l'id giusto.

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
//Il piano Enterprise
//Costa il doppio del pro, ha il triplo degli utenti e otto volte in piu di GB
//Calcola il numero di utenti e di GB, poi stampali in pagina

//inserisci questi dati negli elementi del dom con l'id giusto.
let enterprice = proPrice * 2;
enterprice  = 30;
console.log(enterprice);
const stringEnterprice = enterprice + value;
document.getElementById("enterprice-price").innerHTML = stringEnterprice

let enterpriceNumberUsers = proNumberUsers * 3;
enterpriceNumberUsers = 60;
console.log(enterpriceNumberUsers);
const stringEnterpriceUsersCompleted = enterpriceNumberUsers + " " + usersIncludedString;
console.log(stringEnterpriceUsersCompleted);
document.getElementById("enterprice-users").innerHTML = stringEnterpriceUsersCompleted;

let enterpriceGb = proGb * 8;
enterpriceGb = 80;
console.log(enterpriceGb);
const stringEnterpriceGbCompleted = enterpriceGb + " " + gbIncludedString;
console.log(stringEnterpriceGbCompleted);
document.getElementById("enterprice-gb").innerHTML = stringEnterpriceGbCompleted;
