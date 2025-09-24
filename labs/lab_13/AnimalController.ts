import Animal from "./Animal";

export default class AnimalController {

    public getAnimalWinner(animalList: Animal[]): Animal {
        let animalWinner = animalList[0];
        let maxSpeed = 0;
        for (const animal of animalList) {
            if (animal.getSpeed() > maxSpeed) {
                maxSpeed = animal.getSpeed();
            }
            animalWinner = animal;
        }
        return animalWinner;
    }
}