

// An isogram is a word that has no repeating letters,
// consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.


// Example: (Input --> Output)


// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


//! creando dos bucles for: i = 0 y j = i+1, podemos ir comparando las diferentes posiciones del array
function isIsogram(str) {
  const y = str.toLowerCase();
  const x = y.split('');
  for (let i = 0; i < x.length; i++) {
    const firstIndex = x[i];
    for (let j = i + 1; j < x.length; j++) {
      const secondIndex = x[j];
      if (firstIndex === secondIndex) {
        return false
      }
    }
  }
  return true
}



//! código refactorizado
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i) {
    for (j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}