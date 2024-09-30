//? https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

//! Number of trailing zeros of N!
// Description:
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// N	Product	N factorial	Trailing zeros
// 6	1*2*3*4*5*6	720	1
// 12	1*2*3*4*5*6*7*8*9*10*11*12	479001600	2
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.


function zeros(n) {
  let count = 0;

  // Contar la cantidad de veces que 5 aparece como factor en el factorial
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

console.log(zeros(30));  // 7
console.log(zeros(100)); // 24


// El problema que tienes con el código actual se debe a varios factores:

// 1. **BigInt no tiene un método `.reverse()`**: Esto causa un error porque `BigInt` es un tipo de datos numéricos y no tiene un comportamiento de tipo arreglo, por lo que no puedes usar métodos de arreglos como `.reverse()` sobre él.
  
// 2. **`factorial` es un número, no un arreglo**: Al intentar iterar con `for (let j = 0; j < factorial.length; j++)`, estás tratando de acceder a las posiciones de un número como si fuera un arreglo, lo cual no es válido.

// 3. **Para encontrar los ceros al final del factorial**: No necesitas convertir el factorial en un arreglo y verificar cada dígito. Para encontrar la cantidad de ceros finales en un factorial, puedes usar un enfoque basado en la cantidad de veces que el número 5 aparece como factor en los múltiplos que componen el factorial (ya que los ceros en un factorial vienen de los factores 2 y 5, y siempre hay más 2 que 5).

// ### Solución:

// Puedes usar un algoritmo basado en la descomposición en factores de 5 para contar cuántos ceros tiene el factorial sin necesidad de calcular el factorial completo. Este es un enfoque más eficiente.

// ### Código actualizado:

// ```javascript
// function zeros(n) {
//   let count = 0;

//   // Contar la cantidad de veces que 5 aparece como factor en el factorial
//   while (n >= 5) {
//     n = Math.floor(n / 5);
//     count += n;
//   }

//   return count;
// }

// console.log(zeros(30));  // 7
// console.log(zeros(100)); // 24
// ```

// ### Explicación:
// 1. **Concepto**: Cada cero al final del número factorial proviene de un factor 10, que es el producto de 2 y 5. Dado que siempre hay más factores de 2 que de 5, lo que nos interesa es contar cuántas veces aparece el 5 como factor.
   
// 2. **Lógica**: Cada múltiplo de 5 en los números hasta `n` aporta al menos un factor de 5. Por ejemplo:
//    - `5`, `10`, `15`, `20`, etc., aportan un factor de 5 cada uno.
//    - Números como `25`, `50`, etc., aportan un factor extra de 5, ya que contienen dos factores de 5 (`25 = 5 * 5`).

// 3. **Cálculo**: 
//    - Primero divides `n` entre 5, luego entre 25, luego entre 125, y así sucesivamente, sumando cuántos múltiplos de estos números hay en `n`.

// Esto te da el número de ceros al final del factorial de `n` sin calcular el factorial en sí, lo cual es mucho más eficiente.
