import Animal from "./Animal";
import { MAX_SPEED } from "./SpeedConstants";

export default class Dog extends Animal {

    constructor() {
        super("Dog", Math.floor(Math.random() * MAX_SPEED.dog));
    }
}