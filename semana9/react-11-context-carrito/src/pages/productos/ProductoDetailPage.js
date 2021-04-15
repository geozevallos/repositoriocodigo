import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductosById } from "../../services/productoService";

const ProductoDetailPage = (props) => {
  let params = useParams();
  let productoId = params.id;

  const [objProducto, setObjProducto] = useState(null);

  useEffect(() => {
    getProductosById(productoId).then((rpta) => {
      setObjProducto(rpta.data);
      console.log(rpta.data);
    });
  }, [productoId]);

  return (
    <main className="container">
      {objProducto ? (
        <div className="row">
          <div className="col-md-6">
            <img src={objProducto.imagen} alt="" style={{
                maxWidth: "100%", borderRadius: "8px"
            }} />
          </div>

          <div className="card col-md-6">
            <div className="card-body">
              <h4 className="card-title">{objProducto.nombre}</h4>
              <p className="card-text">{objProducto.descripcion}</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Stock</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{objProducto.stock}</td>
                    <td>{objProducto.precio}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default ProductoDetailPage;
