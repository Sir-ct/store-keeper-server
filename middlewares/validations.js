const Joi = require('joi')

async function addItemValidation(req, res, next){

    const schema = Joi.object({
        item_name: Joi.string().required(),
        item_description: Joi.string(),
        item_imageurl: Joi.string(),
        price: Joi.number().required(),
        in_store_location: Joi.string().required()
    })

       const result = schema.validate(req.body)

       console.log(result)
       if(result.error){
        return res.status(400).json({message: "Validation Error", data: result.error.details})
       }

       next()
}

async function addPurchaseValidation(req, res, next){
    const schema = Joi.object({
        purchase_ref: Joi.string().required(),
        item_id: Joi.string().required(),
        item_name: Joi.string().required(),
        quantity_bought: Joi.number().required(),
        price_bought_at: Joi.number().required()
    })

       const result = schema.validate(req.body)

       console.log(result)
       if(result.error){
        return res.status(400).json({message: "Validation Error", data: result.error.details})
       }

       next()
}


module.exports = { addItemValidation, addPurchaseValidation }