


// Given an array of integers.

// Return an array, 
// where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 
// 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//? https://stackoverflow.com/questions/42190533/codewars-challenge-count-of-positives-sum-of-negatives




//! solución codewars
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  // initialize positive number variable
  let negativeNums = 0;
  // initialize negative number variable

  if (input === null || input.length === 0) {    //! hay que estar atento a todo el enunciado del ejercicio
    return []; // if the input is empty or null, it will return empty array
  } else {
    input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
  }
  return [positiveNums, negativeNums];
}





//? PRUEBAS

function countPositivesSumNegatives(input) {
  let countPositives = 0;
  let sumNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else if (input[i] < 0) {
      sumNegatives -= input[i];
    }
  }
  return [countPositives, sumNegatives];
}




function countPositivesSumNegatives(input) {
  let countPositives = 0;
  let sumNegatives = 0;
  let finalCount = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else if (input[i] < 0) {
      sumNegatives -= input[i];
    }
  }
  finalCount.push(countPositives);
  finalCount.push(sumNegatives)
  return finalCount;
}