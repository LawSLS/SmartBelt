const {
  exampleController,
  getAllProducts,
  getOneProduct,
  addProduct,
} = require("../controllers/productsController");
const upload = require("../middlewares/multerMiddleware");

function productsRoutes(app) {
  //All post routes CREATE
  app.post("/api/addProduct", upload.single("productImg"), addProduct);

  //All get routes READ
  app.get("/exemple", exampleController);
  app.get("/api/products", getAllProducts);
  app.get("/api/products/:id", getOneProduct);

  //All put routes UPDATE

  //All delete routes DELETE
}

module.exports = productsRoutes;
