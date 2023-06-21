require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Items = require('./models/ItemSchema')

const app = express()
mongoose.connect(process.env.MONGO_STRING).then((res)=>{
 console.log('db connected ')
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.send('welcome to store keeper')
})

app.get('/details', async (req, res)=>{
    let items = await Items.find()
    if(!items || items.length < 1) return res.status(404).json({message: "Items not found", data: null})

    return res.status(200).json({message: "Items found", data: items})
})

app.post('/add/details', async (req, res)=>{
    if(!req.body.name_of_appointment) return res.json({message: "Name of appointment"})
    if(!req.body.date) return res.json({message: "Date is required"})
    if(!req.body.time) return res.json({message: "Time is required"})
    
    try{
        let item = await new Items({
            name_of_appointment: req.body.name_of_appointment,
            date: req.body.date,
            time: req.body.time
        }).save()

        return res.status(201).json({message: "Item created", data: item})

    }catch(err){
        console.log(err.message)
        return
    }
})

app.listen(6000, ()=>{
    console.log('server running on port 6000')
})