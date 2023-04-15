import React, { Component } from 'react'
import { FormularioEstudiante } from './FormularioEstudiante';
export const TablaEstudiante = ({ listaEstudiantes }) => {

    const subirInformacion= listaEstudiantes.map((estudiante)=>{
        return(
           <FormularioEstudiante datos={estudiante} />
        );
    });
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaEstudiantes.map((estudiante) => <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.semestre}</td>
                            <td> <button className="editbtn" onClick={()=>subirInformacion(estudiante)}>Editar</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}