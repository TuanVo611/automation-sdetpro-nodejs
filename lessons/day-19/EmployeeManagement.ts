import Employee from "./Employee";
import { SalaryController } from "./SalaryController";

// Construct Data 
const employee1 = new Employee(1000);
const employee2 = new Employee(2000);

// Construct Employee Controller
const salaryController = new SalaryController();

//Use controller to process data -> ouput
const totalSalary = salaryController.getTotalSalary([employee1, employee2]);
console.log(totalSalary);