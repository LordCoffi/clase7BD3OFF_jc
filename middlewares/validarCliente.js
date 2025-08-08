// middlewares/validarCliente.js
const validarCliente = (req, res, next) => {
  const { nombre_jc } = req.body;
  if (typeof nombre_jc !== 'string' || !nombre_jc.trim()) {
    return res
      .status(400)
      .json({ error: 'El campo nombre_jc es obligatorio y debe ser una cadena no vacía.' });
  }
  next();
};

module.exports = validarCliente;
