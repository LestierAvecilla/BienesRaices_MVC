//const express = require('express');//common js/express

import express from "express";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import db from  './config/db.js'




//Crea la app
const app = express();

//habilitar lectura de datos de formulario
app.use(express.urlencoded({ extended: true}))

// Conexion a la base de datos

try {
    await db.authenticate();
    db.sync();
    console.log('Conectado a la base de datos');
} catch (error) {
    console.log(error);
}

//habilitar pug
app.set('view engine', 'pug')
app.set('views' , './views')

//Carpeta publica
app.use(express.static('public'))


//Routing
app.use('/auth', usuariosRoutes)



//Definir un puerto y arrancar el proyecto

const port = 3001;
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});