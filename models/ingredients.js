const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
  item: {type: String, required: true},
  qty: {type: String},
});

module.exports = ingredientsSchema;