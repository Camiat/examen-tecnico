const Producto = require('../models/productoModel');
const Marca = require('../models/marcaModel');
const Categoria = require('../models/categoriaModel');

exports.productosConMarcaCategoria = async () => {
  try {
    const productos = await Producto.findAll({
      include: [
        { model: Categoria },
        { model: Marca }
      ]
    })
    return productos;
  } catch (error) {
    throw new Error(error.message);
  }
};