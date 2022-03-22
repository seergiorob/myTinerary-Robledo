const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    itineraryId: {type: mongoose.Schema.Types.ObjectId, ref: "itineraries"}
})

const Activity = mongoose.model('activity', activitySchema)

module.exports = Activity;