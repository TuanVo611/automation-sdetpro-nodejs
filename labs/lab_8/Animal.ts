export default class Animal{
    protected name: string = "";
    protected speed: number = 0;
    
    constructor(maxSpeed: number){
        this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }

    public getName(){
        return this.name;
    }

    public getSpeed(){
        return this.speed;
    }

    public setName(name: string){
        this.name = name;
    }

    public setSpeed(speed: number){
        this.speed = speed;
    }
}