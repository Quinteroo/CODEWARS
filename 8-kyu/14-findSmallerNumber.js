



//!encuentra el valor más pequeño
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/class


function findSmallerNumber(param) {
  let smallerNumber = param[0];
  for (let i = 1; i < param.length; i++) {
    if (param[i] < smallerNumber) {
      smallerNumber = param[i];
    }
  }
  return smallerNumber;
}




//? RESOLUCIÓN CODEWARS 1
class SmallestIntegerFinder {          //! explorar opciones de MATH
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


//? RESOLUCIÓN CODEWARS 2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallerNumber = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < smallerNumber) {
        smallerNumber = args[i];
      }
    }
    return smallerNumber;
  }
}





//? PRUEBAS
function findSmallerNumber(param) {
  let smallerNumber = param[0];
  for (let i = 0; i < param.length; i++) {
    for (let j = 1; j < param.lenght; j++) {
      if (param[j] < param[i]) {
        smallerNumber = param[j];
        j--;
      }
    }
  }
}