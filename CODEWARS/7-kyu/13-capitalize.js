


//task

// you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//?https://www.shecodes.io/athena/3710-how-to-capitalize-the-first-letter-in-a-string-with-javascript#:~:text=Using%20JavaScript%2C%20you%20can%20capitalize,with%20the%20toUpperCase()%20method.



//! con esta función hacemos cada palabra del array con la primera en mayúscula
// jadeCase("How can mirrors be real if our eyes aren't real")
// "How Can Mirrors Be Real If Our Eyes Aren't Real"
function jadeCase(s) {
  return s.split(' ').map((c, i) => (c.charAt(0).toUpperCase() + c.slice(1))).join(' ');
}


//! un poco más pulida, quitando el indice (i)
function jadeCase(s) {
  return s.split(' ').map(c => (c.charAt(0).toUpperCase() + c.slice(1))).join(' ');
}



//! esta es la solución de CODEWARS

String.prototype.toJadenCase = function () {
  return this.split(' ').
    map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
};

