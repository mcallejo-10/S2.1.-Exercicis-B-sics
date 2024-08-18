"use strict";

//Bloc 1.5: Array transformations

// Exercici 1

let numbers1 = [1, 2, 3, 4];

let arraySquare = numbers1.map((num) => num * num);

console.log(arraySquare);


// Exercici 2

let numbers2 = [1, 2, 3, 4];

let parells = numbers2.filter((num) => num % 2 == 0);

console.log(parells);



// Exercici 3

let numbers3 = [1, 10, 8, 11];

let primerMajor = numbers3.find((num) => num > 10);

console.log(primerMajor);


// Exercici 4

let numbers4 = [13, 7, 8, 21];

let myReduce = numbers4.reduce((a, b) => a + b);

console.log(myReduce);


// Exercici 5

let numbers5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const resultat = (arr) => {
  return arr
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((a, b) => a + b);
};

console.log(resultat(numbers5));


// Exercici 6

let numbers6 = [11, 12, 13, 14];

let myEvery = numbers6.every((num) => num > 10);
let mySome = numbers6.some((num) => num > 10);

console.log("Tots són > 10 ?", myEvery);
console.log("Alguns són > 10 ?", mySome);
