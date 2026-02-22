// inheritance in TypeScript (Multilevel)

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayName(): void {
        console.log("Name: " + this.name);
    }
}

class Employee extends Person {
    empId: number;

    constructor(name: string, empId: number) {
        super(name);
        this.empId = empId;
    }

    displayEmpId(): void {
        console.log("Employee ID: " + this.empId);
    }
}

class Manager extends Employee {
    department: string;

    constructor(name: string, empId: number, department: string) {
        super(name, empId);
        this.department = department;
    }

    displayDepartment(): void {
        console.log("Department: " + this.department);
    }
}

let m = new Manager("Aditya Patil",36,"Informatin Technology");

m.displayName();        // From Person
m.displayEmpId();       // From Employee
m.displayDepartment();  // From Manager