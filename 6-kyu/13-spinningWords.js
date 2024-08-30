//! https://www.codewars.com/kata/5264d2b162488dc400000001


// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all words that have five or more letters reversed 
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


function spinWords(s) {
  let a = s.split(' ')
  for (let i = 0; i < a.length; i++) {
    if (a[i].length >= 5) {
      let b = a[i].split('').reverse().join('')
      let aux = b;
      b = a[i];
      a[i] = aux;
    }
  }
  return a.join(' ')
}