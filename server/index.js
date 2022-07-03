const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
const PORT = 5000;

app.use(cors());

app.post("/predict", fileUpload({ createParentPath: true }), (req, res) => {
    const file = req.files;
    console.log(file);
    res.send("working in server");
});

app.listen(PORT, () => {
    console.log("server running on " + PORT);
});
