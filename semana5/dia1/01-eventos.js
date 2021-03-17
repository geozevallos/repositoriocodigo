const inputNombre = document.getElementById("inputNombre");
const formulario = document.querySelector("#formulario");
const inputApellido = document.querySelector("#inputApellido");
const inputEmail = document.querySelector("#inputEmail");
const selectPais = document.querySelector("#selectPais");
const selectDepartamento = document.querySelector("#selectDepartamento");

//console.log(inputNombre);

// Los eventos son funciones que surgen cuando ocurren algo

// Una forma de hacer evento
// formulario.addEventListener("click", () => {})

// Otra manera:

// formulario.onclick = (e) => {
//     console.log("probando");
//     console.log(e);
//     console.log(e.target);
// }

/**
 * oninput ********************************************************
 */

//Importantes cosas q devuelve el target y data

// inputNombre.oninput = (e) => {
//     console.log(e);
//     console.log("el usuario está escribiendo algo"); // cada vez que escribe algo, puedes saber q lo hace
//     console.log(inputNombre.value); // cada vez que escribe sabemos que escribe
// }

// Podemos hacer q la función este afuera ----------------

// let myOninput = (e) => {
//     let idInput = e.target.getAttribute("id"); // también puede ser e.target.id
//     if (idInput === "inputApellido"){
//         console.log("Esta escrbiendo su apellido");
//         console.log(e.target.value);
//     } else{
//         console.log("Esta escrbiendo su nombre");
//         console.log(e.target.value);
//     }
// }

// inputNombre.oninput = myOninput;
// inputApellido.oninput = myOninput;

let datos = {
  nombre: "",
  apellido: "",
  email: "",
};

let myOninput = (e) => {
  datos[e.target.name] = e.target.value;
  console.log(datos);
  console.log(e);
};

inputNombre.oninput = myOninput;
inputApellido.oninput = myOninput;
inputEmail.oninput = myOninput;

/**
 * Evento onsubmit ***************************************************************
 * Se desencadena al enviarse el formulario
 */

//Cuando  un boton es por defecto en el formulario, asume el submit
formulario.onsubmit = (e) => {
  //preventDefault() sirve para detener la ejecución normal de un evento por defecto
  //Ejm: <a> </a> nos direcciona a una oagina con el evento clic
  //ejm: <form> </form> actualiza ela pagina con el evento onsubmit
  //ejm:hacer clic derechoi en el viewport abre un menu contextual en el evento contextmenu
  e.preventDefault();
  
// Una manera de validar sería con if para q no se ingresen registros vacios

//Pero podemos hacerlo con regex

// let regexLetras = new RegExp('^[a-zA-Z]+$');
let regexLetras = new RegExp('^[a-zA-Zñ]{1,5}$');
if(regexLetras.test(datos.nombre)){
  if (regexLetras.test(datos.apellido)){
    console.log("HACIENDO ONSUBMIT");
  } else {
    inputApellido.classList.add("error-input")
    return
  }
} else{
  inputNombre.classList.add("error-input");
  return;
}

  
};

/**
 * onchange: Evento q se dispara cuando el valor select cambia
 */

let paises = [
  { id: 12343, nombre: "Perú" },
  { id: 12, nombre: "México" },
  { id: 13, nombre: "China" },
  { id: 19, nombre: "Argentina" },
];

let departamentos = [
  { id: 22, nombre: "Lima", idPais: 12343, stock: true },
  { id: 23, nombre: "Puno", idPais: 12343, stock: false },
  { id: 24, nombre: "Wujan", idPais: 13, stock: true },
  { id: 25, nombre: "Acapulco", idPais: 12, stock: true },
  { id: 26, nombre: "Fujian", idPais: 13, stock: false },
  { id: 27, nombre: "Buenos Aires", idPais: 19, stock: true },
  { id: 28, nombre: "Cordova", idPais: 19, stock: false },
  { id: 29, nombre: "Tulum", idPais: 12, stock: true },
];

//   Crear listado
const llenarPaises = () => {
  selectPais.innerHTML =
    "<option value='0' selected>Seleccione un país</option>";
  paises.forEach((objPais) => {
    let option = document.createElement("option");
    option.innerText = objPais.nombre;
    option.value = objPais.id;
    selectPais.appendChild(option);
  });
};

llenarPaises();

const llenarDepartamentosByIdPais = (idPaisSeleccionado) => {
  //establecer como valor por defecto 0
  selectDepartamento.innerHTML =
    "<option value='0' selected>Selecciona un departamento</option>";

  //Deshabilitar si si no se selecciona pais
  if (idPaisSeleccionado === 0) {
    selectDepartamento.setAttribute("disabled", "disabled");
    return;
  }

  let depasPorPais = departamentos.filter((objDpto) => {
    if (objDpto.idPais === idPaisSeleccionado) {
      return objDpto;
    }
  });

  //let deptosPorPais = departamento.filter(objDpto => objDpto.idPais === idPaisSeleccionado)

  depasPorPais.forEach((ObjDepa) => {
    let option = document.createElement("option");
    option.innerText = ObjDepa.nombre;
    option.value = ObjDepa.id;

    // Deshabilitar opciones de no haber stock
    // Otra manera de if -> ObjDepa.stock && option.setAttribute("disabled", "disabled")
    if (ObjDepa.stock === false) {
      option.setAttribute("disabled", "disabled");
    }

    selectDepartamento.appendChild(option);
  });

  //elemento.removeAttribute("atributo") -> Remueve o borra un atributo de un elemento
  selectDepartamento.removeAttribute("disabled");
};

selectPais.onchange = () => {
  let idPaisSeleccionado = +selectPais.value;
  llenarDepartamentosByIdPais(idPaisSeleccionado);
};
