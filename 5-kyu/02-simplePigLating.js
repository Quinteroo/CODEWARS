//! https://www.codewars.com/kata/520b9d2ad5c005041100000f




// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str) {
  let arr = str.split(' ')
  let word;
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '!' || arr[i] === '?') {
      newArray.push(arr[i])
    } else {
      word = arr[i].split('')
      let firstLetter = word.splice(0, 1)
      let restLetter = word.splice(0, word.length)
      let latinPig = restLetter.concat(firstLetter).join('') + 'ay'
      newArray.push(latinPig)
    }
  }
  return newArray.join(' ')
}


//! OTRAS SOLUCIONES

function pigIt(str) {
  return str.split(" ").map((item) => `${item.substr(1)}${item[0]}ay`).join(" ")
}


function pigIt(str) {
  return str
    .split(' ')
    .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word)
    .join(' ')
}