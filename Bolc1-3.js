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


// Exercici 3 !!!!

function esperarISaludar(nom, myCallback) {
   setTimeout(myCallback(nom), 4000);
   setTimeout(myCallback(nom), 30000)
}

function saludar(nom) {
    console.log(`Hola ${nom}!!`);
}

esperarISaludar('Pepi', saludar)


// Exercici 4

function processarElements(arr, myCallback) {
    arr.forEach(myCallback);
}

let arr = ['hola', 'que' , 'fas', '?']

processarElements(arr, mostrar);

// Exercici 5

function processarCadena(str, myCallback) {
    str = str.toUpperCase();
    myCallback(str);    
}

processarCadena("holA que dius?", mostrar);

/*
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.



*/