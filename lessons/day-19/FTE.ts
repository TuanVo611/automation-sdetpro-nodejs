import Employee from "./Employee";

//IS-A relationship between Employee and FTE
export default class FTE extends Employee {

    constructor(salary: number) {
        super(salary);
        this.name = "FTE";
    }

    public setBonus(factor: number) {
        this.bonus = factor * this.workingDays / (365 - 52);
    }
}