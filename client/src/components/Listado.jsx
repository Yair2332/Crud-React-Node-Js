import { ItemEmpleado } from "./ItemEmpleado"


export function Listado({ listaDeEmpleados, setEmpleadoSelect, setEditar,setBorrar  }) {


    return (

        <div className="col-md-8">
            <div className="card shadow-lg p-4 px-3 rounded-4">
                <h4 className="text-center text-success">Lista de Usuarios</h4>
                <table className="table table-striped table-hover mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Documento</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            listaDeEmpleados.map((val, key) => {
                                return <ItemEmpleado key={key} empleado={val} setEmpleadoSelect={setEmpleadoSelect} setEditar={setEditar} setBorrar={setBorrar}/>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )

}