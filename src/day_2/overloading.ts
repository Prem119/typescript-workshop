function add(a: string, b: string): string;
function add(a: number, b: number): number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function add(a: any, b: any): string | number {
  return a + b;
}
console.log(add('Hello ', 'Steve')); // returns "Hello Steve"
console.log(add(10, 20)); // returns 30
