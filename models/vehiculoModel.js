// models/vehiculoModelo.js
const pool = require('../config/db.js');

async function listarVehiculos() {
  const [filas] = await pool.query('SELECT * FROM td_vehiculo_jc');
  return filas;
}

async function obtenerVehiculoPorId(id) {
  const [filas] = await pool.query(
    'SELECT * FROM td_vehiculo_jc WHERE id_vehiculo_jc = ?',
    [id]
  );
  return filas[0];
}

async function crearVehiculo(datos) {
  const { modelo_jc } = datos;
  const [resultado] = await pool.query(
    'INSERT INTO td_vehiculo_jc (modelo_jc) VALUES (?)',
    [modelo_jc]
  );
  return resultado.insertId;
}

async function actualizarVehiculo(id, datos) {
  const { modelo_jc } = datos;
  await pool.query(
    'UPDATE td_vehiculo_jc SET modelo_jc = ? WHERE id_vehiculo_jc = ?',
    [modelo_jc, id]
  );
}

async function eliminarVehiculo(id) {
  await pool.query(
    'DELETE FROM td_vehiculo_jc WHERE id_vehiculo_jc = ?',
    [id]
  );
}

module.exports = {
  listarVehiculos,
  obtenerVehiculoPorId,
  crearVehiculo,
  actualizarVehiculo,
  eliminarVehiculo
};
