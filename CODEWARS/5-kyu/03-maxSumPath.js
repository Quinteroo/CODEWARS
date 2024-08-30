//! https://www.codewars.com/kata/61a2fcac3411ca0027e71108/train/javascript

// Task:
// You are given two sorted lists, with distinct elements. Find the maximum path sum while traversing through the lists.

// Points to consider for a valid path:

// A path can start from either list, and can finish in either list.
// If there is an element which is present in both lists (regardless of its index in the lists), you can choose to change your path to the other list.
// Return only the maximum path sum.

// Example:
// [0, 2, 3, 7, 10, 12]
//    [1, 5, 7, 8]
// Both lists having only 7 as common element, the possible paths would be:

// 0->2->3->7->10->12 => 34
// 0->2->3->7->8      => 20
// 1->5->7->8         => 21
// 1->5->7->10->12    => 35 (maximum path)
// Hence, the output will be 35 in the example above.

// Notes:
// The arrays may contain no common terms.
// The common element should only be counted once.
// Aim for a linear time complexity.
// Range of possible inputs:  0 <=len(l1), len(l2) <= 125000



function maxSumPath(l1, l2) {
  // a1 + cE + a2
  // b1 + cE + b2

  let cE = []; // commonElement
  let firstComElemIndex;
  let secondComElemIndex;
  let a1;
  let a2;
  let b1;
  let b2;
  let comb1;
  let comb2;
  let comb3;
  let comb4;
  let allComb = [];
  let maxSum;

  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      if (l1[i] === l2[j]) {
        cE.push(l1[i]);
        firstComElemIndex = i;
        secondComElemIndex = j;
        a1 = l1.slice(0, firstComElemIndex);
        a2 = l1.slice(firstComElemIndex + 1);
        b1 = l2.slice(0, secondComElemIndex);
        b2 = l2.slice(secondComElemIndex + 1);
      }
    }
  }

  // Verificar si hay elementos comunes
  if (cE.length === 0) {
    return [...l1, ...l2].reduce((a, b) => a + b, 0);
  }

  comb1 = [...a1, ...cE, ...a2].reduce((a, b) => a + b, 0);
  comb2 = [...a1, ...cE, ...b2].reduce((a, b) => a + b, 0);
  comb3 = [...b1, ...cE, ...b2].reduce((a, b) => a + b, 0);
  comb4 = [...b1, ...cE, ...a2].reduce((a, b) => a + b, 0);

  allComb.push(comb1, comb2, comb3, comb4);

  return (l1.length === 0 && l2.length === 0) ? 0 : maxSum = Math.max(...allComb);
}