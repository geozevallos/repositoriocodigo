// Crear un objeto
let mascotaPerdida = {
    raza: "Pitbull",
    colores: ["negro", "blanco", "cafe"],
    encontradoEn: "Av. Arequipa",
    alturaMetros: 0.5,
    edadAprox: 1.5,
    nroContacto: "985658545",
    genero: "macho"
}



console.log(`Raza: ${mascotaPerdida.raza}`);
console.log(`Raza: ${mascotaPerdida.colores}`);
// Otra forma de acceder a un atributo
console.log(`Altura aproximada ${mascotaPerdida["alturaMetros"]} m.`);

for (const color of mascotaPerdida.colores) {
    console.log(color);
}


console.log(mascotaPerdida);

// Esto no se debe hacer!!!
// Crear un objeto en base a otro
let duqueza = mascotaPerdida;
duqueza.genero = "Hembra";
console.log(duqueza);

console.log("****************");
// Como sacar una copia a un objeto en una nueva memoria

let kyra = {... mascotaPerdida};
kyra.genero = "Indefinido"
console.log(kyra);

console.log(mascotaPerdida);

console.log("--------------------------------------");


// Creando un constructor de objetos?
// const MascotaConstructor = function(){
//     let mascotaPerdida = {
//         raza: "Pitbull",
//         colores: ["negro", "blanco", "cafe"],
//         encontradoEn: "Av. Arequipa",
//         alturaMetros: 0.5,
//         edadAprox: 1.5,
//         nroContacto: "985658545",
//         genero: "macho"
//     }
//     return mascotaPerdida;
// }

// De la manera anterior sería muy tedisoo, mejor pasamos 

const MascotaConstructor = function (_raza, _colores,
                                    _encontradoEn,_alturaMetros,
                                    _edadAprox, _nroContacto,_genero) {
let mascotaPerdida = {
raza: _raza || "",
colores: _colores || [],  // Un "o" siempre coge el primer elemento, al menos que sea un null o undefined
encontradoEn: _encontradoEn || "",
alturaMetros: _alturaMetros || 0,
edadAprox: _edadAprox || 0,
nroContacto: _nroContacto || "",
genero: _genero || ""
}
return mascotaPerdida;
}




let fido = MascotaConstructor("Shit-zu", ["marron"], "Av. Los Proceres", 1.20, 4, 948472838, "macho");
fido.raza = "Dalmata"
console.log(fido);

let pirata = MascotaConstructor();
console.log(pirata);
