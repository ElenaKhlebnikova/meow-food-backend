const express = require("express");
const mongoose = require("mongoose");
const Meals = require("./models/meal-overview-model");
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(
  cors({
    credentials: true,
  })
);
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE);

app.get("/", async (req, res) => {
  console.log(req.query);
  //default getting meals sort by mealNames
  if (!req.query.sort) {
    const meals = await Meals.find(req.query).sort("strMeal");
    res.json(meals);
  }
  // filtering by category and sort by price
  const filter = req.query.strCategory;
  const sortDirection = req.query.sort.split(",")[1];

  if (req.query.sort && req.query.strCategory) {
    const meals = await Meals.find({ strCategory: filter }).sort({
      price: sortDirection,
    });
    res.json(meals);
  }
  if (req.query.sort && !req.query.strCategory) {
    const meals = await Meals.find().sort({
      price: sortDirection,
    });
    res.json(meals);
  }
});

// SEND RESPONSE

//
//This function is used once only to get all the data from 'themealdb' API
//
// app.get("/only-to-get-id", async (req, res) => {
//   const meals = await Meals.find();
//   // id is an array
//   const id = meals.map((meal) => meal.idMeal);
//   let prices = [10, 15, 25, 12, 35, 14, 60];
//   for (let i = 0; i < id.length; i++) {
//     const mealData = await axios.get(
//       `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id[i]}`
//     );

//     //Math.random ... returns a tandom number between 0 and 6
//     mealData.data.meals[0].price = prices[Math.floor(Math.random() * 7)];
//     // console.log(mealData.data);
//     // mealArr.push(mealData.data.meals[0]);
//     mealArr.push(mealData.data.meals[0]);
//     // console.log(mealArr);
//     // console.log(mealData.data.meals[0]);
//     fs.writeFileSync("./data.js", JSON.stringify(mealArr));
//   }
// });
// console.log(mealArr);
app.listen(process.env.PORT, () => {
  console.log(`Meow-food app with cors`);
});