const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

app.use(express.static(path.join(__dirname, "client", "build")));

-app.get("/", function (req, res) {
  +app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
});

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen((port = 3000), () => {
  console.log(`listening at http://localhost:${port}`);
});
