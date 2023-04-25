import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";



export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [dato, setDato] = useState({ id: "", nombre: "", semestre: "", facultad: "" });

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
    }

    return (
        <>
            <FormularioEstudiante dato={dato} setDato={setDato}
                agregar={(estu) => {
                    agregarEstudiante(estu)

                }} />
            <TablaEstudiante listaEstudiantes={estudiantes}
                setDato={setDato} />
        </>
    )
}
