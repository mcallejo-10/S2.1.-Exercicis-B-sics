"use strict";

// Exercici 1 i 2

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

promesa.then((value) => {
  console.log(value);
});


// Exercici 3

function promesa3(input) {
  return new Promise((resolve, reject) => {
    if (input == "Hola") {
      setTimeout(() => {
        resolve("resolved");
      }, 2000);
    } else {
      reject("rejected");
    }
  });
}

promesa3("Hola").then(
  (value) => {
    console.log("promesa3", value);
  },
  (value) => {
    console.log("promesa3 ", value);
  }
);


//Exercici 4

async function myAsynic() {
  const result = await promesa;
  console.log("await:", result);
}

myAsynic();


// Exercici 5

async function myAsynic2() {
  try {
    const result = await promesa;
    console.log("try-await: ", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

myAsynic2();


// Exercici 6

const promesaA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promesa A resolta");
  }, 2000);
});

const promesaB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promesa B resolta");
  }, 3000);
});

Promise.all([promesaA, promesaB])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
