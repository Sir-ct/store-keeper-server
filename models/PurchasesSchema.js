const mongoose = require('mongoose')

const PurchasesSchema = mongoose.Schema({
    purchase_ref: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    quantity_bought: {
        type: Number,
        required: true
    },
    price_bought_at: {
        type: Number,
        required: true
    },
    supplier: {
        type: String,
        default: 'Guest'
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model('purchases', PurchasesSchema)