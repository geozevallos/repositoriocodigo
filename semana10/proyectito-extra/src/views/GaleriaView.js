import React, { useState } from 'react'
import {crearDocumento} from '../services/galeriaService'

const GaleriaView = () => {
    const [documento, setDocumento] = useState([])

    const enviarDocumento = async () => {
        let objDocumento = {
            url: 'https://picsum.photos/400',
            nombre: 'foto random'
        }


        let docCreado = await crearDocumento(objDocumento)
        console.log(docCreado);  //No es un JSON de rpta
    }

    return (
        <div>
             Crear Documento <button onClick={enviarDocumento}>Crear!!</button>
        </div>
    )
}

export default GaleriaView
