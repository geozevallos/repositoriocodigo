
let dnisDB = ["01542132", "22222222", "33333333 "];
let nombresDB = ["Jorge", "Miriam", "Patty"];
let placasDB = ["abc-123", "pol-789", "acx-456"];
let marcaModeloDB = ["Mazda-CX3", "Hyundai-Accent", "Audi-Lemans"];



// if(nombredelavariable)  <- Con esto podemos saber si existe la variable o no
// O sea no es null, ni undefined
function buscaPorDni(consultaDNI) {
  if (consultaDNI) {
    for (let i = 0; i < dnisDB.length; i++) {
      if (consultaDNI === dnisDB[i]) {
        console.log(nombresDB[i]);
      }
    }
  } else{
      console.log("El dni es erroneo o no se ha enviado");
  }
}


function buscarPorPlaca(consultaPlaca){
    if (consultaPlaca){
        for(let i = 0; i < placasDB.length; i++){
            if(consultaPlaca === placasDB[i]){
                console.log(marcaModeloDB[i]);
                return;
            }
        }
    } else{
        console.log("No se ha enviado la placa");
        return;
    }
    console.log("No se ha encontrado la placa solicitada");
}



let dni = "22222222";
let placa = "abc-123";

buscaPorDni(dni);

buscarPorPlaca("acx-456");


/**
 * Funcion que recibe un monto y retorna otro
 * respecto al tipo de cambio o el modo
 * @param {number} monto Cantidad de dinero que se desea cambiar 
 * @param {string} modo "pen-US" o "US-pen" retornará el cambio correspondiente
 * @return {number} Se retorna el valor convertido
 */
function cambioMoneda(monto, modo = "pen-US"){
    let tCambio = 3.7;
    if(modo === "pen-US"){
        return (monto / tCambio).toFixed(2);
    } else if(modo === "US-pen"){
        return monto * tCambio;
    } else {
        return -1;
    }
}


let resultado = cambioMoneda(500, "pen-US");

console.log(resultado);

// Este no se guarda
console.log(cambioMoneda(4000,"US-pen"));