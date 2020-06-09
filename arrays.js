var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var candyString = "foo"

function addElementToBeginningOfArray(name){
  return [name, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(name){
  return chocolateBars.unshift('name')
}



