const { Router } = require("express");
const csvConverterController = require("../Controllers/csvConverter.controller");
const routes = Router();

routes.post("/upload", csvConverterController.upload);
// routes.get("/", csvConverterController.upload);

module.exports = routes;
