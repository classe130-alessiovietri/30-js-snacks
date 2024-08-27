/* 
    Snack 1

    Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
    Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma non supera 50.
    Alla fine, stampa l'array in console
*/

const myArr = [];
let sum = 0;

do {

    const nextNumber = parseInt(prompt('Inserisci un numero:'));
    console.log('Inserito:', nextNumber);

    myArr.push(nextNumber);

    sum += nextNumber;

} while (sum <= 50);

console.log(myArr);