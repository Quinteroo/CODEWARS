//? https://www.codewars.com/kata/563cf89eb4747c5fb100001b




//! Remove the minimum
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {

  let copyNumbers = [...numbers]

  let smallest = Math.min(...copyNumbers)

  let indexSmallest = copyNumbers.indexOf(smallest)

  let smallestArr = [copyNumbers.splice(indexSmallest, 1)]

  return copyNumbers
}