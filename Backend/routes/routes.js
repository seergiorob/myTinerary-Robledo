const Router = require('express').Router();

const ciudadesController = require('../controllers/ciudadesController')

const {obtenerCiudades} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)

module.exports = Router