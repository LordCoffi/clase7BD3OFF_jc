// middlewares/validarAlquiler.js
const validarAlquiler = (req, res, next) => {
  const {
    id_cliente_alquiler_jc,
    id_vehiculo_alquiler_jc,
    fecha_alquiler_jc
  } = req.body;

  if (
    typeof id_cliente_alquiler_jc !== 'number' ||
    !Number.isInteger(id_cliente_alquiler_jc) ||
    id_cliente_alquiler_jc <= 0
  ) {
    return res
      .status(400)
      .json({ error: 'El campo id_cliente_alquiler_jc debe ser un entero positivo.' });
  }

  if (
    typeof id_vehiculo_alquiler_jc !== 'number' ||
    !Number.isInteger(id_vehiculo_alquiler_jc) ||
    id_vehiculo_alquiler_jc <= 0
  ) {
    return res
      .status(400)
      .json({ error: 'El campo id_vehiculo_alquiler_jc debe ser un entero positivo.' });
  }

  if (!fecha_alquiler_jc || isNaN(Date.parse(fecha_alquiler_jc))) {
    return res
      .status(400)
      .json({ error: 'El campo fecha_alquiler_jc es obligatorio y debe tener formato ISO (YYYY-MM-DD).' });
  }

  next();
};

module.exports = validarAlquiler;
