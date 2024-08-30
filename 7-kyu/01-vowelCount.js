

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  let count = 0;
  let splitString = str.split("");
  for (const x of splitString) {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
      count++;
    }
  }
  return count;
}






function getCount(str) {
  let count = 0;
  let splitString = str.split("");
  for (const x of splitString) {
    if (x == a || x == e || x == i || x == o || x == u) {  //! necesita que las vocales estén entre '' para que funcione y sea un str
      count++;
    }
  }
  return count;
}



