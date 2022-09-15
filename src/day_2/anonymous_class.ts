// const Person = class {
//   firstName: string;
//   lastName: string;
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// };

// const person = new Person('Bill', 'Gates');
// console.log(`${person.firstName} ${person.lastName}`);
// Person.name; // Person

// pass a class to a function.

const Person = class {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

function displayName(person: typeof Person) {
  const obj = new person('Steve', 'Jobs');
  console.log(obj.firstName);
}

const person = new Person('Bill', 'Gates');
console.log(`${person.firstName} ${person.lastName}`);
displayName(
  class {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
);
Person.name; // Person

// The error "Cannot redeclare block-scoped variable" occurs when we redeclare a variable in the same block
// A module is a file that contains at least 1 import or export statement.
export {};
