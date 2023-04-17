//Use Effect se usa para cargar una cosa solo una vez cuando la pagina inicie. 

import { useEffect, useState } from "react";

export const FormularioEstudiante = ({agregar,estudiante,actEstudiante,estado,setEstado,id,setId,nombre,setNombre,semestre,setSemestre}) => {


const actualizarEst = (eve) => {
    eve.preventDefault();
    if (id == "") {
    return alert("INGRESE UN VALOR EN ID");
    }
    if (nombre == "") {
    return alert("INGRESE UN VALOR EN NOMBRE");
    }
    if (semestre == "") {
    return alert("INGRESE UN VALOR EN SEMESTRE");
    }
    let estudianteNuevo = {
    id: id,
    nombre: nombre,
    semestre: semestre,
    };
    actEstudiante(estudiante, estudianteNuevo);
    setId("");
    setNombre("");
    setSemestre("");
    setEstado(!estado);
};
const guardarEstudiante = (event) => {
    event.preventDefault();
    if (id == "") {
    return alert("INGRESE UN VALOR EN ID");
    }
    if (nombre == "") {
    return alert("INGRESE UN VALOR EN NOMBRE");
    }
    if (semestre == "") {
    return alert("INGRESE UN VALOR EN SEMESTRE");
    }
    let estudiante = {
    id: id,
    nombre: nombre,
    semestre: semestre,
    };
    agregar(estudiante);
    setId("");
    setNombre("");
    setSemestre("");
};
const estructuraForm = (
    dondeGuardar,
    valorID,
    valorNombre,
    valorSemestre,
    estadoBTN
) => {
    return (
    <>
        <form onSubmit={dondeGuardar}>
        <div className="form-group ">
            <label htmlFor="id">ID Estudiante</label>
            <input
              type="number"
              name="id"
              className="form-control"
              id="id"
              placeholder={valorID}
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              id="nombre"
              placeholder={valorNombre}
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="semestre">Semestre</label>
            <input
              type="number"
              name="semestre"
              className="form-control"
              id="semestre"
              placeholder={"semestre"}
              value={semestre}
              onChange={(event) => setSemestre(event.target.value)}
            />
        </div>

        <button type="submit" className="btn btn-primary">
            {estadoBTN}
        </button>
        </form>
    </>
    );
};
if (estado) {
    return (
    <>
        {estructuraForm(
          guardarEstudiante,
          "id",
          "nombre",
          "semestre",
          "Registrar"
        )}
    </>
    );
} else {
    return (
    <>
        {estructuraForm(
          actualizarEst,
          estudiante.id,
          estudiante.nombre,
          estudiante.semestre,
          "Actualizar"
        )}
    </>
    );
}
};