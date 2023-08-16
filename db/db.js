const  mongoose = require("mongoose")
const Users = require('../models/UserSchema')
const bcrypt = require('bcryptjs')

function connectDB(){
    mongoose.connect(process.env.MONGO_STRING).then(async (res)=>{
        
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync("storeadmin", salt);

        let user = await Users.findOne({username: 'admin', user_role: 'admin'})

        if(!user){
            await new Users({
                username: 'admin',
                password: hash,
                email: 'admin@admin.com',
                user_role: 'admin'
            }).save()
            console.log('admin created')
        }      
        console.log('db connected')
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB