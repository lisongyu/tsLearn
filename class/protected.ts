class Person {
  protected name: string //只能在子类使用不能在外部使用
  constructor(name: string) {
    this.name = name
  }
}

class Employee1 extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  getElevator() {
    return `Hello,my name is ${this.name} and I work in ${this.department}`
  }
}

let howard = new Employee1('Howard',  'Sales')

console.log(howard.getElevator())
//console.log(howard.name)