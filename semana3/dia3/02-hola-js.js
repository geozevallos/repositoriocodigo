console.log("Bienvenidos a JS");

//Una linea de comentario

/**
 * Varias lineas
 * de
 * comentarios
 */

// Creando variables
/** 1. Las variables solo se crean una vez
 * 2. Las variables no pueden iniciar con un número
 * 3. Las variables no llevan espacios
 * 4. No debe incluir caracteres especiales (tildes, comas, ñ)
 */
// Puedes usar el punto y coma o no

// Variables de tipo String
let nombre = "Jorge Ernesto";
let apellido = 'Zevallos Rivera'
let direccion = `Buenaventura Rey`;

// Ojo que acá es una variable, no un string
console.log(nombre);
console.log(apellido);
console.log(direccion);

// Concatenar textos
console.log("mi nombre es: " + nombre)

// Otra manera de concatenar: Son backtips
console.log(`Mi dirección es ${direccion}`)


// Variables de tipo NUMBER (abarca numeros enteros y decimales)
let edad =29;
let sueldo = 950.50;
let sueldoConDescuento = sueldo - (sueldo*8/100);

console.log(`Mi sueldo con descuento es ${sueldoConDescuento}`);

// Tipo de dato booleano, 2 posibles valores (true/false)
let transaccion = false;
let cazado = true;

// Modificando la variables
transaccion = true;
cazado = "sí"

console.log(`¿Cazado?: ${cazado}`)
console.log(`¿Transacción exitosa?: ${transaccion}`);


// Tipo de datos = ARRAY o arreglos: Es una colección de elementos
let notas = [5, 4, 10, 12];
console.log(notas)
console.log(`Las notas son: ${notas}`);
console.log(`La primera nota es: ${notas[0]}`);


/** Todas las operaciones matemáticas son similares
 * que en excel por ejm: +, -, *, / 
 * 
 * % --> esta operación, se conoce como módulo devuelve el residuo de una división entera de 2 números
 * 
 */
let residuo1 = 50%2;
console.log(`Residuo de 50 entre 2 es: ${residuo1}`);
let residuo2 = 97%2;
console.log(`Residuo de 97 entre 2 es: ${residuo2}`);


// Operaciones simplificadas
let likes = 0;
likes++;
console.log(`N° de Likes: ${likes}`);

likes=likes+1
console.log(`N° de Likes: ${likes}`);

likes += 1
console.log(`N° de Likes: ${likes}`);

