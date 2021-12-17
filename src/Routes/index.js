const { Router } = require("express");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const upload = multer({ dest: "uploads/" });

const csvConverterController = require("../Controllers/csvConverter.controller");
const routes = Router();

routes.post("/upload", upload.single("file"), csvConverterController.upload);
// routes.get("/", csvConverterController.upload);

module.exports = routes;
