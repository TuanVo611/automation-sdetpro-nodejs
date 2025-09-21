import Animal from "./Animal";

export default class Tiger extends Animal{
    constructor(){
        super();
        this.speed = Math.floor(Math.random() * 100) + 1;
        this.name = "Tiger"
    }
}