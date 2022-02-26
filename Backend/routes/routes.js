const Router = require('express').Router();

const ciudadesController = require('../controllers/ciudadesController')

const {obtenerCiudades, cargarCiudad, modificarCiudad} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)//nuevo y en linea 5 tambien lo de cargarCIudad

Router.route('./allcities/:id')
// .delete(borrarCiudad)
.put(modificarCiudad)

module.exports = Router