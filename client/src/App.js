import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Form } from './components/Form';
import { Listado } from './components/Listado';

function App() {

  const [resultadosDeBusqueda, setResultadosDeBusqueda] = useState([])
  const [empleadoSelect, setEmpleadoSelect] = useState(null)
  const [editar, setEditar]=useState(false)
  const [borrar, setBorrar]=useState(false)

  const buscarInformacion = () => {
    axios.get('http://localhost:3001/empleados').then((response) => { setResultadosDeBusqueda(response.data) })
  }

  useEffect(() => {
    buscarInformacion()

  }, [])


  return (
    <div className="App">

      <div className="container mt-3">
        <div className="row">
          <Form empleadoSeleccionado={empleadoSelect} editar={editar} borrar={borrar} setEditar={setEditar} setBorrar={setBorrar} buscarInfo={buscarInformacion} setEmpleado={setEmpleadoSelect}/>
          <Listado listaDeEmpleados={resultadosDeBusqueda} setEmpleadoSelect={setEmpleadoSelect} setEditar={setEditar} setBorrar={setBorrar}/>
        </div>
      </div>


    </div>
  );
}


export default App;
