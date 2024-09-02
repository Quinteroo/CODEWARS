//? https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript



//! Backspaces in string
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

Examples
"abc#d##c" == "ac"
"abc##d######" == ""
"#######" == ""
"" == ""



function cleanString(s) {
  let sSplit = s.split("")

  if (s === "") return ""
  if (sSplit.every((e) => e === "#")) return ""

  let letter = sSplit.filter((e) => e !== "#")
  let hastag = sSplit.filter((e) => e === "#")


  for (let i = 0; i < sSplit.length; i++) {
    if (sSplit[i] === "#") {
      if (i > 0) {
        sSplit.splice(i - 1, 2);
        i -= 2;
      } else {

        sSplit.splice(i, 1);
        i--;
      }
    }
  }

  // En tu código actual, cuando encuentras un #, utilizas splice para eliminar 
  // el carácter anterior y el # en sí. Sin embargo, como estás modificando el 
  // array sSplit durante la iteración, los índices cambian, lo que provoca que 
  // algunos # no se procesen como esperas. 

  // para solucionarlo tenemos que dar pasitos atrás en el índice para no saltarnos
  // ningún elemento

  return sSplit.join("")
}