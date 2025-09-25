// user-defined data
// focus into properties: salary

export default class Employee {
    protected name: string = "Employee";
    protected salary: number;
    protected bonus: number;
    protected workingdays;

    constructor(salary: number, workingDays: number) {
        this.salary = salary;
        this.bonus = 0;
        this.workingdays = workingDays;
    }

    public getSalary() {
        return this.salary;
    }

    public getName() {
        return this.name;
    }

    public getBonus() {
        return this.bonus;
    }

    public getWorkingDays() {
        return this.workingdays;
    }

    public setWorkingDays(workingdays: number) {
        this.workingdays = workingdays;
    }

    protected setBonus(bonus: number) {
        this.bonus = bonus;
    }
}