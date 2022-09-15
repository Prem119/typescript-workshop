class Employee {
  private _name!: string;
  private _empId!: number;
  private _designation!: string;

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set empId(empId: number) {
    this._empId = empId;
  }

  public get empId(): number {
    return this._empId;
  }
}

const emp = new Employee();
emp.name = 'Gopi';

export {};
