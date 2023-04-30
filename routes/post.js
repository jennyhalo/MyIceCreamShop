// Tuodaan express
const express = require("express");
// Tuodaan router moduuli expressistä
const router = express.Router();
// Tuodaan tuotemalli
const flavour = require("../models/flavourModel");
// Tuodaan tuotemalli
const amount = require("../models/countingModel");
// Post reitillä voi luoda uuden jäätelömaun tietokantaan

module.exports = function () {
  router.post("/api/add", (req, res) => {
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
  return router;
};
