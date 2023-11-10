const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();

const url = `mongodb+srv://andre75008:${process.env.PASS_DB}@cluster0.qeipciv.mongodb.net/`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes
const productsRoutes = require("./routes/productsRoutes");
productsRoutes(app);

const port = 3000;

//Connection à la base de donnée
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
