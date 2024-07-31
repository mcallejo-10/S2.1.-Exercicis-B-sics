"use strict";

// Exercici 1

let array1 = [1, 3, "a", "lklk"];
let array2 = [4, 6, 8, "dd"];

let array3 = [...array1, ...array2];

console.log(array3);


// Exercici 2

function suma(...arrNum) {
  return arrNum.reduce((result, current) => result + current);
}

let result = suma(11, 2, 3, 4, 5, 5);
console.log(result);


//Exercici 3

const obj1 = { nom: "Miranda", cognom: "Callejón" };

const obj2 = { ...obj1 };

console.log(obj2);


// Exercici 4

const arr = ["hola", "caracola", "que", "pasa", "mufasa"];

const [elem1, elem2, ...rest] = arr;

console.log("primer element:", elem1);
console.log("segon element:", elem2);
console.log("resta d'elements:", rest);


// Exercici 5

function mySpread(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const array = ["que", "pasa", "mufasa"];

mySpread(...array);


// Exercici 6

const obj3 = { nom: "pepe", cognom: "pepa" };
const obj4 = { ciutat: "barcelona", edat: 13 };

const objMerge = { ...obj3, ...obj4 };

console.log(objMerge);