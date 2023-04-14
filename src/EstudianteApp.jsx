import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [aModificar, setEstudiante] = useState({});
    const [modo, setModo] = useState('Registrar');

    console.log(estudiantes);

    const agregarEstudiante = (estudiante) => {
        let verificado = true

        estudiantes.map((estu) => {
            if ( estu.id == estudiante.id){
                alert('Ese ID ya le pertenece a otro estudiante')
                verificado = false
            }
        })
        
        if ( verificado ){
            setEstudiantes([...estudiantes, estudiante])
        }
    }

    const editarEstudiante = (estu) => {
        setModo('Modificar')
        setEstudiante(estu)
    }

    const modEstudiante = (viejoEstudiante, nuevoEstudiante) => {
        let verificado = true

        estudiantes.map((estudiante) => {
            if ( nuevoEstudiante.id == estudiante.id && estudiante.id != viejoEstudiante.id){
                alert('Ese ID ya le pertenece a otro estudiante')
                verificado = false
            }
        })

        if (verificado){
            setEstudiantes(
                estudiantes.map((estudiante) => {
    
                    if(viejoEstudiante.id == estudiante.id){
                        estudiante.id = nuevoEstudiante.id
                        estudiante.nombre = nuevoEstudiante.nombre
                        estudiante.semestre = nuevoEstudiante.semestre
                    }
                    return(estudiante)
                })
            )
        }
        
        setModo('Registrar')
    }

    return (
        <>
            <FormularioEstudiante 
                agregar={(estu) => { agregarEstudiante(estu) }}
                modificar={(viejoEstu, nuevoEstu) => { modEstudiante(viejoEstu, nuevoEstu) }}
                aModificar={ aModificar }
                modo={ modo }
            /> <br/>

            <TablaEstudiante listaEstudiantes={estudiantes} editar={(estu) => { editarEstudiante(estu) }} />
        </>
    )
}
