import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PosRouter from "./modules/pos/PosRouter";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/invoice.css";
import "./styles/login.css";
import AdminRouter from "./modules/admin/AdminRouter";
import AuthRouter from "./modules/auth/AuthRouter";
import AuthState from "./context/authState";
import PrivateRoute from "./PrivateRoute";
import GuestRouter from "./modules/guest/GuestRouter";

const App = () => {
  return (
    <Router>
    <AuthState>
      
        <Switch>
          <PrivateRoute path="/pos">
            <PosRouter />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminRouter />
          </PrivateRoute>

          <Route path="/auth">
            <AuthRouter />
          </Route>
          <Route path="/" exact>
            <GuestRouter />
          </Route>



        </Switch>
  
    </AuthState>
    </Router>
  );
};

export default App;
