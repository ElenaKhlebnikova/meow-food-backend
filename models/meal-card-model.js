const MealOverview = require("./meal-overview-model");

const getMeals = async function (req, res, next) {
  const doc = await MealOverview.find({});
  mealId = doc.map((meal) => console.log(meal.idMeal));
  console.log(mealId);
  //   res.json(meals);
  //   console.log(meals);
  //   next(getId(meals));
};

const getId = async function (meals, next) {
  let idArr = [];
  // meals.map(meal => idArr.push(meal.idMeal))
  meals.map((meal) => console.log(meal.idMeal));
  next();
};

getMeals();
// exports.module = getMeals;
