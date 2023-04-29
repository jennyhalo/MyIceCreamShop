// Haetaan mongoose jotta voimme luoda mallin tietokantaan lähetettävästä datasta
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// luodaan Schema
const flavourSchema = new Schema(
  {
    Id: {
      type: Number,
      unique: true,
    },
    Flavour: {
      type: String,
      require: true,
    },
    Description: {
      type: String,
      require: true,
    },
    Image: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

// Luodaan malli
const flavourModel = mongoose.model("Flavour", flavourSchema);
// Exportoidaan malli
module.exports = flavourModel;
