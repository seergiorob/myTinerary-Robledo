const Router = require('express').Router();

const ciudadesController = require('../controllers/ciudadesController')
const itinerariesController = require('../controllers/itinerariesController')
const userController = require('../controllers/userControllers')

const validator = require('../config/validator')

const {obtenerCiudades, cargarCiudad, modificarCiudad, borrarCiudad, obtenerUnaCiudad} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)

const {obtenerItineraries, cargaItinerary, borrarItinerary, modificarItinerary,obtenerUnItinerary, obtenerItinerarioPorCiudad} = itinerariesController

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargaItinerary)

Router.route('/allitineraries/:id')
.delete(borrarItinerary)
.put(modificarItinerary)
.get(obtenerUnItinerary)

Router.route('/allitineraries/city/:id')
.get(obtenerItinerarioPorCiudad)


const { signUpUsers, signInUser, signOutUser} = userController;

Router.route("/auth/signUp")
.post(validator, signUpUsers);

Router.route("/auth/signIn")
.post(signInUser);

Router.route("/auth/signOut")
.post(signOutUser)


module.exports = Router