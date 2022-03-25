const mongoose = require('mongoose');

const itinerariesSchema = new mongoose.Schema({

        name: {type:String, required:true},
        comments: [
                {
                userID: {type:mongoose.Types.ObjectId, ref: "users"},
                comment:{type: String}
                }
                ],
        itinerary: {type:String, required:true},
        itineraryDesc: {type:String, required:true},
        image: {type:String, required:true},
        imgItinerary: {type:String, required:true},
        Policy: {type:String, required:true},
        price: {type:Number, required:true},
        likes: [{type: mongoose.Types.ObjectId, ref:'users'}],
        duration: {type:String, required:true},
        hashtags: {type:Array, required:true},
        city: {type:mongoose.Schema.Types.ObjectId, ref:'ciudades'},
})

const Itineraries = mongoose.model('itineraries', itinerariesSchema)

module.exports = Itineraries