//! https://www.codewars.com/kata/514a024011ea4fb54200004b


// Write a function that when given a URL as a string, parses out just the domain
// name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



function domainName(url) {
  let a = url.split('//')[1].split('.')
  return a
}

// domainName("http://github.com/carbonfive/raygun")
// (2) ['github', 'com/carbonfive/raygun']

// domainName("http://www.zombie-bites.com")
// (3) ['www', 'zombie-bites', 'com']


function domainName(url) {
  let arr = url.split('//')[1].split('.')                   //? devuleve un array

  return (arr.includes('www')) ? a[1] : a[0];
}


// domainName("https:www.cnet.com" )
// VM252:2 Uncaught TypeError: Cannot read properties of undefined (reading 'split')
//     at domainName (<anonymous>:2:31)
//     at <anonymous>:1:1


//! para evitar errores, meter siempre una comprobación
function domainName(url) {
  let arr = (url.includes('//')) ? url.split('//')[1].split('.') : url.split('.');

  return (arr.includes('www')) ? arr[1] : arr[0];
}


//! INCLUDES
// El método .includes() solo devuelve un valor booleano (true o `false) indicando si
// la subcadena está presente o no en la cadena original. No modifica la cadena original
// ni crea una nueva cadena.