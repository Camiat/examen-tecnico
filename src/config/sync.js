const sequelize = require('./db');
const Producto = require('../models/productoModel');
const Marca = require('../models/marcaModel');
const Categoria = require('../models/categoriaModel');

const syncDatabase = async () => {
    try {
        // es importante tener creada la base de datos sino tira error
        //con sync creo las tablas en la base
        await sequelize.sync({ force: true });  // 'force: true' borrará y recreará las tablas cada vez. Usa 'alter: true' para actualizar sin borrar datos.
        console.log("La base de datos ha sido sincronizada.");
        
        const productos = [
            {
                id: 1,
                nombre: 'Allroad',
                precio: 1142.00,
                id_categoria: 3,
                id_marca: 3
            },
            {
                id: 2,
                nombre: 'Alpine24',
                precio: 938.00,
                id_categoria: 1,
                id_marca: 1
            },
            {
                id: 3,
                nombre: 'EagleXR 3',
                precio: 1437.00,
                id_categoria: 6,
                id_marca: 2
            },
            {
                id: 4,
                nombre: 'Bianka394',
                precio: 1144.00,
                id_categoria: 3,
                id_marca: 3
            },
            {
                id: 5,
                nombre: 'Explorer6',
                precio: 1233.00,
                id_categoria: 3,
                id_marca: 3
            },
            {
                id: 6,
                nombre: 'Aluminum Max',
                precio: 727.00,
                id_categoria: 7,
                id_marca: 4
            },
            {
                id: 7,
                nombre: 'Nirone FT4',
                precio: 694.00,
                id_categoria: 9,
                id_marca: 3
            },
            {
                id: 8,
                nombre: 'Sora Pro',
                precio: 1443.00,
                id_categoria: 6,
                id_marca: 4
            },
            {
                id: 9,
                nombre: 'BSB 91',
                precio: 306.00,
                id_categoria: 1,
                id_marca: 1
            },
            {
                id: 10,
                nombre: 'RDO JK80',
                precio: 984.00,
                id_categoria: 2,
                id_marca: 2
            },
            {
                id: 11,
                nombre: 'Rival 1',
                precio: 881.00,
                id_categoria: 6,
                id_marca: 4
            },
            {
                id: 12,
                nombre: 'Cuadra350',
                precio: 824.00,
                id_categoria: 5,
                id_marca: 2
            },
            {
                id: 13,
                nombre: 'Cuadra360',
                precio: 569.00,
                id_categoria: 10,
                id_marca: 4
            },
            {
                id: 14,
                nombre: 'Royal',
                precio: 1392.00,
                id_categoria: 10,
                id_marca: 2
            },
            {
                id: 15,
                nombre: 'BN170',
                precio: 1024.00,
                id_categoria: 7,
                id_marca: 4
            },
            {
                id: 16,
                nombre: 'BST345',
                precio: 691.00,
                id_categoria: 10,
                id_marca: 1
            },
            {
                id: 17,
                nombre: 'C-Sport 2',
                precio: 419.00,
                id_categoria: 4,
                id_marca: 2
            },
            {
                id: 18,
                nombre: 'C-Sport F500',
                precio: 1398.00,
                id_categoria: 1,
                id_marca: 3
            },
            {
                id: 19,
                nombre: 'Centaruao',
                precio: 597.00,
                id_categoria: 8,
                id_marca: 4
            },
            {
                id: 20,
                nombre: 'ChopperMAX',
                precio: 311.00,
                id_categoria: 7,
                id_marca: 3
            },
            {
                id: 21,
                nombre: 'Contrail 70',
                precio: 351.00,
                id_categoria: 1,
                id_marca: 3
            },
            {
                id: 22,
                nombre: 'Curse 10',
                precio: 1000.00,
                id_categoria: 2,
                id_marca: 1
            },
            {
                id: 23,
                nombre: 'Duel 29S',
                precio: 1129.00,
                id_categoria: 8,
                id_marca: 3
            },
            {
                id: 24,
                nombre: 'E-Road',
                precio: 385.00,
                id_categoria: 5,
                id_marca: 4
            },
            {
                id: 25,
                nombre: 'E-Road Aria',
                precio: 890.00,
                id_categoria: 1,
                id_marca: 1
            },
            {
                id: 26,
                nombre: 'Fixie PROMAX',
                precio: 1347.00,
                id_categoria: 4,
                id_marca: 1
            },
            {
                id: 27,
                nombre: 'FRT 450',
                precio: 1402.00,
                id_categoria: 10,
                id_marca: 4
            },
            {
                id: 28,
                nombre: 'Gravel',
                precio: 1043.00,
                id_categoria: 8,
                id_marca: 2
            },
            {
                id: 29,
                nombre: 'GRX 13v',
                precio: 1136.00,
                id_categoria: 3,
                id_marca: 3
            },
            {
                id: 30,
                nombre: 'GRZ 12v',
                precio: 1005.00,
                id_categoria: 1,
                id_marca: 3
            },
            {
                id: 31,
                nombre: 'Hydra Max',
                precio: 1224.00,
                id_categoria: 2,
                id_marca: 1
            },
            {
                id: 32,
                nombre: 'Jump3000',
                precio: 1014.00,
                id_categoria: 8,
                id_marca: 2
            },
            {
                id: 33,
                nombre: 'Magma100',
                precio: 491.00,
                id_categoria: 2,
                id_marca: 1
            },
            {
                id: 34,
                nombre: 'Nero 430',
                precio: 1145.00,
                id_categoria: 6,
                id_marca: 1
            },
            {
                id: 35,
                nombre: 'Pista Nero',
                precio: 1478.00,
                id_categoria: 1,
                id_marca: 1
            },
            {
                id: 36,
                nombre: 'Pro Banel',
                precio: 861.00,
                id_categoria: 2,
                id_marca: 4
            },
            {
                id: 37,
                nombre: 'Revox 489',
                precio: 1014.00,
                id_categoria: 8,
                id_marca: 3
            },
            {
                id: 38,
                nombre: 'Revox TZ900',
                precio: 918.00,
                id_categoria: 4,
                id_marca: 2
            },
            {
                id: 39,
                nombre: 'Thriathlon Pro',
                precio: 579.00,
                id_categoria: 8,
                id_marca: 4
            },
            {
                id: 40,
                nombre: 'Tony 390',
                precio: 1447.00,
                id_categoria: 2,
                id_marca: 4
            },
            {
                id: 41,
                nombre: 'Trailie rosa',
                precio: 995.00,
                id_categoria: 1,
                id_marca: 4
            },
            {
                id: 42,
                nombre: 'Trailie verde',
                precio: 679.00,
                id_categoria: 9,
                id_marca: 2
            },
            {
                id: 43,
                nombre: 'TRY 12',
                precio: 1357.00,
                id_categoria: 5,
                id_marca: 3
            },
            {
                id: 44,
                nombre: 'TSE100',
                precio: 311.00,
                id_categoria: 7,
                id_marca: 1
            },
            {
                id: 45,
                nombre: 'XES 100',
                precio: 416.00,
                id_categoria: 8,
                id_marca: 2
            },
            {
                id: 46,
                nombre: 'XES 105',
                precio: 919.00,
                id_categoria: 5,
                id_marca: 1
            },
            {
                id: 47,
                nombre: 'XR3',
                precio: 1189.00,
                id_categoria: 6,
                id_marca: 2
            },
            {
                id: 48,
                nombre: 'XR4',
                precio: 689.00,
                id_categoria: 2,
                id_marca: 3
            },
            {
                id: 49,
                nombre: 'XR5',
                precio: 1256.00,
                id_categoria: 2,
                id_marca: 4
            },
            {
                id: 50,
                nombre: 'XR6',
                precio: 478.00,
                id_categoria: 4,
                id_marca: 2
            }
        ];
        

        const marcas = [
            {
                id: 1,
                nombre: 'Orbeta'
            },
            {
                id: 2,
                nombre: 'Escoza'
            },
            {
                id: 3,
                nombre: 'Meri'
            },
            {
                id: 4,
                nombre: 'Melfort'
            }
        ];

        const categorias = [
            {
                id: 1,
                nombre: 'Urbanas'
            },
            {
                id: 2,
                nombre: 'Ruta'
            },
            {
                id: 3,
                nombre: 'Triatlón y Contrarreloj'
            },
            {
                id: 4,
                nombre: 'Montaña'
            },
            {
                id: 5,
                nombre: 'Plegables'
            },
            {
                id: 6,
                nombre: 'Motocross'
            },
            {
                id: 7,
                nombre: 'Paseo'
            },
            {
                id: 8,
                nombre: 'Híbridas'
            },
            {
                id: 9,
                nombre: 'De Pista'
            },
            {
                id: 10,
                nombre: 'Eléctricas'
            }
        ];
        
        //agrego datos a las tablas
        await Categoria.bulkCreate(categorias);
        await Marca.bulkCreate(marcas);
        await Producto.bulkCreate(productos);
    } catch (error) {
        console.error("Hubo un error sincronizando la base de datos:", error);
    } finally {
        await sequelize.close();
    }
};

syncDatabase();