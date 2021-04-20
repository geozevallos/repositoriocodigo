import React from "react";
import { crearDocumento, subirArchivos } from "../services/galeriaService";

//Es una especie de formulario lista
import { useForm } from "react-hook-form";


let imagenLocal;

const CreateDocumentView = () => {
  //register: para registrar c/ input del formulario
  //handleSubmit, para manejar el submit
  //error, para manejar los erores de los input

  let escucharSubmit = (data) => {
    console.log(data);
    subirArchivos(imagenLocal.name, imagenLocal)
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //esta funcion recibira un evnteo
  const manejarImagen =(e) => {
      let miImagen = e.target.files[0]
      // console.log(miImagen);
      imagenLocal = miImagen
  }

  return (
    <div>
      <form onSubmit={handleSubmit(escucharSubmit)}>
        <div className="form-group">
          <label>Nombre Imagen</label>
          <input
            {...register("nombre", { required: true })}
            className="form-control"
          />

          {/* Si errors.nombre existe */}
          {errors.nombre && errors.nombre.type === "required" && (
            <small className="text-danger">
              El nombre de la foto es obligatorio
            </small>
          )}
        </div>
        <div className="form-group">
            <label>Imagen</label>
            <input 
            type="file"
            className="form-control"
            onChange = {(e) => {manejarImagen(e)}}
            />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Agregar Foto
        </button>
      </form>
    </div>
  );
};

export default CreateDocumentView;
