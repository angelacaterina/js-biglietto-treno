//1. Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var kmDaPercorrere = Number(prompt("numero di chilometri che vuole percorrere"));
//console.log(kmDaPercorrere);
document.getElementById('kmDaPercorrere').innerHTML = kmDaPercorrere + "km";

var userAge = Number(prompt("Quanti anni hai?"));
//console.log(userAge);
document.getElementById('userAge').innerHTML = userAge + " anni";


//2. calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoBiglietto = Number(kmDaPercorrere * 0.21);
document.getElementById('prezzoBiglietto').innerHTML = prezzoBiglietto + " € ";
console.log(prezzoBiglietto);

//////variabili utilizzate poi nel PROGRAMMA//////
// va applicato uno sconto del 20% per i minorenni
// var sconto20 = Number(prezzoBiglietto - (prezzoBiglietto * (20 / 100)));
// console.log(sconto20);

// va applicato uno sconto del 40% per gli over 65
// var sconto40 = Number(prezzoBiglietto - (prezzoBiglietto * (40 / 100)));
// console.log(sconto40);

//PROGRAMMA
if(userAge <= 17) {
  var sconto20 = Number(prezzoBiglietto - (prezzoBiglietto * (20 / 100)));
  console.log(sconto20);

  document.getElementById('totalPrice').innerHTML = sconto20 + " € " + "sconto del 20%";
  console.log("Applicato uno sconto del 20%");

} else if(userAge > 17 && userAge < 65) {
  document.getElementById('totalPrice').innerHTML = prezzoBiglietto + " €";
  console.log("Non viene applicato nessuno sconto");
} else{
  var sconto40 = Number(prezzoBiglietto - (prezzoBiglietto * (40 / 100)));
  console.log(sconto40);

  document.getElementById('totalPrice').innerHTML = sconto40 + " € " + "sconto del 40%";
  console.log("Applicato uno sconto del 40%");
}
