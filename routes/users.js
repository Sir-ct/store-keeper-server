const express = require("express")
const { getUsers, getUser, addUsers, editUsers, deleteUsers } = require("../controllers/usersController")
const { isUserAuthenticated, isUserAdmin } = require("../middlewares/auth")

const router = express.Router()

router.get('/getallusers', isUserAuthenticated, isUserAdmin, getUsers)
router.get('/getoneuser/:id', isUserAuthenticated, isUserAdmin, getUser)

router.post('/adduser', isUserAuthenticated, isUserAdmin, addUsers)

router.put('/edituser/:id', isUserAuthenticated, isUserAdmin, editUsers)

router.delete('/deleteuser/:id', isUserAuthenticated, isUserAdmin, deleteUsers)

module.exports = router