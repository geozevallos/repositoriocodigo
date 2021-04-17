import React from "react";
import PosPlato from "./PosPlato";

const PosPlatos = () => {
  return (
    <div class="carta">
      <h3>
        Lista de Platos Categoria: &nbsp;{" "}
        <span class="color-secundario">BEBIDAS</span>
      </h3>

      <div class="carta__platos">
          <PosPlato />
      </div>
    </div>
  );
};

export default PosPlatos;
