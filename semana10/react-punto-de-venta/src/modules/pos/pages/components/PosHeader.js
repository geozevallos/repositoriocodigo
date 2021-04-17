import React from "react";

const PosHeader = () => {
  return (
    <header class="header">
      <div class="header__logo">
        <img src="/imagenes/logo.svg" alt="" />
      </div>
      <div class="header__buscador">
        <img src="/imagenes/search.svg" alt="" />
        <input
          type="text"
          class="header__input"
          placeholder="Busca un término"
        />
      </div>
      <div class="header__usuario">
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="" />
        <span>Jorge Garnica</span>
      </div>
    </header>
  );
};

export default PosHeader;
