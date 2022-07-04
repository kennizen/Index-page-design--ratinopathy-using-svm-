const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());

app.post("/predict", fileUpload({ createParentPath: true }), (req, res) => {
    const file = req.files;
    console.log(file);

    const filePath = path.join(__dirname, "images", file.image.name);

    file["image"].mv(filePath, (err) => {
        if (err) return res.status(500).json({ error: "file upload unsuccessfull" });
    });

    return res.json({ success: "File uploaded" });
});

app.listen(PORT, () => {
    console.log("server running on " + PORT);
});
