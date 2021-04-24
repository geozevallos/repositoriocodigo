import React from 'react'
import {Switch, Route} from "react-router-dom"
import AuthLoginScreen from './pages/AuthLoginScreen'

const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login">
                    <AuthLoginScreen/>
                </Route>
            </Switch>
        </div>
    )
}

export default AuthRouter
