// Exercici 1

const add = (a, b) => a + b;

// Exercici 2

const randomNumber = () => Math.floor(Math.random() * 100);

//exercici 3

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    const message = () => console.log(`Hola, ${this.name}`);
    message();
  }
}
