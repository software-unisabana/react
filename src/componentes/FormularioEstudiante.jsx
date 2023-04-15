import { useState } from "react";

export const FormularioEstudiante = ({ agregar }) => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [semestre, setSemestre] = useState("");

  const guardarEstudiante = (event) => {
    event.preventDefault();

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
  const[cambioID,setcambioID]=useState("Ingrese id");
  const[cambioNombre,setcambioNombre]=useState("Ingrese nombre");
  const[cambioSemestre,setcambioSemestre]=useState("Ingrese semestre");
  if (estado=="") {
    
  }
  return (
    <>
      <form onSubmit={guardarEstudiante} >
        <div className="form-group ">
          <label htmlFor="id">ID Estudiante</label>
          <input
            type="id"
            name="id"
            className="form-control"
            id="id"
            placeholder={cambioID}
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
            placeholder={cambioNombre}
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="semestre">Semestre</label>
          <input
            type="text"
            name="semestre"
            className="form-control"
            id="semestre"
            placeholder={cambioSemestre}
            value={semestre}
            onChange={(event) => setSemestre(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </>
  );
};
