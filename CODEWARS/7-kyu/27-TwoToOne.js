//? https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

//! Two to One
// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// 1 only a-z
// sorted
// longest
// letters taken only once

function longest(s1, s2) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  const s1Array = s1.split("").filter((e) => alphabet.includes(e))
  const s2Array = s2.split("").filter((e) => alphabet.includes(e))

  const newArr = s1Array.concat(s2Array)
  const longestArr = [...new Set(newArr)]

  return longestArr.sort().join("")
}