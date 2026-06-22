// user-defined data
// focus into properties: salary

export default class Employee {
    private salary: number;
    protected name: string = "Employee";
    protected bonus: number = 0;
    protected workingDays: number = 0;

    constructor(salary: number) {
        this.salary = salary;
    }

    public setSalary(salary: number): void {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.salary = salary;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    protected setBonus(amount: number) {
        this.bonus = amount;
    }

    public getBonus(): number {
        return this.bonus;
    }

    public getSalary(): number {
        return this.salary + this.bonus;
    }

    public setWorkingDays(workingDays: number): void {
        this.workingDays = workingDays;
    }

    public getWorkingDays(): number {
        return this.workingDays;
    }
}

