const express = require("express");
const cors = require("cors")
const app = express();
const corsOptions = {
    options: ["http://localhost:5173/"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"animals": ["grue", "me", "scout"]})
});

app.listen(8080, () => {
    console.log("Server listening on port 8080")
});