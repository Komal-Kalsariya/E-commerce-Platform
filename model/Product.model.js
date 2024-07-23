const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    description:String,
    price: Number,
    img: String,
    category: String,
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product