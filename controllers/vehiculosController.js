// controllers/vehiculosControlador.js
const modelo = require('../models/vehiculoModel.js');

async function listar(req, res, next) {
  try {
    const datos = await modelo.listarVehiculos();
    res.json(datos);
  } catch (err) {
    next(err);
  }
}

async function obtener(req, res, next) {
  try {
    const vehiculo = await modelo.obtenerVehiculoPorId(req.params.id);
    if (!vehiculo) return res.status(404).json({ error: 'No encontrado' });
    res.json(vehiculo);
  } catch (err) {
    next(err);
  }
}

async function crear(req, res, next) {
  try {
    const idNuevo = await modelo.crearVehiculo(req.body);
    res.status(201).json({ id_vehiculo_jc: idNuevo });
  } catch (err) {
    next(err);
  }
}

async function actualizar(req, res, next) {
  try {
    await modelo.actualizarVehiculo(req.params.id, req.body);
    res.json({ mensaje: 'Vehículo actualizado' });
  } catch (err) {
    next(err);
  }
}

async function eliminar(req, res, next) {
  try {
    await modelo.eliminarVehiculo(req.params.id);
    res.json({ mensaje: 'Vehículo eliminado' });
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
