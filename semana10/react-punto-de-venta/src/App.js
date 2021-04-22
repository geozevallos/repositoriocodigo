import React from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import PosRouter from './modules/pos/PosRouter'
import "./styles/index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/invoice.css"

const App = () => {
  return (
    <Router>

    <Switch>

      <Route path="/pos">
        <PosRouter />
      </Route>

    </Switch>

  </Router>
  )
}

export default App
