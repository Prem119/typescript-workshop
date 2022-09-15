class Person {
  firstName: string;
  lastName: string;
  age!: number;
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  rollNumber!: number;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    rollNumber: number
  ) {
    super(firstName, lastName, age);
    this.rollNumber = rollNumber;
  }

  showStudentDetails() {
    console.log(`${this.getFullName()} ${this.age} ${this.rollNumber}`);
  }
}

class Employee extends Person {
  empId!: number;
  constructor(firstName: string, lastName: string, age: number, empId: number) {
    super(firstName, lastName, age);
    this.empId = empId;
  }

  showEmployeeDetails() {
    console.log(`${this.getFullName()} ${this.age} ${this.empId}`);
  }
}

const student = new Student('Kishan', 'Gopi', 9, 47777);
const employee = new Employee('Bill', 'Gates', 55, 22222);

student.showStudentDetails();
employee.showEmployeeDetails();

export {};
