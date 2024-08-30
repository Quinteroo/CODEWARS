//! https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript


// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.

// The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.


function sortTheInnerContent(str) {
  return str.split(' ').map(word => {
    if (word.length > 2) {
      const innerContent = word.slice(1, -1).split('').sort((a, b) => b.localeCompare(a)).join('');
      return word[0] + innerContent + word.slice(-1);
    }
    return word;
  }).join(' ');
}
