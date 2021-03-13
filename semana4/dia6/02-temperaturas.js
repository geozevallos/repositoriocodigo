// Llenar la tabla con los valores correspondientes
// por cada muestra de temperatura del arreglo de temperaturas

/**
 * Ejemplo con manejo de fechas
 */

let fechaString = "2021-03-13 19:00:00";

//Creando un objeto fecha
let fecha = new Date(fechaString);
console.log(fecha);


//Obteniendo el año de una fecha
console.log(fecha.getFullYear);

//Obteniendo la hora, minutos
console.log(fecha.getHours);
console.log(fecha.getMinutes);
console.log(fecha.getSeconds);