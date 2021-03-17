const formulario = document.getElementById("formulario");
const inputColor = document.getElementById("inputColor");
const btnGuardar = document.getElementById("btnGuardar");
const body = document.querySelector("body");


formulario.onsubmit = e => {
    e.preventDefault();
    let color = inputColor.value;
    body.style.backgroundColor = color;

//Guardar datos en el local storage
//Ojo: acá solo se guardan strings
//setItem("clave","valor")
localStorage.setItem("fondo", color);
}

(() => {
    //Obtener valores del localStorage
    if (localStorage.getItem("fondo")){
        body.style.backgroundColor = localStorage.getItem("fondo");
        inputColor.value = localStorage.getItem("fondo");
    }
})()

document.querySelector("#btnBorrar").onclick = e => {
    localStorage.removeItem("fondo");
    body.style.backgroundColor = '#ffffff';
    inputColor.value = '000000'
}


