


// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order 
// while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {        // con los dos for vamos comparando los valores del array
    for (let j = i + 1; j < array.length; j++) {

      let aux = array[i];

      if (array[i] % 2 !== 0 && array[j] % 2 !== 0 && array[i] > array[j]) {   // expresamos la condición del ejercicio

        array[i] = array[j];            // nos apoyamos de una variable auxililar y cambiamos posiciones
        array[j] = aux;
      }
    }
  }
  return array;
}



