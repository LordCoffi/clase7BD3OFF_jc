// index.js
require('dotenv').config();
const express = require('express');
const path = require("path");
const app = express();




// Rutas
const rutasAlquileres = require('./routes/alquileres');
const rutasClientes   = require('./routes/clientes');
const rutasVehiculos  = require('./routes/vehiculos');

app.use(express.static(path.join(__dirname, "views")));

app.use(express.json());

// Ruta predeterminada (root)
app.get('/', (req, res) => {
  res.send('🚗 Bienvenido(a) a mi API de alquiler de vehículos 🚗');
});

// 1. Montar rutas de la API
app.use('/api/alquileres', rutasAlquileres);
app.use('/api/clientes',   rutasClientes);
app.use('/api/vehiculos',  rutasVehiculos);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
