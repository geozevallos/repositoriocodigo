import React from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import CarritoPage from "./pages/carrito/CarritoPage";
import HomePage from "./pages/home/HomePage";
import ProductoDetailPage from "./pages/productos/ProductoDetailPage";
import ProductosPage from "./pages/productos/ProductosPage";

//librería de notifiacion
import 'react-notifications/lib/notifications.css';
import CarritoState from "./context/carritoState";
import Header from "./componentes/Header";


const App = () => {
  
  


  return (
    <CarritoState>
    <Router>
      <Header />
      <Switch>
        <Route path="/productos/:id">
          <ProductoDetailPage />
        </Route>
        <Route path="/productos">
          <ProductosPage />
        </Route>
        <Route path="/carrito">
          <CarritoPage />
        </Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
    </CarritoState>
  );
};

export default App;
