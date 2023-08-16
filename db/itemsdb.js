const Items = require('../models/ItemSchema')

async function getAllItems(){
    try{
        let items = await Items.find()
        if(items) return items
    }catch(err){
        console.log(err)
        return
    }
    
}

async function getItemById(id){
    try{
        let item = await Items.findById(id)
        if(item) return item
    }catch(err){
        console.log(err)
        return
    }
}

async function addOneItem(body){
    try{
        let item = await new Items(body).save()

        if(item) return item
    }catch(err){
        console.log(err)
        return
    }
}

async function editItemById(id, body){
    try{
        let item = await Items.findByIdAndUpdate(id, body)
        if(item) return item
    }catch(err){
        console.log(err)
        return
    }
}

async function deleteItemById(id){
    try{
        let item = await Items.findByIdAndDelete(id)
        if(item) return item
    }catch(err){
        console.log(err)
        return
    }
}


module.exports = { getAllItems, getItemById, addOneItem, editItemById, deleteItemById }