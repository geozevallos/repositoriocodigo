import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import AdminMesaScreen from "./pages/mesa/AdminMesaScreen";
import AdminPlatoCrearScreen from "./pages/plato/AdminPlatoCrearScreen";
import AdminPlatoScreen from "./pages/plato/AdminPlatoScreen";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/mesa">
          <AdminMesaScreen />
        </Route>
        <Route path="/admin/plato" exact>
          <AdminPlatoScreen />
        </Route>
        <Route path="/admin/plato/crear" exact>
          <AdminPlatoCrearScreen />
        </Route>
      </Switch>
    </>
  );
};

export default AdminRouter;