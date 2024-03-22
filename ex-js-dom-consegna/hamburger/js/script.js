//Crea uno script che premendo sul bottone hamburger, mostra il menu mobile, e premendo su una X chiude il menu mobile

const button = document.getElementById("hamburger");
console.log("button");
const buttonClose = document.getElementById("close");
console.log("button");
const p = document.querySelector("p.hidden");

button.addEventListener("click",
 function () {
 p.classList.remove("hidden");
 }


)

buttonClose.addEventListener("click",
function () {
p.classList.add("hidden");


}

)




