import React from 'react'
import {Link} from 'react-router-dom'

const Error404Page = () => {
    return (
        <main className="container">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Ups!</h1>
            <p class="col-md-8 fs-4">
              La página que estás buscando no ha sido encontrada 😢.
            </p>
            <Link className="btn btn-primary" to="/">
              Ir a la página principal
            </Link>

          </div>
        </div>
      </main>
    )
}

export default Error404Page
