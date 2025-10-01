// READ-ONLY
// WRITE-ONLY
// -> BUILDER DESIGN PATTERN
// Contract --> Sign: Immutable: WRITE-ONLY
// Builder: READ-ONLY

import { main } from "appium";

export default class HouseWithBuilder {
    private topRoofColor: string = "";
    private windowNumber: number = 1;
    private color: string = "";
    private mainDoorNumber: number = 4;

    private constructor() { }

    // READ ONLY
    getTopRoofColor() {
        return this.topRoofColor;
    }

    getWindowNumber() {
        return this.windowNumber;
    }

    getColor() {
        return this.color;
    }

    getMainDoorNumber() {
        return this.mainDoorNumber;
    }

    // Inner class - WRITE ONLY
    public static Builder = class {
        private house: HouseWithBuilder = new HouseWithBuilder();

        public setTopRoofColor(topRoofColor: string) {
            this.house.topRoofColor = topRoofColor;
        }

        public setWindowNumber(windowNumber: number) {
            this.house.windowNumber = windowNumber;
        }

        public setColor(color: string) {
            this.house.color = color;
        }

        public setMainDoorNumber(mainDoorNumber: number) {
            this.house.mainDoorNumber = mainDoorNumber;
        }

        //Sign the contract:
        public build(): HouseWithBuilder {
            return this.house;
        }
    }
}