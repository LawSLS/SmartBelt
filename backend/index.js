const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = 3050;
const url = `mongodb+srv://andre75008:${process.env.PASS_DB}@cluster0.qeipciv.mongodb.net/`;
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/uploads/products")));

//routes
const productsRoutes = require("./routes/productsRoutes");

productsRoutes(app);


//Connection à la base de donnée
mongoose.connect(url).catch((err) => {
  console.log(err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
