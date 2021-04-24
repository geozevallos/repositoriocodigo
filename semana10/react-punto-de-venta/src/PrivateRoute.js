import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import AuthContext from './context/authContext'

const PrivateRoute = (props) => {

console.log(props.path);
    const {autenticado, cargando} = useContext(AuthContext);


    return (

        cargando ? 
        <div>
            Cargando joven...
        </div> :
        autenticado ? 
        <Route path={props.path}>
            {props.children}
        </Route> :
        <Redirect to={"/"} />
    )
}

export default PrivateRoute
