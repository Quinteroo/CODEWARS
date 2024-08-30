//! https://www.codewars.com/kata/55c04b4cc56a697bb0000048


// Complete the function scramble(str1, str2) that returns true if a portion of str1
// characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//? SOLUCIÓN
function scramble(str1, str2) {
  const count1 = Array(26).fill(0);
  const count2 = Array(26).fill(0);

  // Contar las ocurrencias de cada letra en str1
  for (let char of str1) {
    count1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Contar las ocurrencias de cada letra en str2
  for (let char of str2) {
    count2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Comparar las frecuencias
  for (let i = 0; i < 26; i++) {
    if (count1[i] < count2[i]) {
      return false;
    }
  }

  return true;
}



//! PRUEBAS
// En particular, la línea let c = a.filter((obj) => b.includes(obj)) crea una nueva matriz 
// filtrando los elementos de a que también están presentes en b. Esto puede llevar a una complejidad 
// de tiempo cuadrático (O(n^2)) en el peor de los casos, ya que la función includes en un array tiene 
// una complejidad de tiempo O(n) en sí misma, y estás utilizando esto en un bucle.
function scramble(str1, str2) {
  let a = str1.split('');
  let b = str2.split('');
  let c = a.filter((obj) => b.includes(obj))
  let d = c.every((letter) => b.includes(letter)) ? true : false;
  return d
}


function scramble(str1, str2) {
  return (str2.split('').every((letter) => str1.split('').includes(letter))) ? true : false;
}





