import Animal from "./Animal";
import { AnimalController } from "./AnimalController";

import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

let dog = new Dog();
let horse = new Horse();
let tiger = new Tiger();

let animalController = new AnimalController();

let animalWinner = animalController.getAnimalWinner([dog, horse, tiger]);

console.log(animalWinner.getSpeed());
console.log(animalWinner.getName());