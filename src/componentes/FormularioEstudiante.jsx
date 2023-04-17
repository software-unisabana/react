import { useState } from "react"

export const FormularioEstudiante = ({ agregar}) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad, setFacultad] = useState("");
    

    const guardarEstudiante = (event) => {
        event.preventDefault();

        if (isNaN(id) || id == "") {
            alert("El ID del estudiante debe ser un número");
            return;
        }
        if (id.length < 6 || id.length > 10){
            alert("El ID debe tener minimo 6 y maximo 10")
            return;
        }

        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre,
            facultad: facultad,
        }
        agregar(estudiante)
        setId("");
        setNombre("");
        setSemestre("");
        setFacultad("");
    }

    return (
        <>
            <form onSubmit={guardarEstudiante}>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="semestre">Semestre</label>
                    <br></br>
                    {/* <input type="text" className="form-control" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)} /> */}
                    <select name="semestre" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)}>
                    <option value="">--Seleccione el semestre--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="facultad">Facultad</label>
                    <br></br>
                    <select name="facultad" id="facultad" placeholder="facultad" value={facultad} onChange={(event) => setFacultad(event.target.value)}>
                    <option value="">--Seleccione la facultad--</option>
                    <option value="Ingenieria">Ingenieria</option>
                    <option value="Medicina">Medicina</option>
                    <option value="Comunicacion">Comunicacion</option>
                    <option value="Educacion">Educacion</option>
                    <option value="Derecho">Derecho</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </>
    )
}
