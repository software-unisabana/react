import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";



//<ListaEstudiantes lista={estudiantes}/>

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    console.log(estudiantes);

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
    }

    const borrarEstudiante = (id) => {
        let opcion = window.confirm("¿Realmente desea borrar al estudiante?")

        if(opcion){
            let nuevaLista = estudiantes.filter(estudiantes => estudiantes.id !== id)
            setEstudiantes(nuevaLista)
        }
    }

    return (
        <>
            <FormularioEstudiante agregar={(estu) => {agregarEstudiante(estu)}}/>
            <TablaEstudiante listaEstudiantes={estudiantes} borrarEstudiante={borrarEstudiante}/>
        </>
    )
}
