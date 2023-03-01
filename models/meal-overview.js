const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({}, { collection: "meals" });

const Meal = mongoose.model("Meal", mealSchema, "meals");

//Getting meals' id to store and then get each meal

module.exports = Meal;
