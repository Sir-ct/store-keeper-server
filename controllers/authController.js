const bcrypt = require('bcryptjs')
const Jwt = require('jsonwebtoken')
const { getUserByUsername } = require("../db/usersdb")

async function login(req, res){
    let user = await getUserByUsername(req.body.username)
    if(!user) return res.status(404).json({error: true, message: "user not found", data: null})

    let pwordMatch = await bcrypt.compare(req.body.password, user.password)

    if(!pwordMatch) return res.status(400).json({error: true, message: "password incorrect", data: null})

    let token = Jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '24h'})

    return res.status(200).json({error: false, message: "logged in successfully", data: {...user, token}})
}

module.exports = {login}