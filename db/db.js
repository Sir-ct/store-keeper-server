const  mongoose = require("mongoose")

function connectDB(){
    mongoose.connect(process.env.MONGO_STRING).then((res)=>{
        console.log('db connected ')
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB