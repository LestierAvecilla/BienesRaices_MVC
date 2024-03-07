import { check, validationResult} from 'express-validator';
import Usuario from '../models/Usuario.js';
import { generarId } from '../helpers/tokens.js'

const formularioLogin =  (req,res) => {
    res.render('auth/login' , {
            pagina: 'Iniciar sesion'
        })
}

const formularioRegistro =  (req,res) => {
    res.render('auth/registro' , {
            pagina: 'Crear cuenta'
        })
}

const registrar = async (req,res) => {
    
 
    
    // Validacion
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req) //valida si el campo esta vacio
    await check('email').isEmail().withMessage('Ese no es un email').run(req) 
    await check('password').isLength({ min: 6 }).withMessage('El password debe tener al menos 6 caracteres').run(req)
    await check('repetir_password').equals(req.body.password).withMessage('Los Password no son iguales').run(req)

    let resultado = validationResult(req)

    

    //Verificar que el resultado este vacio
    
    if(!resultado.isEmpty()){
        //Errores
        return res.render('auth/registro' , {
            pagina: 'Crear cuenta',
            errores: resultado.array(),
            usuario:{
                nombre: req.body.nombre,
                email: req.body.email
            }
        })

    }
    //Extraer datos
    const {nombre, email, password} = req.body
    //verificar que el usuario no este duplicado
    const existeUsuario = await Usuario.findOne({where : {email}})

    if(existeUsuario){
        res.render('auth/registro' , {
            pagina: 'Crear cuenta',
            errores: [{msg : 'El usuario ya esta registrado'}],
            usuario:{
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
   //Almacenar un usuario
   await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
   })


}


const formularioRecuperarPassword =  (req,res) => {
    res.render('auth/recuperarPassword' , {
            pagina: 'Recuperar Password'
        })
}

export{
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioRecuperarPassword
}