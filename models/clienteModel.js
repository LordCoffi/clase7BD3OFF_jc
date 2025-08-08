// models/clienteModelo.js
const pool = require('../config/db.js');

async function listarClientes() {
  const [filas] = await pool.query('SELECT * FROM td_cliente_jc');
  return filas;
}

async function obtenerClientePorId(id) {
  const [filas] = await pool.query(
    'SELECT * FROM td_cliente_jc WHERE id_cliente_jc = ?',
    [id]
  );
  return filas[0];
}

async function crearCliente(datos) {
  const { nombre_jc } = datos;
  const [resultado] = await pool.query(
    'INSERT INTO td_cliente_jc (nombre_jc) VALUES (?)',
    [nombre_jc]
  );
  return resultado.insertId;
}

async function actualizarCliente(id, datos) {
  const { nombre_jc } = datos;
  await pool.query(
    'UPDATE td_cliente_jc SET nombre_jc = ? WHERE id_cliente_jc = ?',
    [nombre_jc, id]
  );
}

async function eliminarCliente(id) {
  await pool.query(
    'DELETE FROM td_cliente_jc WHERE id_cliente_jc = ?',
    [id]
  );
}

module.exports = {
  listarClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente
};
