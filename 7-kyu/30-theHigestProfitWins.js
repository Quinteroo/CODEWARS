//? https://www.codewars.com/kata/559590633066759614000063/train/javascript


//! The highest profit wins!
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

Examples(Input-- > Output)
[1, 2, 3, 4, 5]-- > [1, 5]
[2334454, 5]-- > [5, 2334454]
[1]-- > [1, 1]

// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length.
// Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.



function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}




const minMax = (arr) => { return [Math.min(...arr), Math.max(...arr)] }