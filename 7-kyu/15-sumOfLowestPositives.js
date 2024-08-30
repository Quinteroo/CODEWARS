




// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//?

//! SOLUCION DEV.TO

function sumTwoSmallestNumbers(numbers) {
  let first = Math.min(...numbers)
  numbers.splice(numbers.indexOf(first), 1)
  let second = Math.min(...numbers)
  return first + second
}


//! SOLUCIÓN CODEWARS
// muy buena solución, en este caso a ordenado de menos a mayor los números y ha sumado por posiciones. TOP

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) { return a - b; });
  return numbers[0] + numbers[1];
};





//! PRUEBAS
function sumTwoSmallestNumbers(numbers) {
  const lowestArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (lowestArray.length < 2) {
      lowestArray.push(Math.min(...numbers))
    }
  }
  return lowestArray.reduce((a, b) => a + b, 0)
}



