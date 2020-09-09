const express = require("express");
const db = require("../database");
const bodyParser = require("body-parser");
const router = require("./routes.js");

const app = express();
const port = process.env.PORT || 3030;

module.exports.app = app;

app.set("port", port);

app.use(bodyParser.json());

app.use("/", router);

app.use(express.static(__dirname + "/../client/dist"));

if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
