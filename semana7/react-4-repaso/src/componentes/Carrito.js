import React from 'react'

const Carrito = ({carrito}) => {
    return (
        <div>
            <h3>Carrito de compras</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Se podría usar en lugar de las llaves
                    el parentesis y ya no escribir return () */}
                    {carrito.map((prod, i) =>{
                        return(
                        <tr key = {i}>
                            <td>{prod.nombre}</td>
                            <td>{prod.descripcion}</td>
                            <td>{prod.precio}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Carrito
