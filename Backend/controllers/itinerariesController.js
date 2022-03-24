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
       
        const {name, comment, itinerary, itineraryDesc, image, imgItinerary, Policy, price, likes, duration, hashtags, city} = req.body
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
        console.log(req.body)
        console.log(req.params)
        const id = req.params.id
        const itinerary = req.body

        let itineraryb = await Itineraries.findOneAndUpdate({_id: id}, itinerary, {new: true})
        console.log(itineraryb)
        
        res.json({respuesta: itineraryb})
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
    },
    obtenerItinerarioPorCiudad: async (req, res) => {
        const id = req.params.id
        try{
            const itinerarios = await Itineraries.find({city:id}).populate("comments.userID")
            res.json(
                itinerarios
            )
        }catch(err){
            res.status(404).json({msg: err.message})
        }
    },
    likesAndDislike: async (req, res) => {
        const {idItinerary, idUser, boolean} = req.body
        try{
            const itinerary = await Itineraries.findOneAndUpdate(
                {_id:idItinerary},
                boolean ? {$addToSet:{likes:idUser}} : {$pull: {likes:idUser}}, {new: true}
                )
                res.json({success: true, response: itinerary})

        }
        catch(error){
            res.json({success:false, error: error.message})
        }
    }


    // likesAndDislike: async (req, res) => {
    //     const id = req.params.id;
    //     console.log("🚀 ~ file: itinerariesController.js ~ line 89 ~ likesAndDislike: ~ req.params.id", req.params.id)
    //     const user = req.user.id
        
    //     console.log(req.user.id)
    //     let itinerary

    //     try{
    //         itinerary = await Itineraries.findOne({_id:id})

    //         if(itinerary.likes.includes(user)){
    //             itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})
    //             .then(response => res.json({success:true, response: response.likes}))
    //             .catch(error => console.log(error))
            
    //         }else{
    //             itinerary.findOneAndUpdate({_id:id}, {$push:{likes:user}},{new:true})
    //             .then(response => res.json({success:true, response: response.likes}))
    //             .catch(error => console.log(error))
    //         }

    //     }
    //     catch (err){
    //         error=err
    //         res.json({success:false, response:error})
    //     }

    // }


}

module.exports = itinerariesController