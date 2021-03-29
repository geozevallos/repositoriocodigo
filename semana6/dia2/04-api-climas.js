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

const sectioncarrusel = document.getElementById("sectioncarrusel")





// Mapa
var miMapa = L.map("miMapa").setView([-12.7754, -72.88313], 7);
let marcador = L.marker([-12.7754, -72.88313])


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(miMapa);



const mostrarMapa = (rpta) =>{
    miMapa.flyTo([rpta.data.coord.lat, rpta.data.coord.lon], 14);
    let marcador = L.marker([rpta.data.coord.lat, rpta.data.coord.lon]).addTo(miMapa)
}



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


//dibujar los pronósticos
const dibujarPronostico = (rpta) => {


    if (document.getElementsByClassName("carousel-cell").length > 0){
        flkty.destroy();
    };

    sectioncarrusel.innerHTML= "";
    let objPronostico = rpta.data.list;
    objPronostico.forEach((pronostico) => {
        let divcarr = document.createElement("div");
        divcarr.id = "divcarr"
        divcarr.classList.add("card", "mb-3", "mx-1" ,"carousel-cell");
        divcarr.innerHTML=`
        <div class="row">
            <div class="col-md-6 contenedor-imagen">
              <img src="http://openweathermap.org/img/wn/${pronostico.weather[0].icon}@2x.png" alt="..." />
            </div>
            <div class="col-md-6 text-center">
              <div class="card-body">
                <h3 class="card-title"><span>${pronostico.main.temp}</span>&#8451</h3>
                <p class="card-text">
                  <strong>Temp. min.: </strong
                    ><span>${pronostico.main.temp_min}</span> &#8451;
                </p>
                <p class="card-text">
                  <strong>Temp. máx.: </strong
                  ><span>${pronostico.main.temp_max}</span> &#8451;
                </p>

                <p class="card-text">
                  <h4><span>${pronostico.dt_txt}</span></h4>
                </p>
              </div>
            </div>
          </div>
        `;



        sectioncarrusel.appendChild(divcarr)



    });



    iniciarflickity();
}




//Funcion para obtener la ciudad
const getCLimabyCityName = (ciudad) => {
    cargando.removeAttribute("hidden");
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=483673dba53a665af976d0baddcfd02e&units=metric`)
    .then((rpta) => {
        dibujarClima(rpta);
        mostrarMapa(rpta);
        cargando.setAttribute("hidden", "hidden");
    }).catch((error) => {
        console.log(error);
        cargando.setAttribute("hidden", "hidden");
        alert("Ingresa bien la ciudad")
    })

}


//Funcion para obtener el pronostico
const getPronosticoCiudad = (ciudad) =>{
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=483673dba53a665af976d0baddcfd02e&units=metric`)
    .then((rpta) => {
        dibujarPronostico(rpta);
    })
};


// Atrapar al submit de busqueda

formBusqueda.onsubmit = e => {
    e.preventDefault();
    let ciudad = inputBusqueda.value.trim();
    if(ciudad === "") return;
    getCLimabyCityName(ciudad);
    getPronosticoCiudad(ciudad);
}



let flkty;

//Iniciar Flickity
const iniciarflickity = () => {
    const elem = document.querySelector(".main-carousel");
    flkty = new Flickity(elem,{
        cellAlign: "left",
        contain: "true"
    }) 
}






