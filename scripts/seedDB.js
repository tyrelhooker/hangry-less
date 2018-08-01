//"npm run seed" will seed a mongo database with the content from recipes.json

//require dependencies =================================
const mongoose = require("mongoose");
const db = require("../models");
const recipes = require("../recipes.json");

//connection to the database
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/project3recipelist");

//remove all documents and re-seed with recipes from .json file
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