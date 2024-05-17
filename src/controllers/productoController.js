const productoService = require('../services/productoService');

const productoController = {};

productoController.productosConMarcaCategoria = async (req, res) => {
  try {
    const productos = await productoService.productosConMarcaCategoria();
    res.status(200).json({productos})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: error.message });
  }
};

module.exports = productoController;