import React, {useState} from "react";
import { productos } from "./data.js";
import ListaProducto from "./componentes/ListaProducto";
import Carrito from "./componentes/Carrito"

const App = () => {

  //[estado, funcionQue actualiza] = useState(estadoinicial)
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (nuevoProducto) => {
    setCarrito([...carrito, nuevoProducto])
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <ListaProducto productos={productos} 
          agregarAlCarrito={agregarAlCarrito}/>
        </div>
        <div className="col-12 col-md-6">
          <Carrito carrito={carrito}/>
        </div>
      </div>
    </div>
  );
};

export default App;
