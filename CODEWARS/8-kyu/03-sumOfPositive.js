

// You get an array of numbers,
// return the sum of all of the positives ones.

// Example[1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];   //! acostumbrar a meter index en variable
    if (arr[i] > 0) {
      sum += num;
    }
  }
  return sum;            //! importante el return para que nos devuelva la solución
}


