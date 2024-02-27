//! https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript


// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.

// The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.


function sortTheInnerContent(str) {
  return str.split(' ').map(word => {
    if (word.length > 2) {
      const innerContent = word.slice(1, -1).split('').sort((a, b) => b.localeCompare(a)).join('');
      return word[0] + innerContent + word.slice(-1);
    }
    return word;
  }).join(' ');
}

// Example usage:
const result = sortInnerContent("sort the inner content in descending order");
console.log(result); // Output: "srot the inner ctonnet in dsnnieedcg oredr"


//! SLICE (1, -1)
// Claro, la expresión word.slice(1, -1) se refiere a tomar una porción (slice) de la cadena word desde el índice 1 
// hasta el índice -1. Aquí hay una explicación más detallada:

// word: Es la palabra actual que estamos procesando.
// slice(1, -1): Esta función toma una porción de la cadena desde el índice 1 hasta el índice -1. 
// El índice 1 significa que estamos comenzando desde el segundo carácter de la palabra 
// (ya que los índices en programación suelen comenzar desde 0), y el índice -1 significa que estamos 
// tomando todos los caracteres hasta el último, excepto el último carácter.



//! LOCALCECOMPARE( )
// El método .localeCompare(a) es un método de comparación de cadenas que se utiliza para determinar el orden lexicográfico 
// de dos cadenas. Devuelve un número que indica si la cadena en la que se llama está antes, después o es igual a la cadena 
// que se pasa como argumento (a en este caso).

// En el contexto de la función que proporcioné para ordenar el contenido interno de una palabra, el método .localeCompare(a) 
// se utiliza en la función de comparación que se pasa al método sort() para establecer el orden de los caracteres en orden 
// descendente.


//! SLICE AND REVERSE
// El método reverse() opera sobre el array completo, invirtiendo el orden de todos los elementos. 
// Sin embargo, si deseas invertir solo una parte específica de un array, puedes hacerlo utilizando métodos como slice() 
// y reverse() en combinación.

// Aquí hay un ejemplo de cómo podrías invertir solo una porción específica del array:


const originalArray = [1, 2, 3, 4, 5];

// Definimos el rango que queremos invertir (por ejemplo, desde el índice 1 al índice 3)
const startIndex = 1;
const endIndex = 3;

// Extraemos la porción que queremos invertir usando slice()
const portionToReverse = originalArray.slice(startIndex, endIndex + 1);

// Invertimos la porción extraída
const reversedPortion = portionToReverse.reverse();

// Actualizamos la porción invertida en el array original
originalArray.splice(startIndex, reversedPortion.length, ...reversedPortion);

console.log(originalArray); // Resultado: [1, 4, 3, 2, 5]


// En este ejemplo, slice(startIndex, endIndex + 1) extrae la porción que queremos invertir,
// luego aplicamos reverse() a esa porción y finalmente utilizamos splice()
// para actualizar esa porción en el array original.



