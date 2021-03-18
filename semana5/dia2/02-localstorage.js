const formulario = document.getElementById("formulario");
const inputTitulo = document.getElementById("inputTitulo");
const inputDescripcion = document.getElementById("inputDescripcion");
const tbody = document.getElementById("tbody");


let arrayTODOS = [];

formulario.onsubmit = function (e) {
  e.preventDefault();
  if (inputTitulo.value.trim() === "" || inputDescripcion.value.trim() === "") {
    //Mostrar Error
    Swal.fire({
        icon: "error",
        title: "Ups!",
        text: "Todos los campos deben estar debidamente llenados",
        //timer: 1000 / esta en milisegundos
    })
    return;
  }

  let objTODO = {
    titulo: inputTitulo.value,
    descripcion: inputDescripcion.value,
  };

  arrayTODOS.push(objTODO);

  //Guardar arreglo en el local Storage

  //stringify retorna el valor del JSON transfomrado a string

  let arregloString = JSON.stringify(arrayTODOS);
  localStorage.setItem("todos", arregloString);

  this.reset();
  dibujarTODOS();
};

/**
 * Funcion que toma el arrayTODOS y lo dibuja en el tbody
 */

const dibujarTODOS = () => {
  // Limpiando la tabla
  tbody.innerText = "";

  arrayTODOS.forEach((objTODO, i) => {
    const tr = document.createElement("tr");
    const tdNro = document.createElement("td");
    const tdTarea = document.createElement("td");
    const tdAcciones = document.createElement("td");
    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";

    // Configurando el evento click para cada boton
    btnEliminar.onclick = () => {
      eliminarTODO(i);
    };

    tdNro.innerText = i + 1;
    tdTarea.innerHTML = /*html*/ `
        <h3>${objTODO.titulo}</h3>
        <p>${objTODO.descripcion}</p>`;
    tdAcciones.appendChild(btnEliminar);

    tr.appendChild(tdNro);
    tr.appendChild(tdTarea);
    tr.appendChild(tdAcciones);

    tbody.appendChild(tr);
  });
};

const eliminarTODO = (posicion) => {
  /** array.splice(posicion, nro_elementos) 
     * Elimina "nro_elementos" de un arreglo a partir de la posicion "posicion"
        
    OPCIONALMENTE RETORNA EL ELEMENTO ELIMINADO*/

  arrayTODOS.splice(posicion, 1);
  // actualizar el localstorage
  localStorage.setItem("todos", JSON.stringify(arrayTODOS));
  dibujarTODOS();
};

(() => {
  if (localStorage.getItem("todos")) {
    /**
     * Devuelve un JSON como tal dado un string
     * JSON.parse(string-en-formato-json)
     */
    arrayTODOS = JSON.parse(localStorage.getItem("todos"));
    dibujarTODOS();


    //Usando la libreria waves
    Waves.attach('#btnSubmit', ['waves-light']);
    Waves.init();
  }
})();
