// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://elena_khlebnikova:dodaby55kolka5@cluster0.0nqaswc.mongodb.net/meow-food";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     // database and collection code goes here
//     const db = client.db("meow-food");
//     const coll = db.collection("meals");

//     // find code goes here
//     const meals = coll.find();

//     // iterate code goes here
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const Meal = require("../models/meal-overview");
const getId = async function () {
  const doc = await Meal.find({});
  console.log(doc.json());
};

getId();
