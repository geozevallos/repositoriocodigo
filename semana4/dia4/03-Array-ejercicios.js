/***
 * Funcion que retorna un nuevo arreglo de pelicula
 * donde cada objPelicula tendrá un atributo adicional
 * llamando genres que será un arreglo q tenga la lista
 * de generosen string (Los nombres)
 */

//  function agregarGeneros() {
//     let peliculasModificadas = peliculas.map((objPeli) => {
//       let names = objPeli.genre_ids.map((idGenero) => {
//         let objGeneroEncontrado = generos.find((objGenero) => {
//           if (objGenero.id === idGenero) {
//             return objGenero
//           }
//         })
//         return objGeneroEncontrado.name;
//       })
//       objPeli.genres = names;
//       return objPeli;
//     });
//     console.log(peliculasModificadas);
//   }

//   agregarGeneros()


  /**
   * Función q imprime un objeto género cuyo id sea igual al 
   * parámetro 
   * @param {*} idGenero 
   */
  function getGeneroById(idGenero){
     let objGeneroEncontrado = generos.find((objGenero) => {
          if(objGenero.id === idGenero){
              return objGenero;
          }
      })
      console.log(objGeneroEncontrado);
  }

//   getGeneroById(16);



/**
 * Función q imprime la lista de géneros dado un arreglo de Ids (ids Generos)
 * 
 * @param {*} idsGeneros 
 */
 function getGenerosByIds(idsGeneros = []) {
    let objsGeneros = idsGeneros.map((idGenero) => {
      let objGeneroEncontrado = generos.find((objGenero) => {
        if (objGenero.id === idGenero) {
          return objGenero
        }
      });
      return objGeneroEncontrado;
    });
    console.log(objsGeneros);
  }
  
  getGenerosByIds([35, 99]);
