import { useState } from "react"





export const TablaEstudiante = ({eliminarEstudiantes,FiltrolistaEstudiantes}) => {
    return (
        <>
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
                        <td> <button className="btn btn-info" onClick={()=>eliminarEstudiantes(estudiante)}>Eliminar</button></td>
                        </tr>)
                    }
                </tbody>
            </table>

        </>
    )}
