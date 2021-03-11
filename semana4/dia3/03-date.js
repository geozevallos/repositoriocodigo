/**
 * Trabajamos con date para manejar fechas
 */

let fechaHoy = new Date();
console.log(fechaHoy);

//Mostrar el año de una fecha
console.log(fechaHoy.getFullYear());

//Mostrar el mes de una fecha -- Ojo acá, los meses empiezan en 0
console.log(fechaHoy.getMonth());

//Mostrar el día de una fecha
console.log(fechaHoy.getDate());

let diaDeLaMadre2021 = new Date(2021, 4, 9);


// cuando restamos una fecha, el resultado se muestra 
// en milisegundos, la unidad minima de meddida de tiempo en JS

let milisengundos = diaDeLaMadre2021 - fechaHoy;
let segundos = milisengundos / 1000;
let minutos = segundos /60;
let horas = minutos/60;
let dias = horas /24;