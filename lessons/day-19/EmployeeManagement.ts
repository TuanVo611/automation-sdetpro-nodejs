import Employee from "./Employee";
import FTE from "./FTE";
import PTE from "./PTE";
import { SalaryController } from "./SalaryController";


// Construct Data 
const employee1 = new PTE(20000)
console.log(employee1.getName())
const employee2 = new FTE(19000)
console.log(employee2.getName())

// Construct Employee Controller
const salaryController = new SalaryController();

//Use controller to process data -> ouput
const totalSalary = salaryController.getTotalSalary([employee1, employee2]);
console.log(totalSalary);
