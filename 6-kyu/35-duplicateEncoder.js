//? https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

//! Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" if that character 
// appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din" = "((("
"recede" = "()()()"
"Success" = ")())())"
"(( @" = "))(("





function duplicateEncode(word) {
  const lowerCaseWord = word.toLowerCase();  //! Convertimos la palabra a minúsculas, si no A y a son tratadas diferentes
  const splitWord = lowerCaseWord.split("");
  let result = [];

  for (let i = 0; i < splitWord.length; i++) {
    let sW = splitWord.filter((e) => e === splitWord[i]);
    if (sW.length > 1) {
      result.push(")");
    } else {
      result.push("(");
    }
  }

  return result.join("");
}