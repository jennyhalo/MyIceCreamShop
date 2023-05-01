// Tuodaan express
const express = require("express");
// Tuodaan router moduuli expressistä
const router = express.Router();
// Tuodaan tuotemalli
const flavour = require("../models/flavourModel");
// Tuodaan tuotemalli
const amount = require("../models/countingModel");

module.exports = function () {
  // Poistetaan yksi maku tietokannasta id:n perusteella
  router.delete("/api/delete/:Id", async (req, res) => {
    const apiId = req.params.Id;
    try {
      const deletedFlavour = await flavour.findOneAndDelete({ Id: apiId });
      if (!deletedFlavour) {
        return res.status(404).send();
      }
      await amount.findOneAndUpdate({}, { $inc: { seq: -1 } });
      res.status(200);
      res.send(deletedFlavour);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  return router;
};
