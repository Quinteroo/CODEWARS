



//! PROMEDIO

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. 
// Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!



function betterThanAverage(classPoints, yourPoints) {
  let num = 0;
  for (let i = 0; i < classPoints.length; i++) {
    num += classPoints[i];
  }
  let averagePoints = num / classPoints.length;
  return (yourPoints > averagePoints) ? true : false;
}



//* primero haz lo que ssabes, auqnue no esté lo más optimizado posible
//* una vez lo resulevas, factoriza tu código.
//? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}



//! traduce los enunciados si son largos, aquí estamos comparándolo con cada puntuación,
//! pero quiere que comparemos con el promedio de la clase
function betterThanAverage(classPoints, yourPoints) {
  classPoints.unshift(yourPoints);
  let bestPoints = classPoints[0];
  for (let i = 1; i < classPoints.length; i++) {
    if (classPoints[i] > classPoints[0]) {
      bestPoints = classPoints[i]
    }
  }
  return (bestPoints === classPoints[0]);
}



