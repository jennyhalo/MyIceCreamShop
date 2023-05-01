// Tuodaan express
const express = require("express");
// Tuodaan router moduuli expressistä
const router = express.Router();
// Tuodaan tuotemalli
const flavour = require("../models/flavourModel");
// Exportoidaan funktion avulla
module.exports = function () {
  // Päivitetään dokumentin sisältö id:n perusteella
  router.put("/api/update/:Id", (req, res) => {
    apiId = req.params.Id;
    flavour
      .findOneAndUpdate(req.params.Id, req.body, { new: true })
      .then((flavour) => {
        if (!flavour) {
          return res.status(404).send();
        }
        res.status(200);
        res.send(flavour);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  return router;
};
