import Employee from "./Employee";

// Extends: IS-A Relationship
// Inheritance -> Design Concept and Reuse Concept
export default class FTE extends Employee {

    constructor(salary: number, workingDays: number) {
        super(salary, workingDays);
        this.name = "FTE";
    }

    public override setBonus(maxBonus: number) {
        this.bonus = maxBonus * this.workingdays / (365 - 52);
    }
}

/**
 * 
 * 
 * GET POST PUT DELETE PATCH -> Reuse
 * BaseReqHandler / FP
 * GETReqHandler extends BaseReqHandler
 * 
 */