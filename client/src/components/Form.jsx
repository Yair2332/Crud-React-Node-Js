import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export function Form({ empleadoSeleccionado, editar, borrar, setEditar, setBorrar, buscarInfo, setEmpleado }) {

    const [documento, setDocumento] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState()
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState()

    const [idEmpleado, setIdEmpleado] = useState(0)
    const mySwal = 0


    useEffect(() => {
        if (empleadoSeleccionado) {
            axios.get(`http://localhost:3001/empleados/${empleadoSeleccionado}`)
                .then(response => {
                    const empleado = response.data[0];
                    setIdEmpleado(empleado.id_empleado)
                    setDocumento(empleado.documento);
                    setNombre(empleado.nombre);
                    setApellido(empleado.apellido);
                    setEdad(empleado.edad);
                    setCorreo(empleado.correo);
                    setTelefono(empleado.telefono);
                })
                .catch(error => {
                    console.error("Error al obtener el empleado:", error);
                });
        }
    }, [empleadoSeleccionado]);

    const limpiar = () => {
        setIdEmpleado('')
        setDocumento('');
        setNombre('');
        setApellido('');
        setEdad('');
        setCorreo('');
        setTelefono('');
        setEditar(false)
        setBorrar(false)
        setEmpleado('')
    }

    const enviarData = () => {
        axios.post('http://localhost:3001/agregarUsuario', {
            documento: documento,
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            correo: correo,
            telefono: telefono

        }).then(response => {
            console.log("Respuesta del servidor:", response.data);
            limpiar()
            buscarInfo()
        })
            .catch(error => {
                console.error("Error al enviar los datos:", error);
            });
    }

    const editarData = () => {
        axios.post('http://localhost:3001/editarUsuario', {
            id: idEmpleado,
            documento: documento,
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            correo: correo,
            telefono: telefono

        }).then(response => {
            console.log("Respuesta del servidor:", response.data);
            limpiar()
            buscarInfo()
        })
            .catch(error => {
                console.error("Error al editar los datos:", error);
            });
    }

    const borrarData= ()=>{
        axios.post('http://localhost:3001/borrarData', {
            id: idEmpleado
        }).then(response => {
            console.log("Respuesta del servidor:", response.data);

            limpiar()
            buscarInfo()
        })
            .catch(error => {
                console.error("Error al borrar los datos:", error);
            });
    }




    return (
        <div className="col-md-4">
            <div className="card shadow-lg p-4 pb-3 rounded-4">
                <h4 className="text-center text-primary">Registro de Usuario</h4>
                <div>
                    <div className="mb-1">
                        <label className="form-label">Documento</label>
                        <input value={documento ?? ''} type="text" className="form-control" onChange={(event) => { setDocumento(event.target.value) }} />
                    </div>
                    <div className="mb-1">
                        <label className="form-label">Nombre</label>
                        <input value={nombre ?? ''} type="text" className="form-control" onChange={(event) => { setNombre(event.target.value) }} />
                    </div>
                    <div className="mb-1">
                        <label className="form-label">Apellido</label>
                        <input value={apellido ?? ''} type="text" className="form-control" onChange={(event) => { setApellido(event.target.value) }} />
                    </div>
                    <div className="mb-1">
                        <label className="form-label">Edad</label>
                        <input value={edad ?? ''} type="text" className="form-control" onChange={(event) => { setEdad(event.target.value) }} />
                    </div>
                    <div className="mb-1">
                        <label className="form-label">Correo</label>
                        <input value={correo ?? ''} type="email" className="form-control" onChange={(event) => { setCorreo(event.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input value={telefono ?? ''} type="text" className="form-control" onChange={(event) => { setTelefono(event.target.value) }} />
                    </div>

                    <div className="btns d-flex gap-1">

                        {editar ? <button className="btn btn-warning w-100" onClick={editarData}>Editar</button> : ''}
                        {borrar ? <button className="btn btn-danger w-100" onClick={borrarData}>Borrar</button> : ''}
                        {editar || borrar ? <button className="btn btn-primary w-100" onClick={limpiar}>Cancelar</button> : <button type="submit" className="btn btn-primary w-100" onClick={enviarData}>Registrar</button>}



                    </div>
                </div>
            </div>
        </div>
    );

}