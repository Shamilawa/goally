const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = Schema({
    fullName: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    },
    startTutorial: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })


const User = mongoose.model("User", userSchema)

module.exports = User