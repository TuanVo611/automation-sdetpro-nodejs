import Car from "./Car";
import ElectricEngine from "./ElectricEngine";
import Engine from "./Engine";
import GasEngine from "./GasEngine";

let gasEngine = new GasEngine();
let car = new Car(gasEngine);
car.startCar();

// logic change 
car.changeEngine(new ElectricEngine())
car.startCar()



