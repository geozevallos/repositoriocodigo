//  Imprimir 10 numeros
for(let i = 0; i < 10; i++) {
console.log(i)
}


// Una tabla de multiplicar 
for(let i = 0; i < 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`)
    }


// Generando 5 numeros aleatorios
for(let j = 0; j < 5; j++){
    console.log((Math.random()*(100 - 50) + 50));
}

/**
 * Algoritmo q calcule el promedio de 
 * N notas
 */

//  let sumatoria = 0;
//  let n = 6;

//  for(let i = 0; i < n; i++){
//      let nota = +prompt(`Ingrese la nota ${i + 1}`);
//      sumatoria = nota + sumatoria
//  }

//  console.log(`El promedio total es: ${sumatoria / n}`);


//  Algorimo q muestra de forma descendente
// los numeros pares desde el 45 hasta el 0

for (let i = 45; i >= 0; i--){
if (i % 2 === 0){
    console.log(i);
}
}