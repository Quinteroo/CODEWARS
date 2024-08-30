

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



//! toUpperCase() no funciona en un array, tiene que ser en un string completo
// accum('aBcDDc')
// VM1207:2 Uncaught TypeError: s.split(...).toUpperCase is not a function
function accum(s) {
  const x = s.split('').toUpperCase();
  return x;
}

//! toUpperCase(0) no pone la primera letra de la frase o palabra en mayúscula, lo pone todo
// accum('aBcDDc')
// 'ABCDDC'

function accum(s) {
  return s.toUpperCase(0);
}



//! con esta función ya podemos sacar la repetición de las letras en un array con la separación,
// accum('aBcDDc')
// (12) ['a', '-', 'bb', '-', 'ccc', '-', 'dddd', '-', 'ddddd', '-', 'cccccc', '-']
function accum(s) {
  const accumArray = [];
  const x = s.toLowerCase().split('');
  for (let i = 0; i < x.length; i++) {
    const y = x[i].repeat(i + 1);
    const z = '-';
    accumArray.push(y)
    accumArray.push(z)
  }
  return accumArray
}


//! con esta ya obtenemos la solución
// accum('aBcDDc')
// 'A-Bb-Ccc-Dddd-Ddddd-Cccccc'
function accum(s) {
  const accumArray = [];
  const x = s.toLowerCase().split('');
  for (let i = 0; i < x.length; i++) {
    const w = x[i].toUpperCase();
    const y = x[i].repeat(i);
    const z = '-';
    accumArray.push(w)
    accumArray.push(y)
    accumArray.push(z)
  }
  accumArray.pop();
  return accumArray.join('');
}





//? OTRA SOLUCIÓN DE CODEWARS
//! .join('-') nos permite unir todos los elementos del array indicando con que lo unimos
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}



