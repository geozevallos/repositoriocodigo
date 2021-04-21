import React from 'react'
import { Switch, Route } from "react-router-dom";
import PosTerminalScreen from './pages/terminal/PosTerminalScreen';
import PosState from '../../context/posState'

const PosRouter = () => {
    return (
        <PosState>
        <Switch>
          <Route path="/pos/terminal">
            <PosTerminalScreen />
          </Route>
        </Switch>
      </PosState>
    )
}

export default PosRouter
