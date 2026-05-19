# 📱 Tienda de Celulares

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MySQL](https://img.shields.io/badge/MySQL-8-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

Aplicación web desarrollada en **Node.js + Express** con conexión a **MySQL**.  
Este proyecto sirve como práctica didáctica para estudiantes, mostrando cómo construir un CRUD completo con subida de imágenes y vistas dinámicas en **EJS**.

---

## 📑 Tabla de Contenidos
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías](#-tecnologías)
- [Conceptos Clave](#-conceptos-clave)
  - [Node.js (El Motor)](#-qué-es-nodejs-el-motor)
  - [Express.js (La Carrocería)](#-qué-es-expressjs-la-carrocería)
  - [XAMPP y Node](#-puedo-trabajar-esto-en-xampp)
- [Capturas](#-capturas)
- [Licencia](#-licencia)
- [Autor](#-autor)

---

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/tienda-celulares.git
   cd tienda-celulares

   Instala dependencias:

bash
npm install express mysql2 ejs multer
Configura la base de datos en config/db.js con tus credenciales MySQL.

Inicia el servidor:

bash
node app.js
El servidor correrá en http://localhost:3000.

🖥️ Uso
Ejemplo de ruta básica:

js
// routes/productos.js
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos');

router.get('/', productosController.listar);
router.post('/add', productosController.agregar);

module.exports = router;
📂 Estructura del Proyecto
Código
tienda-celulares/
├── config/          # Conexión a DB
├── controllers/     # Lógica de negocio
├── models/          # Consultas SQL
├── public/          # Estilos, Scripts e Imágenes
│   ├── css/
│   ├── img/         # Aquí se guardan las fotos
│   └── js/
├── routes/          # Rutas de la web
├── views/           # Archivos EJS (HTML dinámico)
└── app.js           # Punto de entrada
🛠️ Tecnologías
Node.js

Express.js

MySQL2

EJS

Multer

📘 Conceptos Clave
🟢 ¿Qué es Node.js? (El Motor)
Node.js es un entorno de ejecución que utiliza el motor V8 de Google Chrome.

Superpoder: Asíncrono y orientado a eventos, capaz de manejar miles de conexiones simultáneas.

En este proyecto: Permite que JavaScript interactúe con el sistema de archivos y con la base de datos MySQL.

🔵 ¿Qué es Express.js? (La Carrocería)
Express es un framework minimalista que corre sobre Node.

Función: Facilita la gestión de rutas, sesiones y middlewares (como Multer para subir fotos).

En este proyecto: Organiza el tráfico y conecta las peticiones con los controladores.

🐘 ¿Puedo trabajar esto en XAMPP?
Base de Datos (SÍ): Puedes usar MySQL de XAMPP y gestionarlo con phpMyAdmin.

Servidor (NO): No usarás Apache. El servidor lo levantas con node app.js en el puerto 3000.

📸 Capturas
https://via.placeholder.com/600x300.png?text=Captura+del+Proyecto

📜 Licencia
Este proyecto está bajo la licencia MIT.
Consulta el archivo LICENSE para más detalles.

👨‍🏫 Autor
Manolo – Ing. de sistemas .
GitHub | LinkedIn

Código

---

👉 Este README ya está **listo para GitHub**: incluye badges, tabla de contenidos automática, secciones completas y ejemplos de código.  

¿Quieres que te prepare también una **versión con diagramas visuales (mapa conceptual
