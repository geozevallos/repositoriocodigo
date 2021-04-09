import React from 'react'

const ProductosFilter = () => {
    return (
        <div className="card">
            <div className="card-header">
                Filtrado de Productos
            </div>
            <div className="card-body">
                <form>
                    <input type="text" className="form-control" placeholder="Busca un producto"/>
                </form>
            </div>
            
        </div>
    )
}

export default ProductosFilter
