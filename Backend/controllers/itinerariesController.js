const Itineraries = require('../models/itineraries')

const itinerariesController = {

    obtenerItineraries: async (req, res) => {
        let itineraries
        let error = null

        try{
            itineraries = await Itineraries.find()
        }catch(err){
            error = err
            console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            succes: error ? false : true,
            error : error
        })
    },

    cargaItinerary: async(req, res) => {
        console.log(req, body)
        const {name, comment, itinerary, itineraryDesc, image, imgItinerary, Policy, price, likes, duration, hashtags, city} = req.body.dataInput
        new Itineraries({
            name: name,
            comment: comment,
            itinerary: itinerary,
            itineraryDesc: itineraryDesc,
            image: image,
            imgItinerary: imgItinerary,
            Policy: Policy,
            price: price,
            likes: likes,
            duration: duration,
            hashtags: hashtags,
            city: city,
        }).save()
        .then((respuesta)=> res.json({respuesta}))
    },
    borrarItinerary: async (req, res)=> {
        const id = req.params.id
        console.log(req.params)
        await Itineraries.findOneAndDelete({_id: id})
    },
    modificarItinerary: async (req, res)=> {
        console.log(request.body)
        console.log(request.params)
        const id = req.params.id
        const itinerary = req.body

        let itineraryb = await Itineraries.findOneAndUpdate({_id: id}, itinerary)
        console.log(itineraryb)
    },
    obtenerUnItinerary: async (req, res) => {
        const id = req.params.city
        console.log(req.params)
        let itinerary
        let error = null

        try{
            itinerary = await Itineraries.findOne({_id:id}, itinerary)
            console.log(itinerary)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error : error
        })
    }

}

module.exports = itinerariesController