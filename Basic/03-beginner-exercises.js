/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// esto es un comentario de una línea

// 2. Escribe un comentario en varias líneas

// esto es un
// comentario
// de varias líneas

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let texto = "Hola mundo";   // String
let numero = 42;            // Number
let esVerdadero = true;     // Boolean
let noDefinido = undefined; // Undefined
let nulo = null;           // Null
let simbolo = Symbol("Mi símbolo"); // Symbol
let numeroGrande = 9007199254740991n; // BigInt


// 4. Imprime por consola el valor de todas las variables

console.log(texto);
console.log(numero);
console.log(esVerdadero);
console.log(noDefinido);
console.log(nulo);
console.log(simbolo);
console.log(numeroGrande);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof esVerdadero);
console.log(typeof noDefinido);
console.log(typeof nulo);
console.log(typeof simbolo);
console.log(typeof numeroGrande);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

texto = "¡Adiós mundo!";         // String
numero = 100;                    // Number
esVerdadero = false;            // Boolean
noDefinido = undefined;         // Undefined
nulo = null;                    // Null
simbolo = Symbol("Otro símbolo"); // Symbol
numeroGrande = 123456789n;      // BigInt

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

texto = 42;                 // Ahora es Number (antes String)
numero = true;              // Ahora es Boolean (antes Number)
esVerdadero = "verdad";     // Ahora es String (antes Boolean)
noDefinido = 0;            // Ahora es Number (antes Undefined)
nulo = "nada";             // Ahora es String (antes Null)
simbolo = 123456n;         // Ahora es BigInt (antes Symbol)
numeroGrande = false;      // Ahora es Boolean (antes BigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const textoConst = "Hola mundo";   // String
const numeroConst = 42;            // Number
const esVerdaderoConst = true;     // Boolean
const noDefinidoConst = undefined; // Undefined
const nuloConst = null;           // Null
const simboloConst = Symbol("Mi símbolo"); // Symbol
const numeroGrandeConst = 9007199254740991n; // BigInt

// 9. A continuación, modifica los valores de las constantes

textoConst = "Nuevo texto";         // Error: no se puede reasignar una constante
numeroConst = 100;                  // Error: no se puede reasignar una constante
esVerdaderoConst = false;          // Error: no se puede reasignar una constante
noDefinidoConst = null;            // Error: no se puede reasignar una constante
nuloConst = 0;                     // Error: no se puede reasignar una constante
simboloConst = Symbol("Nuevo");    // Error: no se puede reasignar una constante
numeroGrandeConst = 123456789n;    // Error: no se puede reasignar una constante

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// textoConst = "Nuevo texto";         // Error: no se puede reasignar una constante
// numeroConst = 100;                  // Error: no se puede reasignar una constante
// esVerdaderoConst = false;          // Error: no se puede reasignar una constante
// noDefinidoConst = null;            // Error: no se puede reasignar una constante
// nuloConst = 0;                     // Error: no se puede reasignar una constante
// simboloConst = Symbol("Nuevo");    // Error: no se puede reasignar una constante
// numeroGrandeConst = 123456789n;    // Error: no se puede reasignar una constante