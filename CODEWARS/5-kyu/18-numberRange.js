//! https://www.codewars.com/kata/5cfe421acb266c00244fd7ea


// Task
// This is harder version of this kata.

// This time we want create arrays filled by numbers from a to b like this arr = [...a[b]]. 
// Where a and b are positive or negative integers.

// Your task is to do something with Number to make it possible.

// In your code you shouldn't do anything else, only modify Number.

// Example
// [...1[1]] => [1]
// [...1[5]] => [1, 2, 3, 4, 5]
// [...5[1]] => [5, 4, 3, 2, 1]
// [...(-5)[5]] => [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
// [...2[-2]] => [2, 1, 0, -1, -2]

//* .match(/-?\d+/g)
// value.match(/-?\d+/g) utiliza una expresión regular para extraer todos los números del valor proporcionado, 
// incluyendo negativos.
// .map(Number) convierte estos valores extraídos en números.
// [val, range] desestructura estos números en dos variables, val y range.


function numberRange(params) {
  const [valueStr, rangeStr] = expression.match(/-?\d+/g);
  const val = parseInt(valueStr, 10);
  const range = parseInt(rangeStr, 10);

  //si no tenemos rango, no podemos contruir el array, así que pasamos el valor inicial
  if (range === undefined) {
    return [val]
  }

  const result = []

  if (range > 0) {
    for (let i = 0; i < range; i++) {
      result.push(val + i)
    }
  } else if (range < 0) {
    for (let i = 0; i < range; i--) {
      result.push(val + i)
    }
  }

  return result
}