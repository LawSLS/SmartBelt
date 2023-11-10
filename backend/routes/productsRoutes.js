const { exampleController } = require("../controllers/productsController");

function productsRoutes(app) {
  app.get("/exemple", exampleController);
}

module.exports = productsRoutes;
