import React, { useEffect } from 'react'
import socketIOClient from 'socket.io-client'


//Cual es la direccion del backend
const ENDPOINT = "https://codigo4-pos.herokuapp.com/"



const App = () => {


  //Solo se debe iniciar una vez

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    //Suscribirse al evento
    //Este evento se encuentra en el backend
    socket.on("reporte-dashboard", (data) => {
      console.log(data);
    })
  }, []);


  return (
    <div>
      HOLA
    </div>
  )
}

export default App
