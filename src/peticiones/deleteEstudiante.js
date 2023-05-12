export const eliminarEstudiantes = async(codigo)=>{
    const url=`http://localhost:8080/estudiante/eliminar/${codigo}`
    const resp=await fetch(url,{
        method:'DELETE'
    });
    const data= await resp.json();
}