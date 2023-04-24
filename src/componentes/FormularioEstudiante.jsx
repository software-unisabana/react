
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
                <div className="row">
                    <div class="col-2 ">
                        <label htmlFor="id">ID Estudiante</label>
                    </div>
                    <div class="col-2 ">
                        <input type="id" className="form-control" id="id" placeholder="Id" value={dato.id} onChange={(event) => setDato({ ...dato, id: event.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div class="col-2 ">
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div class="col-2 ">
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre Estudiante" value={dato.nombre} onChange={(event) => setDato({ ...dato, nombre: event.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div class="col-2 ">
                        <label htmlFor="semestre">Semestre</label>
                    </div>
                    <div class="col-2 ">
                        <input type="text" className="form-control" id="semestre" placeholder="Semestre" value={dato.semestre} onChange={(event) => setDato({ ...dato, semestre: event.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center" >
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    </div>
                </div>
            </form >
        </>
    )
}