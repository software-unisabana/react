import { useState } from "react";

export const FormularioEstudiante = ({ agregar,estudiante,estado,setEstado }) => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [semestre, setSemestre] = useState("");

  const[cambioID,setcambioID]=useState(estudiante.id);
  const[cambioNombre,setcambioNombre]=useState(estudiante.nombre);
  const[cambioSemestre,setcambioSemestre]=useState(estudiante.semestre);

  console.log(estudiante)
const actualizarEst=(eve)=>{
    eve.preventDefault();
    let estudiante = {
        id: cambioID,
        nombre: cambioNombre,
        semestre: cambioSemestre,
    };
    agregar(estudiante);
    setId("");
    setNombre("");
    setSemestre("");
    setEstado(!estado)
}
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
const estructuraForm=(dondeGuardar,[id, setId],[nombre, setNombre],[semestre, setSemestre],estadoBTN)=>{
    return (
        <>
        <form onSubmit={dondeGuardar} >
            <div className="form-group ">
              <label htmlFor="id">ID Estudiante</label>
              <input
                type="number"
                name="id"
                className="form-control"
                id="id"
                placeholder={setId}
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
                placeholder={setNombre}
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
                placeholder={setSemestre}
                value={semestre}
                onChange={(event) => setSemestre(event.target.value)}
              />
            </div>
    
            <button type="submit" className="btn btn-primary">
              {estadoBTN}
            </button>
          </form>
        </>
        )} ;
/**
  const modificarEstudiante=(event)=>{
      event.preventDefault();
      let newID = modificacion.id
      if (id !=="") {

      }
      let newName =modificacion.nombre
      if (newName!=="") {
       
      }
      let newSemestre=modificacion.semestre
      if (newSemestre!=="") {
        
      }
      let estudiante={
        id:newID,
        nombre:newName,
        semestre:newSemestre
      };
  }
 */

  /**
   * estado ?(   
            estructuraForm(guardarEstudiante,[id,setId],[nombre,setNombre],[semestre,setSemestre],"Resgistrar")
        ) :(
            estructuraForm(actualizarEst,[cambioID,setcambioID],[cambioNombre,setcambioNombre],[cambioSemestre,setcambioSemestre],"Actualizar")
        )
  */
return(
    <>
    {
        estado ?(   
            <form onSubmit={guardarEstudiante} >
            <div className="form-group ">
              <label htmlFor="id">ID Estudiante</label>
              <input
                type="number"
                name="id"
                className="form-control"
                id="id"
                placeholder={setId}
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
                placeholder={setNombre}
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
                placeholder={setSemestre}
                value={semestre}
                onChange={(event) => setSemestre(event.target.value)}
              />
            </div>
    
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </form>
        ) :(
            <form onSubmit={actualizarEst} >
            <div className="form-group ">
              <label htmlFor="id">ID Estudiante</label>
              <input
                type="number"
                name="id"
                className="form-control"
                id="id"
                placeholder={setcambioID}
                value={cambioID}
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
                placeholder={setcambioNombre}
                value={cambioNombre}
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
                placeholder={setcambioID}
                value={cambioSemestre}
                onChange={(event) => setSemestre(event.target.value)}
              />
            </div>
    
            <button type="submit" className="btn btn-primary">
              {"ACtualizar"}
            </button>
          </form>
        )
    }
    </>
    
)

};
