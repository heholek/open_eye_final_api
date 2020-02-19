var express = require("express");
var bodyParser = require("body-parser");

var app = express();
const Routes = require("./src/routes");
const mongoose = require("mongoose");

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use((Request, Response, next) => {
  Response.header("Access-Control-Allow-Origin", "*");
  Response.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", Routes);

app.get("/", (req, res) => {
  res.json({ status: "200" });
});

mongoose.connect("mongodb://localhost:27017/open_eye").then(result => {
  app.listen(3001);
});
