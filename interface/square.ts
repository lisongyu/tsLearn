interface Square{
  color: string
  area:number
}

interface SquareConfig{
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): Square{
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color=config.color
  }
  if (config.width) {
    newSquare.area=config.width*config.width
  }

  return new Square
}

let mySquare = createSquare({ color: 'block' });
console.log(mySquare)