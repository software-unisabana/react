import { useState } from "react";

export const TablaEstudiante = ({ listaEstudiantes }) => {
  const [buscar, setBuscar] = useState("");
  const [estudianteEncontradoName, setEstudianteEncontradoName] = useState(null);


  const editar = () => {
        
  }
  function deleteRow(event) {
      const row = event.target.parentNode.parentNode;
      row.parentNode.removeChild(row);
  }

  const buscarEstudiantePorNombre = (nombre) => {
    return listaEstudiantes.find((estudiante) => estudiante.nombre === nombre);
  };

  const buscarEst = (event) => {    
    event.preventDefault();
    const elementoEncontrado = buscarEstudiantePorNombre(buscar);
    setEstudianteEncontrado(elementoEncontrado);
  };

  const limpiarBusqueda = () => {
    setBuscar("");
    setEstudianteEncontrado(null);
  };

  return (
    <>
      <form onSubmit={buscarEst}>
        <div className="form-group">
          <label htmlFor="buscar">Buscar</label>
          <input type="text" className="form-control" id="buscar" placeholder="Buscar estudiante" value={buscar} onChange={(event) => setBuscar(event.target.value)} />
          <button type="submit" className="btn btn-primary"> Buscar
          </button>
        </div>
      </form>

      {
      estudianteEncontrado ? (
        <div>
          <h3>Estudiante encontrado:</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id Estudiante</th>
                <th scope="col">Nombre</th>
                <th scope="col">Semestre</th>
              </tr>
            </thead>
            <tbody>
              <tr key={estudianteEncontrado.id}>
                <td>{estudianteEncontrado.id}</td>
                <td>{estudianteEncontrado.nombre}</td>
                <td>{estudianteEncontrado.semestre}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-info" onClick={limpiarBusqueda}> Limpiar búsqueda
          </button>
        </div>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id Estudiante</th>
                <th scope="col">Nombre</th>
                <th scope="col">Semestre</th>
                <th scope="col">Facultad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaEstudiantes.map((estudiante) => (
                <tr key={estudiante.id}>
                  <td>{estudiante.id}</td>
                  <td>{estudiante.nombre}</td>
                  <td>{estudiante.semestre}</td>
                  <td>{estudiante.facultad}</td>
                  <td>
                    <button className="btn btn-info" onClick={editar}> Editar
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={deleteRow}> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
