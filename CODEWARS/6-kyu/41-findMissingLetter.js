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


//! OTRO EJEMPLO, MUY INTELIGENTE PONER EL DOBLE ALFABETO
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};