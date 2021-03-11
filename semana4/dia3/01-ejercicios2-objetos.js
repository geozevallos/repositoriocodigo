console.log(peliculas);
console.log(generos);

/**
 * Funcion que recibe el id de pelicula e imprime
 * la lista de generos, los nombres, q pertenecen a la pelicula
 * @param {*} peliId
 */
const mostrarGeneroxPeliId = (peliId) => {
  /**
   * 1. Buscar entre todas las peliculas, la que tenga el Id solicitado
   * 2. Recorrer el arreglo de ids, y en cada iteración, recorrer
   * el arreglo de generos para compara si encontramos o no ese id
   */

  let peliEncontrada;

  for (const peli of peliculas) {
    if (peli.id === peliId) {
      peliEncontrada = peli;
    }
  }

  for (const generoId of peliEncontrada.genre_ids) {
    for (const gen of generos) {
      if (generoId === gen.id) {
        console.log(gen.name);
      }
    }
  }
};

mostrarGeneroxPeliId(527774);

mostrarGeneroxPeliId(464052);

/**
 * Dato el nombre de un genero, imprimir todas las peliculas (nombres)
 * que tengan al menos, ese genero en su lista de generos
 * @param {*} nombreGenero
 */
const mostrarPelisByGeneroName = (nombreGenero) => {
  let idGenero;
  for (const genero of generos) {
    if (nombreGenero === genero.name) {
      idGenero = genero.id;
    }
  }
  let listaPelis = [];
  for (const peli of peliculas) {
    for (const generoId of peli.genre_ids) {
      if (generoId === idGenero) {
        listaPelis.push(peli.original_title);
      }
    }
  }
  console.log(listaPelis);
};

mostrarPelisByGeneroName("Adventure");

/**
 * Función q imprime la liastade peliculas con un promedio
 * de calificaciones entre 7 y 10 puntos
 */
const peliculasRecomendadas = () => {
  for (const peli of peliculas) {
    if (peli.vote_average >= 7) {
      console.log(peli.original_title);
    }
  }
};

peliculasRecomendadas();
