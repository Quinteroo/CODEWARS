

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



//! nos aparece que la palabra más larga es know porque estámos comparándola siempre con y[0]
// findShort("bitcoin take over the world maybe who knows perhaps")
// 'knows'
function findShort(s) {
  const y = s.split(' ');
  let shortestWord = y[0];

  for (let i = 0; i < y.length; i++) {
    if (y[i].length < y[0].length) {    //!
      shortestWord = y[i];
    }
  }
  return shortestWord.length;
}



//! así es el correcto
// findShort("bitcoin take over the world maybe who knows perhaps")
// 3

function findShort(s) {
  const y = s.split(' ');
  let shortestWord = y[0];

  for (let i = 0; i < y.length; i++) {
    if (y[i].length < shortestWord.length) {  //!
      shortestWord = y[i];
    }
  }
  return shortestWord.length;
}