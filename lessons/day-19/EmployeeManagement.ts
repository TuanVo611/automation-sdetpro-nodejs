import FTE from "./FTE";
import PTE from "./PTE";
import { SalaryController } from "./SalaryController";

// Construct Data 
const employee1 = new FTE(2000);
console.log(employee1.getName());
employee1.setWorkingDays(250);
employee1.setBonus(300);
console.log(employee1.getBonus());
console.log(employee1.getWorkingDays());
const employee2 = new PTE(3000);
console.log(employee2.getName());
console.log(employee2.getBonus());


// Construct Employee Controller
const salaryController = new SalaryController();

//Use controller to process data -> ouput
const totalSalary = salaryController.getTotalSalary([employee1, employee2]);
console.log(totalSalary);

