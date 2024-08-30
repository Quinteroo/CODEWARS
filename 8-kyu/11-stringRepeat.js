

//! REPEAT



// Write a function 
// that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

// 5, "Hello" -> "HelloHelloHelloHelloHello"


//? https://www.aprendejavascript.dev/clase/estructuras-de-control/bucles-con-while
//? https://www.freecodecamp.org/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/


function repeatStr(n, s) {
  let newString = '';
  while (n > 0) {
    newString += s;
    n--
  }
  return newString;
}



//! OTRA SOLUCIÓN

function repeatStr(n, s) {
  return s.repeat(n);
}





