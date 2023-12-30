


// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
  const w = str.toLowerCase().split('');
  const xGroup = [];
  const oGroup = [];

  for (let i = 0; i < w.length; i++) {
    if (w[i] === 'x') {
      xGroup.push(w[i])
    } else if (w[i] === 'o') {
      oGroup.push(w[i])
    }
  }
  return (xGroup.length === 0 && oGroup.length === 0 || xGroup.length === oGroup.length) ? true : false;
}





//! CODEWARS refactorizado
// ejemplo 1
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

//ejemplo 2
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
