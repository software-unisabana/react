export const CourseList = ({cursos}) => {

    const lista = <>
        <table>
            <tr>
                <th> ID </th>
                <th> NOMBRE </th>
                <th> DESCRIPCIÓN </th>
            </tr>

            {cursos.map(curso => {
                return (
                    <tr>
                        <td> {curso.id} </td>
                        <td>  {curso.nombre} </td>
                        <td>  {curso.descripcion}</td>
                    </tr>
                )
                
            })}
        </table>
    </>
    
    return (lista)

}

CourseList.defaultProps = {
cursos: [
    {
        id: 9,
        nombre: 'Noveno',
        descripcion:'Grado 9no'
    },
    {
        id: 10,
        nombre: 'Decimo',
        descripcion:'Grado 10mo'
    },
    {
        id: 11,
        nombre: 'Once',
        descripcion:'Grado 11vo'
    }
]
}