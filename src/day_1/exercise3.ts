const employeeNames = ["Jack", "Mike", "Dave"];
// 1. Use for...of to print the elements of the array.
for (const s of employeeNames) {
    console.log(s);
};

// 2. Create a function with REST parameter and print the parameter values.
function restfunction(a: number, ...b: any) {
    console.log('a: ' + a + 'b:' + b);
    console.log(a + b);
};

restfunction(1, 2, 3);

// 3. Create a new array using spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];
const newArray = [...array1, ...array2];
console.log(newArray);
console.log(newArray[4]);

// 4. Unpack the employeeNames array values and store in variables.
const [x, y, z] = employeeNames;
console.log(x + y + z);

// 5. Join the employeeArray value strings using template literals.
// Do not use + to join strings as shown below.
// console.log('Employees: ' + employeeNames[0] + ", " + employeeNames[1] + ", " + employeeNames[2]);
console.log(`Employees: ${employeeNames[0].toUpperCase()}, ${employeeNames[1] === '1'}, ${employeeNames[2]}`);

// 6. Create a arrow function that returns the emmployee name by taking the index as input.
// Uncomment and complete the code
const getEmployee = (index: number): string => {
    const emp = 'Hello' +employeeNames[index];
    return emp;
};
const empName = getEmployee(1);
console.log(empName);

// Custom Types
type colorId = 'red' | 'green' | 'blue';
const redColour: colorId = 'red';
const yellowColour: colorId = 'yellow';
if (redColour === 'RED') { } // error
