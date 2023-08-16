const mongoose = require('mongoose')
const Users = require('../models/UserSchema')


async function getAllUsers(){
    try{
        let users = Users.find()
        if(users) return users
    }catch(err){
        console.log(err)
        return
    }
}

async function getUserById(id){
    try{
        let user = Users.findById(id)
        if(user) return user
    }catch(err){
        console.log(err)
        return
    }
}

async function getUserByUsername(username){
    try{
        let user = Users.findOne({username: username})
        if(user) return user
    }catch(err){
        console.log(err)
        return
    }
}

async function addUser(body){
    try{
        let user = await new Users(body).save()
        if(user) return user
    }catch(err){
        console.log(err)
        return
    }
}

async function editUserById(id, body){
    try{
        let user = Users.findByIdAndUpdate(id, body)
        if(user) return user
    }catch(err){
        console.log(err)
        return
    }
}

async function deleteUserById(id){
    try{
        let user = Users.findByIdAndDelete(id)
        if(user) return user
    }catch(err){
        console.log(err)
        return
    }
}

module.exports = { getAllUsers, getUserById, getUserByUsername, addUser, editUserById, deleteUserById  }