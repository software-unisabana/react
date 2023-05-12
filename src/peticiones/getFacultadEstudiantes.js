export const getFacultadEstudiantes = async(facultad) => {
    const url = `http://localhost:8080/estudiantes?facultad=${facultad}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const   estudiantesList =   data.map( estudiante => ({
        id: estudiante.id,
        nombre: estudiante.nombre,
        semestre: estudiante.semestre,
        facultad: estudiante.facultad,
        programa: estudiante.programa
    }))
    return estudiantesList;
}