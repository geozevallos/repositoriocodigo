import {API, despedida} from './data.js'

//Para importar el default, sin llaves
//import saludar from './data.js'

//Pero también se puede importar con otro nombre el default
//Como es solo uno, no importará ponerle otro nombre
//este se debe usar se encadena varias funcionalidades dentro
// de una misma variable
import funcionSaludar from "./data.js"

//importa todo como un objeto
import * as funciones from "./data.js"

//Importando como nuevo nombre
import {API as APInuevonombre} from  "./data.js"

//Importando un default de otro archivo
import miLibreria from "./data2.js"



console.log(API);


//saludar();

funcionSaludar();
despedida();


console.log(funciones.API);


console.log(miLibreria.API_BACKEND);