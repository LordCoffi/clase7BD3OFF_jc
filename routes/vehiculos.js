// routes/vehiculos.js
const express = require('express');
const router = express.Router();
const vehiculosCtrl    = require('../controllers/vehiculosController.js');
const validarVehiculo  = require('../middlewares/validarVehiculo.js');

router.get('/',    vehiculosCtrl.listar);
router.get('/:id', vehiculosCtrl.obtener);
router.post('/',   validarVehiculo, vehiculosCtrl.crear);
router.put('/:id', validarVehiculo, vehiculosCtrl.actualizar);
router.delete('/:id', vehiculosCtrl.eliminar);

module.exports = router;
