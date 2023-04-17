import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { Buscador } from "./componentes/Buscador";
export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const[estado,setEstado]=useState(true); //true es registrar, false es actualizar
    const [buscar,setBuscar]=useState("");
    const [estudianteAct,setEstudianteACT]=useState([]);
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");

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
    const VerificarEstudiante = (estudianteAnterior, estudianteACTUALIZADO) => {
        let validacion=true;
        estudiantes.map((estudiante) => {
            if ( estudianteACTUALIZADO.id == estudiante.id && estudiante.id != estudianteAnterior.id){
                alert('Ese ID ya esta en uso, VUELVA A INTENTARLO')
                validacion=false
            } 
        }) 
        if (validacion) {
            setEstudiantes(
                estudiantes.map((estudiante) => {
                    if(estudianteAnterior.id == estudiante.id){
                        estudiante.id = estudianteACTUALIZADO.id
                        estudiante.nombre = estudianteACTUALIZADO.nombre
                        estudiante.semestre = estudianteACTUALIZADO.semestre
                    }
                    return(estudiante)
                })
            )
        }
    }
    const eliminar=(estuia)=>{
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id!==estuia.id))
    }
    const FiltrolistaEstudiantes= estudiantes.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(buscar.toLowerCase())
    );

        
    return (
        <>

            <FormularioEstudiante agregar={(estu) => agregarEstudiante(estu)} 
            estudiante={estudianteAct} 
            actEstudiante={(estudiante, nuevoEstudiante) => { VerificarEstudiante(estudiante,nuevoEstudiante) }}
            estado={estado} 
            setEstado={(est)=>{setEstado(est)}}
            id={id}
            setId={(id)=>setId(id)}
            nombre={nombre}
            setNombre={(nombre)=>setNombre(nombre)}
            semestre={semestre}
            setSemestre={(semestre)=>setSemestre(semestre)}
            />            
            <Buscador 
            buscar={buscar} 
            setBuscar={(busqueda)=>setBuscar(busqueda)}/>   
            <TablaEstudiante 
            eliminarEstudiantes={(estuia)=>{eliminar(estuia)}} 
            FiltrolistaEstudiantes={FiltrolistaEstudiantes} 
            editar={(estudiante)=>{
                setEstado(!estado)
                setId(estudiante.id)
                setNombre(estudiante.nombre)
                setSemestre(estudiante.semestre)
                setEstudianteACT(estudiante)
            }}
            />
              
        </>
    )
}

