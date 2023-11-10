const Product = require("../models");

function exampleController(req, res) {
  res.send("Hello World!");
}

// requetes GET
async function getAllProducts(req, res) {
  try {
    await Product.find();
    res.send();
  } catch (error) {
    console.log(
      "Une erreur est survenue lors de la récupération des produits " + error
    );
  }
};

async function getOneProduct(req, res) {
  try {
    await Product.findById(req.params.id)
  } catch(error) {
    console.log("Une erreur est survenue lors de la récupération du produit " + error);
  }
};

// requetes POST

async function addProduct(req, res) {
  try {
    const product = new Product({
      title: req.body.title,
      img: req.file.originalname,
      description: req.body.description,
      sexe: req.body.sexe,
      categorie: req.body.categorie,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
    });
    await product.save();
    res.send("Produit ajouté")

  }
  catch(error) {
    console.log("Une erreur est survenue lors de l'ajout du produit " + error);
  }
}



module.exports = { getAllProducts, getOneProduct, addProduct };
