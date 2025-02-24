//? https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript


//! 7 kyu - Numbers to Letters
// Given an array of numbers (in string format), you must return a string.
// The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc.
// You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x) {
  const revAlph = "abcdefghijklmnopqrstuvwxyz!? ".split("").reverse()
  let word = []

  for (let i = 0; i < x.length; i++) {
    let letter = revAlph[Number(x[i]) + 2]
    word.push(letter)
  }
  return word.join("")
}

function switcher(x) {

  // ['24', '12', '23', '22', '4', '26', '9', '8']


  const revAlph = "abcdefghijklmnopqrstuvwxyz!? ".split("").reverse()

  let word = []

  for (let i = 0; i < x.length; i++) {
    let e = Number(x[i]);
    let j = e + 2;

    let letter = revAlph[j]

    word.push(letter)

  }



  return word.join("")

}

function switcher(x) {

  const revAlph = "abcdefghijklmnopqrstuvwxyz!? ".split("").reverse()

  let word = []

  for (let i = 0; i < x.length; i++) {

    //todo hay que modificar previamente el valor del indicie y sumarle + 2 en vez de hacerlo i + 2

    let letter = revAlph[Number(x[i])]

    word.push(letter)

  }


  return word.join("")

}