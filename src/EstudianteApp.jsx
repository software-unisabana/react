import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";



//<ListaEstudiantes lista={estudiantes}/>

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [tablaEstudiantes, setTablaEstudiantes] = useState([]);
    const [buscar, setBuscar] = useState("");
    console.log(estudiantes);

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
    }
    
    const filtrarEstudiante = (event) => {
        event.preventDefault();
        if(buscar.trim().length >= 1){
            let busqueda = estudiantes.filter((estudiante) =>{
                if(estudiante.nombre.toUpperCase().includes(buscar.toUpperCase())){
                    return estudiante;
                }
            })
            setTablaEstudiantes([...estudiantes]);
            setEstudiantes([...busqueda]);
            console.log(busqueda)
        }else{
            setEstudiantes([...tablaEstudiantes]);
        }

    }
    

    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }}/>
            <form onSubmit={filtrarEstudiante}>
                <div>
                    <label htmlFor="search">Buscar:</label>
                    <input type="text" className="form-control" id="search" placeholder="Ingrese nombre a buscar" value={buscar} onChange={(event) => setBuscar(event.target.value)} />
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </div>
            </form>
            <TablaEstudiante listaEstudiantes={estudiantes} />
        </>
    )
}
