import Animal from "./Animal";

export default class Horse extends Animal{
    constructor(){
        super();
        this.speed = Math.floor(Math.random() * 75) + 1;
        this.name = "Horse"
    }
}