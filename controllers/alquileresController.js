// controllers/alquileresControlador.js
const modelo = require('../models/alquilerModel.js');

async function listar(req, res, next) {
  try {
    const datos = await modelo.listarAlquileres();
    res.json(datos);
  } catch (err) {
    next(err);
  }
}

async function obtener(req, res, next) {
  try {
    const alquiler = await modelo.obtenerAlquilerPorId(req.params.id);
    if (!alquiler) return res.status(404).json({ error: 'No encontrado' });
    res.json(alquiler);
  } catch (err) {
    next(err);
  }
}

async function crear(req, res, next) {
  try {
    const idNuevo = await modelo.crearAlquiler(req.body);
    res.status(201).json({ id_alquiler_jc: idNuevo });
  } catch (err) {
    next(err);
  }
}

async function actualizar(req, res, next) {
  try {
    await modelo.actualizarAlquiler(req.params.id, req.body);
    res.json({ mensaje: 'Alquiler actualizado' });
  } catch (err) {
    next(err);
  }
}

async function eliminar(req, res, next) {
  try {
    await modelo.eliminarAlquiler(req.params.id);
    res.json({ mensaje: 'Alquiler eliminado' });
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
