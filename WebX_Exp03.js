// inheritance in TypeScript (Multilevel)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.displayName = function () {
        console.log("Name: " + this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, empId) {
        var _this = _super.call(this, name) || this;
        _this.empId = empId;
        return _this;
    }
    Employee.prototype.displayEmpId = function () {
        console.log("Employee ID: " + this.empId);
    };
    return Employee;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, empId, department) {
        var _this = _super.call(this, name, empId) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.displayDepartment = function () {
        console.log("Department: " + this.department);
    };
    return Manager;
}(Employee));
var m = new Manager("Aditya Patil", 36, "Informatin Technology");
m.displayName(); // From Person
m.displayEmpId(); // From Employee
m.displayDepartment(); // From Manager
