const express = require('express');
const router = express.Router(); //devuelve objeto router

const Publicaciones = require('../models/publicacion');

router.get('/', async (req, res) => { // piden pedticion get a la ruta inicial del servidor
    const publicaciones = await Publicaciones.find();
    res.render('index', {
        publicaciones // publicaciones: publicaciones
    });
});

router.post('/add', async (req, res) =>{
    const publicacion = new Publicaciones(req.body);
    await publicacion.save();
   
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) =>{
    
    const {id} = req.params;
    await Publicaciones.remove({_id: id});
    res.redirect('/');
});

router.get('/estado/:id', async (req, res) =>{
    const {id}  = req.params;
    const publicacion = await Publicaciones.findById(id);
    publicacion.estado = !publicacion.estado;
    await publicacion.save();
    res.redirect('/');
});

router.get('/editar/:id', async (req, res) => {
    const {id}  = req.params;
    const publicacion = await Publicaciones.findById(id);
    res.render('edit', {
        publicacion
    });
});

router.post('/editar/:id', async (req, res) =>{
    const {id}  = req.params;
    await Publicaciones.update({_id: id}, req.body);
    res.redirect('/');
});

module.exports = router;
