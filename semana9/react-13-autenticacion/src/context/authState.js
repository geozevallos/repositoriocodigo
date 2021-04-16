import React, { useEffect, useState } from 'react'
import AuthContext from './authContext'

const AuthState = (props) => {


    const [state, setState] = useState({
        autenticado: false,
        usu_nom: null,
        token: null,
        cargando: true
    });

    const iniciarSesionContext = (token) =>
    {
        localStorage.setItem("token", token)
        const payloadString = token.split(".")[1];
        //atob(Texto encriptado en base 64)
        //retorna el texto desencriptado
        const payloadStringDecript = atob(payloadString);
        // console.log(payloadStringDecript);
        const payloadJSON = JSON.parse(payloadStringDecript);
        // console.log(payloadJSON);
        setState({
            autenticado: true,
            usu_nom: payloadJSON.usu_nom,
            token: token,
            cargando: false
        })
    };

    const iniciarSesionConLocalStorage = () => {
        if(localStorage.getItem("token")){
            iniciarSesionContext(localStorage.getItem("token"));
        }
    };

    useEffect(() => {
        iniciarSesionConLocalStorage();
    }, [])

    return (
        <AuthContext.Provider value = {{
            /**
             * Es lo mismo que 
             * auteticado: state.autenticado,
             * usu_nom: state.usu_nom,
             * token: state.token
             */
            ...state, iniciarSesionContext: iniciarSesionContext
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
