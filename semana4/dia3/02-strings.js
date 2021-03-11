/**
 * Funciones y propiedades de los STRING
 */

let frase = "Los programadores crean lo que las personas sueñan"

console.log(frase);

// Tamaño de un string - Ojo: los espacios cuentan como letras 
console.log(`El tamaño es: ${frase.length}`);

// Retorno de la frase en mayúscula
console.log(frase.toLowerCase);

// Retorno de la frase en mayúscula
console.log(frase.toUpperCase);

//Obtener un arreglo de string dado un separador
console.log(frase.split(" "));

//Obtener la posición de un determinado caracter o caderna
console.log(frase.indexOf("prog"));

//Obtener la posición de algo q no exista
console.log(frase.indexOf("mate"));

//obtener la cadena sin los espacios en blanco de los extremos de la cadena
// solo espacios extenos, no internos
let correo = "   jorgezevallosr@gmail.com ";
console.log(correo);
console.log(correo.trim());

//Obtener la subcadena desde la posición 5, 2 caracteres adelante
console.log(frase.substr(5,2));

//Obtener la subcadena desde la posición 5, hasta la posición 6 (no incluye la 7)

console.log(frase.substring(5,7));