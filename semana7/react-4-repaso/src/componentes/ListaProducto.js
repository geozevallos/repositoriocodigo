import React from "react";
import CardProducto from "./CardProducto";

const ListaProducto = ({ productos, agregarAlCarrito }) => {
  return (
    <div>
      <h1>Mis productos</h1>
      <div className="row">
        {productos.map((prod, indice) => (
          <CardProducto prod={prod} key={indice}
          agregarAlCarrito ={agregarAlCarrito} 
        />
        ))}
      </div>
    </div>
  );
};

export default ListaProducto;
