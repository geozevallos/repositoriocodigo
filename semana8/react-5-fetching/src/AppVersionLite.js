import React, { useState, useEffect, useRef } from "react";
import { getNewsByTag } from "./servicios/servicios.js";

const AppVersionLite = () => {
  console.log("Inicio componente APP");
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("elecciones");
  const refInputBusqueda = useRef();


  useEffect(() => {
    console.log("Inicio Use Effect");
    getNewsByTag(busqueda).then((rpta) => {
      console.log("Llegó la data");
      console.log(rpta.data);
      setNoticias(rpta.data.articles);
      setCargando(false);
    });
  }, [busqueda]);

  console.log("Antes del render");



const handleSubmit = (e) => {
  e.preventDefault();
  let termino = refInputBusqueda.current.value;
  setBusqueda(termino);
  setCargando(true)
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" ref={refInputBusqueda}/>
        <button type="submit" > Buscar</button>
      </form>
    <hr/>
      {
        cargando ? <p>Cargando, manito!</p> : noticias.map((n) => {return <p>{n.title}</p>;
        })
      }
      
    </div>
  );
};

export default AppVersionLite;
