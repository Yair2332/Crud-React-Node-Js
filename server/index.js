import express from "express";
import cors from "cors";
import conexion from "./database/db.js";

const app = express()

app.use(cors())
app.use(express.json())

app.set('port', 3001)

app.post('/agregarUsuario', (req, res) => {
    const data = [req.body.documento, req.body.nombre, req.body.apellido, req.body.edad, req.body.correo, req.body.telefono]
    console.log(data);

    const documento = req.body.documento
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const edad = req.body.edad
    const correo = req.body.correo
    const telefono = req.body.telefono


    conexion.query("INSERT INTO empleados SET ? ", { documento, nombre, apellido, edad, correo, telefono }, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Registro exitoso');
            res.send(results)

        }
    })

})

app.post('/editarUsuario', (req, res) => {

    const id = req.body.id
    const documento = req.body.documento
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const edad = req.body.edad
    const correo = req.body.correo
    const telefono = req.body.telefono


    conexion.query("UPDATE empleados SET documento=?, nombre=?, apellido=?, edad=?, correo=?, telefono=? WHERE id_empleado=?", [documento, nombre, apellido, edad, correo, telefono, id ], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Registro exitoso');
            res.send(results)

        }
    })

})


app.post('/borrarData', (req, res)=>{
    const id=req.body.id
    conexion.query('DELETE FROM empleados WHERE id_empleado=?',[id],(err, results)=>{
        if (err) {
            console.log(err);
        } else {
            res.send(results)
        }
    })
})

app.get('/empleados', (req, res) => {
    conexion.query('SELECT * FROM empleados', (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.send(results)
        }
    })
})

app.get('/empleados/:id', (req, res) => {
    conexion.query('SELECT * FROM empleados WHERE id_empleado=?',[req.params.id], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.send(results)
        }
    })
})

app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto: ' + app.get('port'));
})


