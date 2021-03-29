import React from 'react'
import {listaPeliculas} from "../data/data-peliculas"


const Peliculas = () => {
    return (
        <div className="col-md-9">
            <div className="row">
                {
                    listaPeliculas.map((pelicula) => {
                        return(
                            <div className="col-md-3 mb-3" key={pelicula.id}>
                                <div className="card">
                                    <div className="card-body">
                                        {pelicula.original_title}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            
        </div>
    )
}

export default Peliculas
