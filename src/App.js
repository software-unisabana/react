import { useState } from "react"

export const CourseList = ({cursos}) => {

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
                        return (<CourseItem curso={curso}/>)
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

const CourseItem = ({curso}) => {
    const item = <>
        <tr>
            <td> {curso.id} </td>
            <td> {curso.nombre} </td>
            <td> {curso.descripcion} </td>
            <td> <button>Eliminar</button> </td>
        </tr>
    </>
    return(item)  
}