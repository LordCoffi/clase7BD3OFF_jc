// middlewares/validarVehiculo.js
const validarVehiculo = (req, res, next) => {
  const { modelo_jc } = req.body;
  if (typeof modelo_jc !== 'string' || !modelo_jc.trim()) {
    return res
      .status(400)
      .json({ error: 'El campo modelo_jc es obligatorio y debe ser una cadena no vacía.' });
  }
  next();
};

module.exports = validarVehiculo;
