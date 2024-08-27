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

const arraysNumber = parseInt(prompt('Quanti array vuoi creare?'));
console.log('Verranno creati', arraysNumber, 'array');

const myArrays = [];

for (let i = 0; i < arraysNumber; i++) {
    console.log('Genero array', (i + 1));

    const newArr = [];
    for (let j = 0; j < 10; j++) {
        const newNum = randomNum(1, 100);
        newArr.push(newNum);
    }
    console.log('Array ' + (i + 1) + ':', newArr);

    myArrays.push(newArr);
}

console.log('TUTTI i miei array:', myArrays);

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}