require("dotenv").config();
const express = require("express");
const routes = require("./Routes");
const app = express();
const port = 7000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ok! Api Started" });
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
