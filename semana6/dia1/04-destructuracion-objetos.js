/**
 * Destructuración de objetos
 */

// Si se hiciera así reemplaza en ambos valores

let objPersona = {
    nombre: "Jorge",
    apellido: "Zevallos",
    edad: 28,
    Nacionalidad: "peruano"
};

let copia = objPersona;
copia.apellido = "Rivera"
console.log(copia);
console.log(objPersona);


//Destructurado objetos

//Crea una variable apellido a partir de la
//copia del campo "apellido" de objPersona
let { apellido } = objPersona;
//Eso reemplazaria a let apellido = objPersona.direccion

console.log(apellido);

let {nombre, edad} = objPersona;
console.log(nombre, edad);

//Usando el operador rest (...)
//Obtenemos una copia de una nueva variable de todo ObjPersona
let {...copiaPersona} = objPersona;

copiaPersona.apellido = "Zevallos"

console.log(copiaPersona);
console.log(objPersona);


//Destructurar algunos atirubots con nuevos nombres

let{Nacionalidad:nationality} = objPersona;
console.log(nationality);