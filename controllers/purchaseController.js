const { editItemById, getItemById } = require("../db/itemsdb");
const { getAllPurchases, addPurchase } = require("../db/purchasedb");

async function getPurchases(req, res){
    let purchases = await getAllPurchases()
    if(!purchases || purchases.length == 0) return res.status(404).json({error: true, message: "Purchases not found", data: null})

    return res.status(200).json({error: false, message: "Purchases found", data: purchases})
}

async function addNewPurchase(req, res){
    let purchase = await addPurchase(req.body)
    if(!purchase) return res.status(500).json({error: true, message: "An error occured while adding purchase", data: null})

    let item = await getItemById(req.body.id)
    if(!item) return res.status(404).json({error: true, message: "Item not found", data: null})

    let edititem = await editItemById(req.body.item_id, {quantity_in_stock: item.quantity_in_stock + req.body.quantity_bought, total_quantity_bought: item.total_quantity_bought + req.body.quantity_bought })
    if(!edititem) return res.status(500).json({error: true, message: "An internal error occured", data: null})

    return res.status(201).json({error: false, message: "Purchase added successfully", data: purchase})
}


module.exports = {getPurchases, addNewPurchase }