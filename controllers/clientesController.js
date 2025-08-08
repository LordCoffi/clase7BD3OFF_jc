// controllers/clientesControlador.js
const modelo = require('../models/clienteModel.js');

async function listar(req, res, next) {
  try {
    const datos = await modelo.listarClientes();
    res.json(datos);
  } catch (err) {
    next(err);
  }
}

async function obtener(req, res, next) {
  try {
    const cliente = await modelo.obtenerClientePorId(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'No encontrado' });
    res.json(cliente);
  } catch (err) {
    next(err);
  }
}

async function crear(req, res, next) {
  try {
    const idNuevo = await modelo.crearCliente(req.body);
    res.status(201).json({ id_cliente_jc: idNuevo });
  } catch (err) {
    next(err);
  }
}

async function actualizar(req, res, next) {
  try {
    await modelo.actualizarCliente(req.params.id, req.body);
    res.json({ mensaje: 'Cliente actualizado' });
  } catch (err) {
    next(err);
  }
}

async function eliminar(req, res, next) {
  try {
    await modelo.eliminarCliente(req.params.id);
    res.json({ mensaje: 'Cliente eliminado' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listar,
  obtener,
  crear,
  actualizar,
  eliminar
};
