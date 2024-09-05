//? https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript


//! Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing
// letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the 
// array will always be at least 2.
// The array will always contain letters in only one case.

Example:

['a', 'b', 'c', 'd', 'f'] - 'e'
['O', 'Q', 'R', 'S'] - 'P'



function findMissingLetter(arr) {
  let n = arr.length

  let arrLowerCase = arr.map((e) => e.toLowerCase())

  let alpha = "abcdefghijklmnopqrstuvwxyz".split("")

  let index = alpha.indexOf(arrLowerCase[0]) + 1

  let arr2 = alpha.splice(index, n)
  console.log(arr2);


  let arr3 = arr2.filter(e => arrLowerCase.indexOf(e) > -1 ? false : true);

  return (arr[0] === arr[0].toUpperCase()) ? arr3[0].toUpperCase() : arr3[0]

}

Desglose:
arr2.filter(e => ...):

filter() es un método que crea un nuevo array con todos los elementos que pasen una determinada condición (retornando true).
En este caso, se está filtrando cada elemento e de arr2.
arrLowerCase.indexOf(e) > -1:

indexOf(e) busca el índice de e en el array arrLowerCase.
Si el elemento e está presente en arrLowerCase, indexOf devolverá su índice (un valor mayor o igual a 0).
Si e no está presente, devolverá -1.
> -1 ? false : true:

Condición ternaria: Esta expresión verifica si el elemento e está presente en arrLowerCase.
Si arrLowerCase.indexOf(e) > -1 es verdadero (es decir, e está en arrLowerCase), la condición devuelve false, lo que significa que el elemento no será incluido en arr3.
Si arrLowerCase.indexOf(e) === -1 (es decir, e no está en arrLowerCase), devuelve true, lo que significa que el elemento sí será incluido en arr3.


  
//! OTRO EJEMPLO, MUY INTELIGENTE PONER EL DOBLE ALFABETO
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};
