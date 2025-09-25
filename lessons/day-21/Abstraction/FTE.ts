// Extends: IS-A Relationship

import Employee from "./Employee";
const MAX_BONUS = 1000;

// Inheritance -> Design Concept and Reuse Concept
export default class FTE extends Employee {

    protected setBonus(): void {
        this.bonus = MAX_BONUS * this.workingDays / (365 - 52);
    }

    public getSalary(): number {
        return this.salary;
    }
    public getBonus(): number {
        this.setBonus();
        return this.bonus;
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