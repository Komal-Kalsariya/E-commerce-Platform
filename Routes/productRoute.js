const { Router } = require('express')
const { ProductForm } = require('../controllers/Prodcut.controller')

const productRoute = Router()

productRoute.get('/productForm',ProductForm)

module.exports =productRoute