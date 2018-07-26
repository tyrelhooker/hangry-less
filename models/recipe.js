const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ingredientsSchema = require('./ingredients');
const directionsSchema = require('./directions');

const recipeSchema = new Schema({
  id: {type: Number, required: true},
  title: {type: String, required: true},
  image: {type: String, required: true},
  ingredients: [ingredientsSchema],
  directions: [directionsSchema],
});

var Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;