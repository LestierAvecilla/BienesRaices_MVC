import express from "express";
import { formularioLogin,formularioRegistro,formularioRecuperarPassword } from "../controllers/usuarioController.js";

const router = express.Router();

//Routing 


router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.get('/recuperarPassword', formularioRecuperarPassword);


/* router.get('/', (req, res) => {     //arow function
    res.send('Hola mundo en expresss')
});

router.get('/nosotros', function(req, res) { //function
    res.json({msg: 'hola mundo en express'})
});

router.post('/otros', function(req, res) {
    res.json({msg: 'Respuesta de tipo post'})
});

router.route('/varios')    //Varios métodos
    .get(function(req, res) {
        res.json({msg: 'Respuesta de tipo get'})
    })
    .post(function(req, res) {
        res.json({msg: 'Respuesta de tipo post'})
    }) */

export default router;