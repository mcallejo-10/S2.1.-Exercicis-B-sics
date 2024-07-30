"use strict"

// Exercici 1

let array1 = [1, 3, 'a', 'lklk'];
let array2 = [4, 6, 8, 'dd'];

let array3 = [...array1, ...array2];

// console.log(array3);


// Exercici 2

function suma(...arrNum) {

   return arrNum.reduce((result, current) => result + current);
}

let result = suma(11, 2, 3, 4, 5, 5);
console.log(result);    


//Exercici 3 


/*
Nivell 2
Exercici 3
Copiant objectes amb Spread: Crea un objecte 'objecte1'. 
Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. 
Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.


Exercici 4
Rest en Destructuring: Crea una array amb diversos elements. 
Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, 
i després assignar la resta dels elements a una tercera variable.

Exercici 5
Nivell 3
Spread en Funcions: Crea una funció que accepti tres arguments. 
Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.


Exercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.*/