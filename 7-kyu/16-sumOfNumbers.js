


// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)




function getSum(a, b) {
  //Good luck!
}

//! no podemos utilizar sort directamente con dos parámetros
function getSum(a, b) {
  let numbers = (a, b).sort(function (a, b) { return a - b; });
  return numbers;
};


//! tenemos que meter los parámetros dentro de una variable
function getSum(a, b) {
  let numbers = [a, b];
  numbers = numbers.sort(function (a, b) { return a - b; });
  return numbers;
};


//! tenemos que crear un nuevo array en el que vayamos introduciendo los valores
function getSum(a, b) {
  let numbers = [a, b];
  let sumArray = [];

  numbers = numbers.sort(function (a, b) { return a - b; });

  let lowNum = numbers[0]                                   // indicamos el menor
  let highNum = numbers[numbers.length - 1]                   // indicamos el mayor

  while (lowNum < highNum + 1) {                            // iteramos con un bucle para ir metiendo uno a uno
    sumArray.push(lowNum)
    lowNum += 1                                               // vamos sumando +1 hasta alcancar el valor del valor mayor
  }
  return sumArray;
};



//! aplicamos el sumatorio del array
function getSum(a, b) {
  let numbers = [a, b];
  let sumArray = [];

  numbers = numbers.sort(function (a, b) { return a - b; });

  let lowNum = numbers[0]
  let highNum = numbers[numbers.length - 1]

  while (lowNum < highNum + 1) {
    sumArray.push(lowNum)
    lowNum += 1
  }
  return sumArray.reduce((a, b) => a + b, 0);    //!
};



//* SOLUCIONES CODEWARS
function GetSum(a, b) {
  var result = 0;
  var bigger = a > b ? a : b;
  var smaller = a > b ? b : a;
  for (var i = smaller; i <= bigger; i++) { result += i }
  return result
}


//* SOLUCIONES CODEWARS
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


//* SOLUCIONES CODEWARS
function GetSum(a, b) {
  return (Math.abs(a - b) + 1) * (a + b) / 2;
}

