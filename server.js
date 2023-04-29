// Otetaan express moduuli käyttöön
const express = require("express");
// luodaan app
const app = express();
// Määritellään portti
const PORT = 3000;
// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Otetaan dotenv tiedosto käyttöön
require("dotenv/config");
// Tuodaan tuotemalli
const flavour = require("./models/flavourModel");
// Tuodaan tuotemalli
const amount = require("./models/countingModel");

// Jokainen request joka tulee muutetaan JSON muotoon
app.use(express.json());

//REITIT
// Reitti joka hakee kaikki dokumentit yhteen kokoelmaan
app.get("/api/getall", (req, res) => {
  flavour
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    });
});
// Haetaan yksi elementti sivulta id:n perusteella
app.get("/api/:id", (req, res) => {});
// Post reitillä voi luoda uuden jäätelömaun tietokantaan
app.post("/api/add", (req, res) => {
  amount
    .findOneAndUpdate({ Id: "autoval" }, { $inc: { seq: 1 } }, { new: true })
    .then((flavourData) => {
      var dataId;

      if (flavourData == null) {
        const newFlavourID = new amount({ Id: "autoval", seq: 1 });
        newFlavourID.save();
        dataId = 1;
      } else {
        dataId = flavourData.seq;
      }
      const Flavour = new flavour({
        Id: dataId,
        Flavour: req.body.Flavour,
        Description: req.body.Description,
        Image: req.body.Image,
      });
      Flavour.save();
      res.status(200).json(Flavour);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    });
});
// Päivitetään dokumentin sisältö id:n perusteella
app.put("/api/update/:id", (req, res) => {});
// Poistetaan elementti sivulta annetun id:n perusteella
app.delete("/api/delete/:id", (req, res) => {});
// Yhdistetään tietokantaan ja tehdään virhetarkistus console logilla sen jälkeen, kun tietokantaan on yhdistetty.
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Yhdistetty tietokantaan!");
  })
  .catch((error) => {
    console.log(error);
  });

//Kuunnellaan määriteltyä porttia ja lähetetään viesti konsoliin funktion avulla
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`));
