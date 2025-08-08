// routes/clientes.js
const express = require('express');
const router = express.Router();
const clientesCtrl    = require('../controllers/clientesController.js');
const validarCliente  = require('../middlewares/validarCliente.js');

router.get('/',    clientesCtrl.listar);
router.get('/:id', clientesCtrl.obtener);
router.post('/',   validarCliente, clientesCtrl.crear);
router.put('/:id', validarCliente, clientesCtrl.actualizar);
router.delete('/:id', clientesCtrl.eliminar);

module.exports = router;
