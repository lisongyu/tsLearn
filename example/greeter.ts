

interface Person {
  firstName: string,
  lastName:string
}

function greeter(person: Person) {
  return 'Hello' + person.firstName+' '+person.lastName
}


console.log(greeter({
  firstName: '丽丽',
  lastName:'小可爱'
  
}))

let list:number[]=[1,2,3]