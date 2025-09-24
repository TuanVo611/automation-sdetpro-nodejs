import Employee from "./Employee";
import FTE from "./FTE";
import PTE from "./PTE";
import { SalaryController } from "./SalaryController";


// Construct Data 
const MAX_BONUS = 1000
const employee1 = new PTE(20000)
console.log(`Employee1's bonus: ${employee1.getBonus()}`)

const employee2 = new FTE(19000)
employee2.setWorkingDays(250);
employee2.setBonus(MAX_BONUS)
console.log(`Employee2's bonus: ${employee2.getBonus()}`)

// Construct Employee Controller
const salaryController = new SalaryController();

//Use controller to process data -> ouput
const totalSalary = salaryController.getTotalSalary([employee1, employee2]);
console.log(totalSalary);
