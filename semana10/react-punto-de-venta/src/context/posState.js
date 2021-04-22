import React, { useState } from "react";
import PosContext from "./posContext";

const PosState = (props) => {
  const [objMesaGlobal, setObjMesaGlobal] = useState(null);
  const [objCategoriaGlobal, setObjCategoriaGlobal] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  const modificarPlatoContext = (objPlato, accion) => {
    //Obtener una copia del estado de pedidos
    let pedidosActuales = [...pedidos];
    /**
    1. Verificar si tenemos una mesa global seleccionada para
    agregar el plato. En caso contrario no hacer nada
*/
    if (!objMesaGlobal) {
      return;
    }

    /**
    2. Preguntamos si el arreglo de pedidos, ya tiene un 
    pedido pendiente en la mesa global seleccionada
     */
    let objPedido = pedidosActuales.find((objPedido) => {
      return objMesaGlobal.mesa_id === objPedido.mesa_id;
    });

    if (objPedido) {
      //Ya había un pedido para la mesa global seleccionada
      //si hemos encontrado un objPedido, no implica que el plato que queremos agregar
      //esté previamente en el arreglo de platos de dicho pedido
      //Recorriendo el arreglo de platos, para ver si encontraos un plato igual al q
      //queremos agregar

      // let objPlatoPedido = objPedido.platos.find((objPlatoPedido) => objPlatoPedido.plato_id === objPlato.plato_id)

      let posPlatoEncontrado = objPedido.platos.findIndex(
        (objPlatoPedido) => objPlatoPedido.plato_id === objPlato.plato_id
      );

      //Existía un plato igual al q queremos agregar?
      //if(objPlatoPedido){

      if (posPlatoEncontrado >= 0) {
        if (accion === "sumar") {
          //Si usamos findindex, significa q el plato existia en una posicion del arreglo de platos

          //Agregar una unidad del nuevo plato al pedido
          objPedido.platos[posPlatoEncontrado].plato_cant++;
          setPedidos(pedidosActuales);
        } else {
          //En caso de querer restar un plato, hay que verificar que debemos tener
          //más de una unidad de ese plato, caso contrario  borrar el plato del arreglo
          if (objPedido.platos[posPlatoEncontrado].plato_cant > 1) {
            objPedido.platos[posPlatoEncontrado].plato_cant--;
            setPedidos(pedidosActuales);
          } else {
            //en caso habría una unidad del plato encontrado, borrar dicho plato del arreglo
            objPedido.platos.splice(posPlatoEncontrado, 1);
            

            //Como se borraron platos, es posible que el plato haya sido el único, y ya
            // este vacío por lo que debemos borrar el objeto
            if(objPedido.platos.length===0){
              pedidosActuales = pedidosActuales.filter((pedido) => pedido.mesa_id !== objMesaGlobal.mesa_id)
            }
            setPedidos(pedidosActuales);
          }
        }
      } else {
        if (accion === "sumar") {
          //Es el primer plato, en un pedido que ya existia en la mesa global seleccionada
          objPedido.platos.push({
            ...objPlato,
            plato_cant: 1,
          });
          //OJO: objPedido representa a uno de los elemenos del arreglo "pedidosActuales"
          //Nosostros acabamos de modificar el objPedido, agregandole un nuevo plato a su arreglo
          //de "platos"
          //Cuando "objPedido" es modificado, este guarda la dirección de memoria del "objPedido",
          //al que representa dentro del arreglo "PedidosActuales"
          //Conclusión:
          //Al modificar objPedido, internamente se modifica el "objPedido" del arreglo
          //"pedidosActuales", por eso volvemos a actualizar el arreglo "pedidosActuales"
          setPedidos(pedidosActuales);
        } else {
        }
      }
    } else {
      if ((accion = "sumar")) {
        //No había ningún pedido para la mesa global seleccionada (es un nuevo pedido)
        pedidosActuales.push({
          usu_id: 0,
          mesa_id: objMesaGlobal.mesa_id,
          pedido_est: "pendiente",
          platos: [
            {
              ...objPlato,
              plato_cant: 1,
            },
          ],
        });
        setPedidos(pedidosActuales);
      }
    }
  };

  return (
    <PosContext.Provider
      value={{
        //Esto es igual  objMesaGlobal: objMesaGlobal,
        //objCategoriaGlobal: objCategoriaGlobal
        objMesaGlobal,
        objCategoriaGlobal,
        setObjCategoriaGlobal,
        setObjMesaGlobal,

        pedidos,

        modificarPlatoContext,
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};

export default PosState;
