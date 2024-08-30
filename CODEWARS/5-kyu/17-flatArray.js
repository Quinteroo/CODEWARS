//! https://www.codewars.com/kata/513fa1d75e4297ba38000003/train/javascript



// For this exercise you will create a global flatten method. The method takes in any number of arguments 
// and flattens them into a single array. If any of the arguments passed in are an array then the individual 
// objects within the array will be flattened so that they exist at the same level as the other arguments. 

// Any nested arrays, no matter how deep, should be flattened into the single array result.

// The following are examples of how this function would be used and what the expected results would be:

// flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']



//* Arguments
// En JavaScript, si quieres que una función maneje argumentos pasados, debes especificar esos argumentos en la 
// declaración de la función. Sin embargo, también puedes usar el objeto arguments para acceder a todos los 
// argumentos pasados a la función sin necesidad de listarlos explícitamente. 



//* método flat() 
// para aplanar un array anidado en un array simple. Este método es especialmente útil para convertir arrays 
// multidimensionales en un solo array. El método flat() toma un argumento opcional que indica la profundidad de 
// aplanamiento, y puedes usar Infinity para aplanar cualquier nivel de anidamiento.



function flatten() {
  const array = []

  for (let i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }

  return flatArray = array.flat(Infinity);
}


flatten(1, [2, 3], 4, 5, [6, [7]])
  (7)[1, 2, 3, 4, 5, 6, 7]

flatten([[[[[1]]]]], ['a', [3, ['b']]], null, 5, 'c')
  (7)[1, 'a', 3, 'b', null, 5, 'c']




//! SIN USAR .FLAT()

function flatten() {
  const result = [];

  // Función auxiliar para aplanar arrays
  function flattenHelper(item) {
    if (Array.isArray(item)) {
      // Si el item es un array, llamamos recursivamente a flattenHelper
      for (let i = 0; i < item.length; i++) {
        flattenHelper(item[i]);
      }
    } else {
      // Si no es un array, lo agregamos al resultado
      result.push(item);
    }
  }

  // Iteramos sobre todos los argumentos pasados a la función flatten
  for (let i = 0; i < arguments.length; i++) {
    flattenHelper(arguments[i]);
  }

  return result;
}