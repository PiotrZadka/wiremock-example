const express = require("express");

const getWeather = require("./getWeather");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/getWeather", getWeather);

module.exports = router;
