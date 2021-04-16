import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminClientesPage from './pages/clientes/AdminClientesPage'
import AdminProductosPage from './pages/productos/AdminProductosPage'
import AdminHeader from './components/AdminHeader.js'
import AdminDashboardPage from './pages/dashboard/AdminDashboardPage'
/**Para el enturamiento interno o anidado
 * no se necesita usar el BROWSERROUTER nuevamente,
 * solo el switch
 */

const AdminRouter = () => {
    return (
        <>
        <AdminHeader/>
        <div>
            <Switch>
                <Route path="/admin/productos">
                    <AdminProductosPage />
                </Route>
                <Route path="/admin/clientes">
                    <AdminClientesPage />
                </Route>
                <Route path="/admin">
                    <AdminDashboardPage />
                </Route>
            </Switch>
        </div>
        </>
    )
}

export default AdminRouter
