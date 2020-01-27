class Animal{
  name: string
  constructor(name: string) {
    this.name=name
  }
  move(distance: number = 0) {
    console.log(`${this.name} noved ${distance}`)
  }
}


class Rhino extends Animal{
  constructor() {
    super('Rhino')
  }
 
}

class Employee{
  private name: string
  constructor(name: string) {
    this.name=name
  }
}

let animal = new Animal('Goot')
let rhino = new Rhino()
let employee = new Employee('Bob')

animal = rhino
animal=employee

