const Router = require('express').Router();

const ciudadesController = require('../controllers/ciudadesController')
const itinerariesController = require('../controllers/itinerariesController')

const {obtenerCiudades, cargarCiudad, modificarCiudad, borrarCiudad} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)//nuevo y en linea 5 tambien lo de cargarCIudad

Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)

const {obetnerItineraries, cargaItinerary, borrarItinerary, modificarItinerary} = itinerariesController

Router.route('/allitineraries')
.get(obetnerItineraries)
.post(cargaItinerary)

Router.route('/allitineraries/:id')
.delete(borrarItinerary)
.put(modificarItinerary)

module.exports = Router