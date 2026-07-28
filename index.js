const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer();

app.get("/", (req, res) => {
  res.send(`
    <h1>File Metadata Microservice</h1>

    <form action="/api/fileanalyse" method="POST" enctype="multipart/form-data">
      <input type="file" name="upfile">
      <button type="submit">Upload</button>
    </form>
  `);
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(process.env.PORT || 3000);
