interface LabelledValue{
  label:string
}

function printlabel(LabelledObj: LabelledValue) {
  console.log(LabelledObj.label)
}

let myObj = { size: 10, label: 'size 10 Object' }

printlabel(myObj)