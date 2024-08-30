//! https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript




// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.




function findUniq(array) {
  // Filtramos los elementos del array que son diferentes al primer elemento
  const uniqueElements = array.filter((element) => element !== array[0]);

  // Si la longitud del array de elementos únicos es igual a 1, significa que encontramos el elemento único
  if (uniqueElements.length === 1) {
    return uniqueElements[0];
  } else {
    // Si no, significa que el primer elemento del array es único
    return array[0];
  }
}



//!PRUEBAS
function findUniq(array) {
  let uniq

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i - 1] && array[i] !== array[i + 1]) {
      uniq = array[i]

    }
  }
  return uniq
}

