// Api de la clase Array

let edades = [13, 14, 12, 54, 35, 75]
//arreglo.forEach((elemento, [index])=>{})


// 1. Itera todos los elementos y no retorna ningún dato
// 2. No podemos deterner un forEach
// Se le manda un parametro, solo uno, el cual es un callback o
// función anónima

// La funcion que enviamos es x
edades.forEach(function (x){
    console.log(x);
})

// El primero es la función y el segundo sería el iterador
edades.forEach(function (x, i){
    console.log(x + " " + i);
})


// Otra forma con la flecha, omitmimso ciertas cosas
edades.forEach(x => {
    console.log(x);
})

//Esta sigue siendo una función de flecha
edades.forEach(x => 
    console.log(x));



console.log("*****Probando MAp**********");

// arreglo.map((elemento, index) => {}) --------------
/**
 * 1. La función map itera todos lso elementos
 * 2. Retorna un **nuevo arreglo** con la posibilidad de transformar
 * a cada elemento del arreglo
 * 3. Retorna necesarimeente el 100% de los elementos (si tu no especificas
 * lo manda como undefined)
 */

let nuevasEdades = edades.map((el, i) => {
    // Supongamos q queremos obtener un nuevo arreglo
    // a las edades pares con el doble de su valor y los impartes
    // con el mismo valor
    if(el % 2 === 0){
        return el * 2;
    }
    return el;
})

console.log(nuevasEdades);


console.log("*****Probando Filter**********");
/**
 * arreglo.filter((elemento, i) => {})
 * Filtra los elementos en cada iteración y retorna un nuevo arreglo
 * con los elementos que únicamente han sido filtrados
 * OJO: el filtro debe ser una condicional
 * OJO: Si ningún elemento pasa el filtro, 
 * de todos mdos retorna un arreeglo vacío
 * OJO: A cada elemento retornado, no se le puede moficiar el valor 
 * solo retorna el elemnento como tal
 */

let mayoresDeedad = edades.filter((el,i) => {
    if(el<=17){
        return el;
    }
});

console.log(mayoresDeedad);

let NoCumple = edades.filter((el,i) => {
    if(el<=10){
        return el;
    }
});

console.log(NoCumple);



console.log("*****************Usando find*******************");
// arreglo.find((elemento, i) => {}) ------------------------------------
/**
 * Itera los elementos de un arreglo hasta q la condición interna se cumpla,
 * cuando esto sucede, se reotrna el elemento q haya cumplido con la condición
 * OJO: Se retorna el primer elemento q cumpla con la condición (UNO SOLO)
 * FIND a diferencia de filter debe ser usado para encontrar un elemento único
 * Si no se encunetra, se retorna un undefined
 * Al ser encontrado no puede ser alterado en el return
 */

let encontrado = edades.find((el, i) => {
    if(el === 35){
        return el
    }
})

console.log(encontrado);

let busqueda = (edades.find((el, i) => {
    if(el === 445){
        return el
    }
})
)
console.log(busqueda);



console.log("*****Ejemplo reduce*********");
/**
 * array.reduce((acumulador, el) => {})
 */

let sumaEdades = edades.reduce((sumatoria, el) => {
    return sumatoria + el;
}, 0)

console.log(sumaEdades);