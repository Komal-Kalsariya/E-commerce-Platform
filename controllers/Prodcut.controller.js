const { Router } = require('express')

const ProductForm=(req,res)=>{
    res.render('productForm')
}

module.exports = {ProductForm}