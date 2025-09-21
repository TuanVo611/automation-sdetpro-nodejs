import Animal from "./Animal";

export default class Dog extends Animal{
    constructor(){
        super();
        this.speed = Math.floor(Math.random() * 60) + 1;
        this.name = "Dog"
    }
}