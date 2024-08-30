//! https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript


// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

// If such letters are two or more, choose the one that appears in the string( earlier.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'

function replaceCommon(string, letter) {
  // good luck

  let str = string.replace(/\s/g, '')
  let strSplited = str.split("")

  let repetidos = {}
  strSplited.forEach(function (e) {
    repetidos[e] = (repetidos[e] || 0) + 1
  })


  let count = 0
  let mostRepited

  for (const key in repetidos) {
    if (repetidos[key] > count) {
      count = repetidos[key]
      mostRepited = key
    }
  }

  return string.replaceAll(mostRepited, letter)
}