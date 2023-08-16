const { getAllItems, getItemById, addOneItem, editItemById, deleteItemById } = require("../db/itemsdb")

async function getItems(req, res){
    let items = await getAllItems()
    if(!items || items.length == 0) return res.status(404).json({error: true, message: "No items found", data: null})

    return res.status(200).json({error: false, message: "Items found", data: items})
}

async function getItem(req, res){
    let item = await getItemById(req.params.id)
    if(!item) return res.status(404).json({error: true, message: "Item not found", data: null})

    return res.status(200).json({error: false, message: "Item found", data: item})
}

async function addItem(req, res){
    let item = await addOneItem(req.body)
    if(!item) return res.status(500).json({error: true, message: "An internal error occured", data: null})

    return res.status(201).json({error: false, message: 'item created successfully', data: item})
}

async function editItem(req, res){
    let item = await getItemById(req.params.id)
    if(!item) return res.status(404).json({error: true, message: "item does not exist", data: null})

    let edititem = await editItemById(req.params.id, req.body)
    if(!edititem) return res.status(500).json({error: true, message: "An internel error occured", data :null})

    return res.status(200).json({error: false, message: "Item edited successfully", data: edititem})
}

async function deleteItem(req, res){
    let item = getItemById(req.params.id)
    if(!item) return res.status(404).json({error: true, message: "item does not exist", data: null})

    let deleteditem = await deleteItemById(req.params.id)
    if(!deleteditem) return res.status(500).json({error: true, message: "An internal error occured", data: null})

    return res.status(200).json({error: false, message: "item deleted successfully", data: deleteditem})
}

module.exports = {getItems, getItem, addItem, editItem, deleteItem}