// La clase math es una clase estática
// Por ende no se instancia objetos a partir de ella

// Obtener numero aleatorio entre 50 y 170
let aleatorio = Math.random() * (170 - 50) + 50;
console.log(aleatorio);

// Redondear un numero
console.log(Math.round(aleatorio));


//Techo de un numero - Redondear al mayor 10.1 => 11

console.log(Math.ceil(3.1));


// Redondear al menor  9.9 -> 9
console.log(Math.floor(3.9));

//raiz cuadrada
console.log(Math.sqrt(25));