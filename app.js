const createError = require('http-errors');
const express = require('express');
const productoRoutes = require('./src/routes/productoRoutes');

//agrego puerto
const puerto = 3067;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas linea que agregué 
app.use('/productos', productoRoutes);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;


//Agregué puerto
app.listen(puerto,()=> {
  console.log('servidor corriendo')
});