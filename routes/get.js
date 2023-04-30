// Tuodaan express
const express = require("express");
// Tuodaan router moduuli expressistä
const router = express.Router();
// Tuodaan tuotemalli
const flavour = require("../models/flavourModel");
module.exports = function () {
  //haetaan kaikki tiedot tiedokannasta
  router.get("/api/getall", async (req, res) => {
    await flavour
      .find({})
      .then((flavours) => {
        res.status(200).json;
        res.send(flavours);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
  return router;
};
module.exports = function () {
  //haetaan kaikki tiedot tiedokannasta
  router.get("/api/:Id", async (req, res) => {
    apiId = req.params.Id;
    await flavour
      .find({ Id: apiId })
      .then((flavours) => {
        res.status(200).json;
        res.send(flavours);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
  return router;
};
