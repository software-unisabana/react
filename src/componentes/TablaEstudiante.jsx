import { useState } from "react"





export const TablaEstudiante = ({listaEstudiantes ,eliminarEstudiantes}) => {

    const [filter, setFilter] = useState("");

    const handleFilterChange = (evento) => {
        setFilter(evento.target.value);
    };
    
   
    const FiltrolistaEstudiantes= listaEstudiantes.filter((estudiante) =>
    estudiante.id.toLowerCase().includes(filter.toLowerCase())
  );

    const eliminar= (estudiante)=> {
        eliminarEstudiantes(estudiante)
    }

    return (
        <>
           
            <input type="text" id="myInput" onChange={handleFilterChange} placeholder="CONSULTAR ESTUDIANTE"></input>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Acciones</th>
                    </tr>
                      
                </thead>

                <tbody>
                 
                    { 
                     FiltrolistaEstudiantes.map((estudiante) => <tr key={estudiante.id}>
                        <td>{estudiante.id}</td>
                        <td>{estudiante.nombre}</td>
                        <td>{estudiante.semestre}</td>
                        <td> <button className="btn btn-info" >Editar</button></td>
                            <td> <button className="btn btn-info" onClick={()=>eliminar(estudiante)}>Eliminar</button></td>

                        </tr>)
                    }
                </tbody>
            </table>

        </>
    )}
