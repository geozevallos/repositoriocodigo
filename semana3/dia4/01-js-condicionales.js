// Ejercicio: Comprando un articulo (IF)
// let costoPrenda = 5_000;
// let nombrePrenda = "Cartera Gucci";
// let saldoCredito = 8_000;

// if(saldoCredito >= costoPrenda){
//     // Una forma larga sería: saldoCredito - costoPrenda
//     saldoCredito -= costoPrenda
//     console.log(`Gracias por su compra, su slado disponibles es: ${saldoCredito}`);
// } else {
//     console.log("No tienes saldo suficiente");
// }
// console.log("Hasta pronto")


/** ---Ejercicio 2: ---------------------- */
/** Si el producto tiene un costo mayor o igual a 500 so
 * Es jueves: Se descuenta un 15%
 * Es domingo: se descuenta un 10%
 * Los demás días no aplica descuento
 * Sino tampoco hay descuento
 */


//  El debugger sirve para pausar el codigo y ver si hay errores
// debugger;

//  let dia = "jueves";
//  let precioProducto = 500;


// //  El doble igual es flexible if(5=="5") V
// // if(5==="5") F


// if(precioProducto >= 500){
//     if(dia === "jueves"){
//         console.log(`Total a pagar es: ${precioProducto * 0.85}`);
//     } else if (dia === "domingo"){
//         console.log(`Total a pagar es: ${precioProducto * 0.9}`);
//     } else {
//         console.log(`Total a pagar es: ${precioProducto}`)
//     }
// } else{
//     console.log(`Total a pagar ${precioProducto}`)
// }




/** ---Ejercicio 3: (Mejorando el ejercicio 2) ---------------------- */
/** Si el producto tiene un costo mayor o igual a 500 so
 * Es jueves: Se descuenta un 15%
 * Es domingo: se descuenta un 10%
 * Los demás días no aplica descuento
 * Sino tampoco hay descuento
 */

// let dia = "jueves";
// let precioProducto = 500;


// if(precioProducto >= 500 && dia === "jueves"){
//         console.log(`Total a pagar es: ${precioProducto * 0.85}`);
//     } else if (precioProducto >= 500 && dia === "domingo"){
//         console.log(`Total a pagar es: ${precioProducto * 0.9}`);
//     } else {
//         console.log(`Total a pagar es: ${precioProducto}`)
//     }
 

/** Ejercicio 4: Descuento del 5% bajo 2 condiciones
 * Descuento del 5% bajo 2 condiciones (Al menos se debe cumplir una condicion)
 * - El producto debe superar los 1000 soles 
 * El dia debe ser lunes
 */

// let dia = "jueves";
// let precio = 900;
// if(precio > 1000 || dia === "lunes"){
//     console.log(`El precio del producto es:${precio*0.95}`);
// } else{
//     console.log(`El precio a paga es: ${precio}`)
// }



// Cuales son los comparadores aritmeticos?
/** > mayor que
 *  < menor que
 * >= mayor o igual que
 * <= menor o igual que
 * === igual en valor y en tipo de dato que
 * == igual en valor que
 * !== diferente de
 */



/**
 *------------Ejercicio 5 del libro 3.5
 */

//  let a = 4;
//  let b = 5;
//  let c = 3;
//  let m;

//  if (a>b) { 
//      if (a > c){
//          m = a
//      } else{
//          m = c
//      } }
//  else{
//     if(b > c){
//         m = b
//     } else {
//         m = b
//     }
// }
 
// console.log(`el mayor numero es: ${m}`);


// Ejercicio 3.8

/**
 *  nalumnos > 100 : costo por alumnos es 65
 *  50 < nalumnos < 99: cosot 70
 * 30 < nalumnos < 49: cosot 95
 *  n alumnos < 30: 4000
 */
// let nAlumnos = 5;
// let precioAlumno;
// let pTotal;

// if(nAlumnos > 100){
//     precioAlumno = 65;
//     pTotal = nAlumnos * precioAlumno;
// } else if(nAlumnos >= 50 && nAlumnos <=99) {
//     precioAlumno = 70;
//     pTotal = nAlumnos * precioAlumno;
// } else if(nAlumnos >= 30 && nAlumnos <=49) {
//     precioAlumno = 95;
//     pTotal = nAlumnos * precioAlumno;
// } else {
//     pTotal = 4000;
//     precioAlumno = pTotal / nAlumnos;
// }

// console.log(`El precio por alumno es: ${precioAlumno}`)
// console.log(`El precio total es: ${pTotal}`)



// ---------- SCOPE DE UNA VARIABLE O AMBITO DE UNA VARIABLE -----
// Ambiento es donde empieza y donde termina la llave

/**
 * Ingresa la cantidad de horas trabajadas
 * Ingresa precio por hora
 * Resultados:
 * Si la cantidad de horas es mayor o igual a 35,
 * el exceso se paga al doble del salario normal
 */

//  Así funciona con let, de otro modo no
//  let precioxHora = 50;
//  let horasTrabajadas = 40;
//  let pagoTotal;   o puede ser let pagoTotal = 0;

//  if (horasTrabajadas >= 35){
//      pagoTotal = 35 * horasTrabajadas + ((horasTrabajadas - 35) * 2 * precioxHora)
//  } else{
//      pagoTotal = horasTrabajadas * precioxHora
//  }

//  console.log(`Pago total = ${pagoTotal}`);



// // Asi funcionaria con VAR
//  let precioxHora = 50;
//  let horasTrabajadas = 40;

//  if (horasTrabajadas >= 35){
//      var pagoTotal = 35 * horasTrabajadas + ((horasTrabajadas - 35) * 2 * precioxHora)
//  } else{
//      pagoTotal = horasTrabajadas * precioxHora
//  }

//  console.log(`Pago total = ${pagoTotal}`);


let nHoras = 7
let precioTotal;

if(nHoras <= 2){
    precioTotal = nHoras * 5
} else if (2 < nHoras && nHoras <= 5){
    precioTotal = ((nHoras - 2) * 4) + 10
} else if (5 < nHoras){
    precioTotal = ((nHoras - 5) * 3) + 22
}

console.log(`El precio total es ${precioTotal}`);