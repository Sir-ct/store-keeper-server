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
    price: {
        type: Number,
        required: true
    },
    quantity_in_stock: {
        type: Number,
        default: 0
    },
    total_quantity_bought:{
        type: Number,
        default: 0
    },
    total_quantity_sold: {
        type: Number,
        default: 0
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
        type: Date,
        detault: Date.now()
    }
})

module.exports = mongoose.model('items', ItemSchema)