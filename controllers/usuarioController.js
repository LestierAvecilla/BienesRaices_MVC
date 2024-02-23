
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
const formularioRecuperarPassword =  (req,res) => {
    res.render('auth/recuperarPassword' , {
            pagina: 'Recuperar Password'
        })
}

export{
    formularioLogin,
    formularioRegistro,
    formularioRecuperarPassword
}