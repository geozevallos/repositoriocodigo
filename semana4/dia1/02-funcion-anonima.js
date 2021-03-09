// Funcion anonima (normalemnte sirven una sola vez)

// Así se puede ejecutar 
(function(a,b){
    console.log(a + b);
})(5,6);



const sumar = function(a,b){
                return a+b;
                };

console.log(sumar(50,60));



// Llamando la función adentro
// function multiplicar(n1, n2) {
//     let sumatoria = 0;
//     for (let i = 0; i < n1; i++){
//         sumatoria = sumar(sumatoria, n2)
//     }
//     console.log(sumatoria);
// }

// multiplicar(5,10);


// Asignando un tercer parámetro función
function multiplicar(n1, n2, fn) {
    let sumatoria = 0;
    for (let i = 0; i < n1; i++){
        sumatoria = fn(sumatoria, n2)
    }
    console.log(sumatoria);
}

multiplicar(3,11, sumar);