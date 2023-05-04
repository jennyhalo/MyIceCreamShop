// Haetaan mongoose jotta voimme luoda mallin ja scheman tietokantaan lähetettävästä datasta
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Määritellään skeema jäätelömakujen määrän laskemista varten
const countingSchema = new Schema({
  Id: {
    type: String,
  },
  seq: {
    type: Number,
  },
});

// Exportoidaan laskentamalli ja asetetaan sille arvo: AmountOfFlavours
module.exports = mongoose.model("AmountOfFlavours", countingSchema);
