const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }
    
}, {timestamps: true})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel