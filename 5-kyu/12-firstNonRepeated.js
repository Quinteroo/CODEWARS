//! https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that 
// is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, 
// and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return 
// the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle 
// any Unicode character.


function firstNonRepeatingLetter(s) {
  const sLowerCase = s.toLowerCase();

  // Objeto para contar las ocurrencias de cada carácter
  const repetidos = {};

  // Iterar sobre cada carácter y contar sus ocurrencias
  for (let e of sLowerCase) {
    repetidos[e] = (repetidos[e] || 0) + 1;
  }

  // Buscar el primer carácter que aparece solo una vez
  for (let e of s) {
    if (repetidos[e.toLowerCase()] === 1) {
      // Devolver el carácter en la capitalización correcta
      return e;
    }
  }

  // Si todos los caracteres se repiten, devolver una cadena vacía
  return "";
}


//!PRUEBAS
function firstNonRepeatingLetter(s) {
  // Add your code here
  if (s === "") {
    return s
  }


  const sSplit = s.split("")
  const sArray = s.toLowerCase().split("")

  let repetidos = {}
  sArray.forEach((e) => {
    repetidos[e] = (repetidos[e] || 0) + 1
  })

  let count = 100
  let firstNonRepeat

  for (const key in repetidos) {
    if (repetidos[key] < count) {
      count = repetidos[key]
      firstNonRepeat = key
    }
  }

  return sSplit.find((e) => e == firstNonRepeat || e == firstNonRepeat.toUpperCase())
}