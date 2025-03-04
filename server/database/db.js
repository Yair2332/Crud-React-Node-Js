import mysql from "mysql";

const conexion= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'crud_react'
})

conexion.connect((e)=>{
    if (e) {
        console.log('Error al conectar con la bd');
    }else{
        console.log('Conexion exitosa');
    }
})

export default conexion;