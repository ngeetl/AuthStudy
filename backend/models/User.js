const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        maxLength: 50,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 5,
        trim: true,
    },
    role: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("User", userSchema);