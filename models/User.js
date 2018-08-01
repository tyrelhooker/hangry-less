const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firebaseId: {type: String, required: true},
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
});

var User = mongoose.model("User", userSchema);

module.exports = User;