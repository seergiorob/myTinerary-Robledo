const Ciudades = require('../models/ciudades')

const ciudadesController = {

    obtenerCiudades: async (req, res) => {
        let ciudades
        let error = null

        try{
            ciudades = await Ciudades.find()
        }catch(err){
            error = err
            console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : {ciudades},
            success: error ? false : true,
            error : error
        })

    }//. si quiero agregar algo pongo , y sigo agregando por ej modificarCiudades (otro objeto, que también sería una función)

}
module.exports = ciudadesController