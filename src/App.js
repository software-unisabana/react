import { useState } from "react"

export const CourseList = ({cursos}) => {

    const Eliminar = (event, id) => {

        cursos = cursos.filter(curso => curso.id != id);

        setLista(
        <>
            <table>
                <tbody >
                    <tr>
                        <th> ID </th>
                        <th> NOMBRE </th>
                        <th> DESCRIPCIÓN </th>
                        <th> ELIMINAR </th>
                    </tr>

                    {cursos.map(curso => 
                    {
                        return (<CourseItem item = {curso}/>)
                    })}

                </tbody>
            </table>
        </>
        )
    }

    const CourseItem = ({item}) => {
        const data = 
        <>
            <tr>
                <td> {item.id} </td>
                <td> {item.nombre} </td>
                <td> {item.descripcion} </td>
                <td> <button onClick={event => Eliminar(event, item.id)}>Eliminar</button> </td>
            </tr>
        </>
        return(data)
    }

    const [lista, setLista] = useState(
        <>
            <table>
                <tbody >
                    <tr>
                        <th> ID </th>
                        <th> NOMBRE </th>
                        <th> DESCRIPCIÓN </th>
                        <th> ELIMINAR </th>
                    </tr>

                    {cursos.map(curso => 
                    {
                        return (<CourseItem item={curso}/>)
                    })}

                </tbody>
            </table>
        </>
    )

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