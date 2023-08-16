const { getAllUsers, addUser, editUserById, deleteUserById, getUserById } = require("../db/usersdb");


async function getUsers(req, res){
    let users = await getAllUsers()

    if(!users || users.length == 0) return res.status(404).json({error: true, message: "No users found", data: null})

    return res.status(200).json({error: false, message: "Users found", data: users})
}

async function getUser(req, res){
    let user = await getUserById(req.params.id)
    if(!user) return res.status(404).json({error: true, message: "User not found", data: null})

    return res.status(200).json({error: false, message: "user found", data: user})
}

async function addUsers(req, res){
    let user = await addUser(req.body)
    if(!user) return res.status(500).json({error: true, message: "An internal error occured", data: null})

    return res.status(201).json({error: false, message: "User created successfully", data: user})

}

async function editUsers(req, res){
    let user = await editUserById(req.params.id, req.body)
    if(!user) return res.status(500).json({error: true, message: "An internal error occured", data: null})

    return res.status(200).json({error: false, message: "User details edited successfully", data: user})
}

async function deleteUsers(req, res){
    let user = await deleteUserById(req.params.id)
    if(!user) return res.status(500).json({error: true, message: "An internal error occured", data: null})

    return res.status(200).json({error: false, message: "User deleted successfully", data: user})
}


module.exports = { getUsers, getUser, addUsers, editUsers, deleteUsers }