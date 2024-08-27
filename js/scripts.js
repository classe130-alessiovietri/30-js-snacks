/* 
    Snack 1

    Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
    Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma non supera 50.
    Alla fine, stampa l'array in console
*/

// const myArr = [];
// let sum = 0;

// do {

//     const nextNumber = parseInt(prompt('Inserisci un numero:'));
//     console.log('Inserito:', nextNumber);

//     myArr.push(nextNumber);

//     sum += nextNumber;

// } while (sum <= 50);

// console.log(myArr);

/* 

----------------------------------------------------------------------------------------------------

*/

/* 
    Snack 2

    Fai inserire un numero, che chiameremo N, all’utente.
    Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
*/

// const arraysNumber = parseInt(prompt('Quanti array vuoi creare?'));
// console.log('Verranno creati', arraysNumber, 'array');

// const myArrays = [];

// for (let i = 0; i < arraysNumber; i++) {
//     console.log('Genero array', (i + 1));

//     const newArr = [];
//     for (let j = 0; j < 10; j++) {
//         const newNum = randomNum(1, 100);
//         newArr.push(newNum);
//     }
//     console.log('Array ' + (i + 1) + ':', newArr);

//     myArrays.push(newArr);
// }

// console.log('TUTTI i miei array:', myArrays);

// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

/* 

----------------------------------------------------------------------------------------------------

*/

/* 
    Snack 3

    Dare la possibilità di inserire due parole.
    Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
    Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
*/

const wordOne = prompt('Inserisci la prima parola:');
const wordTwo = prompt('Inserisci la seconda parola:');

// function checkSameLength(a, b) {
//     if (a.length == b.length) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const checkSameLength = (a, b) => {
//     if (a.length == b.length) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

/* 
    OPPURE
*/

const checkSameLength = (a, b) => a.length == b.length;

// const checkSameLength = (a, b) => {
//     if (a.length == b.length) {
//         return 'UGUALI';
//     }
//     else {
//         return 'DIVERSE';
//     }
// }

/* 
    OPPURE
*/

// const checkSameLength = (a, b) => (a.length == b.length ? 'UGUALI' : 'DIVERSE');

if (checkSameLength(wordOne, wordTwo)) {
    console.log(wordOne, '-', wordTwo);
}
else if (wordOne.length > wordTwo.length) {
    console.log(wordOne);
}
else {
    console.log(wordTwo);
}




// CONDIZIONE DA VERIFICARE ? COSA RESTITUIRE SE LA CONDIZIONE é VERA : COSA RESTITUIRE SE LA CONDIZIONE é FALSA

// COND ? A : B

// if (a.length == b.length) {
//     return 'UGUALI';
// }
// else {
//     return 'DIVERSE';
// }

// return (a.length == b.length ? 'UGUALI' : 'DIVERSE')

const person = {
    firstName: 'Alessio',
    lastName: 'Vietri',
    getFullName() {
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }
}

person.getFullName();

document.getElementById('test').addEventListener('click', () => console.log(this));
document.getElementById('test').addEventListener('click', function() { console.log(this); });