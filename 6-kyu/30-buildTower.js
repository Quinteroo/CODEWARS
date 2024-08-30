//! https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(n) {
  const towerArray = [];

  for (let i = 1; i <= n * 2 - 1; i += 2) {
    const spaces = ' '.repeat((n * 2 - 1 - i) / 2);
    const stars = '*'.repeat(i);
    towerArray.push(spaces + stars + spaces);
  }

  return towerArray;
}


//! OTRA SOLUCIÓN
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
      + "*".repeat((i * 2) + 1)
      + " ".repeat(nFloors - i - 1));
  }
  return tower;
}




//! ES CORRECTO PERO ESTÁ PIDIENDO OTRA COSA
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ", "***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);


function towerBuilder(n) {
  const arr = []
  let counter = 1

  while (counter < n + 1) {
    if (counter % 2 !== 0) {
      let space1 = " ".repeat(n - counter)
      let towerLayer = "*".repeat(counter)
      let space2 = " ".repeat(n - counter)
      let towerLevel = `${space1}${towerLayer}${space2}`
      arr.push(towerLevel)
    }
    counter++
  }
  return arr
}