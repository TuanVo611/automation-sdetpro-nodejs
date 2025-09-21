import Animal from "./Animal";
import AnimalController from "./AnimalController";

let dog = new Animal();
let horse = new Animal();
let tiger = new Animal();

let animalController = new AnimalController();

let animalWinner = animalController.getAnimalWinner([dog, horse, tiger]);

console.log(animalWinner.getSpeed());
console.log(animalWinner.getName());