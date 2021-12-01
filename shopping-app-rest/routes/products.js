
const express = require('express')
const Authorization = require('../middlewares/auth')
const router = express.Router()
const productsController = require('../controllers/products')

router.get('/products', Authorization.authorizeUserAdmin ,productsController.getAllProducts)
router.post('/add-product',Authorization.authorizeAdmin, productsController.addproduct)
router.put('/edit-product',Authorization.authorizeAdmin,productsController.editProduct)
router.delete('/delete-product',Authorization.authorizeAdmin,productsController.deleteProduct)
module.exports = router