import CTE from "./CTE";
import Employee from "./Employee";
import { EmployeeController } from "./EmployeeController";
import FTE from "./FTE";

const CTE1 = new CTE("Contract Employee 1", 40000);
const CTE2 = new CTE("Contract Employee 2", 40000);
const FTE1 = new FTE("Fulltime Employee 1", 50000);
const FTE2 = new FTE("Fulltime Employee 2", 50000);
const FTE3 = new FTE("Fulltime Employee 3", 50000);

const employeeList: Employee[] = [];
employeeList.push(CTE1)
employeeList.push(FTE2)
employeeList.push(CTE2)
employeeList.push(FTE1)
employeeList.push(FTE3)

let salaryController = new EmployeeController();

let totalSalary = salaryController.getTotalSalary(employeeList)
console.log(totalSalary);

console.log(employeeList.sort())
