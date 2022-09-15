class Person {
  // definite assignment assertion operator, !:
  firstName!: string;
  lastName!: string;
  fullName!: string;
  getFullName(): string {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this.fullName;
  }
}
const person = new Person();
person.firstName = 'Bill';
person.lastName = 'Gates';
console.log(person.getFullName());
