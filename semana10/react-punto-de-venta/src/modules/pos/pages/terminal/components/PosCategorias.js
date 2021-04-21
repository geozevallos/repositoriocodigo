import React, { useEffect, useState } from "react";
import { getCategorias } from "../../../../../services/categoriaService";
import PosCategoria from "./PosCategoria";

const PosCategorias = () => {

  const [caterogias, SetCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then((rpta) => {
      if (rpta.data.ok){
        SetCategorias(rpta.data.content);
      }
    })
  })




  return (
    <nav class="menu">
      <ul class="menu__lista">
          {caterogias.map((objCategoria) => {
            return <PosCategoria key = {objCategoria.categoria_id}
            objCategoria={objCategoria} />
          })}
      </ul>
    </nav>
  );
};

export default PosCategorias;
