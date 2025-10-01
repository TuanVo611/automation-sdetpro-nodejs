import Employee from "./Employee";

export class EmployeeController {

    public getTotalSalary(employeeList: Employee[]) {
        let totalSalary = 0
        for (const employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }

    public sortSalaryASC(salary1: number, salary2: number) {
        return salary1 - salary2;
    }
}