const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer();

app.use(cors());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>File Metadata Microservice</title>
      </head>
      <body>
        <h1>File Metadata Microservice</h1>

        <form
          action="/api/fileanalyse"
          method="POST"
          enctype="multipart/form-data"
        >
          <input type="file" name="upfile" required>
          <button type="submit">Upload</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: "No file uploaded"
    });
  }

  return res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

module.exports = app;
