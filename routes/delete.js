// Tuodaan express
const express = require("express");
// Tuodaan router moduuli expressistä
const router = express.Router();
// Tuodaan tuotemalli
const flavour = require("../models/flavourModel");
module.exports = function () {
  // Poistetaan yksi maku tietokannasta id:n perusteella
  router.delete("/api/delete/:Id", (req, res) => {
    apiId = req.params.Id;
    flavour
      .findOneAndDelete({ Id: apiId })
      .then((data) => {
        if (!data) {
          return res.status(404).send();
        }
        res.send(flavour);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
  return router;
};
