const mongoose = require("mongoose");

const overviewMealModel = new mongoose.Schema(
  {
    strCategory: {
      type: String,
      validation: true,
      enum: ["Breakfast", "Vegetarian", "Vegan"],
      default: "Vegan",
    },
  },
  { collection: "meals" }
);

const MealOverview = mongoose.model("Meal", overviewMealModel, "meals");
module.exports = MealOverview;
