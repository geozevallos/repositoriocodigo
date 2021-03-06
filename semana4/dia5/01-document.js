/**
 * document es un objeto que representa a todo
 * el DOM, además tiene propiedades para crear,
 * modificar, asignar eventos con referencia
 * al DOM
 */

console.log(document);


/**Funciones y propiedaes */

/**
 * document.getElementById("id del elemento")
 * Obtiene una referencia al elemento dado su id
 */

 const parrafo1 = document.getElementById("parrafo1");
 console.log(parrafo1);
 
 /**
  * document.getElementsByClassName("nombre de la clase de los elementos");
  * Obtiene una colección de elementos que coincidan con la clase proporcionada
  */
 let languageList = document.getElementsByClassName("language");
 console.log(languageList);
 console.log(languageList[1]);
 
 // Array.from(iterable) convierte una colección de elementos a un arreglo genuino
 languageList = Array.from(languageList);
 
 languageList.forEach((elemento) => {
   console.log(elemento);
 })
 


/**
 * document.querySelector("selector tipo css");
 * Devuelve un único elemento que coincida con el selector css
 * que enviemos ala función
 */

let logo = document.querySelector(".logo");
console.log(logo);

/**
 * document.querySelectorAll("selector tipo css")
 * Devuelve una o más emelementos q coincidan con el selector css
 * que enviemos a la función
 */

let hijosFooter = document.querySelectorAll("footer > *")
console.log(hijosFooter);


/**
 * document.createElement("nombre de la etiqueta")
 * Devuelve la referencia de un elemento HTML de acuerdo al
 * nombre de la etiquetada pasada como parametro
 * OJO: ESte elemento no está presnete en el DOM aún
 */


let header = document.createElement("header");
console.log(header);


let body = document.querySelector("body");
// element.appendChild (otroElemento) inyectar un nuevo elemento ********
// hijo a ese padre
// Agrega al final

// body.appendChild(header);

/**
Podemos agregarlo al principio con element.prepend
 O sea lo inyecta como primer hijo inclusive si ya tenía hijos previamente
 */
body.prepend(header);
