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


    const eliminarEstudiante = (index) => {
        setEstudiantes(estudiantes.filter((_, i) => i !== index));  //el segundo parametro indica la posicion y la filtra de la lista
    }


    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} />
            <TablaEstudiante eliminar={(index) => eliminarEstudiante(index)} listaEstudiantes={estudiantes} />
        </>
    )
}
