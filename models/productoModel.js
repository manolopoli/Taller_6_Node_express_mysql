const db = require('../config/db');

const Producto = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM productos');
        return rows;
    },
    create: async (data) => {
        return await db.query(
            'INSERT INTO productos (nombre, valor_compra, valor_venta, ruta_imagen) VALUES (?, ?, ?, ?)',
            [data.nombre, data.v_compra, data.v_venta, data.img]
        );
    },
    delete: async (id) => {
        return await db.query('DELETE FROM productos WHERE idImg = ?', [id]);
    }
};

module.exports = Producto;
