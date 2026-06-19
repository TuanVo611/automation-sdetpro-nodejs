// user-defined data
// focus into properties: salary

export default class Employee {
    private salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.salary = salary;
    }
}

