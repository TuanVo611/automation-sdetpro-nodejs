import QuackBehaviour from "./QuackBehaviour";

export default class Squeak implements QuackBehaviour {

    quack(): void {
        console.log("Squeak!")
    }
    
}