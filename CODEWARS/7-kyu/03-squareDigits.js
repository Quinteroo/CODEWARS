

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!




function squareDigits(num) {
  let numToString = num.toString();
  let splitString = numToString.split('');             //! ve pasando por consola la evolución del código y observa los errores
  let newArray = [];
  for (let i = 0; i < splitString.length; i++) {
    newArray.push(Number.parseInt(splitString[i]));    //! Number (con N) es un objeto propio de javascript al que podemos acceder
  }
  return newArray;
}



//? MI SOLUCIÓN

function squareDigits(num) {
  const squareArray = []
  const newArray = String(num).split('').map(Number);  //! el código mucho más pulido
  for (let i = 0; i < newArray.length; i++) {
    squareArray.push(Math.pow(newArray[i], 2))         //* IMPORTANTE Matn con M
  }
  return Number.parseInt(squareArray.join(''));
}


