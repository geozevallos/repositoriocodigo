import React, { useEffect, useState } from 'react'
import { postVerificar } from '../servicios/authService';
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
            postVerificar(localStorage.getItem("token")).then(rpta => {
                if(rpta.data.ok) {
                    iniciarSesionContext(localStorage.getItem("token"));
                }else{
                    localStorage.removeItem("token");
                    //cerrar sesion  
                    setState({
                        autenticado: false,
                        usu_nom: null,
                        token: null,
                        cargando: false
                    });
                    //Moodificar el estado de la aplicacion y retornar al home
                }
            }).catch(error => {
                console.log("FALLO AL INICIAR SESIÓN");
                localStorage.removeItem("token");
                    //cerrar sesion  
                setState({
                        autenticado: false,
                        usu_nom: null,
                        token: null,
                        cargando: false
                    })
            })    
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
