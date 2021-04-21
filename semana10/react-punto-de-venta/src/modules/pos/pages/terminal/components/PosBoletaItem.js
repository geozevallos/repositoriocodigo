import React from "react";

const PosBoletaItem = ({objItem}) => {
  return (
  
      <li class="comanda__item">
        <p class="comanda__nombre">
          <span>
            <strong>{objItem.plato_nom}</strong>
          </span>
          <span>Precio S/ {objItem.plato_pre}</span>
        </p>
        <p class="comanda__cantidad">{objItem.plato_cant}</p>
        <p class="comanda__precio">
          <strong>S/ {objItem.plato_cant * +objItem.plato_pre}</strong>
        </p>
      </li>
     

  );
};

export default PosBoletaItem;
