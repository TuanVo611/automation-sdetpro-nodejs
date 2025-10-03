import Employee from "./Employee";

export default class CTE extends Employee {

    public setName(): void {
        return;
    }
    public getName(): string {
        return this.name;
    }
    public setSalary(): void {
        this.salary = 40000;
    }
    public getSalary(): number {
        return this.salary;
    }
    
}