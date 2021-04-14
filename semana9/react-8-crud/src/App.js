import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductosListPage from "./pages/ProductosListPage";
import ProductosCrearPage from "./pages/ProductosCrearPage";
import ProductosEditarPage from "./pages/ProductosEditarPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/productos/editar/:id">
          <ProductosEditarPage />
        </Route>
        <Route path="/productos/crear">
          <ProductosCrearPage />
        </Route>
        <Route path="/productos">
          <ProductosListPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
