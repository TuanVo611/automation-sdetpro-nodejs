import FlyBehavior from "./FlyBehavior";
import QuackBehaviour from "./QuackBehaviour";

export default abstract class Duck {

    //Composition | HAS-A Relationship
    protected quackBehaviour: QuackBehaviour;
    protected flyBehaviour: FlyBehavior;

    constructor(quackBehaviour: QuackBehaviour, flyBehaviour: FlyBehavior) {
        this.quackBehaviour = quackBehaviour;
        this.flyBehaviour = flyBehaviour;
    }

    public performQuack() {
        this.quackBehaviour.quack();
    }

    public performFly() {
        this.flyBehaviour.fly();
    }

    public setQuackBehaviour(quackBehaviour: QuackBehaviour) {
        this.quackBehaviour = quackBehaviour;
    }

    public setFlyBehaviour(flyBehaviour: FlyBehavior) {
        this.flyBehaviour = flyBehaviour;
    }
}