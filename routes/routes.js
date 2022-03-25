const Router = require('express').Router();

const ciudadesController = require('../controllers/ciudadesController')
const itinerariesController = require('../controllers/itinerariesController')
const userController = require('../controllers/userControllers')
const activityControllers = require('../controllers/activityControllers')
const commentsControllers = require('../controllers/commentsControllers')

const validator = require('../config/validator')
const passport = require('../config/passport')

const {obtenerCiudades, cargarCiudad, modificarCiudad, borrarCiudad, obtenerUnaCiudad} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)



const {obtenerItineraries, cargaItinerary, borrarItinerary, modificarItinerary,obtenerUnItinerary, obtenerItinerarioPorCiudad, likesAndDislike} = itinerariesController

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargaItinerary)

Router.route('/allitineraries/:id')
.delete(borrarItinerary)
.put(modificarItinerary)
.get(obtenerUnItinerary)

Router.route('/allitineraries/city/:id')
.get(obtenerItinerarioPorCiudad)

Router.route('/likesAndDislike')
.put 
(passport.authenticate('jwt',{ session:false }), 
likesAndDislike)

const { signUpUsers, signInUser, signOutUser, verifyEmail, verifyToken} = userController;

Router.route("/auth/signUp")
.post(validator, signUpUsers);

Router.route("/auth/signIn")
.post(signInUser);

Router.route("/auth/signOut")
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verifyToken)



const { addActivity, activityForEachItinerary} = activityControllers

Router.route("/activities")
.post(addActivity)

Router.route('/activities/:itineraryId')
.get(activityForEachItinerary)

const {addComment, getCommentByItinerary, deleteComment, modifyComment} = commentsControllers
Router.route("/comments/:itineraryId")
.post(passport.authenticate('jwt',{session:false}), addComment)
.get(getCommentByItinerary)
.put(passport.authenticate('jwt',{session:false}),modifyComment)

Router.route("/comments/:itineraryId/:commentId")
.delete(passport.authenticate('jwt',{session:false}), deleteComment)

module.exports = Router