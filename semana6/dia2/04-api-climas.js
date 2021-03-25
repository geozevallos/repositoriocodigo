const climaCiudad = document.getElementById("climaCiudad");
const climaIcono = document.getElementById("climaIcono");
const climaTemp = document.getElementById("climaTemp");
const climaTempMin = document.getElementById("climaTempMin");
const climaTempMax = document.getElementById("climaTempMax");
const climaSensacion = document.getElementById("climaSensacion");
const climaHumedad = document.getElementById("climaHumedad");
const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const cargando = document.getElementById("cargando")


//Modificar el DOM
const dibujarClima = (rpta) => {
    climaCiudad.innerText = rpta.data.name;
    climaTemp.innerText = rpta.data.main.temp;
    climaTempMin.innerText = rpta.data.main.temp_min;
    climaTempMax.innerText = rpta.data.main.temp_max;
    climaSensacion.innerText = rpta.data.main.feels_like;
    climaHumedad.innerText = rpta.data.main.humidity;
    climaIcono.src = `http://openweathermap.org/img/wn/${rpta.data.weather[0].icon}@2x.png`

}



//Funcion para obtener la ciudad
const getCLimabyCityName = (ciudad) => {
    cargando.removeAttribute("hidden");
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=483673dba53a665af976d0baddcfd02e&units=metric`)
    .then((rpta) => {
        dibujarClima(rpta);
        cargando.setAttribute("hidden", "hidden");
    }).catch((error) => {
        console.log(error);
        cargando.setAttribute("hidden", "hidden");
        alert("Ingresa bien la ciudad")
    })

}



// Atrapar al submit de busqueda

formBusqueda.onsubmit = e => {
    e.preventDefault();
    let ciudad = inputBusqueda.value.trim();
    if(ciudad === "") return;
    getCLimabyCityName(ciudad);

}

