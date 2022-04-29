const express = require('express');
const rutas = express.Router();
const mainController = require('../controllers/mainController.js');


rutas.get('/', mainController.mostrar);

module.exports=rutas;