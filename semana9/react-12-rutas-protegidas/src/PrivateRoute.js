import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = (props) => {

    const autenticado = false;

    return (
    autenticado ?

        <Route path={props.path}> 
            {props.children}
        </Route> :
        <Redirect to="/" />
    )
}

export default PrivateRoute
