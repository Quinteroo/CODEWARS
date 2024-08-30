//! https://www.codewars.com/kata/5503013e34137eeeaa001648


// DESCRIPTION:
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James.
// Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
// Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond
// of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  if (n % 2 === 0 || n < 1) {
    return null;
  }

  const diamondArray = [];

  // Mitad superior del diamante
  for (let i = 1; i <= n; i += 2) {
    const spaces = ' '.repeat((n - i) / 2);
    const stars = '*'.repeat(i);
    diamondArray.push(spaces + stars);
  }

  // Mitad inferior del diamante
  for (let i = n - 2; i > 0; i -= 2) {
    const spaces = ' '.repeat((n - i) / 2);
    const stars = '*'.repeat(i);
    diamondArray.push(spaces + stars);
  }

  return diamondArray.join('\n') + '\n';
}


diamond(8)
null
diamond(5)
'  *\n ***\n*****\n ***\n  *\n'



//! PRUEBAS, falle en los espacios en blanco
function diamond(n) {

  let diamondArray = []
  let counter = 0
  let diamond = ''

  while (counter < n) {
    diamond += '*'
    // console.log(diamond);
    if (diamond.length % 2 !== 0) {
      diamondArray.push(diamond)
    }
    counter++
  }

  for (let i = n - 1; i > 0; i--) {
    let subDiamond = '*'.repeat(i)
    if (subDiamond.length % 2 !== 0) {
      diamondArray.push(subDiamond)
    }
  }


  return diamondArray.join('\n ') + '\n'
}

diamond(5)
'*\n***\n*****\n***\n*\n'