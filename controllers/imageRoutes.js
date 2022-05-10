const express = require('express');
const router = express.Router();
// const secretApi = "0S_wRCvY6vFMw2zYipvOS72t_Yw"
// const upload = "https://api.cloudinary.com/v1_1/daxlpyuij/image/upload" + secretApi
const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
  });

router.get("/images", (request, response) => {
fetch(upload)
    .then(response => response.json())
    .then(data => {
        console.log(data.value)
    }) 
});

module.exports = router;