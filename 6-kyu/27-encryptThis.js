//! https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript




// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


const encryptThis = text => {
  return text
    .split(' ')
    .map(e => {
      if (e.length === 1) return e.charCodeAt(0);
      if (e.length === 2) return `${e[0].charCodeAt(0)}${e[1]}`;
      if (e.length === 3) return `${e[0].charCodeAt(0)}${e.slice(-1)}${e[1]}`;
      if (e.length > 3) return `${e[0].charCodeAt(0)}${e.slice(-1)}${e.slice(2, -1)}${e[1]}`;
    })
    .join(' ');
};



//! PRUEBA (funciona en Consola)
var encryptThis2 = function (text) {
  // Implement me! :)

  let arrayText = text.split(' ')
  let endArray = []

  for (let i = 0; i < arrayText.length; i++) {
    let newArray = arrayText[i][0].charCodeAt().toString() + arrayText[i].slice(1).split('').reverse().join('')
    endArray.push(newArray)
  }
  return endArray.join(' ')
}

encryptThis("hello world")
'104olle 119dlro'

encryptThis("A wise old owl lived in an oak")
'65 119esi 111dl 111lw 108devi 105n 97n 111ka'


