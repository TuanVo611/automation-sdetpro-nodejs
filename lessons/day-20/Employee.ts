// user-defined data
// focus into properties: salary

export default class Employee{
    protected name: string = "Employee";
    protected salary: number;
    protected bonus: number = 0;
    protected workingdays = 0;

    constructor(salary : number){
        this.salary = salary;
    }

    public getSalary(){
        return this.salary;
    }

    public getName(){
        return this.name;
    }

    public getBonus(){
        return this.bonus;
    }

    public getWorkingDays(){
        return this.workingdays;
    }

    public setWorkingDays(workingDays: number){
        this.workingdays = workingDays;
    }

    protected setBonus(amount: number): void{
        this.bonus = amount;
    }
}