const Ciudades = require('../models/ciudades')

const ciudadesController = {

    obtenerCiudades: async (req, res) => {
        let ciudades
        let error = null

        try{
            ciudades = await Ciudades.find()
            // .populate('Itineraries')
        }catch(err){
            error = err
            console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : {ciudades},
            success: error ? false : true,
            error : error
        })

    },
    cargarCiudad: async(req,res)=>{
        console.log(req,body)
        const {ciudad, pais, descripcion}= req.body.dataInput
        new Ciudades({
            nombre: ciudad,
            pais: pais,
            descripcion: descripcion
        }).save()
        .then((respuesta)=> res.json({respuesta}))
    },
    borrarCiudad: async (req,res)=>{
        const id = req.params.id
        console.log(req.params)
        res.json(await Ciudades.findOneAndDelete({_id:id}));
    },
    modificarCiudad: async (req, res)=>{
        console.log(req.body)
        console.log(req.params) 
        const id = req.params.id
        const ciudad = req.body

        let ciudadb = await Ciudades.findOneAndUpdate({_id:id},ciudad)
        console.log(ciudadb)
        res.json(ciudadb)
    },
    obtenerUnaCiudad: async (req, res) => {
        const id = req.params.id
        console.log(req.params)
        let ciudad
        let error = null

        try{
            ciudad = await Ciudades.findOne({_id:id},ciudad)
            // .populate('Itineraries')
            console.log(ciudad)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : ciudad,
            success: error ? false : true,
            error : error
        })
    }
    

}
module.exports = ciudadesController