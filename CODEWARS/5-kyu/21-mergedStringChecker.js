//? https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript



//! Merged String Checker
// At a job interview, you are challenged to write an algorithm to check if a given string, s, can 
// be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears



function isMerge(s, part1, part2) {
  let part1Split = part1.split("")
  let part2Split = part2.split("")
  let sSplit = s.split("")

  let commonElements1 = sSplit.filter((e) => part1Split.includes(e))
  console.log(commonElements1);

  let short1 = commonElements1.slice(0, part1.length)
  console.log(short1);

  let commonElements2 = sSplit.filter((e) => part2Split.includes(e))
  console.log(commonElements2);

  let short2 = commonElements2.slice(0, part2.length)
  console.log(short2);

  return (part1 === short1.join("") && part2 === short2.join("")) ? true : false
}


isMerge("codewars", "cdw", "oears")
true
isMerge("decowars", "cdw", "oears")
false