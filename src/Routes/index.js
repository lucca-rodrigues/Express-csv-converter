const { Router } = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const csvConverterController = require("../Controllers/csvConverter.controller");
const routes = Router();

routes.post("/upload", csvConverterController.upload);
routes.post("/teste", upload.single("file"), csvConverterController.teste);
// routes.get("/", csvConverterController.upload);

module.exports = routes;
