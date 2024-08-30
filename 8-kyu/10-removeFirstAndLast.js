



// It's pretty straightforward.
// Your goal is to create a function
// that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

//? https://www.youtube.com/watch?v=507AEGsKPn4



function removeChar(str) {
  return str.slice(1, -1);
};






//? PRUEBAS

function removeChar(str) {
  let fuera = [];
  if (str.length > 2) {
    fuera = str.pop();
    fuera = str.shift();
  }
  return str;
};


function removeChar(str) {

  str.pop()
  str.shift()
  return str;
};


function removeChar(str) {
  if (str.length > 2) {
    str.splice(0, 1)
    str.splice(str.length - 1);
  }
  return str;
};