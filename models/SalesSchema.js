const mongoose = require('mongoose')

const SalesSchema = mongoose.Schema({
    sale_ref: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    quantity_sold: {
        type: Number,
        required: true
    },
    price_sold_at: {
        type: Number,
        required: true
    },
    customer: {
        type: String,
        default: 'Guest'
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model('sales', SalesSchema)