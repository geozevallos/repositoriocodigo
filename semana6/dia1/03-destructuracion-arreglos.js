/**
 * Destructuración de arreglos:
 *
 */

let edades = [12, 15, 16, 34, 56, 54, 23, 75];


let [a, b, c, d] = edades;

let [uno, dos, ...resto] = edades;

console.log(resto);


let[...copiaEdades] = edades;
console.log(copiaEdades);

let nuevasEdades = [...edades];
console.log(nuevasEdades);


// Simulemos q la función getCoords, retorna un arreglo
// de 2 posiciones, en la primera se encuentra
//la latitud de la ciudad y en la segunda la longitud
const getCoords = (ciudad) => {
    return [-12.23232, -72.23231]
}

const [latitud, longitud] = getCoords("Lima");
console.log(latitud);
console.log(longitud);

let notas = [[12, 11, 15], [11, 13, 18]];

let [[n1,n2,n3], alumno2] = notas

console.log(n2);
console.log(alumno2);