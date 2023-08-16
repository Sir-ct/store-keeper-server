const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_role: {
        type: String,
        required: true,
        default: 'seller'
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model('users', UserSchema)