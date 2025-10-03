import Employee from "./Employee";

export class EmployeeController {

    public getTotalSalary(employeeList: Employee[]) {
        let totalSalary = 0
        for (const employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }

    public sortByName(employeeList: Employee[], rule: string) {
        const copied = [...employeeList];
        if (rule === "ASC") {
            return copied.sort(function (a, b) {
                return a.getName().localeCompare(b.getName());
            })
        } else if (rule === "DESC") {
            return copied.sort(function (a, b) {
                return a.getName().localeCompare(b.getName());
            })
        } else {
            this.printInvalidRule();
        }
        return copied;
    }

    public sortBySalary(employeeList: Employee[], rule: string) {
        const copied = [...employeeList];
        if (rule === "ASC") {
            return copied.sort(function (a, b) {
                return a.getSalary() - b.getSalary();
            })
        } else if (rule === "DESC") {
            return copied.sort(function (a, b) {
                return b.getSalary() - a.getSalary();
            })
        } else {
            this.printInvalidRule();
        }
        return copied;
    }

    private printInvalidRule() {
        console.log(`Invalid Rule!`)
    }
}