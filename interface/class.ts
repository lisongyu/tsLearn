interface ClockInterface{
  tick()
}

interface ClockConstructor{
  new(hour:number,minute:number):ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface{
  return new ctor(hour,minute)
}


class DigitalClock implements ClockInterface{
  constructor(h: number, m: number) {
    
  }
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface{
  constructor(h: number, m: number) {
    
  }
  tick() {
    console.log('tick toc')
  }
}

let digital = createClock(DigitalClock, hour: 12, minute: 17)
let analog= createClock(AnalogClock, hour: 12, minute: 17)