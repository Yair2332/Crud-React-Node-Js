

export function ItemEmpleado({ empleado, setEmpleadoSelect, setEditar, setBorrar }) {

    const editarEmpleado = () => {
        setEditar(true)
        setBorrar(false)
        setEmpleadoSelect(empleado.id_empleado)
    }

    const eliminarEmpleado = () => {
        setBorrar(true)
        setEditar(false)
        setEmpleadoSelect(empleado.id_empleado)
    }

    return (
        <tr>
            <td>{empleado.documento}</td>
            <td>{empleado.nombre}</td>
            <td>{empleado.apellido}</td>
            <td>{empleado.edad}</td>
            <td>{empleado.correo}</td>
            <td>{empleado.telefono}</td>
            <td>
                <button className="btn btn-warning btn-sm" onClick={editarEmpleado}><i className="bi bi-pencil text-dark"></i></button>
                <button className="btn btn-danger btn-sm" onClick={eliminarEmpleado}><i className="bi bi-trash text-dark"></i></button>
            </td>
        </tr>
    )
}