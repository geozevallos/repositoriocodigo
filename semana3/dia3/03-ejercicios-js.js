/**
 * Pagina 44: Ejercicio 2.6
 * 
 */


// El prompt deja ingresar cualquier dato y lo toma como string
// con el + adelante, convierte de texto a número (entero o decimal)
 let catetoA = +prompt("Ingrese el cateto a");
 let catetoB = +prompt("ingrese el cateto B");


// console.log(catetoB);
// console.log(catetoA);
// console.log(20);

// // Para separada los numeros e interpretalos mejor
// console.log(1_123_322);




//  variable desconocida, es decir declarada
// mas no definida. 
let hipotenusa;

hipotenusa = (catetoA**2 + catetoB**2)**0.5;

console.log(`La hipotenusa es: ${hipotenusa}`);
