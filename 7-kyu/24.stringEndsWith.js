



// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false



//! SOLUCIÓN 1
function solution(cadena, terminacion) {
  // Si la terminación es una cadena vacía, siempre devuelve true
  if (terminacion === '') {
    return true;
  }

  // Compara los caracteres desde el final de la cadena hacia atrás
  for (let i = 1; i <= terminacion.length; i++) {
    if (cadena[cadena.length - i] !== terminacion[terminacion.length - i]) { // hacia atrás por que la última posición es array.length - 1
      return false;
    }
  }

  return true;
}


//! SOLUCIÓN 2
function terminaCon(cadena, terminacion) {
  // Usa el método endsWith para verificar si la cadena termina con la terminación
  return cadena.endsWith(terminacion);
}

// Ejemplos de uso:
console.log(terminaCon('abc', 'bc')); // Devuelve true
console.log(terminaCon('abc', 'd'));  // Devuelve false


//! SOLUCIÓN 3
function terminaCon(cadena, terminacion) {
  // Obtiene la longitud de la terminación y la subcadena final de la misma longitud en la cadena
  var longitudTerminacion = terminacion.length;
  var subcadenaFinal = cadena.substring(cadena.length - longitudTerminacion);

  // Compara la subcadena final con la terminación y devuelve el resultado de la comparación
  return subcadenaFinal === terminacion;
}

// Ejemplos de uso:
console.log(terminaCon('abc', 'bc')); // Devuelve true
console.log(terminaCon('abc', 'd'));  // Devuelve false




//! PRUEBAS
function solution(str, ending) {
  let splitStr = str.split('');
  let splitEnd = ending.split('');

  return (splitStr[splitStr.length - 1] === splitEnd[splitEnd.length - 1] && splitStr[splitStr.length - 2] === splitEnd[splitEnd.length - 2]) ? true : false;

}



