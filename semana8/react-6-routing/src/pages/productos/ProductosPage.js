import React, { useEffect, useState } from "react";
import { getProductos, getProductosByTag } from "../../services/productoService";
import Productos from "./components/Productos";
import ProductosFilter from "./components/ProductosFilter";



const ProductosPage = () => {

const [productos, setProductos] = useState([]);
const [tag, setTag] = useState("");

useEffect(() => {
    getProductos().then(rpta => {
        setProductos(rpta.data);
    })
}, []);

useEffect(()=>{
    if (tag !== "")
{    getProductosByTag(tag).then(rpta => {
        setProductos(rpta.data);
    })}
}, [tag])


  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-md-4">
            <ProductosFilter/>
        </div>
        <div className="col-md-8">
            <Productos productos = {productos}/>
        </div>
      </div>
    </main>
  );
};

export default ProductosPage;
