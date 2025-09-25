import Employee from "./Employee";

export default class PTE extends Employee {
    protected setBonus(): void {
        this.bonus = 0;
    }
    public getSalary(): number {
        return this.salary;
    }
    public getBonus(): number {
        this.setBonus();
        return this.bonus;
    }

    constructor(name: string, salary: number, workingDays: number) {
        super(name, salary, workingDays);
        this.name = "PTE";
    }
}