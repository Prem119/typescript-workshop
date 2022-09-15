class Person<T> {
  name!: T;
  age!: T;
  constructor(name: T, age: T) {
    this.name = name;
    this.age = age;
  }
  getName(): T {
    return this.name;
  }
  getAge(): T {
    return this.age;
  }
}
const person = new Person<String>('Bill Gates', '55');
console.log(person.getAge());

export {};
