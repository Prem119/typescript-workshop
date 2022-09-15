function age<T>(arg: T): T {
  return arg;
}

const strOutput = age<string>('24');
const numOutput = age<number>(24);

console.log(strOutput, numOutput);

// Multiple Types

function displayPerson<T, U>(name: T, age: U): void {
  console.log(typeof name + ', ' + typeof age);
}
displayPerson<string, number>('Steve', 24); // "string, number"
displayPerson<string, string>('Steve', '24'); // "string, string"

export {};
