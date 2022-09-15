class Person {
  private age = 20;
  firstName: string;
  lastName: string;
  fullName!: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this.fullName;
  }
}
const person = new Person('Bill', 'Gates');
person.firstName;

export {};
