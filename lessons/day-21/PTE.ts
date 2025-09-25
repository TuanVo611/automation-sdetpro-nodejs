import Employee from "./Employee";

export default class PTE extends Employee {

    constructor(salary: number, workingDays: number) {
        super(salary, workingDays);
        this.name = "PTE";
    }

}