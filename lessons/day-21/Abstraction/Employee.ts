export default abstract class Employee{
    protected name: string;
    protected salary: number;
    protected bonus: number;
    protected workingDays: number;

    constructor(name: string, salary: number, workingDays: number){
        this.name = name;
        this.salary = salary;
        this.bonus = 0;
        this.workingDays = workingDays;
    }

    protected abstract setBonus(): void;
    public abstract getSalary(): number;
    public abstract getBonus(): number;
}