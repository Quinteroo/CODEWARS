//! https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript


// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". 
// Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, 
// with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! 
// So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]


//! SOLUCIÓN 1
function dirReduc(arr) {
  const oppositeDirs = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  };

  const stack = [];

  for (let dir of arr) {
    if (stack.length && stack[stack.length - 1] === oppositeDirs[dir]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return stack;
}


//!  SOLUCIÓN 2
function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] === "NORTH" && arr[j] === "SOUTH") {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
        i--;
        break; // Break out of the inner loop after removing the directions
      } else if (arr[i] === "SOUTH" && arr[j] === "NORTH") {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
        i--;
        break;
      } else if (arr[i] === "WEST" && arr[j] === "EAST") {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
        i--;
        break;
      } else if (arr[i] === "EAST" && arr[j] === "WEST") {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
        i--;
        break;
      }
    }
  }
  return arr;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
['WEST']
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])
[""];
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST", "WEST", "WEST", "WEST"])
  (3)['WEST', 'WEST', 'WEST']





//! PRUEBAS, esto funcionaría si solo tuviese uno de los 4 posibles resultados, pero puede ser WEST WEST
function dirReduc(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "NORTH") {
      arr[i] = 1
    } else if (arr[i] === "SOUTH") {
      arr[i] = -1
    } else if (arr[i] === "WEST") {
      arr[i] = -2
    } else if (arr[i] === "EAST") {
      arr[i] = 2
    }

  }


  switch (arr.reduce((a, b) => a + b, 0)) {
    case 1:
      return ["NORTH"]
      break;
    case -1:
      return ["SOUTH"]
      break;
    case 2:
      return ["EAST"]
      break;
    case -2:
      return ["WEST"]
      break;
    case 0:
      return []
      break;
  }
}