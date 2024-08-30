//! https://www.codewars.com/kata/52449b062fb80683ec000024


// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag(str) {
  let wordArray = str.split(' ');
  const newArray = [];

  for (const word of wordArray) {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    newArray.push(capitalizedWord);
  }

  let result = `#${newArray.join('')}`;

  if (result.length > 140 || result.length === 1) {  //! se tiene que verificar la cadena resultante según la condición dada
    return false;
  }

  return result;
}