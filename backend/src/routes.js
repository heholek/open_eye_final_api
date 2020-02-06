const express = require("express");
const routes = express.Router();
const { saveQuestion } = require("./constroller/questions");
const { saveTile } = require("./constroller/tile");
const { savePatientCategory } = require("./constroller/patient_category");
const { saveSite, getStie } = require("./constroller/site");

routes.post("/question/save", saveQuestion);
routes.post("/tile/save", saveTile);
routes.post("/site/save", saveSite);
routes.post("/patient_category/save", savePatientCategory);
routes.get("/site/list", getStie);

module.exports = routes;
