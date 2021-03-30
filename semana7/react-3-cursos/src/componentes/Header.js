import React from "react";
import logo from "./../assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={logo} alt="" />
      </figure>
      <div className="header__auth">
        <span>Jorge Zevallos</span>
        <button>Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
