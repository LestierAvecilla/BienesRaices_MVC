import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const Usuario = db.define('usuarios',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    emai: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    } ,
    token: dataTypes.STRING,
    confirmado: dataTypes.STRING
})

export default Usuario