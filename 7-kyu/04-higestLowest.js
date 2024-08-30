


// In this little assignment
// you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.






//! al poner .split(' ') con un espacio en medio, respeta las parejas de caracteres
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
// (12) ['8', '3', '-5', '42', '-1', '0', '0', '-9', '4', '7', '4', '-4']

function highAndLow(str) {
  const splitStr = str.split(' ');
  return splitStr;
}


//! si lo ponemos sin espacio .split('') trocea y separa por parámetro
// (28) ['8', ' ', '3', ' ', '-', '5', ' ', '4', '2', ' ', '-', '1', ' ', '0', ' ', '0', ' ', '-', '9', ' ', '4', ' ', '7', ' ', '4', ' ', '-', '4']


//! el objeto Math.max es capaz de leer un array de string(de números) e interpretarlos como números y hacer el cálculo
//? https://stackoverflow.com/questions/46221970/need-help-on-highest-and-lowest-codewars/71490865#71490865?newreg=d2ed5a2db6694592ae8b29a9d62c12c5
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
// '42 -9'

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max(...numbers) + " " + Math.min(...numbers);
}






function highAndLow(str) {
  const arrayStr = [];
  const strNoSpace = str.replaceAll(' ', '');
  const splitStr = strNoSpace.split('');
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === '-') {
      arrayStr.push(splitStr[i].concat(splitStr[i + 1]))
      splitStr.splice(splitStr[i], 1);
    } else {
      arrayStr.push(splitStr[i])
    }
  }
  const arrayNums = arrayStr.map(Number);
  const highestNum = Math.max(...arrayNums);
  const lowestNum = Math.min(...arrayNums);
  return `${highestNum} ${lowestNum}`;
}


//!esta función está bien esi losnúmeros son de una sola cifra y en positivo
function highAndLow(str) {
  const strNoSpace = str.replaceAll(' ', '');
  const splitStr = strNoSpace.split('');
  const nums = splitStr.map(Number);                //! .map(Number) para convertir str a number
  const highestNum = Math.max(...nums);             //! importante poner puntos suspensivos para que funcione
  const lowestNum = Math.min(...nums);
  return `${highestNum} ${lowestNum}`;
}





