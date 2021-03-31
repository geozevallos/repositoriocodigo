import React, {useState} from "react";
import Curso from "./Curso";
import CursoSeleccionado from "./CursoSeleccionado";
import Carrito from "./Carrito";

const Main = (props) => {
  const [cursoSelected, setCursoSelected] = useState(null);

  const [carrito, setCarrito] = useState([]);



  const miFuncion = (objCurso) => {
    setCursoSelected(objCurso);
  }



  //asi era al principio
  // const agregarAlCarrito = (objCurso) => {
  //   setCarrito([...carrito, objCurso]);
    // sería lo mismo que
    /**
     * let carritoTemporal = [...carrito];
     * carritoTemporal.push(objCurso);
     * setCarrito(carritotemporal)
     */
//  }

const agregarAlCarrito = (objCurso) =>{
//   let cursoExistente = carrito.find((curso) => {
//     if (curso.id === objCurso.id) {
//       return curso;
//     }
// })
let cursoExistente = carrito.find(curso => curso.id === objCurso.id)
if (cursoExistente) return;
setCarrito([...carrito, objCurso])

}

  return (
    <main className="main">
      <CursoSeleccionado cursoSelected={cursoSelected}/>
      <section className="cursos">
        {props.listaCursos.map((objCurso) => {
          return <Curso objCurso={objCurso} 
          funcion = {miFuncion}
          agregarAlCarrito = {agregarAlCarrito}
          key={objCurso.id} />;
        })}
      </section>

<Carrito carrito={carrito}/>


    </main>
  );
};

export default Main;
