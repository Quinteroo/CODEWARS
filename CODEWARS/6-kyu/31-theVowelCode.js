//! https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript


// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers 
// according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the 
// same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.


//! SOLUCIÓN
let vowels = "aeiou".split('')

function encode(string) {
  // Crear un array de las letras del string
  let strArr = string.split('');

  // Iterar sobre cada letra del string
  for (let i = 0; i < strArr.length; i++) {
    // Si la letra es una vocal en minúscula, reemplazarla por su posición + 1
    if (vowels.includes(strArr[i])) {
      strArr[i] = vowels.indexOf(strArr[i]) + 1;
    }
  }

  // Unir las letras modificadas en un string y retornarlo
  return strArr.join('');
}

function decode(string) {
  // Crear un array de los números y letras del string
  let strArr = string.split('');

  // Iterar sobre cada elemento del array
  for (let i = 0; i < strArr.length; i++) {
    // Si el elemento es un número, reemplazarlo por la vocal correspondiente
    if (!isNaN(strArr[i])) {
      strArr[i] = vowels[strArr[i] - 1];
    }
  }

  // Unir los elementos modificados en un string y retornarlo
  return strArr.join('');
}


//! PRUBEAS
let vowels1 = "aeiou".split('')


function encode(string) {
  let strArr = string.split(' ')
  let newArr = []

  for (const word of strArr) {
    newArr.push(word.split('').map((e) => ((vowels1.includes(e)) ? e = vowels1.indexOf(e) + 1 : e)).join(""))
  }

  return newArr.join(" ")
}



function decode(string) {
  let strArr = string.split(' ')
  let newArr = []

  for (const word of strArr) {
    newArr.push(word.split('').map((e) => (e === vowels1.indexOf(e) + 1) ? e = vowels1[vowels.indexOf(e)] : e).join(""))
  }

  return newArr
}