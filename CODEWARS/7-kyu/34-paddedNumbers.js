//? https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript


//! Substituting Variables Into Strings: Padded Numbers
// Complete the solution so that it returns a formatted string. 
// The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

solution(5); // should return "Value is 00005"


function solution(value) {

  let number = []
  let i = 5;

  while (i > value.toString().length) {
    number.push("0")
    i--
  }
  return `Value is ${number.join("")}${value}`
}

//! REFACTOR
function solution(value) {
  return "Value is " + ("00000" + value).slice(-5);
}