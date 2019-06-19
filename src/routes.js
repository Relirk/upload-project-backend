const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.get("/", (req, res) => {
  return res.json({
    project: "upload-project",
    api: "up"
  });
});

routes.post("/posts", multer(multerConfig).single("file"), (req, res) => {
  return res.json({ file: req.file });
});

module.exports = routes;
