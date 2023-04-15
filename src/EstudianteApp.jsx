import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { Buscador } from "./componentes/Buscador";

import { Alert } from "bootstrap";
export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const[modificar,setModificar]=useState({});
    const[estado,setEstado]=useState("registrar");
    const [buscar,setBuscar]=useState("");

    const agregarEstudiante = (estudiante) => {
        let verificacion=true
        estudiantes.map((estu)=>{
            if(estu.id == estudiante.id){
                <div class="alert alert-danger" role="alert">
                     Ese id ya lo tiene otro estudiante
                </div>
                verificacion=false
            }
        });
        if (verificacion) {
            setEstudiantes([...estudiantes, estudiante])
        }
    }
    const eliminar=(estuia)=>{
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id!==estuia.id))
    }
    const FiltrolistaEstudiantes= estudiantes.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(buscar.toLowerCase())
    );

    const editarStude= (estu)=>{
        setEstado("modificar");
        setModificar(estu);
    }
    const modificarEstudiante= (infoVieja,infoNueva)=>{
        let verificacion=true
        estudiantes.map((estudiante)=>{
            if (estudiante.id != infoVieja.id && infoNueva.id== estudiante.id ) {
                <div class="alert alert-danger" role="alert">
                     Ese id ya lo tiene otro estudiante
                </div>
                verificacion=false
            }
        })
        if (verificacion) {
            setEstudiantes(
                estudiantes.map((estudiante)=>{
                    if (infoVieja.id == estudiante.id) {
                        estudiante.id =infoNueva.id
                        estudiante.nombre= infoNueva.nombre
                        estudiante.semestre=infoNueva.semestre
                    }
                    return(estudiante)
                })
            )
        }
        setEstado("registrar")
    }
    return (
        <>
            <FormularioEstudiante agregar={(estu) => agregarEstudiante(estu)} />
            <Buscador buscar={buscar} setBuscar={(busqueda)=>setBuscar(busqueda)}/>   
            <TablaEstudiante eliminarEstudiantes={(estuia)=>{eliminar(estuia)}} FiltrolistaEstudiantes={FiltrolistaEstudiantes}/>  
        </>
    )
}
