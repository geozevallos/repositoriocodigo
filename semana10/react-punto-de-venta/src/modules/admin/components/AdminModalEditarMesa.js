import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { putMesaById } from "../../../services/mesaService";

const AdminModalEditarMesa = ({
  mostrarModalEditar,
  setMostrarModalEditar,
  objMesaEditar,
  // setObjMesaEditar
  traerMesas
}) => {
  const [formulario, setFormulario] = useState(objMesaEditar);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    putMesaById(formulario).then(rpta => {
      if(rpta.data.ok){

        setMostrarModalEditar(false);
        traerMesas();
      }
    })
  }



  useEffect(() => {
    setFormulario({...objMesaEditar})
  }, [objMesaEditar]);

  return (
    <Modal
      show={mostrarModalEditar}
      onHide={() => {
        //Tengo que settear mi variable obJMEsaEditar a null
        // setObjMesaEditar(null)
        setMostrarModalEditar(false);
      }}
      size={"xl"}
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar Mesa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {objMesaEditar ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Id:</label>
              <input
                type="text"
                className="form-control"
                value={formulario.mesa_id}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Nro Mesa:</label>
              <input
                type="text"
                className="form-control"
                value={formulario.mesa_nro}
                name="mesa_nro"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Capacidad:</label>
              <input
                type="number"
                className="form-control"
                value={formulario.mesa_cap}
                name="mesa_cap"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">Actualizar</button>
            </div>
          </form>
        ) : null}
      </Modal.Body>
    </Modal>
  );
};

export default AdminModalEditarMesa;
