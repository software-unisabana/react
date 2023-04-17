import { useState } from "react"

export const FormularioEstudiante = ({ agregar , buscarName }) => {
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad , setFacultad] = useState("")
    

    const guardarEstudiante = (event) => {
        event.preventDefault();

        if(6 <= id <= 10 && nombre.length > 3){
            let estudiante = {
                id: id,
                nombre: nombre,
                semestre: semestre,
                facultad: facultad
            }
            agregar(estudiante)
            setId("");
            setNombre("");
            setSemestre("");
            setFacultad("");
        }else{
            alert("El id debe tener entre 6-10 caracteres y el nombre mas de 3 caracteres")
        }
        
    }


    return (
        <>
            <form onSubmit={guardarEstudiante}>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="number" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="semestre">Escoge tu semestre:</label>
                    <select name="semestre" id="semestre" value={semestre} className="form-select" aria-label="Default select example" onChange={(event) =>  {setSemestre(event.target.value)}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3" >3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="facultad">Escoge tu Facultad:</label>
                    <select name="facultad" id="facultad" value={facultad} className="form-select" aria-label="Default select example" onChange={(event) =>  {setFacultad(event.target.value)}}>
                        <option value="Comunicacion">Comunicacion</option>
                        <option value="Derecho">Derecho</option>
                        <option value="Educacion">Educacion</option>
                        <option value="Ingenieria">Ingenieria</option>
                        <option value="Medicina">Medicina</option>
                    </select>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
            
        </>
    )
}