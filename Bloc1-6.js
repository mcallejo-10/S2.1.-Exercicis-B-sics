"use strict";

//Bloc 1.6: Array loops

// Exercici 1

let noms = ["Anna", "Bernat", "Clara"];

noms.forEach((nom) => console.log(nom));


// Exercici 2

for (let x of noms) {
  console.log(x);
}


// Exercici 3

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (let x in obj) {
  console.log(x, ":", obj[x]);
}


// Exercici 4

let numeros = [1, 2, 3, 4, 5, 6];

for (let x of numeros) {
  console.log(x);
  if (x == 5) break;
}


// Exercici 5

for (let x of noms) {
  console.log("index", noms.indexOf(x), x);
}
