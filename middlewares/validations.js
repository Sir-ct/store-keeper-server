const Joi = require('joi')

async function addItemValidation(req, res, next){

    const schema = Joi.object({
        item_name: Joi.string().required(),
        item_description: Joi.string(),
        item_imageurl: Joi.string(),
        cost_price: Joi.number().required(),
        quantity_in_stock: Joi.number().required(),
        in_store_location: Joi.string().required()
    })

       const result = schema.validate(req.body)

       console.log(result)
       if(result.error){
        return res.status(400).json({message: "Validation Error", data: result.error.details})
       }

       next()
}


module.exports = { addItemValidation }