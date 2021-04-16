import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ClienteCarritoPage from './pages/Carrito/ClienteCarritoPage'
import ClienteHeader from './components/ClienteHeader'
import ClienteCatalogoPage from './pages/catalogo/ClienteCatalogoPage'


const ClienteRouter = () => {
    return (
        <>
        <ClienteHeader />
        <Switch>
            <Route path="/cliente/carrito">
                <ClienteCarritoPage/>
            </Route>
            <Route path="/cliente/catalogo">
                <ClienteCatalogoPage/>
            </Route>
        </Switch>
        </>
    )
}

export default ClienteRouter
