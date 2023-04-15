import { useState } from "react"

export const BarraBusqueda = ({ filtrar }) => {
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (event) => {
        setBusqueda(event.target.value)
        filtrar(event.target.value)
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">Buscar</label>
                    <input type="text" className="form-control" id="nombre" placeholder={'Nombre'} value={busqueda} onChange={(event) => handleChange(event)} />
                </div> <br />
            </form>
        </>
    )
}