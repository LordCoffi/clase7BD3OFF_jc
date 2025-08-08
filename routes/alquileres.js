// routes/alquileres.js
const express = require('express');
const router = express.Router();
const alquileresCtrl    = require('../controllers/alquileresController.js');
const validarAlquiler   = require('../middlewares/validarAlquiler.js');

router.get('/',    alquileresCtrl.listar);
router.get('/:id', alquileresCtrl.obtener);
router.post('/',   validarAlquiler, alquileresCtrl.crear);
router.put('/:id', validarAlquiler, alquileresCtrl.actualizar);
router.delete('/:id', alquileresCtrl.eliminar);

module.exports = router;
