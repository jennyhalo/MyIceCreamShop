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
        console.log("The page you tried to reach does not exist!");
        return res.status(404).end();
      } else {
        await amount.findOneAndUpdate({}, { $inc: { seq: -1 } });
        res.status(200).json(deletedFlavour);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  return router;
};
