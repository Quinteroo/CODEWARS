//? https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

//! Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 


function squareSum(numbers) {
  let squareSum = 0

  for (let i = 0; i < numbers.length; i++) {
    const e = Math.pow(numbers[i], 2)

    squareSum = squareSum + e
  }
  return squareSum
}