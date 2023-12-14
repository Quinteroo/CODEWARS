

//! Convert number to reversed array of digits
// Given a random non-negative number, 
// you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]



//? https://stackoverflow.com/questions/36250561/convert-number-to-a-reversed-array-of-digits

function digitize(param) {
  return arr = String(param).split("").reverse().map(Number);
}

// String(num) : The String global object acts as a constructor for strings and "converts" the given number into string(in this case)

// The Array.reverse(): method reverses an array in place

// The Array.map(): method creates and returns a new array calling a provided function on every array element




//? PRUEBAS
function digitize(param) {
  let arrayDigits = [];
  for (let i = param.length - 1; i > 0; i--) {   //! no podemos recorrer un número
    arrayDigits.pop(param[i]);
  }
  return arrayDigits;
}