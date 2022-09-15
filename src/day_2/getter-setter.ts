class EmpDetails {
  private _empId!: number;

  public set empId(empId: number) {
    this._empId = empId;
  }

  public get empId() {
    return this._empId;
  }
}
const empDetails: EmpDetails = new EmpDetails();
// You dont have to use the method here, just assign and retrieve the value
empDetails.empId = 200;
console.log(empDetails.empId); // 20
