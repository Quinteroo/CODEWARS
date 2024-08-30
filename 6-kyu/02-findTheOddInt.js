

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//   Examples
// [7] should return 7, because it occurs 1 time(which is odd).
// [0] should return 0, because it occurs 1 time(which is odd).
// [1, 1, 2] should return 2, because it occurs 1 time(which is odd).
// [0, 1, 0, 1, 0] should return 0, because it occurs 3 times(which is odd).
// [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it appears 1 time(which is odd).



const countNumbers = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

function findOdd(A) {
  let repetidos = {};

  A.forEach(function (number) {   // con el forEach recorremos el array y creamos el objeto repetidos que nos devuleve clave:valor
    repetidos[number] = (repetidos[number] || 0) + 1;
  });

  let oddNumb;

  for (const key in repetidos) {     //forIn para recorrer las claves del objeto
    if (repetidos[key] % 2 !== 0) {  // clave[valor] para acceder al valor y poder crear la condición
      oddNumb = key;
    }
  }

  return Number(oddNumb);           //! return solo con funciones, si es un forOf tiene que ser console.log
}