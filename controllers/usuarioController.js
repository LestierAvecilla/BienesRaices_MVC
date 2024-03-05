import { check, validationResult} from 'express-validator';
import Usuario from '../models/Usuario.js';

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



    const usuario = await Usuario.create(req.body)

    res.json(usuario)

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