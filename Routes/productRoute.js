const { Router } = require('express')
const { ProductForm, createProduct, getProducts, MacBook } = require('../controllers/Prodcut.controller')
const upload = require('../middlewares/uploadImage')

const productRoute = Router()

productRoute.get('/create', ProductForm)
productRoute.post("/", upload.single("img"), createProduct)


productRoute.get("/", getProducts)
productRoute.get("/macbook", MacBook)

module.exports = productRoute