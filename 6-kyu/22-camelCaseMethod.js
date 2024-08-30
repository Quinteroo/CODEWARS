//! https://www.codewars.com/kata/587731fda577b3d1b0001196



// Write a method (or function, depending on the language) that converts a string to camelCase, 
// that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)


String.prototype.camelCase = function () {

  return this.split(' ').map(c => (c.charAt(0).toUpperCase() + c.slice(1))).join('')
}


