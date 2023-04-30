// Otetaan express moduuli käyttöön
const express = require("express");
// luodaan app
const app = express();
// Määritellään portti
const PORT = process.env.port || 3000;
// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Otetaan dotenv tiedosto käyttöön
require("dotenv/config");
// Tuodaan reitit
const getRoute = require("./routes/get.js")();
const postRoute = require("./routes/post.js")();
const putRoute = require("./routes/put.js")();
const deleteRoute = require("./routes/delete.js")();

// MIDDLEWARE
// Jokainen request joka tulee muutetaan JSON muotoon
app.use(express.json());
// Otetaan reitit käyttöön
app.use(getRoute);
app.use(postRoute);
app.use(putRoute);
app.use(deleteRoute);

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
