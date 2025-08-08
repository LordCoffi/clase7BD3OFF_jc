// models/alquilerModelo.js
const pool = require('../config/db.js');

async function listarAlquileres() {
  const [filas] = await pool.query('SELECT * FROM td_alquiler_jc');
  return filas;
}

async function obtenerAlquilerPorId(id) {
  const [filas] = await pool.query(
    'SELECT * FROM td_alquiler_jc WHERE id_alquiler_jc = ?',
    [id]
  );
  return filas[0];
}

async function crearAlquiler(datos) {
  const {
    id_cliente_alquiler_jc,
    id_vehiculo_alquiler_jc,
    fecha_alquiler_jc
  } = datos;
  const [resultado] = await pool.query(
    `INSERT INTO td_alquiler_jc 
     (id_cliente_alquiler_jc, id_vehiculo_alquiler_jc, fecha_alquiler_jc)
     VALUES (?, ?, ?)`,
    [id_cliente_alquiler_jc, id_vehiculo_alquiler_jc, fecha_alquiler_jc]
  );
  return resultado.insertId;
}

async function actualizarAlquiler(id, datos) {
  const {
    id_cliente_alquiler_jc,
    id_vehiculo_alquiler_jc,
    fecha_alquiler_jc
  } = datos;
  await pool.query(
    `UPDATE td_alquiler_jc
     SET id_cliente_alquiler_jc = ?, 
         id_vehiculo_alquiler_jc = ?, 
         fecha_alquiler_jc = ?
     WHERE id_alquiler_jc = ?`,
    [id_cliente_alquiler_jc, id_vehiculo_alquiler_jc, fecha_alquiler_jc, id]
  );
}

async function eliminarAlquiler(id) {
  await pool.query(
    'DELETE FROM td_alquiler_jc WHERE id_alquiler_jc = ?',
    [id]
  );
}

module.exports = {
  listarAlquileres,
  obtenerAlquilerPorId,
  crearAlquiler,
  actualizarAlquiler,
  eliminarAlquiler
};
