// Haetaan mongoose jotta voimme luoda mallin tietokantaan lähetettävästä datasta
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const countingSchema = new Schema({
  Id: {
    type: String,
  },
  seq: {
    type: Number,
  },
});
const countingModel = mongoose.model("AmountOfFlavours", countingSchema);

module.exports = countingModel;
