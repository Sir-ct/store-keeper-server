const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true
    },
    item_description: {
        type: String
    },
    item_imageurl: {
        type: String,
    },
    cost_price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    quantity_remaining: {
        type: Number
    },
    in_store_location: {
        type: String
    },
    item_category: {
        type: String
    },
    supplier_information: {
        type: Object
    },
    date_added: {
        type: Date,
        default: Date.now()
    },
    last_updated: {
        type: Date
    }
})

module.exports = mongoose.model('items', ItemSchema)