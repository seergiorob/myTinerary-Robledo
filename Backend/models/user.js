const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: [{ type: String, required: true }],
    profileurl: { type: String},
    country: { type: String, required: false },
    emailVerified: { type: Boolean, required: true},
    from: {type:Array}
});

const User = mongoose.model("users", userSchema);

module.exports = User;