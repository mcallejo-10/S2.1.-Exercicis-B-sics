"use strict"

//Bloc 1.3: Callbacks

// Exercici 1

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
   setTimeout(() => myCallback(nom), 4000);
}

function saludar(nom) {
    console.log(`Hola ${nom}!!`);
}

esperarISaludar('Pepi', saludar)


// Exercici 4

function processarElements(arr, myCallback) {
    arr.forEach(myCallback);
}

const arr2 = ['hola', 'que' , 'fas', '?']

processarElements(arr2, mostrar);


// Exercici 5

function processarCadena(str, myCallback) {
    str = str.toUpperCase();
    myCallback(str);    
}

processarCadena("holA que dius?", mostrar);
