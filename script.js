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
var comparatoreNum = [];
//genero numeri random per il PC
 for( var i = 0; i < 5; i++){
   generatiNum = getRandomArbitrary(1, 49)
   if (inputPc.includes(generatiNum)) {
     i--;
   } else {
     inputPc.push(generatiNum)
   }
 }
//li faccio visualizzare
 console.log('inputPc');
 alert('Ciao Utente ricorda questi numeri : ' + (inputPc));
//imposto un timer di 30sec
setTimeout(userPk, 30000);
// faccio inserire i numeri all'Utente e poi genero la vittoria
function userPk() {
  for(var i = 0; i < 5; i++){
    var insNum = parseInt(prompt('Inserisci i cinque numeri che il PC ti ha fornito'));
    if (inputUtente.includes(insNum)) {
      alert('in numero che hai inserito esiste già');
    } else {
      inputUtente.push(insNum);
    }
    if(inputPc.includes(insNum)){
      comparatoreNum.push(inputUtente)
    }
  }
  time.innerHTML = 'hai indovinato ' + comparatoreNum.length + ' Numeri.<br>' + 'i numeri sono: ' + comparatoreNum;
}
console.log('inputUtente');


userPk(); // richiamo la funzione
