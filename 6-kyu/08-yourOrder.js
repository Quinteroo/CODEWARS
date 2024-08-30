

// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f

// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""



//! INCLUDES
// usar includes en este caso, pero hay que ajustar la comparación porque includes busca coincidencias exactas.
// usando order[j].toString() para convertir el número en order[j] a una cadena antes de usar includes. 
// Esto garantiza que includes funcione correctamente para verificar si la palabra contiene el número

function order(words) {
  let x = words.split(' ');
  let order = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < order.length; j++) {
      if (x[i].includes(order[j].toString())) {
        let aux = x[i];
        x[i] = order[j];
        order[j] = aux;
      }
    }
  }

  return order;
}

order("4of Fo1r pe6ople g3ood th5e the2");

// me da la consola el siguiente error:
// VM939:7 Uncaught TypeError: x[i].includes is not a function
//     at order (<anonymous>:7:16)
//     at <anonymous>:1:1



//! INCLUDES AVANZADO
// El error que estás experimentando indica que x[i] no es una cadena en una de las iteraciones del bucle for. 
// El problema puede ocurrir si hay elementos en x que no son cadenas, como números o valores nulos.

// debemos agregar una verificación adicional para asegurarte de que x[i] sea una cadena antes de intentar usar el método includes.

function order(words) {
  let x = words.split(' ');
  let order = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < order.length; j++) {
      // Verificar si x[i] es una cadena antes de usar includes
      if (typeof x[i] === 'string' && x[i].includes(order[j].toString())) {
        let aux = x[i];
        x[i] = order[j];
        order[j] = aux;
      }
    }
  }

  return order.filter((obj) => typeof obj !== 'number').join(' ');
}


//! REFACTORIZADO
// Podemos refactorizar el código utilizando Array.prototype.sort para ordenar las palabras según el número que contienen. 

function order(words) {
  const sortedWords = words.split(' ').sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, ''), 10);
    const numB = parseInt(b.replace(/\D/g, ''), 10);
    return numA - numB;
  });

  return sortedWords.join(' ');
}

const result = order("4of Fo1r pe6ople g3ood th5e the2");
console.log(result);

// En este código:

// parseInt(a.replace(/\D/g, ''), 10) se utiliza para extraer el número de la palabra a.
// parseInt(b.replace(/\D/g, ''), 10) se utiliza para extraer el número de la palabra b.
// return numA - numB se utiliza para ordenar las palabras en función de sus números.


//! REPLACE
// La función replace se utiliza para eliminar todos los caracteres no numéricos de la cadena a.
// el código desglosado:

// a.replace(/\D/g, ''): Aquí estamos utilizando la función replace en la cadena a.
// La expresión regular /\D/g coincide con todos los caracteres que no son dígitos (\D significa "no dígito")
// y la bandera g indica que la búsqueda debe realizarse globalmente en toda la cadena.

// El segundo argumento de replace es la cadena de reemplazo, que en este caso es una cadena vacía ''.
// Esto significa que todos los caracteres no numéricos serán eliminados de la cadena a.

// parseInt(...): Después de realizar el reemplazo, la cadena resultante, que ahora contiene solo dígitos,
// se pasa a la función parseInt. Esta función convierte la cadena de dígitos en un número entero.

// El segundo argumento de parseInt es 10, que especifica la base numérica a la que se debe realizar la conversión.
// En este caso, 10 indica que la cadena representa un número en base 10 (decimal).

// En resumen, a.replace(/\D/g, '') elimina todos los caracteres no numéricos de la cadena a,
// y parseInt(..., 10) convierte la cadena resultante en un número entero.
// Este proceso se repite para la cadena b en la comparación de orden en la función de ordenamiento sort.