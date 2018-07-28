const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ingredientsSchema = require('./ingredients');
// const directionsSchema = require('./directions');

const userSchema = new Schema({
<<<<<<< HEAD
  firebaseid: {type: String, required: true},
  email: {type: String, required: true},
||||||| merged common ancestors
  id: {type: String, required: true},
=======
  firebaseId: {type: String, required: true},
>>>>>>> 782e6cab405b961dfbf587691498860e6f41ec75
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
});

var User = mongoose.model("User", userSchema);

module.exports = User;