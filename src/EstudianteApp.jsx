import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { Buscador } from "./componentes/Buscador";

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [buscar,setBuscar]=useState("");

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
    }
    const eliminar=(estuia)=>{
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id!==estuia.id))
    }
    const FiltrolistaEstudiantes= estudiantes.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(buscar.toLowerCase())
    );

    return (
        <>
            <FormularioEstudiante agregar={(estu) => agregarEstudiante(estu)} />
            <Buscador buscar={buscar} setBuscar={(busqueda)=>setBuscar(busqueda)}/>   
            <TablaEstudiante eliminarEstudiantes={(estuia)=>{eliminar(estuia)}} FiltrolistaEstudiantes={FiltrolistaEstudiantes}/>  
        </>
    )
}
