interface Counter{
  (start: number): string,
  interval: number
  reset():void
}

function getCounter():Counter {
  let counter = (function (star: number) {
    
  }) as Counter
  counter.interval = 123
  counter.reset = function () {
    
  }
  return counter
}

let c = getCounter()
c(10)