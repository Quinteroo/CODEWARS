


// Task
// Sum all the numbers of a given array ( cq. list ),
// except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge,
// even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array,
// or the given array is an empty list or a list with only 1 element, return 0.

//? https://stackoverflow.com/questions/72995803/sum-without-highest-and-lowest-number?rq=3

function sumArray(array) {

  if (array == null || array.length <= 1) {
    return 0
  }

  var max = Math.max(...array);
  var min = Math.min(...array);
  var sum = 0

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum - max - min
}





//! PRUEBA 2
function sumArray(array) {
  let lowestNumber = math.min(array);
  let highestNumber = math.max(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == lowestNumber || array[i] == highestNumber) {
      array.splice(array[i], 1)
    }
  }
  return array.reduce((a, b) => a + b, 0);
}



//! PRUEBA 1

function sumArray(array) {
  let lowestNumber = math.min(...array);
  let highestNumber = math.max(...array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == lowestNumber || array[i] == highestNumber) {
      array.splice(array[i], 1)
    }
  }
  return array.reduce((a, b) => a + b, 0);
}



function sumArray(array) {
  let lowestNumber = math.min(...array);
  let highestNumber = math.max(...array);

  array.splice(lowestNumber);
  array.splice(highestNumber);

  return array.reduce((a, b) => a + b, 0);
}
