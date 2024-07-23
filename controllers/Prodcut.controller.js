const { Router } = require('express')
const Product = require('../model/Product.model')

const ProductForm = (req, res) => {
  res.render('productForm')
}

const createProduct = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = req.file.path
    }
    let product = await Product.create(req.body)
    res.send("Product create")
  } catch (error) {
    res.send("eroor creating Product")
  }
}

const getProducts = async (req, res) => {
  let products = await Product.find()
  res.send(products)
}

const MacBook = async (req, res) => {
  let macbook = await Product.find()
  res.render("macbook", { macbook })
}



module.exports = { ProductForm, createProduct, getProducts, MacBook }