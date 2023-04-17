//Use Effect se usa para cargar una cosa solo una vez cuando la pagina inicie. 

import { useEffect, useState } from "react";
 

export const FormularioEstudiante = ({agregar,estudiante,actEstudiante,estado,setEstado,id,setId,nombre,setNombre,semestre,setSemestre,facultad,setFacultad}) => {
    




const actualizarEst = (eve) => {
    eve.preventDefault();
    if (id === "") {
    return alert("INGRESE UN VALOR EN ID");
    }
    if (nombre === "") {
    return alert("INGRESE UN VALOR EN NOMBRE");
    }
    if (semestre === "") {
    return alert("INGRESE UN VALOR EN SEMESTRE");
    }
    if (facultad===""){
        return alert("ingrese un valor de facultad")
    }
    let estudianteNuevo = {
    id: id,
    nombre: nombre,
    semestre: semestre,
    facultad: facultad,
    };
    actEstudiante(estudiante, estudianteNuevo);
    setId("");
    setNombre("");
    setSemestre("");
    setFacultad("");
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
    if (facultad===""){
        return alert("ingrese un valor de facultad")
    }
    let estudiante = {
    id: id,
    nombre: nombre,
    semestre: semestre,
    facultad: facultad,
    };
    agregar(estudiante);
    setId("");
    setNombre("");
    setSemestre("");
    setFacultad("");
};
const estructuraForm = (
    dondeGuardar,
    valorID,
    valorNombre,
    valorSemestre,
    estadoBTN
) => {
    return (
    <>  <h1>Parcial Segundo Corte</h1>
        <form onSubmit={dondeGuardar}>
        <div className="form-group ">
            <label htmlFor="id">ID Estudiante</label>
            <input
              type="number"
              name="id"
              min={100000}
              max={10000000000}
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
              minLength={3}
              className="form-control"
              id="nombre"
              placeholder={valorNombre}
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="semestre">Semestre</label>
            <select 
            class="form-select"
            aria-label="Default select example"
            name="semestre"
            className="form-control"
            id="semestre"
            placeholder={valorSemestre}
            value={semestre}
            onChange={(event) => setSemestre(event.target.value)}
            >
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
                <option >6</option>
                <option >7</option>
                <option >8</option>
                <option >9</option>
                <option >10</option>
            </select>
            <label htmlFor="facultad">Facultad:</label>
             <select
             
               class="form-select"
               aria-label="Default select example"
               name="facultad"
               className="form-control"
               id="facultad"
               placeholder={"facultad"}
               value={facultad}
               onChange={(event) => setFacultad(event.target.value)}>
                <option >Medicina</option>
                <option >Derecho</option>
                <option >Ingeniería</option>
                <option >Comunicación</option>

             </select>
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