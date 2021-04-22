import React, { useContext, useState } from "react";
import PosContext from "../../../../../context/posContext";
import PosModalInvoice from "../../components/PosModalInvoice";
import PosBoletaItem from "./PosBoletaItem";


const PosBoleta = () => {
  const { pedidos, objMesaGlobal } = useContext(PosContext);
  const [mostrar, setMostrar] = useState(false);

  let items = [];

  //Si existe una mesa global seleccionada, entonces
  //obtener el valor de arreglo de PLATOS de esa mesa
  if (objMesaGlobal) {
    //Encontrando el objeto q tiene la mesa global seleccionada
    let objPedidoActual = pedidos.find(
      (objPedido) => objPedido.mesa_id === objMesaGlobal.mesa_id
    );
    //Si el objePedidoActual existe (lo cla implica que existe un pedido para la mesa global seleccionada)
    if (objPedidoActual) {
      //tomamos su platos en el arreglo items
      items = objPedidoActual.platos;
    }
  }

  return (
    <div class="boleta">
      <h3>
        Pedido Mesa: &nbsp;
        <span class="color-secundario">
          {objMesaGlobal ? objMesaGlobal.mesa_nro : "Seleccione"}
        </span>
      </h3>
      <hr />
      <div class="comanda">
        <h4 class="comanda__mesa">
          {objMesaGlobal ? "Mesa " + objMesaGlobal.mesa_nro : "Seleccione"}
        </h4>
        <p class="comanda__usuario">Carlos Jimenez</p>
        <hr />

        <ul class="comanda__lista">
          {items.map((objItem) => {
            return <PosBoletaItem key={objItem.plato_id} objItem={objItem} />;
          })}
        </ul>
        <button class="boton boton-success boton-block"
        onClick={
          () => {
            setMostrar(true)
          }
        }>PAGAR</button>
      </div>
     <PosModalInvoice 
     mostrar={mostrar}
     setMostrar={setMostrar}/>
    </div>
  );
};

export default PosBoleta;
