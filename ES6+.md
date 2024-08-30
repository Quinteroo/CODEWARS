
## QUÉ ES ES6+?
ES6+ es la abreviación de la versión de ECMAScript (el estándar en el que se basa JavaScript). ES6+ introduce muchas características y mejoras en el lenguaje JavaScript, lo que lo hace más poderoso y fácil de usar para los desarrolladores.

Esta nueva versión llegó a JavaScript en 2015.

En esta sesión veremos las características y mejoras añadidas en ES6+ y además conceptos avanzados de JavaScript



## EXPORT

Para exportar contenido desde un módulo, utilizaremos la palabra clave export.

Podremos exportar variables, funciones, clases o incluso objetos completos.

Veremos que más adelante podremos exportar de diferentes maneras, pero por el momento nos sirve con la más simple:

```js // Exportar una variable
export const miVariable = 42;

// Exportar una función
export function miFuncion() {
  // ...


```




## IMPORT 

Para importar contenido desde otro módulo, se utiliza la palabra clave import.

Puedes importar entidades específicas o importar el contenido por defecto de un módulo.

Para importar necesitaremos el nombre de lo que exportamos y desde donde lo exportamos, esto nos permitirá tener el código dividido en varios archivos.


```js
// Importar una variable
import { miVariable } from "./miModulo";

// Importar una función
import { miFuncion } from "./miModulo";

```





## Set

Un Set es una estructura de datos que almacena valores únicos, es decir, no permite elementos duplicados.

Podremos ver como tiene sus propios métodos: add, has y size serán los más útiles en este punto

```js 
const miSet = new Set();

miSet.add('valor1');
miSet.add('valor2');
miSet.add('valor1'); // No se agrega de nuevo, ya existe

console.log(miSet.has('valor2'));  // true
console.log(miSet.size);           // 2

```

## Quitar elementos duplicados de un Array son SET
```js 
const arrayConDuplicados = [1, 2, 3, 2, 4, 5, 1, 6];
const arraySinDuplicados = [...new Set(arrayConDuplicados)];

console.log(arraySinDuplicados); // [1, 2, 3, 4, 5, 6]
```






## MAP

El método map() de JavaScript es una función de la clase Array que permite aplicar una función a cada elemento de un array y devolver un nuevo array con los resultados. Es muy útil para transformar un array de una forma rápida y sencilla.
```js 
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

```


En este caso, tenemos un array users con objetos que tienen dos propiedades: name y age. Usamos map() para extraer el valor de la propiedad name de cada objeto y guardarlo en un nuevo array names.

```js
const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
];

const names = users.map(user => user.name);

console.log(names); // ['John', 'Jane', 'Bob']
```




## FILTER

```JS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
```



## FIND

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const four = numbers.find(number => number === 4);

console.log(four); // 4
```




## REDUCE

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // 15
```




## SOME
permite comprobar si al menos un elemento de un array cumple una condición dada.


```js 
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumbers = numbers.some(number => number % 2 === 0);

console.log(hasEvenNumbers); // true
```




## EVERY
devuelve true sólo si todos los elementos cumplen la condición.

```js
const numbers = [1, 2, 3, 4, 5];

const areAllEven = numbers.every(number => number % 2 === 0);

console.log(areAllEven); // false
```




## TRY & CATCH
estructura de control de flujo que se utiliza para manejar los errores en JavaScript.

Se utiliza para envolver una porción de código que puede generar un error y proporcionar una forma de manejar ese error.

```js
try {
  // código que puede generar un error
} catch (error) {
  // código que maneja el error
}
```

Cuando se ejecuta el código en el bloque try, si se produce un error, se detiene la ejecución del código y se salta al bloque catch. 

El objeto error que se pasa al bloque catch contiene información sobre el error que se ha producido, como el mensaje de error y la línea en la que se produjo el error.


```js
try {
  const x = y + 1; // esto generará un ReferenceError porque y no está definida
} catch (error) {
  console.error(error.message); // 'y is not defined'
}
```


El bloque catch también se puede opcionalmente seguir de un bloque finally, que se ejecuta siempre al final, independientemente de si se ha producido un error o no. 

El bloque finally es útil para ejecutar código que siempre debe ejecutarse, 
como cerrar una conexión a una base de datos o limpiar recursos.

```js
try {
  // código que puede generar un error
} catch (error) {
  // código que maneja el error
} finally {
  // código que siempre se ejecuta
}
```









// APUNTES CLASE DIRECTO
