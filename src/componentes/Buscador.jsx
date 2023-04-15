import { useCallback, useState } from "react"

export const Buscador=()=>{
    const [buscar,setBuscar]=useState("");
    const Buscar=()=>{

    }
    return (
        <>
        <form onSubmit={Buscar}>
                <div className="form-group ">
                    <label htmlFor="id">buscar</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="id" 
                    placeholder="Ingrese id" 
                    value={buscar} onChange={(event) => setBuscar(event.target.value)} />
                </div>
        </form>
        </>
        )
}