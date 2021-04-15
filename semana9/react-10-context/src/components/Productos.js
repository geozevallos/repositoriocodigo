import React, { useContext } from "react";
import ProductosContext from "../context/ProductosContext";

const Productos = () => {


// Esto era sin state  
//   const {p, generarProducto} = useContext(ProductosContext);
//   console.log(p);

const {listaProductos, generarProducto} = useContext(ProductosContext);

  return (
    // <div>
    //   <button onClick={generarProducto}>Generar Producto</button>
    //   <ul>
    //     {p.map((producto) => {
    //       return <li>{producto}</li>;
    //     })}
    //   </ul>
    // </div>
    <div>
        <button onClick={
            generarProducto
        }>
            Generar Producto
        </button>
        <ul>
            {listaProductos.map((producto) => {
                return <li>{producto}</li>
            })}
        </ul>
    </div>


  );
};

export default Productos;
