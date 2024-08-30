



// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate
// elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]


//! SPLICE
// el método splice espera un índice como primer argumento, no el valor del elemento.

function uniq(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      a.splice(i + 1, 1);
      i--; // Ajustamos el índice para evitar omitir elementos después de la eliminación
    }
  }
  return a;
}