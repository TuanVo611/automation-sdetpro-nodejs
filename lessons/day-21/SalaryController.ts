import Employee from "./Employee";


export class SalaryController {

    public getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary = totalSalary + employee.getSalary() + employee.getBonus();
        }
        return totalSalary;
    }
}