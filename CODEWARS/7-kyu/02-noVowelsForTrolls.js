



// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.



function disemvowel(str) {
  let replaceVowel = str.replace(/A|E|I|O|U|a|e|i|o|u/g, '');  //! mucho ojo con la sintaxis del método .replace
  return replaceVowel;
}






//! PRUEBAS
function disemvowel(str) {
  let vowels = [];
  let splitString = str.split('');
  for (const x of splitString) {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
      splitString.replace(x, '');
    }
  }
  let joinString = splitString.join('');
  return joinString;
}




function disemvowel(str) {
  let x = str.split('');

  for (let i = 0; i < x.length; i++) {
    if (x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u') {
      x.slice(x[i], 1);
    }
  }
  let joinString = x.join('');
  return joinString;
}