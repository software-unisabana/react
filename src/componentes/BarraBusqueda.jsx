import { useEffect, useState } from "react"

export const BarraBusqueda = ({ listaEstudiantes }) => {

    const [estudiantes, setEstudiantes] = useState([...listaEstudiantes]);
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (event) => {
        setBusqueda(event.target.value)
        buscarEstudiante(event.target.value)
    }

    const buscarEstudiante = (terminoBusqueda) => {
        const resultadosBusqueda = estudiantes.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setEstudiantes(resultadosBusqueda);
    }

    return (
        <>
            <form onSubmit={buscarEstudiante}>
                <div className="form-group">
                    <label htmlFor="semestre">Buscar</label>
                    <input type="text" className="form-control" id="semestre" placeholder={'Nombre'} value={busqueda} onChange={(event) => handleChange(event)} />
                </div> <br />
            </form>
        </>
    )
}