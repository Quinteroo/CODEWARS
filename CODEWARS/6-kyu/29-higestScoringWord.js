//! https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript


// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(string) {

  let finalArray = [];
  let stringArray = string.split(' ')

  for (const text of stringArray) {

    const s = text.split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let x = s.map((letter) => alphabet.indexOf(letter) + 1)
    let z = x.reduce((a, b) => a + b, 0)
    // console.log(x);
    // console.log(z);

    finalArray.push(z)
  }
  return stringArray.find((e) => stringArray.indexOf(e) === finalArray.indexOf(Math.max(...finalArray)))
}