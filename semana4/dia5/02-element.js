let parrafo1 = document.getElementById("parrafo1");
// si fuera queryselector document.queryselector("#parrafo1")


/**
 * elemento.innerText
 * Obtiene o asigna el texto interno de un elemento
 * <p>o sea este texto de acá</p>
 */

console.log(parrafo1.innerText);

parrafo1.innerText = "Este es el nuevo texto";


let listaLanguage = document.querySelectorAll(".language");
listaLanguage = Array.from(listaLanguage)

console.log(listaLanguage);

/**
 * elemento.innerHTML (GET Y SET)
 * similar a innerText sin embargo puede renderizarse 
 */

listaLanguage.forEach((li, i) =>{
    li.innerHTML = `${li.innerHTML} <small><em>${i}</em></small>`;
})


/** 
 * Ejercicio
 * Iterar la lista de peliculas y agregar dichas peliculas
 * como elementos <li></li> al <ul></ul> que contiene los
 * lenguajes de programacion
 */

// const llenarPeliculas = () => {
//     const ulLenguajes = document.querySelector("#parrafo1 + ul");
//     peliculas.forEach((objPeli) => {
//         const li = document.createElement("li");
//         li.innerText = objPeli.original_title;
//         ulLenguajes.append(li)
//     })
// }

// llenarPeliculas()


const llenarGeneros = () => {
    const selectGeneros = document.querySelector("#selectGeneros")
    generos.forEach((objGenero) => {
        const selectG = document.createElement("option");
        selectG.innerText = objGenero.name;
        selectGeneros.append(selectG)
    })

};

llenarGeneros();

const llenarPeliculas = () => {
    let SelectPeli = document.getElementById("selectPeliculas")
    peliculas.forEach((objPelis) => {
        const opcionPeli = document.createElement("option");
        opcionPeli.innerText = objPelis.original_title;
        SelectPeli.append(opcionPeli);
    })
}

llenarPeliculas()