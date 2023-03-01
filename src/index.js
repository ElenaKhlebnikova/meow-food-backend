const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const oneMealFn = require("../utils/get-meal-fn");
// const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const Meal = require("../models/meal-overview");
const meals = require("../models/meal");
//CONNECTING TO MONGODB DATABASE

const uri =
  "mongodb+srv://elena_khlebnikova:dodaby55kolka5@cluster0.0nqaswc.mongodb.net/meow-food";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

let mealId;
// defining the Express app
const app = express();
app.use(express.json());

app.get("/meals", async (req, res) => {
  const doc = await Meal.find().lean();

  res.json(doc);
  mealId = doc.map((meal) => console.log(meal.idMeal));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
module.exports = app;
