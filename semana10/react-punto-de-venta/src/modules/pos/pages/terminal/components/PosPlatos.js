import React, { useContext, useEffect, useState } from "react";
import PosContext from "../../../../../context/posContext";
import { getPlatosByCategoriaId } from "../../../../../services/categoriaService";
import PosPlato from "./PosPlato";

const PosPlatos = () => {
  const [platos, setPlatos] = useState([]);
  const { objCategoriaGlobal } = useContext(PosContext);

  useEffect(() => {
    if (objCategoriaGlobal) {
      getPlatosByCategoriaId(objCategoriaGlobal.categoria_id).then((rpta) => {
        if(rpta.data.ok) {
          setPlatos(rpta.data.content.Platos)
        };
      });
    }
  }, [objCategoriaGlobal]);

  return (
    <div class="carta">
      <h3>
        Lista de Platos Categoria: &nbsp;{" "}
        <span class="color-secundario">
          {objCategoriaGlobal ? objCategoriaGlobal.categoria_nom : "Seleccione una categoria"}
          </span>
      </h3>

      <div class="carta__platos">
        {
          platos.map((objPlato) => {
            return <PosPlato key={objPlato.plato_id}
            objPlato = {
              objPlato
            } />
          })}
      </div>
    </div>
  );
};

export default PosPlatos;
