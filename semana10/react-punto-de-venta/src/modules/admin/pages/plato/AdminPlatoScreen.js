import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { getPlatos } from "../../../../services/platoService";

const platosInicial = {
    columns: [
      {
        label: "#",
        field: "posicion",
      },
      {
        label: "Id",
        field: "plato_id",
      },
      {
        label: "Nombre",
        field: "plato_nom",
      },
      {
        label: "Imagen",
        field: "plato_img",
      },
      {
        label: "Precio",
        field: "plato_pre",
      },
      {
        label: "Categoria",
        field: "categoria_nom",
      },
    ],
    rows: [],
  };



const AdminPlatoScreen = () => {
 

  const [cargando, setCargando] = useState(true);
  const [platos, setPlatos] = useState(platosInicial);


  useEffect(() => {
      getPlatos().then(rpta => {
          if(rpta.data.ok) {
              setPlatos({
                  ...platosInicial,
                  rows: rpta.data.content.map((objPlato, i) => {
                      return{
                          posicion: i+1,
                          plato_id: objPlato.plato_id,
                          plato_nom: objPlato.plato_nom,
                          plato_img: <img src={objPlato.plato_img} width="100"/>,
                          plato_pre: `S/ ${(+objPlato.plato_pre).toFixed(2)}`,
                          categoria_nom: objPlato.Categorium?.categoria_nom || "Sin Categoría"
                      }
                  })
              })
              setCargando(false)
          }
      })
  }, []);

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <button className="btn btn-primary" onClick={() => {}}>
                Crear Plato
              </button>
              <hr />
              {cargando ? (
                <div className="alert alert-info">Cargando</div>
              ) : (
                <MDBDataTableV5 data={platos} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPlatoScreen;
