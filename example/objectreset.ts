//对象解构
let o = {
  a: 'foo',
  b: 12,
  c:'bar'
}
let { a, ...pass } = o
let total = pass.b + pass.c.length
console.log(total)