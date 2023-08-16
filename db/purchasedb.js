const Purchases = require('../models/PurchasesSchema')

async function getAllPurchases(){
    try{
        let purchases = await Purchases.find()
        if(purchases) return purchases
    }catch(err){
        console.log(err)
        return
    }
    
}

async function addPurchase(body){
    try{
        let purchase = await new Purchases(body).save()
        if(purchase) return purchase
    }catch(err){
        console.log(err)
        return
    }
}

module.exports = { getAllPurchases, addPurchase }