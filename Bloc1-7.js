"use strict";

// Exercici 1 i 2

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Hola, món') }, 2000) });

promesa.then( (value) => { console.log(value) } )
console.log(promesa);

// Exercici 3

let input = "Hola";
let promesa3 = new Promise((resolve, reject) => {
  if (input == "Hola") {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  } else {
    reject('rejected');
  }
});


promesa3.then((value) => { console.log(value) }, 
              (value) => { console.log(value) });

console.log(promesa3);

//Exercici 4

async function myAsynic() {
  const result = await promesa();
  console.log('await:', result);
}

myAsynic();


/*



Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons
 si l'input és igual a 'Hola',
 i que la rebutgi si l'input és qualsevol altra cosa.


Exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await 
per a esperar el resultat de la promesa creada a l'exercici 1, 
i que després imprimeixi aquest resultat a la consola.

Nivell 2


Exercici 5
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4
 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

Nivell 3
Exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, 
respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, 
i imprimeix els resultats a la consola.*/
