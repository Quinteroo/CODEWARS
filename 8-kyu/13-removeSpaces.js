

//! REPLACE




// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

//? https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript

function noSpace(x) {
  x = x.replace(/\s/g, '');
  return x;
}




//? PRUEBAS

let newWord;

function noSpace(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== ' ') {
      newWord += x[i];
    }
  }
  return newWord;
}


str = str.replace(/\s/g, '');