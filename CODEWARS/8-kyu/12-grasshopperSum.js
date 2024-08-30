

// Write a program
// that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
// Your function only needs to return the result,
// what is shown between parentheses in the example
// below is how you reach that result and it's not part of it,
// see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)



//? INSPIRACIÓN
//? https://www.aprendejavascript.dev/clase/funciones/recursividad




var summation = function (num) {
  let i = [];
  let j;

  while (num > 0) {
    i.push(num);
    num--
  }
  return j = i.reduce((a, b) => a + b, 0);
}



//? PRUEBAS
var summation = function (num) {
  let i = 0;
  while (num > 0) {
    i = i + (1 + i);
    num--;
  }
}



//! OTRA SOLUCIÓN

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

