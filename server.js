require('dotenv').config()

const express = require('express')
const itemsRouter = require('./routes/items')
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const connectDB = require('./db/db')

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use('/auth', authRouter)
app.use('/items', itemsRouter)
app.use('/users', usersRouter)

app.listen(6000, ()=>{
    console.log('server running on port 6000')
})