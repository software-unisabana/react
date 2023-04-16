
export const FormularioEstudiante = ({ agregar, dato, setDato }) => {

    const guardarEstudiante = (event) => {
        event.preventDefault();
        agregar(dato)
        setDato({
            id: "",
            nombre: "",
            semestre: ""
        })
    }

    return (
        <>
            <form onSubmit={guardarEstudiante}>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={dato.id} onChange={(event) => setDato({ ...dato, id: event.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={dato.nombre} onChange={(event) => setDato({ ...dato, nombre: event.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="semestre">Semestre</label>
                    <input type="text" className="form-control" id="semestre" placeholder="semestre" value={dato.semestre} onChange={(event) => setDato({ ...dato, semestre: event.target.value })} />
                </div>

                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </>
    )
}