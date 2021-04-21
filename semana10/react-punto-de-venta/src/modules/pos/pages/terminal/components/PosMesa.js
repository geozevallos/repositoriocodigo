import React, { useContext } from "react";
import PosContext from "../../../../../context/posContext";

const PosMesa = ({objMesa}) => {
  const {objMesaGlobal, setObjMesaGlobal} = useContext(PosContext)


  return (
    // <li className="mesas__mesa activo"></li>
    <li className=
    {`mesas__mesa ${objMesaGlobal?.mesa_id === objMesa.mesa_id ?
     "activo" : ""}`}
    onClick={() => {
      setObjMesaGlobal({
        ...objMesa
      });
    }}
    >
      <span class="mesas__titulo">Mesa</span>
      <span class="mesas__numero">{objMesa.mesa_nro}</span>
    </li>
  );
};

export default PosMesa;
