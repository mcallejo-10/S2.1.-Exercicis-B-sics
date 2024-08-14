"use strict"

// Exercici 1 //

const add = (a, b) => a + b;


// Exercici 2 //

const randomNumber = () => Math.floor(Math.random() * 100);


// Exercici 3 //

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    const message = () => console.log(`Hola, ${this.name}`);
    message();
  }
}


// Exercici 4 //

function printNumbers(arr) {
  for(let i = 0; i < arr.length; i++) {
    let num = (arr) => console.log(arr[i]);
    num(arr);
  }
}


// Exercici 5 //

 const time = setTimeout(() => console.log('Hola que ase?'), 3000); 



 // Comprobacions

console.log(add(2, 3));
console.log(randomNumber());
const person = new Person('David');
person.greet();
printNumbers([1, 2, 3, 4, 5]);