import {peliculas} from "./data-peliculas.js"


const contenedor = document.querySelector("#contenedor");
const modalImagen = document.querySelector("#modalImagen");
const modalTitulo = document.querySelector("#modalTitulo");
const modalOverview = document.querySelector("#modalOverview");
const modalPelicula = new bootstrap.Modal(document.getElementById("modalPelicula"))
const carrouselMain = document.querySelector(".main-carousel");

const abrirModalPelicula = objPelicula => {
    modalImagen.src = `https://image.tmdb.org/t/p/w500${objPelicula.poster_path}`;
    modalTitulo.innerText = objPelicula.original_title;
    modalOverview.innerText = objPelicula.overview;
    modalPelicula.show();
}


const fillMovies = () => {
    peliculas.forEach((objPelicula) => {

        //Crenado la columna
        const col = document.createElement("div");
        col.classList.add("col-md-3")

        //Creando el card
        const card = document.createElement("div")
        card.classList.add("card");
        card.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${objPelicula.poster_path}" alt="" class="card-img-top" />`

        //CReando el cardbody
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.innerHTML = `<h4 class="card-title">${objPelicula.original_title}</h4>`

        //Creando el card text
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = `${objPelicula.overview.substr(0,80)}...`

        //creando el link "leer más"
        const cardLink = document.createElement("a");
        cardLink.innerText = "leer más..."
        cardLink.href = "#";

         cardLink.onclick = (e) => {
         e.preventDefault();
         abrirModalPelicula(objPelicula);
         }



        //Creando cardFeatures
        const cardFeatures = document.createElement("ul");
        cardFeatures.classList.add("movie__features");

        //Elegir icono
        const iconoAdultro = objPelicula.adult ? `<i class="fas fa-ban text-danger"></i>` : `<i class="fas fa-check text-success"></i>`
        //Creando la lista
        const listString = `<li><small class="text-muted"><i class="fas fa-calendar"></i> ${objPelicula.release_date}</small></li>
        <li><small class="text-muted"><i class="fas fa-star text-warning"></i> ${objPelicula.vote_average}</small></li>
        <li><small class="text-muted"><i class="fas fa-heart text-danger"></i> ${objPelicula.vote_count}</small></li>
        <li><small class="text-muted"> ${iconoAdultro}</small></li>`;

        cardFeatures.innerHTML = listString;


        //Colocando el card dentro de la columna
        col.appendChild(card);

        //Colocando el cardbody
        card.appendChild(cardBody);

        //Colocando el card body como padre pararafo
        card.appendChild(cardText);


        cardText.appendChild(cardLink);
        cardBody.appendChild(cardFeatures);




        //Colocanodo en el contenedor
        contenedor.appendChild(col);
    })
};


fillMovies();


const dibujarPopulares = () => {
    peliculas.forEach((objPelicula) => {
        const cell = document.createElement("div");
        cell.classList.add("carousel-cell");
        cell.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${objPelicula.poster_path}" alt="" class="card-img-top" />`;
        carrouselMain.appendChild(cell);
    })
}

dibujarPopulares();

const iniciarflickity = () => {
    const elem = document.querySelector(".main-carousel");
    var flkty = new Flickity(elem,{
        cellAlign: "left",
        contain: "true"
    }) 
}

iniciarflickity();