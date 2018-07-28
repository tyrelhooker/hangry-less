const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ingredientsSchema = require('./ingredients');
// const directionsSchema = require('./directions');

const userSchema = new Schema({
  firebaseId: {type: String, required: true},
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
});

var User = mongoose.model("User", userSchema);

module.exports = User;