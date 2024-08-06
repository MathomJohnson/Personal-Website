const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
const corsOptions = {
    options: ["http://localhost:5173/"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"animals": ["grue", "me", "scout"]})
});

app.get("/fake-users", (req, res) => {
    canvas_token = process.env.CANVAS_TOKEN;
    url = "https://canvas.instructure.com/api/v1/courses?access_token=" + canvas_token
    axios.get(url)
    .then((response) => {
        console.log("From server: " + JSON.stringify(response.data, null, 2));
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    }).finally(function() {
        console.log("This always runs!!" + canvas_token);
    })
});

app.listen(8080, () => {
    console.log("Server listening on port 8080")
});