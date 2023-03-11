const mongoose = require("mongoose");
const { Schema } = mongoose;

const petsSchema = new Schema({
  name: String,
  text: String,
  location: String,
  image: String,
});

const Pets = mongoose.model("Pets", petsSchema);

module.exports = Pets;
