import House from "./HouseWithBuilderDesignPattern";

let builder = new House.Builder();
builder.setTopRoofColor("Red");
builder.setWindowNumber(4);
builder.setColor("Blue");
builder.setMainDoorNumber(1);
let myHouse : House = builder.build();
console.log((myHouse));
