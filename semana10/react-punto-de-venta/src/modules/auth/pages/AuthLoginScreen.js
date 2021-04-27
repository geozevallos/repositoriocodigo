import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext";
import { postLogin } from "../../../services/authService";
import {withRouter} from "react-router-dom"

const AuthLoginScreen = ({history}) => {
  const [formulario, setFormulario] = useState({
    correo: "",
    password: "",
  });



  const {iniciarSesionContext}= useContext(AuthContext);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(formulario).then((rpta) => {
      if(rpta.data.ok){
          iniciarSesionContext(rpta.data.token);
          //Redireccionar acá al admin o punto de venta
          let {token} = rpta.data;
          let payloadString = token.split(".")[1];
          let payloadDecoded = atob(payloadString);
          let payloadJSON = JSON.parse(payloadDecoded);
          if(payloadJSON.usu_tipo === "admin"){
            history.push("/admin")
          } else {
            history.push("/pos/terminal")
          }
      }
    });
  };

  return (
    <main className="login">
      <div className="login__form">
        <h1>Inicio de Sesión</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            class="formulario__input"
            placeholder="Email"
            name="correo"
            onChange={handleChange}
            value={formulario.correo}
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            className="formulario__input"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formulario.password}
          />
          <button className="formulario__submit" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
};

export default withRouter(AuthLoginScreen);
