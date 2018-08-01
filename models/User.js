//Mongoose model for user
//will be implemented when a new user account is created
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Model includes only user ID provided by firebase authentication service
//and associated recipes IDs
const userSchema = new Schema({
  firebaseId: {type: String, required: true},
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
});

var User = mongoose.model("User", userSchema);

module.exports = User;