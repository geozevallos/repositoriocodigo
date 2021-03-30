import React from "react";
import { listaPeliculas } from "../data/data-peliculas";
import Pelicula from "./Pelicula"
import "./../estilos/peliculas.css";


const Peliculas = () => {





  return (
    <div className="col-md-9">
      <div className="row">
        {listaPeliculas.map((pelicula) => {
          return (
              <Pelicula peli={pelicula} key={pelicula.id}/>
          )
        })}
      </div>
    </div>
  );
};

export default Peliculas;
