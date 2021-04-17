import React from "react";
import PosHeader from "../../../pos/pages/components/PosHeader";
import PosCategorias from "./components/PosCategorias";
import PosMesas from "./components/PosMesas";
import PosPlatos from "./components/PosPlatos";
import PosBoleta from "./components/PosBoleta";

const PosTerminalScreen = () => {
  return (
    <>
      <PosHeader />
      <main class="pos-container">
        <PosCategorias />
        <section class="tabla">
          <PosMesas />
          <div class="pedido">
            <PosPlatos />
            <PosBoleta />
          </div>
        </section>
      </main>
    </>
  );
};

export default PosTerminalScreen;
