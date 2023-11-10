const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },
  sexe: {
    type: Number,
    required: true,
  },
  categorie: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
