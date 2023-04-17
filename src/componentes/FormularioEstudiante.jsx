import { useEffect, useState } from "react"

export const FormularioEstudiante = ({ agregar, modificar, aModificar, modo } ) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");

    const guardarEstudiante = (event) => {
        event.preventDefault();
        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre
        }
        if(typeof(estudiante.id) === 'number' && (estudiante.id.toString().length >= 6) && (estudiante.id.toString().length <= 10)){
            agregar(estudiante)
            setId("");
            setNombre("");
            setSemestre("");
        }else{
            alert("ID inválido")
        }
    }

    const modificarEstudiante = (event) => {
        event.preventDefault();

        let nuevoId = aModificar.id
        let nuevoNombre = aModificar.nombre
        let nuevoSemestre = aModificar.semestre

        if(id !== ''){

            nuevoId = id
        }

        if(nombre !== ''){
            nuevoNombre = nombre
        }

        if(semestre !== ''){
            nuevoSemestre = semestre
        }

        let estudiante = {
            id: nuevoId,
            nombre: nuevoNombre,
            semestre: nuevoSemestre
        }
        modificar(aModificar, estudiante)
        setId("");
        setNombre("");
        setSemestre("");
    }

    if (modo === 'Registrar') {
        return (
            <>
                <form onSubmit={guardarEstudiante}>
                    <div className="form-group ">
                        <label htmlFor="id">ID Estudiante</label>
                        <input type="id" className="form-control" id="id" placeholder={'id'} value={id} onChange={(event) => setId(event.target.value)} />
                    </div> <br/>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder={'nombre'} value={nombre} onChange={(event) => setNombre(event.target.value)} />
                    </div> <br/>
                    <div className="form-group">
                        <label htmlFor="semestre">Semestre</label>
                        <input type="text" className="form-control" id="semestre" placeholder={'semestre'} value={semestre} onChange={(event) => setSemestre(event.target.value)} />
                    </div> <br/>
    
                    <button type="submit" className="btn btn-primary"> Registrar </button>
                </form>
            </>
        )
    } else if(modo === 'Modificar') {
        return (
            <>
                <form onSubmit={modificarEstudiante}>
                    <div className="form-group ">
                        <label htmlFor="id">ID Estudiante</label>
                        <input type="id" className="form-control" id="id" placeholder={aModificar.id} value={id} onChange={(event) => setId(event.target.value)} />
                    </div> <br/>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder={aModificar.nombre} value={nombre} onChange={(event) => setNombre(event.target.value)} />
                    </div> <br/>
                    <div className="form-group">
                        <label htmlFor="semestre">Semestre</label>
                        <input type="text" className="form-control" id="semestre" placeholder={aModificar.semestre} value={semestre} onChange={(event) => setSemestre(event.target.value)} />
                    </div> <br/>
    
                    <button type="submit" className="btn btn-info"> Modificar </button>
                </form>
            </>
        )
    }

}