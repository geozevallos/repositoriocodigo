let edades = [12, 13, 45, 43,
65, 34];

console.log(edades)

// Mostrar cada elemento del array
for(let i=0; i<6; i++){
    console.log(edades[i])
}

// Algoritmos numero de personas mayores
// de edad

let contador = 0;

for (let i = 0; i<edades.length; i++){
    if (edades[i] > 17){
        contador++;
    }
}

console.log(`Numero de personas mayores de edad: ${contador}`);



console.log(`La primera edad es: ${edades[0]}`);
console.log(`La última edad es: ${edades[edades.length-1]}`);


/**
 * Del arreglo de edades, crear un nuevo arreglo
 * qque contenga el doble de la entidades del primer
 * arreglo
 */

// let doble = [];
// for (let i = 0; i < edades.length; i++){
//     doble[i] = edades[i] * 2;
//     console.log(typeof edades[i])
// }

// console.log(doble)


let doble = [];
for (let i = 0; i < edades.length; i++){
    if(typeof edades[i] === "number"){
        doble[i] = edades[i] * 2;
    }
}

console.log(doble)