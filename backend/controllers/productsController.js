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
}

async function getOneProduct(req, res) {
  try {
    await Product.findById(req.params.id);
  } catch (error) {
    console.log(
      "Une erreur est survenue lors de la récupération du produit " + error
    );
  }
}

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
    res.send("Produit ajouté");
  } catch (error) {
    console.log("Une erreur est survenue lors de l'ajout du produit " + error);
  }
}

// requetes PATCH

async function updateProduct(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      img: req.file.originalname,
      description: req.body.description,
      sexe: req.body.sexe,
      categorie: req.body.categorie,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
    });
    res.send("Produit correctement mis à jour");
  } catch (error) {
    coonsole.log(
      "Une erreur est survenue lors de la mise à jour du produit " + error
    );
  }
}

//Requete delete :
const deleteProduct = async (req, res) => {
  req.send(await Product.findByIdAndDelete(req.params.id));
};

module.exports = {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
