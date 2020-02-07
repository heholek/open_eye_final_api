const express = require("express");
const routes = express.Router();
const { saveQuestion } = require("./constroller/questions");
const { saveTile, getTile } = require("./constroller/tile");
const {
  savePatientCategory,
  getPatientCategory
} = require("./constroller/patient_category");
const { saveSite, getStie } = require("./constroller/site");

routes.post("/question/save", saveQuestion);
// routes.post("/question/list", getQuestion);

routes.post("/tile/save", saveTile);
routes.get("/tile/list", getTile);

routes.post("/site/save", saveSite);
routes.get("/site/list", getStie);

routes.post("/patient_category/save", savePatientCategory);
routes.get("/patient_category/list", getPatientCategory);

module.exports = routes;
