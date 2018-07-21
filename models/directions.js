const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directionsSchema = new Schema({
  step: {type: Number, required: true},
  info: {type: String, required: true}
});

module.exports = directionsSchema;