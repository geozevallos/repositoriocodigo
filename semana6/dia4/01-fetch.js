/**
 * Uso de la función fetch
 * 
 * Por defecto es el get
 */

const API = "https://reqres.in/api/users?page=2";


// En 2 promesas la petición AXIOS solo lo trae en uno
fetch(API).then((peticion) => {
    peticion.json().then((data) =>{
        console.log(data);
    })
})

//1. pedir las peliculas
//2. Pedir laos generos
// 3. vinculas las peliculas con las categorias

const apiPeliculas = "https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1"
const apiGeneros = "https://api.themoviedb.org/3/genre/movie/list?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES"

// fetch(apiPeliculas).then((pet1) =>{
//     pet1.json().then((peliculas) =>{
//         fetch(apiPeliculas).then((pet2) =>{
//             pet2.json().then((generos) =>{
//                 console.log(peliculas);
//                 console.log(generos);
//             }) 
//             }
//         )
//     })
// )

fetch(apiPeliculas).then((peticion) => {
    return peticion.json();
}).then((peliculas) =>{
    return fetch(apiGeneros);
});

