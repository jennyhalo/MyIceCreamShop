// Tuodaan express
const express = require("express");
// Tuodaan router moduuli expressistä
const router = express.Router();
// Tuodaan tuotemalli
const flavour = require("../models/flavourModel");

module.exports = function () {
  //haetaan kaikki tiedot tiedokannasta, jos ei löydy yhtään tietoa tietokannassa, annetaan statuskoodi 404
  router.get("/api/getall", async (req, res) => {
    try {
      const allFlavours = await flavour.find({});
      if (allFlavours.length === 0) {
        console.log("The page you tried to reach does not exist!");
        return res.status(404).end();
      } else {
        res.status(200).json(allFlavours);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  //haetaan kaikki tiedot tiedokannasta
  router.get("/api/:Id", async (req, res) => {
    try {
      const apiId = req.params.Id;
      const singleFlavour = await flavour.findOne({ Id: apiId });
      if (!singleFlavour) {
        console.log("The page you tried to reach does not exist!");
        res.status(404).end();
      } else {
        res.status(200).json(singleFlavour);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  return router;
};
