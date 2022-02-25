const mongoose = require('mongoose');

const ciudadesSchema = new mongoose.Schema({

        name: {type:String, required:true},
        image: {type:String, required:true},
        currency: {type:String, required:true},
        population: {type:String, required:true},
        country: {type:String, required:true},
        timezone: {type:String, required:true}

})
//en vez de ciudades podría poner Usuarios, itinerario, etc
const Ciudades = mongoose.model('ciudades', ciudadesSchema)

module.exports = Ciudades