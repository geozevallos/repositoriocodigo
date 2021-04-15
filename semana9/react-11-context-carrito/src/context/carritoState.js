import React, { useState } from "react";
import CarritoContext from "./carritoContex";

const CarritoState = (props) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (objProducto) =>{
    //1.  Hacer una copia del carrito
    let carritoTemporal = [...carrito]
    //2.Buscar en el array si ya existe un producto
    let posicion = carritoTemporal.findIndex((objProductoCarrito)=> objProductoCarrito.id === objProducto.id);
    
    
    if (posicion >= 0){
      carritoTemporal[posicion].cantidad++;
      setCarrito(carritoTemporal);
    }else{
      //Agregamos al carrito un nuevo producto
      carritoTemporal.push({...objProducto, cantidad: 1});
      setCarrito(carritoTemporal);
    }
    
  }

  const eliminarProducto = id =>{
    let carritoTemporal = [...carrito];
    let posicion = carritoTemporal.findIndex((objProducto) => objProducto.id === id)
    carritoTemporal.splice(posicion, 1);
    setCarrito(carritoTemporal);
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito: carrito,
        agregarAlCarrito: agregarAlCarrito,
        eliminarProducto: eliminarProducto
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
