//Use Effect se usa para cargar una cosa solo una vez cuando la pagina inicie. 

import { useEffect, useState } from "react";
 

export const FormularioEstudiante = ({agregar,estudiante,actEstudiante,estado,setEstado,id,setId,nombre,setNombre,semestre,setSemestre,facultad,setFacultad,genero,setGenero}) => {
    




const actualizarEst = (eve) => {
    
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
    genero: genero,
    };
    actEstudiante(estudiante, estudianteNuevo);
    setId("");
    setNombre("");
    setSemestre("");
    setFacultad("");
    setGenero("")
    setEstado(!estado);
};
const guardarEstudiante = (event) => {
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
    genero: genero,
    };
    agregar(estudiante);
    setId("");
    setNombre("");
    setSemestre("");
    setFacultad("");
    setGenero("");
};
const estructuraForm = (
    dondeGuardar,
    valorNombre,
    valorSemestre,
    valorFacultad,
    valorGenero,
    estadoBTN
) => {
    return (
    <>  <h1>Parcial Segundo Corte</h1>
        <form onSubmit={dondeGuardar}>
        
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
               placeholder={valorFacultad}
               value={facultad}
               onChange={(event) => setFacultad(event.target.value)}>
                <option >Medicina</option>
                <option >Derecho</option>
                <option >Ingeniería</option>
                <option >Comunicación</option>

             </select>
             <label htmlFor="facultad">Genero</label>
             <select
             
               class="form-select"
               aria-label="Default select example"
               name="genero"
               className="form-control"
               id="genero"
               placeholder={valorGenero}
               value={genero}
               onChange={(event) => setGenero(event.target.value)}>
                <option >Masculino</option>
                <option >Femenino</option>

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
          "nombre",
          "semestre",
          "facultad",
          "genero",
          "Registrar",
        )}
    </>
    );
} else {
    return (
    <>
        {estructuraForm(
          actualizarEst,
          estudiante.nombre,
          estudiante.semestre,
          estudiante.facultad,
          estudiante.genero,
          "Actualizar"
        )}
    </>
    );
}
};