export default abstract class Employee {
    protected name: string = "";
    protected salary: number = 0;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    public abstract setName(): void;
    public abstract getName(): string;
    public abstract setSalary(): void;
    public abstract getSalary(): number;
}