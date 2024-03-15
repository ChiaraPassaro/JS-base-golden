//alert("ciao")
const baseNumberUsers = 10;
const baseGb = 2;
const basePrice = 0;
const value = "$/mo";


const usersIncludedString = 'users included';
const gbIncludedString = 'GB of storage';

const stringbasePrice = value + basePrice;
document.getElementById("free-price").innerHTML = stringbasePrice;

const stringUserCompleted = baseNumberUsers + " " + usersIncludedString;
console.log(stringUserCompleted);
document.getElementById("free-users").innerHTML = stringUserCompleted 

const stringGbCompleted = baseGb + " " + gbIncludedString;
console.log(stringGbCompleted);
document.getElementById("free-gb").innerHTML = stringGbCompleted;



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