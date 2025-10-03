import Employee from "./Employee";

export default class FTE extends Employee {

    public setName(): void {
        return;
    }
    public getName(): string {
        return this.name;
    }
    public setSalary(): void {
        this.salary = 50000;
    }
    public getSalary(): number {
        return this.salary;
    }
}