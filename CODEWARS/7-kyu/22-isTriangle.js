

// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 


//? https://www.portaleducativo.net/contenidos/2308/construccion-triangulos



//! solución 1
function isTriangle(a, b, c) {
  // Verificar si todas las longitudes de los lados son positivas
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  // Verificar si la suma de dos lados es mayor que el tercer lado para todos los lados
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}


//! refactorizado
function isTriangle(a, b, c) {
  const areSidesPositive = a > 0 && b > 0 && c > 0;

  if (areSidesPositive) {
    return a + b > c && a + c > b && b + c > a;
  }

  return false;
}


//! super-refactorizado
function isTriangle(a, b, c) {
  return a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a);
}

