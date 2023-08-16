const express = require('express')
const { isUserAuthenticated, isUserAdmin } = require('../middlewares/auth')
const { getPurchases, addNewPurchase } = require('../controllers/purchaseController')
const { addPurchaseValidation } = require('../middlewares/validations')


const router = express.Router()

router.get('/allpurchases', isUserAuthenticated, getPurchases)

router.post('/addnewpurchase', isUserAuthenticated, isUserAdmin, addPurchaseValidation, addNewPurchase)

module.exports = router