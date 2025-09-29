// READ-ONLY
// WRITE-ONLY
// -> BUILDER DESIGN PATTERN
// Contract --> Sign: Immutable: WRITE-ONLY
// Builder: READ-ONLY

export default class HouseWithBuilder {
    private topRoofColor: string = "";
    private windowNumber: number = 1;
    private color: string = "";
    private mainDoorNumber: number = 4;
}