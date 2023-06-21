const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name_of_appointment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('items', ItemSchema)