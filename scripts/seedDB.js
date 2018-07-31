const mongoose = require("mongoose");
const db = require("../models");
const recipes = require("../recipes.json");

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/project3recipelist");


db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(recipes))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1)
  });