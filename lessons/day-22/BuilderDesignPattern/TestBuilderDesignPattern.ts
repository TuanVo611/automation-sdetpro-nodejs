import House from "./HouseWithBuilderDesignPattern";

let myHouse: House = new House.Builder()
    .setTopRoofColor("Red")
    .setWindowNumber(4)
    .setColor("Blue")
    .setMainDoorNumber(1)
    .build();
console.log((myHouse));
