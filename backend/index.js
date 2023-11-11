const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const url = `mongodb+srv://andre75008:${process.env.PASS_DB}@cluster0.qeipciv.mongodb.net/`;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
const productsRoutes = require("./routes/productsRoutes");
const { error } = require("jquery");
productsRoutes(app);

const port = 3000;

//Connection à la base de donnée
mongoose.connect(url).catch((err) => {
  console.log(err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
