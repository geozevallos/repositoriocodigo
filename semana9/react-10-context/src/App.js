import React, { useState } from "react";
import Productos from "./components/Productos";
// import ProductosContext from "./context/ProductosContext";
import ProductosState from "./context/productosState";

const App = () => {

  //Esto era sin State
  // const [p, setP] = useState(["prod1", "prod2"]);

  // const generarProducto = () => {
  //   setP([...p, `nuevo producto`]);
  // };



  return (
    //El provide puede pasar values, en su mayoría
    //objetos a todos sus children

    //Esto era sin State
    // <ProductosContext.Provider
    //   value={{
    //     p: p,
    //     generarProducto:generarProducto
    //   }}
    // >
    //   <Productos />
    // </ProductosContext.Provider>
<ProductosState>
    <Productos />
    </ProductosState>
  );
};

export default App;
