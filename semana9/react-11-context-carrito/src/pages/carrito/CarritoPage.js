import React, { useContext } from "react";
import { NotificationContainer, NotificationManager} from 'react-notifications';
import CarritoContext from "../../context/carritoContex";

const CarritoPage = () => {


  const {carrito, eliminarProducto} = useContext(CarritoContext);

//sumatoria, viene a ser el contador, empieza en 0
let total = carrito.reduce((sumatoria, objProducto) => {
  return sumatoria + (objProducto.precio*objProducto.cantidad)
}, 0)


  return (
    <main className="container">
      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((objProducto, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{objProducto.id}</td>
                    <td>{objProducto.nombre}</td>
                    <td>{objProducto.descripcion}</td>
                    <td>
                      <img src={objProducto.imagen} alt="" width="60" />
                    </td>
                    <td>{objProducto.cantidad}</td>
                    <td>{objProducto.precio}</td>
                    <td>
                      <button className="btn btn-danger btn-sm"
                      onClick={ ()=>{
                        NotificationManager.error("ELiminado!", "Producto eliminado",2000)
                        eliminarProducto(objProducto.id)
                      }
                      }>Eliminar&times;</button>
                    </td>
                  </tr>
                );
              })}

              <tr style={{fontSize: "18px"}}>
                <td colSpan = "7">Total</td>
                <td>{total.toFixed(2)
                }</td>
              </tr>
            </tbody>
          </table>
        </div>
        <NotificationContainer/>
      </div>
    </main>
  );
};

export default CarritoPage;
