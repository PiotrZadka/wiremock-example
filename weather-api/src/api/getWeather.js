const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();
const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY;
const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;

router.get("/", (req, res) => {
  const townName = req.query.city;
  var lat;
  var lng;
  var weatherData;
  axios
    .get(
      // `https://api.opencagedata.com/geocode/v1/json?q=${townName}&key=${GEOCODING_API_KEY}`
      `http://localhost:8080/geocode/v1/json?q=${townName}`
    )
    .then((response) => {
      lat = response.data.results[1].geometry.lat;
      lng = response.data.results[1].geometry.lng;
      axios
        .get(
          // `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${lat},${lng}?units=uk2`
          `http://localhost:8080/forecast/anyapikey123/44.648618,-63.5859487?units=uk2`
        )
        .then((response) => {
          weatherData = response.data.daily.data;
          res.send(weatherData);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
