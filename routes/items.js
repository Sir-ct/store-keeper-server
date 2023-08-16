const express = require('express')
const { getItems, addItem, getItem, editItem, deleteItem } = require('../controllers/itemsController')
const { isUserAuthenticated, isUserAdmin } = require('../middlewares/auth')
const { addItemValidation } = require('../middlewares/validations')
const router = express.Router()


router.get('/getallitems', isUserAuthenticated, getItems)
router.get('/getoneitem/:id', isUserAuthenticated, getItem)

router.post('/additem', isUserAuthenticated, isUserAdmin, addItemValidation, addItem)

router.put('/edititem/:id', isUserAuthenticated, isUserAdmin, editItem)

router.delete('/delete/:id', isUserAuthenticated, isUserAdmin, deleteItem)

module.exports = router