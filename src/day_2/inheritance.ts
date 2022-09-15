// Base class
class Person {
  Name: string;
  constructor(name: string) {
    this.Name = name;
  }
}
// Deriving Student class
class Student extends Person {
  rollNumber!: number;
  constructor(name: string, rollNumber: number) {
    super(name);
    this.rollNumber = rollNumber;
  }
  display(): void {
    console.log('Name: ' + this.Name);
    console.log('Roll number ' + this.rollNumber);
  }
}
// Create Object
const obj = new Student('Kishan', 97979800);
obj.display();

export {};
