import BabyDuck from "./BabyDuck";
import Decoy from "./Decoy";
import Duck from "./Duck";
import DuckController from "./DuckController";
import FlyWithWings from "./FlyWithWings";
import MallardDuck from "./MallardDuck";
import Quack from "./Quack";

//Init data from user-defined classed
let decoy: Duck = new Decoy();
let babyDuck: Duck = new BabyDuck();
let mallardDuck: Duck = new MallardDuck();

// Init controller - Functional Programing
let duckController = new DuckController();
duckController.performQuack(decoy);

//Baby duck eats food and becomes a mallard duck
babyDuck.setQuackBehaviour(new Quack());
babyDuck.setFlyBehaviour(new FlyWithWings())
duckController.performQuack(babyDuck);

