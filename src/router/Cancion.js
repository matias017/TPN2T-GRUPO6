let joi = require('joi');
import express from 'express';
let router = express.Router();
import dataCancion from '../componente/cancionn.js';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:id', async (req,res)=>{
  const cancion = await dataCancion.getCancion(req.params.id);
  if(cancion){
      res.json(cancion);
  } else {
      res.status(404).send('Usuario no encontrado');
  }
});

//id, Nombre, género, dificultad, tiempo, imagen, %completado, popularidad

router.post('/', async (req, res)=>{    
  const schema = joi.object({
      nombre: joi.string().alphanum().min(3).required(),
      genero: joi.string().alphanum().min(3).required(),
      dificultad: joi.number().min(1).max(5).required(),
      tiempo :joi.number().min(1).max(9999999).required(),
      porcentaje: joi.number().min(0).max(100).required(),
      imagen : joi.image().allowTypes(['png', 'jpg']),
      popularidad: joi.number().min(1).max(5).required()

  });
  const result = schema.validate(req.body);
  console.log(result);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  } else{
      let cancion = req.body;
      cancion = await producto.addCancion(cancion);
      res.stats(200).json(cancion);
  }    
});
router.put('/:id', async (req, res)=>{    
  const schema = joi.object({
    nombre: joi.string().alphanum().min(3).required(),
    genero: joi.string().alphanum().min(3).required(),
    dificultad: joi.number().min(1).max(5).required(),
    tiempo :joi.number().min(1).max(9999999).required(),
    porcentaje: joi.number().min(0).max(100).required(),
    imagen : joi.image().allowTypes(['png', 'jpg']),
    popularidad: joi.number().min(1).max(5).required()
  });
  const result = schema.validate(req.body);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  } else{
      let cancion = req.body;
      cancion._id = req.params.id;
      dataCancion.updateCancion(cancion);
      res.json(cancion);
  }
});

router.delete('/:id', async (req, res)=>{
  const cancion = await dataCancion.getCancion(req.params.id)
  if(!cancion){
      res.status(404).send('Cancion no encontrado');
  } else {
      dataCancion.deleteCancion(req.params.id);
      res.status(200).send('Cancion eliminado');
  }
});

export default router;
