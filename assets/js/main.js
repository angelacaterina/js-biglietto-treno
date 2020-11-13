////PROGRAMMA 1 CONSOLE////
//1. Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var kmDaPercorrere = Number(prompt("numero di chilometri che vuole percorrere"));
//console.log(kmDaPercorrere);

var userAge = Number(prompt("Quanti anni hai?"));
//console.log(userAge);

//2. calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoBiglietto = Number(kmDaPercorrere * 0.21);
console.log(prezzoBiglietto);

// va applicato uno sconto del 20% per i minorenni
var sconto20 = Number(prezzoBiglietto - (prezzoBiglietto * (20 / 100)));
// console.log(sconto20);

// va applicato uno sconto del 40% per gli over 65
var sconto40 = Number(prezzoBiglietto - (prezzoBiglietto * (40 / 100)));
// console.log(sconto40);


// Variabili dichiarate esternamente al programma
if(userAge <= 17) {
  sconto20;
  console.log(sconto20);
  console.log("Applicato uno sconto del 20%");
} else if(userAge > 17 && userAge < 65) {
  prezzoBiglietto;
  console.log(prezzoBiglietto);
  console.log("Non viene applicato nessuno sconto");
} else{
  sconto40;
  console.log(sconto40);
  console.log("Applicato uno sconto del 40%");
}


// ////PROGRAMMA 2 CONSOLE + HTML////
// //Variabili km, anni prezzo biglietto
// var kmDaPercorrere = Number(prompt("numero di chilometri che vuole percorrere"));
// //console.log(kmDaPercorrere);
// document.getElementById('kmDaPercorrere').innerHTML = kmDaPercorrere + "km";
//
// var userAge = Number(prompt("Quanti anni hai?"));
// //console.log(userAge);
// document.getElementById('userAge').innerHTML = userAge + " anni";
//
// var prezzoBiglietto = Number(kmDaPercorrere * 0.21);
// console.log(prezzoBiglietto);
// document.getElementById('prezzoBiglietto').innerHTML = prezzoBiglietto + " € ";
//
// // Variabili sconto minorenni e over 65
// var sconto20 = Number(prezzoBiglietto - (prezzoBiglietto * (20 / 100)));
// // console.log(sconto20);
//
// var sconto40 = Number(prezzoBiglietto - (prezzoBiglietto * (40 / 100)));
// // console.log(sconto40);
//
//
// // Variabi dichiarate esternamente al programma + modifica id html interne al programma
// if(userAge <= 17) {
//   document.getElementById('totalPrice').innerHTML = sconto20 + " € " + "sconto del 20%";
//   console.log(sconto20);
//   console.log("Applicato uno sconto del 20%");
// } else if(userAge > 17 && userAge < 65) {
//   document.getElementById('totalPrice').innerHTML = prezzoBiglietto + " €";
//   console.log(prezzoBiglietto);
//   console.log("Non viene applicato nessuno sconto");
// } else{
//   document.getElementById('totalPrice').innerHTML = sconto40 + " € " + "sconto del 40%";
//   console.log(sconto40);
//   console.log("Applicato uno sconto del 40%");
// }


// ////PROGRAMMA 3 CONSOLE + HTML////
// //Variabili km, anni e prezzo biglietto
// var kmDaPercorrere = Number(prompt("numero di chilometri che vuole percorrere"));
// //console.log(kmDaPercorrere);
// document.getElementById('kmDaPercorrere').innerHTML = kmDaPercorrere + "km";
//
// var userAge = Number(prompt("Quanti anni hai?"));
// //console.log(userAge);
// document.getElementById('userAge').innerHTML = userAge + " anni";
//
// var prezzoBiglietto = Number(kmDaPercorrere * 0.21);
// console.log(prezzoBiglietto);
// document.getElementById('prezzoBiglietto').innerHTML = prezzoBiglietto + " € ";
//
//
// // Variabili dichiarate internamente al programma + modifica id html interne al programma
// if(userAge <= 17) {
//   var sconto20 = Number(prezzoBiglietto - (prezzoBiglietto * (20 / 100)));
//   console.log(sconto20);
//
//   document.getElementById('totalPrice').innerHTML = sconto20 + " € " + "sconto del 20%";
//   console.log("Applicato uno sconto del 20%");
//
// } else if(userAge > 17 && userAge < 65) {
//   console.log(prezzoBiglietto);
//
//   document.getElementById('totalPrice').innerHTML = prezzoBiglietto + " €";
//   console.log("Non viene applicato nessuno sconto");
// } else{
//   var sconto40 = Number(prezzoBiglietto - (prezzoBiglietto * (40 / 100)));
//   console.log(sconto40);
//
//   document.getElementById('totalPrice').innerHTML = sconto40 + " € " + "sconto del 40%";
//   console.log("Applicato uno sconto del 40%");
// }
