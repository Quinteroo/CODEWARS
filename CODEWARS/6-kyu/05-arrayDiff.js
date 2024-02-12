



// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



//! esto es un error, estamos comparando OBJ con todo el array B
function arrayDiff(a, b) {

  return a.filter((obj) => obj !== b)
}


//? esta es la forma correcta usando .includes
// se utiliza el método includes() para verificar si obj está presente en el array b, 
// y luego se niega el resultado para obtener el filtro correcto. 
// Esto filtrará los elementos de a que no están presentes en b.
function arrayDiff(a, b) {
  return a.filter(obj => !b.includes(obj));
}