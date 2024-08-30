

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )




//!  hay un pequeño problema con esta implementación. La función actual solo funciona para letras minúsculas 
//! debido a que el array alphabet está compuesto solo por letras minúsculas.

function alphabetPosition(text) {

  const s = text.split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const x = s.map((letter) => alphabet.indexOf(letter) + 1)

  return x.join(' ');

}



//? versión teniendo en cuenta que son todos minúsculas y que solo revise caracteres que sean string
function alphabetPosition(text) {
  const s = text.toLowerCase().split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const x = s
    .filter(letter => /[a-z]/.test(letter)) // Filtrar solo letras
    .map(letter => alphabet.indexOf(letter) + 1);

  return x.join(' ');
}





