import { useState } from "react"

export const CourseList = ({cursos}) => {

    const Actualizar = () => {

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
                            return (<CourseItem item = {curso} Eliminar = {Eliminar}/>)
                        })}
    
                    </tbody>
                    </table> <br/><br/>
                
                <h1>Nuevo Curso</h1>
                
                <table>
                    <tbody >
    
                        <tr>
                            <td> Id: </td>
                            <td> <input id="GetId" type="number" name="id" /> </td>
                        </tr>
    
                        <tr>
                            <td> Nombre: </td>
                            <td> <input id="GetNombre" type="text" name="nombre"/> </td>
                        </tr>
    
                        <tr>
                            <td> Descripcion: </td>
                            <td> <input id="GetDescripcion" type="text" name="descripcion"/> </td>
                            
                        </tr>
    
                    </tbody>
                </table> <br/><br/>
    
                <button onClick={Guardar}>Guardar</button>
            </>
            )

    }

    const Eliminar = (event, id) => {

        cursos = cursos.filter(curso => curso.id != id);

        Actualizar()
    }

    const Guardar = () => {

        const id = document.getElementById('GetId').value;
        const nombre = document.getElementById('GetNombre').value;
        const descripcion = document.getElementById('GetDescripcion').value;

        let validacion = true;

        if ((id) && (nombre) && (descripcion)) {

            cursos.forEach(curso => {

                if (curso.id == id) {
                    validacion = false;
                }
            })

            if (validacion){

                cursos.push({id: id, nombre: nombre, descripcion: descripcion})
                Actualizar()

            } else {
                alert('Ese Id ya existe');
            }
            
        }else{
            alert('Ingrese todos los datos');    
        }
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
            </table> <br/><br/>
            
            <h1>Nuevo Curso</h1>
            
            <table>
                <tbody >

                    <tr>
                        <td> Id: </td>
                        <td> <input id="GetId" type="number" name="id" /> </td>
                    </tr>

                    <tr>
                        <td> Nombre: </td>
                        <td> <input id="GetNombre" type="text" name="nombre"/> </td>
                    </tr>

                    <tr>
                        <td> Descripcion: </td>
                        <td> <input id="GetDescripcion" type="text" name="descripcion"/> </td>
                        
                    </tr>

                </tbody>
            </table> <br/><br/>

            <button onClick={Guardar}>Guardar</button>
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