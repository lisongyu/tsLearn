interface Shape{
  color:string
}
interface Square extends Shape{
  sideLength:number
}

let squre = {} as Square
squre.color = 'blue'
squre.sideLength=10