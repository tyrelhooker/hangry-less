const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ingredientsSchema = require('./ingredients');
// const directionsSchema = require('./directions');

const userSchema = new Schema({
  id: {type: Number, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: mongoose.models('Recipe')
  }]
});

var User = mongoose.model("Recipe", recipeSchema);

module.exports = User;