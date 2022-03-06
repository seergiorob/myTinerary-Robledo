const Router = require('express').Router();

const ciudadesController = require('../controllers/ciudadesController')
const itinerariesController = require('../controllers/itinerariesController')

const {obtenerCiudades, cargarCiudad, modificarCiudad, borrarCiudad, obtenerUnaCiudad} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)

const {obtenerItineraries, cargaItinerary, borrarItinerary, modificarItinerary,obtenerUnItinerary} = itinerariesController

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargaItinerary)

Router.route('/allitineraries/:id')
.delete(borrarItinerary)
.put(modificarItinerary)
.get(obtenerUnItinerary)

module.exports = Router