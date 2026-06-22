import Employee from "./Employee";

export class SalaryController {
    public getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary += this.calculateSalary(employee);
        }
        return totalSalary;
    }

    private calculateSalary(employee: Employee): number {
        return employee.getSalary() * 1.1 + employee.getBonus() * 0.9;
    }
}