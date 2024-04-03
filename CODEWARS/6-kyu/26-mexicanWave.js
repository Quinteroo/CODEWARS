//! https://www.codewars.com/kata/58f5c63f1e26ecda7e000029


// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules


//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat


// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]



function wave(str) {

  let newArr = []

  for (let i = 0; i < str.length; i++) {
    let strArr = str.split('')
    strArr[i] = strArr[i].toUpperCase()
    newArr.push(strArr.join(''))
  }
  return newArr.filter(e => e !== str);
}



wave('hello')
  (5)['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']

wave('codewars')
  (8)['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS']

wave('two words')
  (8)['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']

