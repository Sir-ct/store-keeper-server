const Jwt = require('jsonwebtoken')
const { getUserById } = require('../db/usersdb')

async function isUserAuthenticated(req, res, next){
    try{
        let token = req.headers['sk-token']
        if(!token) return res.status(401).json({error: true, message: "token is required", data: null})

        let decode = Jwt.decode(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    }catch(err){
        return res.status(401).json({error: true, message: err.message, data: null})
    }
     
}

async function isUserAdmin(req, res, next){
    let user = await getUserById(req.user.id)
    if(user?.user_role !== 'admin') return res.status(403).json({error: true, message: "user is not authorized", data: null})

    next()
}


module.exports = { isUserAuthenticated, isUserAdmin }