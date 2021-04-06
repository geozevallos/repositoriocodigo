import React from 'react'

const Header = () => {
    return (
<header>
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Buscador Noticias</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Busca noticias" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>
</header>
            

    )
}

export default Header
