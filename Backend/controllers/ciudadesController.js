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

    },//. si quiero agregar algo pongo , y sigo agregando por ej modificarCiudades (otro objeto, que también sería una función)
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
        await Ciudades.findOneAndDelete({_id:id})
    },
    modificarCiudad: async (req, res)=>{
        console.log(request.body) //con este modifico
        console.log(request.params) //con este busco una ciudad existente
        const id = req.params.id
        const ciudad = req.body

        let ciudadb = await Ciudades.findOneAndUpdate({_id:id},ciudad)
        console.log(ciudadb)
    }

}
module.exports = ciudadesController