import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


//variables
const simbolos= [ "♦", "♥", "♠", "♣"];
let colorCarta = "black";
const elBoton = document.querySelector("#genCarta");
let randomSimbolos = 0;


//funciones

//EXTRAE SIMBOLOS
const generSimbolo = (simbolos) => {
  randomSimbolos = Math.floor(Math.random()*simbolos.length);
  return simbolos[randomSimbolos];
}

//GENERA NUMERO
const genNumAleatorio = () => {
  let randomNumero = Math.floor(Math.random()*10);
  return randomNumero;
}


//GENERA COLOR CARTA
const gentColorCarta = () => {
  debugger
  colorCarta =simbolos[randomSimbolos] === "♦" || simbolos[randomSimbolos]  === "♥"? "red" : "black";
  return colorCarta;
}



// GENERA CARTA TOTAL
const generarCarta = () => {
  let elsimboloTop = generSimbolo(simbolos);
  let colorTop =gentColorCarta();
  let elnumeroTop = genNumAleatorio();
  let elsimboloBottom = generSimbolo(simbolos);

  genCardTotal(elsimboloTop, colorTop, elnumeroTop, elsimboloBottom, )


}

function genCardTotal(elsimboloTop, colorTop, elnumeroTop,){
  //elemento top de la carta
  let elTop = document.querySelector(".randomTop");
  elTop.innerHTML = elsimboloTop;
  elTop.style.fontSize="70px";
  elTop.style.color = colorTop;

  let elMiddle = document.querySelector(".randomMiddle");
  elMiddle.innerHTML = elnumeroTop;
  elMiddle.style.fontSize="100px";

  let elBottom = document.querySelector(".randomBottom");
  elBottom.innerHTML = elsimboloTop;
  elBottom.style.fontSize="70px";
  elBottom.style.color = colorTop;

}




//eventos



window.onload = function() {
  generarCarta();
  elBoton.addEventListener("click", generarCarta)
};
