
export const FormularioEstudiante = ({ agregar, dato, setDato }) => {

    const guardarEstudiante = (event) => {
        event.preventDefault();
        agregar(dato)
        setDato({
            id: "",
            nombre: "",
            semestre: "",
            facultad: ""
        })
    }

    return (
        <>
            <form onSubmit={guardarEstudiante}>
                <div className="row">
                    <div className="col-2 ">
                        <label htmlFor="id">ID Estudiante</label>
                    </div>
                    <div className="col-2 ">
                        <input type="text" pattern="[0-9]+" required={true}  minLength={6} maxLength={10} className="form-control" id="id" placeholder="Id" value={dato.id} onChange={(event) => setDato({ ...dato, id: event.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 ">
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="col-2 ">
                        <input type="text" required={true} minLength={3} className="form-control" id="nombre" placeholder="Nombre Estudiante" value={dato.nombre} onChange={(event) => setDato({ ...dato, nombre: event.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 ">
                        <label htmlFor="semestre">Semestre</label>
                    </div>
                    <div className="col-2 ">
                        <select label="Semestre" required={true} value={dato.semestre} onChange={(event) => setDato({ ...dato, semestre: event.target.value })} className="form-control" id="semestre">
                            <option value="">Seleccione...</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 ">
                        <label htmlFor="facultad">Facultad</label>
                    </div>
                    <div className="col-2 ">
                        <select label="Facultad" required={true} value={dato.facultad} onChange={(event) => setDato({ ...dato, facultad: event.target.value })} className="form-control" id="facultad">
                            <option value="">Seleccione...</option>
                            <option value="Ingenieria">Ingenieria</option>
                            <option value="Medicina">Medicina</option>
                            <option value="Comunicacion">Comunicacion</option>
                            <option value="Derecho">Derecho</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4 text-center" >
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    </div>
                </div>
            </form >
        </>
    )
}