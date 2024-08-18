"use strict"


// Bloc 1.2: Operador ternari

// Exercici 1
function potConduir(edat) {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir';
}


// Exercici 2

function esMesGran(num1, num2) {
    return num1 > num2 ? 'num1 és més gran' 
    : num2 > num1 ? 'num2 és més gran' 
    : 'son iguals';
}


// Exercici 3

function esPositiu(num) {
    return num > 0 ? 'És positiu' 
    : num < 0 ? 'És negatiu' 
    : 'És zero';
}

function trobarMaxim(a, b, c) {
    return (a > b && a > c) ? 'a és el màxim'
                            : b > c ? 'b és el màxim'
                            : 'c és el màxim';

}


// Exercici 4

function parOImpar(arr) {
    for (let i = 0; i < arr.length; i++) {
       console.log(`${arr[i]} és ${(arr[i] % 2 == 0) ? 'és parell' : 'és imparell'}`);
    }
}


// Comprobacions

let arr = [1, 2, 3, 4, 9, 5];
console.log(potConduir(18)); 
console.log(esMesGran(333, 333)); 
console.log(esPositiu(0)); 
console.log(trobarMaxim(56, 22, 33)); 
parOImpar(arr);

