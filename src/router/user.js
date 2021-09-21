const express = require('express');

const router = new express.Router();

router.get('/',(req,res)=>{
    /* let params = Object.keys(req.query);
    console.log(req.query[params[0]]) */
    if(req.query.nombre){
        return res.send({nombre: 'Jesus', estado: 'Jalisco'});   
    }
    res.status(401).send({error: 'Favor de agregar un nombre a tu request'});
});

router.post('/post',(req,res)=>{
    if(req.body.email){
        res.send({nombre: 'Gerardo', estado: 'Jalisco'})
    } else{
        res.status(404).send({error: 'Usuario inexistente'});
    }
});

router.put('/put',(req,res)=>{
    res.send({nombre: 'Chacana', estado: 'Atacama'});
});

router.delete('/delete',(req,res)=>{
    res.send({mensaje: 'Usuario eliminado'});
});


module.exports = router;