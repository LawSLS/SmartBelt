const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
    type: String,
    required: true,
  },
  sexe: {
    type: String,
    enum: ["homme", "femme"],
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: false,
  },
});

const Product = new mongoose.model("Product", ProductSchema);

module.exports = Product;
