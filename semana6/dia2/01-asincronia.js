console.log(1);
console.log(2);

//Esta es un función asincrona
setTimeout(() => {
    console.log(3);
}, 2000);

console.log(4);

console.log(5);



// El callback es una alternativa
const getCoords = (ciudad, callback) => {
    let rpta = undefined;
    setTimeout(() => {
        rpta = [-12.231823, -72.92393];
        callback(rpta);
    }, 3000)

}

getCoords("Lima", (rpta) => {
    console.log("Resultado");
    console.log(rpta);
});

for (const n of ["Jaime", "Gabi", "Mía"]) {
	console.log(n);
}

