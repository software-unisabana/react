
export const Buscador=({buscar,setBuscar})=>{
    
    return (
        <>
        <div className="form-group ">
            <label htmlFor="id">buscar</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="id" 
                    placeholder="BUSCAR NOMBRE" 
                    value={buscar} onChange={(event) => setBuscar(event.target.value)} />
            </div>
        </>
        )
}