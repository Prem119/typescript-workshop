// Create an Employee class with the following variables and type annotation.
// name, empId, designation and initialize these variables through constructor.
// Create method called getEmpDetails() and return employee info as a string in the following format “name :: empid :: designation”
// Create object to the EmployeeDetails class and print the getEmpDetails method response.

class Employee {
  private _name!: string;
  empId!: number;
  designation: string;

  constructor(empId: number, designation: string) {
    this.empId = empId;
    this.designation = designation;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  getEmployeeDetails(): string {
    return `${this.name} :: ${this.empId} :: ${this.designation}`;
  }
}

const emp = new Employee(1000, 'Developer');
console.log(emp.getEmployeeDetails());
emp.name = 'gopi';
console.log(emp.getEmployeeDetails());
