/*Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

/**
* Returns a random number
*/
function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// definisco delle variabili
var inputUtente = [];
var inputPc = [];
var countdown = 30; // tempo per il conto alla rovescia
var risultatoEl = document.getElementById('time'); // h1 in HTML su cui restituiremo il risultato


 for( var i = 0; i < 5; i++){
   generatiNum = getRandomArbitrary(1, 99)
   if (inputPc.includes(generatiNum)) {
     i--;
   } else {
     inputPc.push(generatiNum)
   }
 }

 console.log('inputPc');
