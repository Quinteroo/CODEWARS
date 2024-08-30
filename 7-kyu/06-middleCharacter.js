


// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000
// In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).
// You do not need to test for this.
// This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.



//! con esta función obtenemos la L
// esto es debido a que s.length de hola es 4, pero la posición al empezar por 0 4/2 corresponde a la 3ra posición
function getMiddle(s) {
  const splitArray = s.split('');
  return splitArray[s.length / 2];
}
// getMiddle('hola')
// 'l'



//! con esta función obtenemos los dos carácteres del medio de palabras con una longitud par
function getMiddle(s) {
  const splitArray = s.split('');
  return `${splitArray[(s.length / 2) - 1]}${splitArray[s.length / 2]}`;
}
// getMiddle('hola')
// 'ol'


//! con esta otra obtenemos la leta de en medio de palabras impares
// cuando dividimos un número impar entre 2 siempre da un resultado con decimales .5, sumando otro 0.5 llegamos justo al valor
// de en medio

function getMiddle(s) {
  const splitArray = s.split('');
  return splitArray[(s.length / 2) + 0.5];
}



//! tenemos que poner el condicional que devuelva una respuesta u otra en función de si la longitud es par o impar

function getMiddle(s) {
  const splitArray = s.split('');
  if (s.length % 2 === 0) {
    return `${splitArray[(s.length / 2) - 1]}${splitArray[s.length / 2]}`;
  } else {
    return splitArray[((s.length / 2) - 1) + 0.5];
  }
}


//? otra solución de codewars

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}