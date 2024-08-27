//? https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

//! Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

Examples
"This is an example!" == "sihT si na !elpmaxe"
"double  spaces" == "elbuod  secaps"


function reverseWords(str) {
  let reversedStr = []

  let arr = str.split(" ")

  for (let i = 0; i < arr.length; i++) {
    let arrS = arr[i].split("").reverse().join("")

    reversedStr.push(arrS)
  }


  return reversedStr.join(" ")
}