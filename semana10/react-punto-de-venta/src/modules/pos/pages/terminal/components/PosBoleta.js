import React from 'react'
import PosBoletaItem from './PosBoletaItem'

const PosBoleta = () => {
    return (
<div class="boleta">
<h3>
  Pedido Mesa: &nbsp;<span class="color-secundario">01</span>
</h3>
<hr />
<div class="comanda">
  <h4 class="comanda__mesa">Mesa 01</h4>
  <p class="comanda__usuario">Carlos Jimenez</p>
  <hr />

  <ul class="comanda__lista">
      <PosBoletaItem/>
  </ul>
  <button class="boton boton-success boton-block">PAGAR</button>
</div>
</div>
    )
}

export default PosBoleta
