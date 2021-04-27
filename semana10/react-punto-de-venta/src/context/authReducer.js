//Solo es una funcion

//Recorda q el payload es la data q se envía ene l setState
//Lo que se retorne en esta función será el nuevo estado
export const authReducer = (stateAntiguo, payload) => {
  //console.log(stateAntiguo);

  //El payload tiene el action y la data
  if (payload.action === "INICIAR_SESION") {
    return {
      ...payload.data,
    };
  }

  if (payload.action === "CERRAR_SESION") {
    localStorage.removeItem("token");
    return {
      autenticado: false,
      cargando: false,
      token: null,
      usu_nom: null,
      usu_id: null,
      usu_tipo: null
    };
  }
};
