

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8



//? EXPLICACIÓN
// La fórmula n^3 se utiliza porque en el patrón dado de números impares, 
// la suma de la fila n es igual al cubo del número n. 
// Esto es una propiedad del patrón de los números impares en el triángulo dado.

// Para clarificar, si observas el patrón de la suma de los números en cada fila:

// Fila 1: 1 (1^3)
// Fila 2: 3 + 5 = 8 (2^3)
// Fila 3: 7 + 9 + 11 = 27 (3^3)
// En general, la suma de la fila n es igual a n^3. 

// Por lo tanto, la función rowSumOddNumbers simplemente calcula el cubo de n 
// para obtener la suma de los números en la fila n.


//! SOLUCIÓN
function rowSumOddNumbers(n) {
  // Comprobación para asegurarse de que n sea un número entero positivo
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    return "Por favor, introduce un número entero positivo.";
  }

  // Calcular la suma de la fila n utilizando la fórmula n^3
  return Math.pow(n, 3);
}

// Ejemplos de uso
console.log(rowSumOddNumbers(1)); // Salida: 1
console.log(rowSumOddNumbers(2)); // Salida: 8
console.log(rowSumOddNumbers(3)); // Salida: 27
