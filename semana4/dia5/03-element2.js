// Obtener y setear atributos a los elementos

let div1 = document.querySelector("#div1");


let btnCirculo = document.querySelector("#btnCirculo");
let btnCuadrado = document.querySelector("#btnCuadrado");

let div2 = document.querySelector("#div2");
let interruptor = document.querySelector("#interruptor")


btnCirculo.onclick = function(){
    div1.classList.remove("cuadrado");
    div1.classList.add("circulo");
}

btnCuadrado.onclick = function(){
    div1.classList.remove("circulo");
    div1.classList.add("cuadrado");
}

interruptor.onclick = function(){
    div2.classList.toggle("circulo");
}


let tabla = document.querySelector("#tabla");
let btnBordeMenor = document.querySelector("#btnBordeMenor");
let btnBordeNeutro = document.querySelector("#btnBordeNeutro");
let btnBordeMayor = document.querySelector("#btnBordeMayor");


btnBordeNeutro.onclick = function() {
    /**
     * elemento.getAttribute("NombreDelAtributo")
     * 
     * 
     * elemento.setAttribute("NombreDelAtributo", "valor_atributo")
     */
    let borde = +tabla.getAttribute("border");
    if(borde===0){
        tabla.setAttribute("boder", "1")
    } else {
        tabla.setAttribute("border", "0")
    }
}


btnBordeMayor.onclick = function(){
    let borde = +tabla.getAttribute("border");
    borde++
    tabla.setAttribute("border", borde)
}


btnBordeMenor.onclick = function(){
    let borde = +tabla.getAttribute("border");
    if (borde === 0) return;
    borde--;
    tabla.setAttribute("border", borde)
}