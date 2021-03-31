import React, {useState} from "react";
import logo from "./../assets/logo.png"

const Header = () => {

const [auth, setAuth] = useState(false);

  return (
    <header className="header">
      <figure className="header__logo">
        <img src={logo} alt="" />
      </figure>
      <div className="header__auth">
        
        {
          auth ?
          <button onClick={()=>{
            setAuth(false);
          }}>Iniciar Sesión</button> :
          <>
          <span>Jorge Zevallos</span>
          <button onClick={()=>{
            setAuth(true);
          }}>Cerrar Sesión</button>
          </>
        }
        
        
      </div>
    </header>
  );
};

export default Header;
