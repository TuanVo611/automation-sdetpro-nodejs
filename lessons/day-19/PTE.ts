import Employee from "./Employee";

export default class PTE extends Employee{
    constructor(salary : number){
        super(salary);
        this.name = "PTE";
    }

}