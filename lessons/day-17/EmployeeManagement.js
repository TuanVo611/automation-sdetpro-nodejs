const Employee = require("./EmployeeModel");
const SalaryController = require("./SalaryController");

// Construct Data 
const employee1 = new Employee
const employee2 = new Employee
employee1._salary = 1000
employee2._salary = 2000



// Construct Employee Controller
const salaryController = new SalaryController();

//Use controller to process data -> ouput
const totalSalary = salaryController.getTotalSalary([employee1, employee2]);
console.log(totalSalary);
