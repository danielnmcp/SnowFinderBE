const { Router } = require("express");
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort",
  headers: {
    "X-RapidAPI-Key": "4a8dd17e61msh9358a054665dd83p139f0ejsn4ebff3978318",
    "X-RapidAPI-Host": "ski-resorts-and-conditions.p.rapidapi.com",
  },
};

const router = Router();

router.get("/resorts", (req, res) => {
  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
