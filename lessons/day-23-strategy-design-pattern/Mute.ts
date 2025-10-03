import QuackBehaviour from "./QuackBehaviour";

export default class Mute implements QuackBehaviour {

    quack(): void {
        console.log("Mute!")
    }
    
}