


// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


//! en este caso hemos detectado el upperCase y le hemos añadido delante un espacio
function solution(string) {
  let x = string.split('');

  for (let i = 0; i < x.length; i++) {
    if (x[i] === x[i].toUpperCase()) {
      x[i] = ' ' + x[i];
    }
  }

  return x.join('')
}




//! OTRAS SOLUCIón
// ([a-z]): Captura una letra minúscula.
// ([A-Z]): Captura una letra mayúscula.
// ([a-z])([A-Z]): Captura una transición de minúscula a mayúscula.
// $1 $2: Reemplaza la transición con la primera letra capturada seguida de un espacio y 
// luego la segunda letra capturada.

const breakCamelCase = (str) => {
  // Utilizamos una expresión regular para insertar un espacio antes de cada letra mayúscula
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};