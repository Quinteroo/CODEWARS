//? https://www.codewars.com/kata/59ec2d112332430ce9000005/train/javascript


//! Simple division
// In this Kata, you will be given two numbers, a and b, and your task is to determine 
// if the first number a is divisible by all the prime factors of the second number b. 
// For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

// See test cases for more examples.


//* Un factor primo es un número primo que divide exactamente a otro número, sin dejar residuo.
//* Para encontrar los factores primos del número 12, descomponemos el número en sus factores primos:
//* 12 = 2 × 2 × 3
//* Por lo tanto, los factores primos de 12 son 2 y 3. ✅


//* ✅ Recuerda que un número primo solo tiene dos divisores: 1 y él mismo.
//* ✅ El 1 no es primo porque solo tiene un divisor (él mismo).
//* ✅ El 0 no es primo porque es divisible por todos los números.


function solve(a, b) {
  let factors = []
  let divisor = 2

  while (b >= 2) { // El 1 no es primo porque solo tiene un divisor (él mismo), por eso si se divide b / b es 1, y salimos del bucle
    if (b % divisor === 0) {
      factors.push(divisor)
      b /= divisor  // en este caso dividimos para checkear el siguiente divisor Ó salir del bucle
    } else {
      divisor++
    }
  }

  for (let i = 0; i < factors.length; i++) { // estructura de control para verificar que a es divicible entre cada factor primo
    let primeFactor = a / factors[i]
    if (Number.isInteger(primeFactor) === false) {
      return false
    }
  }

  return true // en el caso en el que no haya false, entonces devolvemos true
};