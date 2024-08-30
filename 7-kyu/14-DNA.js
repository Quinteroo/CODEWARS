

// In DNA strings, symbols "A" and "T" are complements of each other, 
// as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).



// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function dnaStrand(dna) {
  let newString = [];

  const splitString = dna.split('');

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === 'T') {
      newString.push('A')
    } else if (splitString[i] === 'A') {
      newString.push('T')
    } else if (splitString[i] === 'C') {
      newString.push('G')
    } else if (splitString[i] === 'G') {
      newString.push('C')
    }
  }
  return newString.join('');
}


//! OTRAS SOLUCIONES DE CODEWARS
var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
  return dna.split('').map(function (v) { return pairs[v] }).join('');
}





// In DNA strings, symbols "A" and "T" are complements of each other, 
// as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).



// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function dnaStrand(dna) {
  let newString = [];

  const splitString = dna.split('');

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === 'T') {
      newString.push('A')
    } else if (splitString[i] === 'A') {
      newString.push('T')
    } else if (splitString[i] === 'C') {
      newString.push('G')
    } else if (splitString[i] === 'G') {
      newString.push('C')
    }
  }
  return newString.join('');
}


//! OTRAS SOLUCIONES DE CODEWARS
var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
  return dna.split('').map(function (v) { return pairs[v] }).join('');
}




//! OTRAS SOLUCIONES DE CODEWARS
function DNAStrand(dna) {
  //your code here
  var res = "";
  for (var i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        res += "T";
        break;
      case 'T':
        res += "A";
        break;
      case 'G':
        res += "C";
        break;
      case 'C':
        res += "G";
        break;
    }
  }
  return res;
}