"use strict"

// Execici 1

function processar(num, myCallback) {
    myCallback(num);
}

function mostrar(a) {
    console.log(a);
}

processar(7, mostrar);


//Exercici 2

function calculadora(num1, num2, myCallback) {
    console.log(myCallback(num1, num2));
}

function sumar(num1, num2) {
    return num1 + num2;
}

calculadora(8 , 2, sumar);


// Exercici 3

function esperarISaludar(nom, myCallback) {
   const timeout = setTimeout(myCallback(nom), 4000);
}

function saludar(nom) {
    console.log(`Hola ${nom}!!`);
}

esperarISaludar('Pep', saludar)
/*

Exercici 3
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar 
que accepti dos paràmetres: un nom i una funció de callback. 
La funció ha d'esperar 2 segons i llavors invocar 
la funció de callback, passant el nom com a paràmetre.


Exercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
La funció processarElements ha d'invocar la funció de callback per cada element de l'array.


*/