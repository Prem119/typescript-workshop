let num1: number = 3;
num1 = num1 + 7; // 10
console.log(num1);

// Do not change the type of the assignment value
let employeeId: string | number = 'MF1001';
employeeId = 1001;
console.log(employeeId);

let employee: {
    name: string,
    id: number 
};
employee = {
    name: 'John',
    id: 123
};

// Create a employee object type array and push employee data to the array
type employeeType = {
    name: string,
    id: number 
};

let employeeList: [employeeType] = [{
    name: 'Some name',
    id: 1
}];


let zemployeeList: {
    name: string,
    id: number 
}[] = [];



employeeList.push({
    name: 'Prem',
    id: 101
})

// Print the type of the employeeList object
console.log(typeof(employeeList));
