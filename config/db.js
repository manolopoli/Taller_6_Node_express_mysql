const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Tu usuario
    password: '',     // Tu contraseña
    database: 'tienda_celulares'
});
module.exports = pool.promise();
