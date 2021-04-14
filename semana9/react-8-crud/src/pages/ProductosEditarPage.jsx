import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getProductoById, putProductoById } from "../servicios/servicios";

const ProductosEditarPage = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    imagen: ""
  });

  const [error, setError] = useState(false);
  const params = useParams();

  let history = useHistory();

  let { nombre, descripcion, precio, stock, imagen } = formulario;

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      descripcion.trim() === "" ||
      precio === 0 ||
      imagen.trim() === ""
    ) {
      setError(true);
      return;
    }
    putProductoById(formulario).then((rpta) => {
      if (rpta.status === 200) {
        history.push("/productos");
      }
    });
  };

  useEffect(() => {
    getProductoById(params.id).then((rpta) => {
      console.log(rpta);
      setFormulario({ ...rpta.data });
    });
  }, []);

  return (
    <main className="container">
      <div className="row mt-4">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">
                {" "}
                Formulario de Edición de un producto
              </h4>
            </div>
            <div className="card-body">
              {error ? (
                <div className="alert alert-danger">
                  Todos los campos deben ser llenados y el precio debe ser mayor
                  a 0 (cero)
                </div>
              ) : null}
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="">Id</label>
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    value={formulario.id}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ejm: Play Station"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Precio
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0.00"
                    name="precio"
                    value={precio}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Imagen
                  </label>
                  <textarea
                    name="imagen"
                    value={imagen}
                    onChange={handleChange}
                    cols="30"
                    rows="5"
                    className="form-control"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    cols="30"
                    rows="5"
                    className="form-control"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Stock Inicial
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0.00"
                    name="stock"
                    value={stock}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button className="btn btn-primary" type="submit">
                    Guardar cambios
                  </button>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => {
                      history.push("/productos");
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductosEditarPage;
